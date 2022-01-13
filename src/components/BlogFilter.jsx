import React, { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const query = form.search.value; // e.target.form.search.value
    const isLatest = form.latest.checked;

    const params = {};
    if (query.length) params.post = query
    if (isLatest) params.latest = true

    setSearchParams(params) // этот код обновляет "состояние" поиска
  
  }
    return (
        <form
          autoComplite="off"
          onSubmit={handleSubmit}
          style={{ paddingLeft: 100}}
          value={search}
          onChange={e => setSearch(e.target.value)}
        >
          <input type="search" name="search" />
          <label style={{ padding: '0 1rem' }}>
            <input type="checkbox"
              name="latest"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            /> only new
          </label>
          <input type="submit" value="Search" />
        </form>
    )
  }

export default BlogFilter;