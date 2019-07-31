import "antd/dist/antd.css"
// import "antd/dist/antd.css"
import {Button, Input, List} from "antd";
import React from 'react';

 const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input
                    placeholder="Write something"
                    style={{width: '250px', margin: '20px 50px'}}
                    onChange={(e)=>{props.changeInputValue(e)}}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={() => props.btnAdd()}
                >
                    增加
                </Button>
            </div>
            <div style={{width: "300px"}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (<List.Item
                        onClick={() => {props.delItem(index)}}
                    >{item}</List.Item>)}
                />
            </div>
        </div>
    )
};
export default TodoListUI;