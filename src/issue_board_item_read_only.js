import React from 'react';

export const IssueBoardItemReadOnly = ({
    data, 
    handleClickDelete, 
    handleClickEdit
  }) => {
    return (
      <li className="IssueBoardItem" key={data.id}>
      <h1 className="IssueBoardItem-title">{data.title}</h1>
      <p className="IssueBoardItem-text">{data.text}</p>
      <div className="IssueBoardItem-buttonsWrapper">
        <a onClick={() => handleClickEdit(data.id)} className="Button">edit</a>
        <a onClick={() => handleClickDelete(data.id)} className="Button">delete</a>
      </div>
    </li>
    )
}