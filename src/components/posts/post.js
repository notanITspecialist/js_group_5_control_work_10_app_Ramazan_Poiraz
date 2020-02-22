import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {addComment, deleteComment, getPost} from "../../actions/postActions";
import {ListGroupItem} from "reactstrap";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";

const Post = props => {

    const initialForm = {
        new_id: parseInt(props.match.params.id),
        author: '',
        comment: ''
    };

    const [commentaries, setCommentaries] = useState(initialForm);

    const changeForm = e => setCommentaries({...commentaries, [e.target.name]: e.target.value});

    const addPost = async () => {
        props.getPost(props.match.params.id)
    };
    useEffect(() => {
        addPost()
    }, [props.match.params.id]);

    const comments =props.comments && props.comments.map(e => (
       <ListGroupItem key={e.id}>
           <button className='float-right' onClick={() => {
               deleteComment(e.id);
               addPost();
           }}>Delete</button>
           <h4>{e.author}</h4>
           <p>{e.comment}</p>
       </ListGroupItem>
    ));

    return (
        <div>
            <button onClick={() => props.history.push('/')}>Posts</button>
            <h1>{props.post.title}</h1>
            <span>{props.post.date}</span>
            <p>{props.post.content}</p>
            {props.post.image && <img className='img-thumbnail' src={'http://localhost:8000/uploads/' + props.post.image} style={{width: '100%', maxWidth: '400px'}}/>}

            <ListGroupItem>
                <Form onSubmit={e => {
                    e.preventDefault();
                    addComment(commentaries);
                    addPost()
                }}>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input onChange={changeForm} type="text" name="author" id="exampleEmail" placeholder="Namer" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Comment</Label>
                        <Input required onChange={changeForm} type="text" name="comment" id="examplePassword" placeholder="Comment" />
                    </FormGroup>
                    <button>Add</button>
                </Form>
            </ListGroupItem>

            <h2>Comments</h2>
            {comments}
        </div>
    );
};

const mapStateToProps = state => ({
    post: state.post.post,
    comments: state.post.comments
});

const mapDispatchToProps = dispatch => ({
    getPost: id => dispatch(getPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);