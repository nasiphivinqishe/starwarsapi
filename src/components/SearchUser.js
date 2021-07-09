const SearchUser = ({ setCurrentPath, setSearching }) => {
  const handlerSearchInputChange = (searchName) => {
    let encoredPath = encodeURI("/?search=" + searchName);

    if (searchName.length > 0) {
      setCurrentPath(encoredPath);
      setSearching(true);
    } else {
      setSearching(false);
    }
  };

  return (
    <div>
      <div className="form-group">
        <label>
          <h5>
            <b>Search User </b>
          </h5>
        </label>
        <input
          className="form-control"
          onChange={(e) => handlerSearchInputChange(e.target.value)}
          type="text"
          placeholder="Enter name to search for..."
        />
      </div>
    </div>
  );
};

export default SearchUser;
