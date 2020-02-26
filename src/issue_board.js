import React from 'react';
import {IssueBoardItemReadOnly} from './issue_board_item_read_only';
import IssueBoardItemEditMode from './issue_board_item_edit_mode';
import {FilterTagsDropdown} from './filter_posts_dropdown';

class IssueBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enabledEditMode: null, 
      filterTags: ["", "bug", "issue", "comment"],
      isFiltered: false,
      posts: this.props.data.posts, 
      filterPosts: [],
      nextId: this.props.data.posts.length + 1,
    }
    this.newPostData = {id: null, title: "", text: "", tags: []};
  }

  handleAddTagGlobal = tag => {
    if (!this.state.filterTags.includes(tag)) {
      this.setState({filterTags: this.state.filterTags.concat(tag)})
    }
  };

  handleClearFilter = () => this.setState({isFiltered: false});

  handleChangeFilterPosts = event => {
    const tag = event.target.value;
    if (!tag) {
      this.setState({isFiltered: false});
      
      return;
    }
    const filterPosts = this.state.posts.filter(post => post.tags.includes(tag));
    this.setState({filterPosts: filterPosts, isFiltered: true});
  }

  handleClickSave = post => {
    if (!post.id) {
      // this is a new post so set the id and then concat with current posts array
      post.id = this.state.nextId;
      const nextStatePosts = this.state.posts.concat(post);
      this.setState({
        posts: nextStatePosts, 
        nextId: this.state.nextId + 1
      })

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

  handleClickCancel = () => this.setState({enabledEditMode: null});

  handleClickEdit = id => this.setState({enabledEditMode: id});

  handleClickDelete = id => this.setState({posts: this.state.posts.filter(post => post.id != id)});

  render() {
    const currentPosts = this.state.isFiltered ? this.state.filterPosts : this.state.posts;
    return (
      <div className="IssueBoard">
        <h1 className="IssueBoard-headingText">Add Issues, Comments and Tasks</h1>
        <ul className="IssueBoard-posts">
          <FilterTagsDropdown 
            handleChangeFilterPosts={this.handleChangeFilterPosts} 
            handleClearFilter={this.handleClearFilter}
            tags={this.state.filterTags} 
          />
          {currentPosts.map(data => {
            return data.id === this.state.enabledEditMode ? (
             <IssueBoardItemEditMode 
              data={data}
              handleClickSave={this.handleClickSave}
              handleClickCancel={this.handleClickCancel}
              handleAddTagGlobal={this.handleAddTagGlobal}
              filterTags={this.state.filterTags}
             />
            ) : (
              <IssueBoardItemReadOnly 
              handleClickDelete={this.handleClickDelete}
              handleClickEdit={this.handleClickEdit}
              data={data}
            />
            )
          })}
          <IssueBoardItemEditMode
            data={this.newPostData}
            handleClickSave={this.handleClickSave}
            handleClickCancel={this.handleClickCancel}
            handleAddTagGlobal={this.handleAddTagGlobal}
            filterTags={this.state.filterTags}
            isNewPost
            headerText="Add a new post"
          />
        </ul>
      </div>
    )
  }
}

export default IssueBoard;