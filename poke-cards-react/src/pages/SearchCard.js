import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "./../data/data.json"

const SearchCard = () => {

    const navigate = useNavigate();
    const cardsToShow = data.slice(0,10);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredData = data.filter((item) => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const selectedItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    }

    const handleItemClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <div className="App">
    <header className="App-header flex justify-between flex-wrap items-start">
        <div className="w-1/4 mt-8 mb-8">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 rounded"
            />
        </div>

        <div className="w-3/4 flex flex-wrap">
            {selectedItems.map((item) => (
                <div key={item.id} className="p-2 w-1/6 items-center flex" onClick={() => handleItemClick(item.id)}>
                    {console.log(item)}
                    <div>
                        <h2>{item.name}</h2>
                        <p>{item.cardmarket && item.cardmarket.prices && item.cardmarket.prices.avg30}€</p>
                    <div><img src={item.images.small}></img></div>

                    </div>
                </div>
            ))}
        </div>
    </header>

    <div className="flex justify-between mt-4">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="p-2 bg-gray-300 rounded">
            Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="p-2 bg-gray-300 rounded">
            Next
        </button>
    </div>

    <button onClick={() => navigate('/')} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Go back home
    </button>
</div>

    );
};

export default SearchCard;