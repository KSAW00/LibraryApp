import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryDropdown from "../components/CategoryDropdown";
import "./BrowseBooks.css";

function BrowseBooks() {
    const { category } = useParams();
    const selectedCategory = category?.toLowerCase() || 'all';
    const [searchQuery, setSearchQuery] = useState('');

    const books = useSelector((state) => state.books);

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());

        if (searchQuery.trim() !== '') {
            return matchesSearch;
        }
        const matchesCategory = selectedCategory === 'all' || 
            book.genre.some(g => g.toLowerCase() === selectedCategory);
        return matchesCategory; 
    });

    return (
        <div className="browse-books">
            <div className="browse-header">
                <h2>Browse Books</h2>
                <CategoryDropdown />
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-bar"
                />
            </div>

            {filteredBooks.length === 0 ? (
                <p>No books found matching your criteria.</p>
            ) : (
                <div className="book-grid">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="book-card">
                            <img src={book.cover_image} alt={book.title} className="book-thumbnail" />
                            <div className="book-info">
                                <strong>{book.title}</strong>
                                <p>by {book.author}</p>
                                <Link to={`/books/${book.id}`}>View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BrowseBooks;