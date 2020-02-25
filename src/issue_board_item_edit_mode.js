import React from 'react';

class IssueBoardItemEditMode extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      text: this.props.data.text,
      tags: this.props.data.tags
    };
  }

  handleUpdateField = event => this.setState({[event.target.id]: event.target.value});

  render() {
    const {data: {id}, headerText} = this.props;
    const {text, title} = this.state;
    return (
      <li className="IssueBoardItem">
        {headerText && (
          <h1 className="IssueBoardItem-headingText">{headerText}</h1>
        )}
        <div className="IssueBoardItem-inputsWrapper">
          <label>
            Title
          </label>
          <input 
            id="title" 
            className="IssueBoardItem-input"
            placeholder="enter title text..."
            onChange={event => this.handleUpdateField(event)} 
            value={title}>
          </input>
          <label>
            Text
          </label>
          <input
           id="text" 
           className="IssueBoardItem-input"
           placeholder="enter body text..."
           onChange={event => this.handleUpdateField(event)} 
           value={text}>
          </input>
        </div>
        <div className="IssueBoardItem-buttonsWrapper">
          <a onClick={() => this.props.handleClickSave(this.state)} className="Button">save</a>
          {!this.props.isNewPost && (
            <a onClick={() => this.props.handleClickCancel(id)} className="Button">cancel</a>
          )}
        </div>
      </li>
    )
  }
}

export default IssueBoardItemEditMode;