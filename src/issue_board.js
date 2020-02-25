import React from 'react';
import {IssueBoardItemReadOnly} from './issue_board_item_read_only';
import IssueBoardItemEditMode from './issue_board_item_edit_mode';

class IssueBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabledEditMode: null, 
      posts: this.props.data.posts, 
      nextId: this.props.data.posts.length + 1,
      newItem: {
        id: null, 
        title: "", 
        text: "", 
        tags: []
      }
    };
  }

  handleClickSave = post => {
    if (!post.id) {
      // this is a new post so set the id and then push the post into the array
      post.id = this.state.nextId;
      const nextStatePosts = this.state.posts.concat(post);
      const emptyItem = {
        id: null,
        title: "",
        text: "",
        tags: []
      }
      debugger;
      this.setState({posts: nextStatePosts, nextId: this.state.nextId + 1, newItem: emptyItem});
      return;
    }
    const updatedPosts = this.state.posts.map(currentPost => {
      if (currentPost.id === post.id) {
        return post;
      } else {
        return currentPost;
      }
    })

    this.setState({posts: updatedPosts, enabledEditMode: null});
  }

  handleClickCancel = id => this.setState({enabledEditMode: null});

  handleClickEdit = id => this.setState({enabledEditMode: id});

  handleClickDelete = id => this.setState({posts: this.state.posts.filter(post => post.id != id)});

  render() {
    return (
      <div className="IssueBoard">
        <h1 className="IssueBoard-headingText">Add Issues, Comments and Tasks</h1>
        <ul>
          {this.state.posts.map(data => {
            return data.id === this.state.enabledEditMode ? (
             <IssueBoardItemEditMode 
              data={data}
              handleClickSave={this.handleClickSave}
              handleClickCancel={this.handleClickCancel}
             />
            ) : (
              <IssueBoardItemReadOnly 
              handleClickDelete={this.handleClickDelete}
              handleClickEdit={this.handleClickEdit}
              data={data}
            />
            )
          })}
        </ul>
        <IssueBoardItemEditMode
          data={this.state.newItem}
          handleClickSave={this.handleClickSave}
          handleClickCancel={this.handleClickCancel}
          isNewPost
          headerText="Add a new post"
        />
      </div>
    )
  }
}

export default IssueBoard;