import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import "./AddBook.css"

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publication_year, setPublication_year] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !publication_year|| !description || !genre) {
            setError("All fields are required.");
            return;
        }

        dispatch(
            addBook({
                id: Date.now(), 
                title,
                author,
                description,
                publication_year,
                genre: genre.split(",").map((g) => g.trim()),
            })
        );
        navigate("/browse");
    };

    return (
        <div className="add-book-page">
            <h2>Add a New Book</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Publication Year:</label>
                    <input
                        type="number"
                        value={publication_year}
                        onChange={(e) => setPublication_year(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Genre (comma-separated):</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;