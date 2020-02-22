import React, {useState} from 'react';
import {addComment} from "../../actions/postActions";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Form from "reactstrap/lib/Form";
import {addNewPost} from "../../actions/postsActions";

const AddPosts = props => {
    const initialForm = {
        title: '',
        content: '',
        image: ''
    };

    const [newPost, setNewPost] = useState(initialForm);

    const addNewPostClick = () => {
      const data = new FormData();

      Object.keys(initialForm).forEach(e => {
          data.append(e, newPost[e])
      });
      console.log(data);

      addNewPost(data)
    };

    const changeForm = e => {
        if(e.target.file){
            setNewPost({...newPost, image: e.target.file})
        }
        console.log(newPost);
      setNewPost({...newPost, [e.target.name]: e.target.value})
    };

    const changeFileForm = e => {
        setNewPost({...newPost, [e.target.name]: e.target.files[0]})
    };

    return (
        <div>
            <Form onSubmit={async e => {
                e.preventDefault();
                await addNewPostClick();
                props.history.push('/')
            }}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input onChange={changeForm} type="text" name="title" id="exampleEmail" placeholder="Namer" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input required onChange={changeForm} type="text" name="content" id="examplePassword" placeholder="Comment" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input required onChange={changeFileForm} type="file" name="image" id="examplePassword" placeholder="Comment" />
                </FormGroup>
                <button>Add</button>
            </Form>
        </div>
    );
};

export default AddPosts;