import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css'

const columns = [
    {
      title: '编号',
      dataIndex: 'number',
      width: '15%',
      align: 'center'
    },
    {
      title: '预约类型',
      dataIndex: 'type',
      width: '25%',
    },
    {
      title: '预约时间',
      dataIndex: 'time',
      width: '25%',
    },
    {
      title: '详细',
      dataIndex: 'detail',
      ellipsis: true,
    },
  ];
const data = [
    {
        number: '1',
        type: '户籍办理类',
        time: '2020-5-6 15:37',
        detail: '居民身份证挂失申报',
    },
    {
        number: '2',
        type: '居住证办理类',
        time: '2020-5-6 15:37',
        detail: '居民身份证挂失申报',
    },
    {
        number: '3',
        type: '身份证办理类',
        time: '2020-5-6 15:37',
        detail: '居民身份证挂失申报',
    },
    {
        number: '4',
        type: '居留证办理类',
        time: '2020-5-6 15:37',
        detail: '居民身份证挂失申报',
    },
  ];
class BusinessAppointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }
     
    render() {
        return (
            <div className="container_business">
                <div className="business_title">
                    <p>业务预约</p>
                </div>
              
                <Table className="business_table" columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
}
export default BusinessAppointment
