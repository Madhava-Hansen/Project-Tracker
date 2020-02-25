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
    const {data: {id}} = this.props;
    const {text, title} = this.state;
    return (
      <li className="IssueBoardItem">
        <div className="IssueBoardItem-inputs">
          <label>
            Title
          </label>
          <input id="title" onChange={event => this.handleUpdateField(event)} value={title}></input>
          <label>
            Text
          </label>
          <input id="text" onChange={event => this.handleUpdateField(event)} value={text}></input>
        </div>
        <div className="IssueBoardItem-buttonsWrapper">
          <a onClick={() => this.props.handleClickSave(this.state)} className="IssueBoardItem-button">save</a>
          <a onClick={() => this.props.handleClickCancel(id)} className="IssueBoardItem-button">cancel</a>
        </div>
      </li>
    )
  }
}

export default IssueBoardItemEditMode;