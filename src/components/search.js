import React, { useState, useEffect } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";

// Search component
const Search = ({ searchIndex }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    // Load the index when the component mounts
    if (!index) {
      try {
        setIndex(Index.load(searchIndex));
      } catch (error) {
        console.error("Error loading search index:", error);
      }
    }
  }, [index, searchIndex]);

  const handleSearch = (evt) => {
    const query = evt.target.value;
    setSearchQuery(query);
    if (index) {
      const results = index
        .search(query, { expand: true })
        .map(({ ref }) => index.documentStore.getDoc(ref));

      console.log("Search Results:", results);
      setSearchResults(results);
    }
  };

  return (
    <div>
      <p>Sök här</p>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="your-custom-styles-here"
      />
      <ul>
        {searchResults.length === 0 ? (
          <li>Inga resultat hittades</li>
        ) : (
          searchResults.map((page) => (
            <li key={page.id} style={{ color: "black" }}>
              <Link to={`/${page.slug}`}>{page.titel}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Search;
