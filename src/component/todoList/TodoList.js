import React, {Component} from 'react';
import "antd/dist/antd.css"
import {Button, Input, List} from "antd";
import store from "../../store";
import {addItemAction, changeInputAction, delItemAction} from "../../store/actionCreators";
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this)
        //console.log('store.getState', store.getState());
        store.subscribe(this.storeChange);
    }

    render() {
        //console.log("123123123", store.getState(), "state", this.state);
        console.log(store.getState());
        return (
            <div>
                <div>
                    {/* <TodoListUI
                        value={this.state.inputValue}
                        changeInputValue ={this.changeInputValue}
                        inputValue = {this.state.inputValue}
                        btnAdd = {this.btnAdd}
                        list={this.state.list }
                        delItem = {this.delItem}
                    />*/}
                    {/* <Input
                        placeholder="Write something"
                        style={{width: '250px', margin: '20px 50px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={() => this.btnAdd()}
                    >
                        增加
                    </Button>
                </div>
                <div style={{width: "300px"}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={() => {
                            this.delItem(index)
                        }}>{item}</List.Item>)}
                        // renderItem={item=>(<List.Item>{item}</List.Item>)}
                    />*/}
                    todoList
                </div>

            </div>
        );
    }

    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value);
        store.dispatch(action)
    };

    /*storeChange() {
        console.log('store changed');
        this.setState(store.getState())
    }

    btnAdd = () => {
        console.log("add");
        const action = addItemAction();
        store.dispatch(action)
    };
    delItem = (index) => {
        console.log("index", index);
        const action = delItemAction(index);
        store.dispatch(action)
    }*/

}

export default TodoList;