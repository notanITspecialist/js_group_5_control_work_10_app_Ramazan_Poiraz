import {GET_POSTS_RES} from "../actions/postsActions";

const initialState = {
    posts: []
};

const postsReducer = ( state = initialState, action ) => {
if(action.type === GET_POSTS_RES){
    return {...state, posts: action.data}
}

    return state
};

export default postsReducer