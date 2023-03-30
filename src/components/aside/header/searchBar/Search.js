function Search(prop) {
  const setSearch = prop.search;
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="w-full flex items-center lg:w-auto">
      <input
        onChange={searchHandler}
        type="text"
        placeholder="search"
        className="bg-gray-700 text-white lg:mr-5 outline-none p-2 rounded-2xl min-w-full mr-2 "
      ></input>
      ;
    </div>
  );
}

export default Search;
