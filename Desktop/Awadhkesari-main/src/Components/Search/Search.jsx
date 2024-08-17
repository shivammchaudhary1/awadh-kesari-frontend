import React, { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
        setQuery('')
    };

    return (
        <div className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button onClick={handleSearch} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none"> Search </button>
        </div>
    );
};

export default Search;

