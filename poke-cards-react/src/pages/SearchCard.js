import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from "./../data/data.json"

const SearchCard = () => {

    const navigate = useNavigate();
    const cardsToShow = data.slice(0,10);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

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
            <header className="App-header">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div>
                    {selectedItems.map((item) => (
                        <div key={item.id} onClick={() => handleItemClick(item.id)}>
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>

                <div>
                    <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>

                <button onClick={() => navigate('/')}>
                    Go back home
                </button>
            </header>
        </div>
    );
};

export default SearchCard;