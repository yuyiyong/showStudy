import {ADD_ITEM, CHANGE_INPUT, DEL_ITEM} from './actionType';

export const changeInputAction = (value) => {
    return {
        type: CHANGE_INPUT,
        value
    }
};
export const addItemAction = () => {
    return {
        type: ADD_ITEM,
    }
};
export const delItemAction = (index) => {
    return {
        type: DEL_ITEM,
        payload: index,
    }
}