import React from 'react';
import {IssueBoardItemReadOnly} from './issue_board_item_read_only';
import IssueBoardItemEditMode from './issue_board_item_edit_mode';

class IssueBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabledEditMode: null, 
      posts: this.props.data.posts, 
      newItem: {
        id: null, 
        title: "", 
        text: "", 
        tags: []
      }
    };
  }

  handleClickSave = post => {
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
        <p>Issue Posting</p>
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
      </div>
    )
  }
}

export default IssueBoard;