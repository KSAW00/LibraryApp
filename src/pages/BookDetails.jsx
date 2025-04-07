import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookDetails.css"; // Import the CSS file for styling

function BookDetails() {
    const { id } = useParams();
    const book = useSelector((state) => state.books).find(book => book.id === parseInt(id)); // Find the book by ID

    if (!book) {
        return (
            <div className="not-found-container">
                <h2 className="not-found">Book not found!</h2>
                <Link to="/browse">
                    <button className="back-button">Back to Browse</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="book-details">
            <div className="book-details-container">
                <img src={book.cover_image} alt={book.title} className="book-cover" />
                <div className="book-info">
                    <h1>{book.title}</h1>
                    <p><strong>Author:</strong> {book.author}</p>
                    <p><strong>Publication Year:</strong> {book.publication_year}</p>
                    <p><strong>Description:</strong> {book.description}</p>
                    <p><strong>Genres:</strong> {book.genre.join(", ")}</p>
                    <Link to="/browse">
                        <button className="back-button">Back to Browse</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;