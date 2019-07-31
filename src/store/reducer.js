import {ADD_ITEM, CHANGE_INPUT, DEL_ITEM} from './actionType'

const defaultState = {
    list: [
        '早8点开晨会，分配今天的开发工作',
        '早9点和项目经理作开发需求讨论会',
        '晚5:30对今日代码进行review']
};


export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝state
        newState.inputValue = action.value;
        return newState
    }
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type === DEL_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.payload, 1);
        return newState;
    }
    //console.log("121231231231",state);
    return state;
}