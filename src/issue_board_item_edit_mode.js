import React from 'react';
import { TagSelectionInput } from './tag_selection_input';

class IssueBoardItemEditMode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customTag: "",
      post: {
        id: this.props.data.id,
        title: this.props.data.title,
        text: this.props.data.text,
        tags: this.props.data.tags
      }
    };
  }

  handleClickSave = () => {
    this.props.handleClickSave(this.state.post);
    if (this.props.isNewPost) {
      const post = {id: null, title: "", text: "", tags: []};
      this.setState({post: post});
    }
  }

  handleAddCustomTagChange = event => {
    this.setState({customTag: event.target.value})
  }

  handleAddTag = tag => {
    if (!this.state.post.tags.includes(tag)) {
      const post = {...this.state.post};
      post.tags = post.tags.concat(tag);
      this.setState({post: post, customTag: ""});
    }
    this.props.handleAddTagGlobal(tag);
  };

  handleUpdateField = event => this.setState({[event.target.id]: event.target.value});

  handleUpdateNewPostField = event => {
    const newPost = {...this.state.post};
    const field = event.target.id;
    newPost[field] = event.target.value;
    this.setState({post: newPost});
  }

  render() {
    const {data, headerText} = this.props;
    const {text, title} = this.state.post;
    return (
      <li className="IssueBoardItem">
        {headerText && (
          <h1 className="IssueBoardItem-headingText">{headerText}</h1>
        )}
        <div className="IssueBoardItem-inputsWrapper">
          <h4>
            Title
          </h4>
          <input 
            id="title" 
            className="IssueBoardItem-input"
            placeholder="enter title text..."
            onChange={this.handleUpdateNewPostField} 
            value={title}>
          </input>
          <h4>
            Text
          </h4>
          <input
           id="text" 
           className="IssueBoardItem-input"
           placeholder="enter body text..."
           onChange={this.handleUpdateNewPostField} 
           value={text}>
          </input>
          <TagSelectionInput
            handleAddTag={this.handleAddTag}
            globalFilterTags={this.props.filterTags}
            currentTags={this.state.post.tags}
            handleUpdateField={this.handleUpdateField}
            inputValue={this.state.customTag}
          />
        </div>
        <div className="IssueBoardItem-buttonsWrapper">
          <a onClick={this.handleClickSave} className="Button-primary">save</a>
          {!this.props.isNewPost && (
            <a onClick={() => this.props.handleClickCancel(data && data.id)} className="Button-primary">cancel</a>
          )}
        </div>
      </li>
    )
  }
}

export default IssueBoardItemEditMode;