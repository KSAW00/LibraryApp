import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css"; 

function Home() {
    const books = useSelector((state) => state.books); 
    const topBooks = books.slice(0, 12);

    return (
        <div className="home">
            <h2>Welcome To The Online Library!</h2>
            <h2>Top 12 Books!</h2>
            <div className="book-grid">
                {topBooks.map((book) => (
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
        </div>
    );
}

export default Home;