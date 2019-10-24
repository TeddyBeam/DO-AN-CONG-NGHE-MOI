import React, { Component } from "react";
import { Divider,Table } from "antd";
export default class TableStudent extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
        dataSource:[],
    };
    this.columns = [
        {title : 'Tên',dataIndex:'name', key:'name',width:'15%'},
        {title : 'Giới tính',dataIndex:'gender', key:'gender',width:'8%'}, 
        {title : 'Ngày sinh',dataIndex:'birthday', key:'birthday',width:'12%'}, 
        {title : 'Địa chỉ',dataIndex:'address', key:'address',width:'15%'}, 
        {title : 'Điện thoại',dataIndex:'phone', key:'phone',width:'15%'},
        {dataIndex:'action',key:'action',width:'30%', 
            render:(text,record) => 
            <span>
                <a onClick={this.viewScoreBoard.bind(this)}>Bảng điểm</a>
                <Divider type="vertical" />
                <a onClick={this.viewSchedule.bind(this)}>Lịch học</a>
                <Divider type="vertical" />
                <a onClick={this.viewScoreBoard.bind(this)}>Thông tin</a>
        </span>
        },
    ];
    this.viewDetail = this.viewDetail.bind(this);
    this.viewSchedule = this.viewSchedule.bind(this);
    this.viewScoreBoard = this.viewScoreBoard.bind(this);
    //push du lieu tam
    for (let i = 0; i < 20; i++) {
            this.state.dataSource.push({
                name: `Le Thanh Ky ${i}`,
                gender: `nam`,
                birthday: `29-10-1998`,
                address: `London Park no. ${i}`,
                phone:`098989898`
            });
         }
  }
  render() {
    return (
            <div>
                <Table
                columns={this.columns}
                dataSource={this.state.dataSource}
                pagination={{ pageSize: 50 }}
                scroll={{ y: 240 }}
                />
            </div>
    );
  }
  
  viewDetail(e){
    // Hien thi thong tin
  }
  viewSchedule(e){
    // Hien thi lich
  }
  viewScoreBoard(e){
    //Hien thi bang diem
  }
}