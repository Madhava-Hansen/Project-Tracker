import React from 'react';
import IssueBoard from './issue_board';
import data from './data.json';
import './App.scss';

function App() {
  return (
    <div className="IssueBoardContainer">
      <IssueBoard data={data} />
    </div>
  );
}

export default App;
