import React from 'react';

function SearchPage() {
  const [search, setSearch] = React.useState('');

  function handleChange(event:any) {
    setSearch(event.target.value);
  }

  return (
    <div className="m-3">
      <Search value={search} onChange={handleChange}>
        Searchテキスト:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

function Search({ value, onChange, children }:any) {
  return (
    <div className="flex items-center">
      <label htmlFor="search" className="mr-2">{children}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-2 py-1"
      />
    </div>
  );
}

export default SearchPage;