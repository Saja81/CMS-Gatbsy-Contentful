import React, { useState, useEffect } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";

// Search component
const Search = ({ searchIndex }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    // Load the index when the component mounts
    if (!index) {
      setIndex(Index.load(searchIndex));
    }
  }, [index, searchIndex]);

  const handleSearch = (evt) => {
    const query = evt.target.value;
    setQuery(query);
    if (index) {
      const searchResults = index
        .search(query, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref));
      console.log("setResults", searchResults);
      setResults(searchResults);
    }
  };

  console.log("results", results);
  return (
    <div>
      <p>Sök här</p>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <ul>
        {results.map(
          (page) => (
            console.log("Page Object:", page),
            (
              <li key={page.id} style={{ color: "black" }}>
                <Link to={`/${page.slug}`}>{page.titel}</Link>
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
};

export default Search;
