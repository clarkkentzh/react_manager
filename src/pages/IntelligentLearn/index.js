import React, { Component } from 'react';
import { Table,Button,Input,Icon,Form } from 'antd';
import './index.css'
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `请输入${title}`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}
class IntelligentLearn extends Component {
    constructor(props) {
        super(props)
        this.state = {
          selectTab: 1,
          columns: [
            {
              title: '问答库',
              dataIndex: 'question',
              width: '30%',
              editable: true,
              onCell: record => ({
                record,
                editable: true,
                dataIndex: 'question',
                title: '问答库',
                handleSave: this.handleSave,
              }),
            },
            {
              title: '回复',
              dataIndex: 'answer',
              width: '30%',
              editable: true,
              onCell: record => ({
                record,
                editable: true,
                dataIndex: 'answer',
                title: '回复',
                handleSave: this.handleSave,
              }),
            },
            {
              title: '更新时间',
              dataIndex: 'time',
              width: '20%',
            },
            {
              title: '操作',
              dataIndex: 'action',
              ellipsis: true,
            },
          ],
          dataSource: [
            {
                question: '电梯在哪里',
                type: '小海1号',
                time: '2020-5-6 15:37',
                answer: '电梯左侧直行',
            },
            {
                question: '身份证怎么办了',
                type: '大海2号',
                time: '2020-5-6 15:37',
                answer: '执行完毕',
            },
            {
                question: '退出系统',
                type: '小海3号',
                time: '2020-5-6 15:37',
                answer: '执行完毕',
            },
            {
                question: '退出系统',
                type: '小海4号',
                time: '2020-5-6 15:38',
                answer: '执行完毕',
            },
          ]
        };
    }

    changeTab(tab){
      if(tab != this.state.selectTab){
        this.setState({
          selectTab: tab
        })
      }
    }

    handleSave = row => {
      const newData = [...this.state.dataSource];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      this.setState({ dataSource: newData });
    };
     
    render() {
        const { columns,dataSource} = this.state;
        const components = {
          body: {
            row: EditableFormRow,
            cell: EditableCell,
          },
        };
        return (
            <div className="container_intelligent">
                <div className="intelligent_title">
                    <p>智能学习</p>
                </div>
                <div className="intelligent_toprow">
                    <div style={{display:'flex', flexDirection:'row', marginLeft: '20px'}}>
                        <div onClick={()=>this.changeTab(1)} className={this.state.selectTab == 1 ?"tabs_select" :"tabs"}>待处理</div>
                        <div onClick={()=>this.changeTab(2)} className={this.state.selectTab == 2 ?"tabs_select" :"tabs"}>处理记录</div>
                    </div>
                    <div className="toprow_right">
                        <Input
                            suffix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入搜索内容"
                            onChange={(e)=>{
                              this.setState({
                                searchValue: e.target.value
                              })
                            }}
                            value={this.state.searchValue}
                            style={{marginRight: '20px'}}
                        />
                        <Button type="primary" onClick={this.search} htmlType="submit">
                            搜索
                        </Button>
                    </div>
                </div>
                <Table 
                components={components}
                className="intelligent_table" 
                columns={columns} 
                dataSource={dataSource} 
                size="middle" 
                />
            </div>
        )
    }
}
export default IntelligentLearn
