import React from 'react';

export const IssueBoardItemReadOnly = ({
    data: {id, title, text, tags}, 
    handleClickDelete, 
    handleClickEdit
  }) => {
    return (
      <li className="IssueBoardItem" key={id}>
        <h1 className="IssueBoardItem-title">{title}</h1>
        <p className="IssueBoardItem-text">{text}</p>
        <ul className="IssueBoardItem-tags">
          <li className="IssueBoardItem-tagsTitle">tags:</li>
          {tags.map(tag => tag && <li><a className="Button Button-tagDisplay">{tag}</a></li>)}
        </ul>
        <div className="IssueBoardItem-buttonsWrapper">
          <a onClick={() => handleClickEdit(id)} className="Button">edit</a>
          <a onClick={() => handleClickDelete(id)} className="Button">delete</a>
        </div>
    </li>
    )
}