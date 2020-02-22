import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {deletePost, getPosts} from "../../actions/postsActions";
import {ListGroup, ListGroupItem} from "reactstrap";

const Posts = props => {
    const addPosts = async () => {
      await props.getPosts();
    };

    useEffect( () => {
        addPosts()
    }, []);

    const moreInfo = id => {
      props.history.push('/news/'+id)
    };

    const posts = props.posts.map((e, id) => (
        <ListGroupItem key={e.id}>
            <img className='img-thumbnail float-left' src={'http://localhost:8000/uploads/' + e.image} style={{width: '100%', maxWidth: '200px'}}/>
            <h3 className='d-inline'>{e.title}</h3>
            <span className='d-block'>{e.date}</span>
            <button className='mt-3' onClick={() => moreInfo(e.id)}>Read full post</button>
            <button onClick={el => {
                el.preventDefault();
                deletePost(e.id);
                addPosts()
            }} className='float-right'>Delete</button>
        </ListGroupItem>
    ));

    return (
        <>
            <button onClick={() => props.history.push('/news/add')}>ADD POST</button>
            <ListGroup>
                {posts}
            </ListGroup>
        </>
    );
};

const mapStateToProps = state => ({
    posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);