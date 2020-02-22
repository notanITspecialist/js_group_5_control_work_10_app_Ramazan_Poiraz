import axios from "axios";

export const GET_POST_RES = 'GET_POST_RES';

export const postRes = (data, comments) => ({type: GET_POST_RES, data, comments});

export const getPost = id => async dispatch => {
  const data = await axios.get('http://localhost:8000/news/'+ id);
  const comments = await axios.get('http://localhost:8000/comments/?new_id = '+id);
  dispatch(postRes(data.data, comments.data))
};

export const deleteComment = async id => {
  await axios.delete('http://localhost:8000/comments/'+id)
};

export const addComment = async data => {
  console.log(data)
  await axios.post('http://localhost:8000/comments', data)
};