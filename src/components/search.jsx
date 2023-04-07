import React, { useState, useEffect } from 'react';
//import { getCategories } from './helpers/adminFetch';
//import { getProductsBySearch } 
import Card from './card';

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    selectedCategory: '',
    searchQuery: '',
    searchResults: [],
    hasSearched: false
  });

  const { categories, selectedCategory, searchQuery, searchResults, hasSearched } = data;

  useEffect(() => {
    getCategories().then(response => {
      if (response.error) {
        console.log(response.error);
      } else {
        setData({ ...data, categories: response });
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleInputChange = name => event => {
    setData({ ...data, [name]: event.target.value });
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    console.log(`searchQuery: ${searchQuery}`, `selectedCategory: ${selectedCategory}`);
    if (searchQuery) {
      getProductsBySearch({
        search: searchQuery || undefined,
        category: selectedCategory
      }).then(response => {
        if (response.error) {
          console.log(response.error);
        } else {
          setData({ ...data, searchResults: response, hasSearched: true });
        }
      });
    }
  };

  const getSearchMessage = (hasSearched, searchResults) => {
    if (hasSearched && searchResults.length > 0) {
      return `Found ${searchResults.length} products.`;
    }
    if (hasSearched && searchResults.length < 1) {
      return `No products found!`;
    }
  };

  const getSearchResults = (searchResults = []) => {
    return (
      <div className="">
        <h2 className="">{getSearchMessage(hasSearched, searchResults)}</h2>
        <div className="">
          {searchResults.map((product, i) => (
            <div className="" key={i}>
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="search-container">
      {/* Search Form */}
      <form onSubmit={handleSearchSubmit}>
        <span >
          <div >
            <div className="">
              <select onChange={handleInputChange('selectedCategory')}>
                <option value="All">All</option>
                {categories.map((category, i) => (
                  <option key={i} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="search"
              onChange={handleInputChange('searchQuery')}
              placeholder="Enter product name"
            />
          </div>
          <div className="" >
            <button className="">Search</button>
          </div>
        </span>
      </form>
      {/* Search Results */}
      {getSearchResults(searchResults)}
    </div>
  );
};

export default Search;
