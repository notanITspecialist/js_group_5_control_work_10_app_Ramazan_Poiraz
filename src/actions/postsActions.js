import axios from "axios";

export const GET_POSTS_REQ = 'GET_POSTS_REQ';
export const GET_POSTS_RES = 'GET_POSTS_RES';
export const GET_POSTS_ERR = 'GET_POSTS_ERR';

export const reqPosts = () => ({type: GET_POSTS_REQ});
export const resPosts = data => ({type: GET_POSTS_RES, data});
export const errPosts = e => ({type: GET_POSTS_ERR, e});

export const getPosts = () => async dispatch => {
    dispatch(reqPosts());
    try{
        const data = await axios.get('http://localhost:8000/news');
        dispatch(resPosts(data.data));
    } catch (e) {
        dispatch(errPosts(e));
    }
};

export const addNewPost = async data => {
    await axios.post('http://localhost:8000/news', data)
};

export const deletePost = async id => {
    await axios.delete('http://localhost:8000/news/'+id)
}


