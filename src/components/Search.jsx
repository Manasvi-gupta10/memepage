const Search = ({ allmemes, setmemes }) => {
  function handlesearch(text) {
    setmemes(
      allmemes.filter((res) =>
        res.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  }

  return (
    <div className="w-full mb-8">
      <input
        className="w-full border border-gray-300 text-lg rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search memes..."
        type="text"
        onChange={(e) => handlesearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
