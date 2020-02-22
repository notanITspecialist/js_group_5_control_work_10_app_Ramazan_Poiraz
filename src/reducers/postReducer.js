import {GET_POST_RES} from "../actions/postActions";

const initialState = {
    post: [],
    comments: []
};

const postReducer = ( state = initialState, action ) => {
    if(action.type === GET_POST_RES){
        return {...state, post: action.data, comments: action.comments}
    }

    return state
};

export default postReducer