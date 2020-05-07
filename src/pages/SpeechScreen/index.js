import React, { Component } from 'react';
import { Table,Button,Input,Icon } from 'antd';
import './index.css'


const data = [
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
  ];
class SpeechScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sortedInfo:{},
          searchValue: ''
        };
    }

    handleChange = (pagination, filters, sorter) => {
      this.setState({
        sortedInfo: sorter,
      });
    };

    search = ()=>{

    }
     
    render() {
        const {sortedInfo} = this.state;
        const columns = [
          {
            title: '所有机器人',
            dataIndex: 'type',
            key:"type",
            align: 'center',
            sorter: (a, b) => a.type.localeCompare(b.type,"zh"),
            sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            width: '25%',
          },
          {
            title: '对话时间',
            dataIndex: 'time',
            key:"time",
            width: '20%',
            sorter: (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime(),
            sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
          },
          {
            title: '提问',
            key:"question",
            dataIndex: 'question',
            width: '25%',
          },
          {
            title: '回答',
            key:"answer",
            dataIndex: 'answer',
            ellipsis: true,
          },
        ]
        return (
            <div className="container_speech">
                <div className="business_title">
                    <p>语音播报</p>
                    <div className="speech_titleright">
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
              
                <Table className="speech_table" style={{backgroundColor: '#fff'}} onChange={this.handleChange} columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
}
export default SpeechScreen
