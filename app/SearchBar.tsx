import { useState } from "react";
import { Artist } from "../app/artists/page";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (query: string) => Artist[];
}

import React from "react";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Artist[]>([]);

  const handleSearch = () => {
    const foundResults = onSearch(query);
    setResults(foundResults);
    console.log(results);
  };

  return (
    <div className="relative">
      <form onSubmit={(e) => e.preventDefault()} role="search" id="search-bar">
        <input
          type="search"
          placeholder="Search..."
          autoFocus
          required
          onClick={handleSearch}
          id={results.length ? "search-results" : "no-search-results"}
        />
      </form>
      <div className="flex flex-col">
        {results.length > 0 && (
          <ul className="search-results w-full left-0 right-0  bg-white rounded-lg shadow-md z-[999]">
            {results?.map((result) => (
              <div key={result.id} className="flex search-result">
                <Image
                  src={result?.headShot}
                  alt={result.name}
                  width={40}
                  height={40}
                />
                <li>{result?.name}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
