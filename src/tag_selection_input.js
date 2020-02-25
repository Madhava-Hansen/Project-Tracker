import React from 'react';

export const TagSelectionInput = ({
  globalFilterTags, 
  currentTags,
  handleAddTag,
  handleUpdateField,
  inputValue
}) => {
  return (
    <div className="TagSelectionInput">
      <h3>Current Tags:</h3>
        {currentTags.map(tag => tag && <a className="Button Button-tagDisplay">{tag}</a>)}
      <h3>Add custom tags:</h3>
      <input
        onChange={handleUpdateField}
        id="customTag"
        className="TagSelectionInput-input"
        placeholder="Enter tag name..."
        value={inputValue}
      />
      <button onClick={() => handleAddTag(inputValue)} className="Button" type="submit">Add Custom Tag</button>
      <h3>Click to add existing tags</h3>
      <ul className="TagSelectionInput-tagButtons">
        {globalFilterTags.map(tag => tag && <a className="Button" onClick={() => handleAddTag(tag)}>{tag}</a>)}
      </ul>
    </div>
  )
}