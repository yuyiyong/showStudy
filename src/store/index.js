/* import {createStore} from 'redux';
import reducer from './reducer'
const store = createStore(reducer); //把reducer作为参数引入过来基本就完成了
export default store; */
/*
import reducer from './reducer'
import {createStore} from 'redux';
const store = createStore(reducer);
export default store;*/
import {createStore} from 'redux';
import reducer from "./reducer"
const store =createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()

    );
export default store;