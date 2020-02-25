import React from 'react';

export const FilterTagsDropdown = ({tags, handleChangeFilterPosts, handleClearFilter}) => {
  return (
    <div className="FilterTagsDropdown">
      <label className="FilterTagsDropdown-title" for="Tags">Filter posts:</label>
      <select onChange={handleChangeFilterPosts} className="FilterTagsDropdown-dropdown">
        {tags.map(tag => <option value={tag}>{tag}</option>)}
      </select>
      <a className="Button" onClick={handleClearFilter}>clear filter</a>
    </div>
  )
}