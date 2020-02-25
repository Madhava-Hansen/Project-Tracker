import React from 'react';

export const IssueBoardItemReadOnly = ({
    data, 
    handleClickDelete, 
    handleClickEdit
  }) => {
    // const parser = new DOMParser();
    // const title = parser.parseFromString(data.title, 'text/html');
    // const text = parser.parseFromString(data.text, 'text/html');
    return (
      <li className="IssueBoardItem" key={data.id}>
      <h1 className="IssueBoardItem-title">{data.title}</h1>
      <p className="IssueBoardItem-text">{data.text}</p>
      <ul className="IssueBoardItem-tags">
        <li className="IssueBoardItem-tagsTitle">tags:</li>
        {data.tags.map(tag => tag && <li><a className="Button Button-tagDisplay">{tag}</a></li>)}
      </ul>
      <div className="IssueBoardItem-buttonsWrapper">
        <a onClick={() => handleClickEdit(data.id)} className="Button">edit</a>
        <a onClick={() => handleClickDelete(data.id)} className="Button">delete</a>
      </div>
    </li>
    )
}