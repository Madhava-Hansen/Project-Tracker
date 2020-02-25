import React from 'react';
import {IssueBoardItemReadOnly} from './issue_board_item_read_only';


class IssueBoard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {enabledEditMode: null, posts: this.props.data.posts};
  }

  handleClickEdit = id => this.setState({enabledEditMode: id});

  handleClickDelete = id => this.setState({posts: this.state.posts.filter(post => post.id != id)});

  render() {
    return (
      <div className="IssueBoard">
        <p>Issue Posting</p>
        <ul>
          {this.state.posts.map(data => {
            return (
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