import { useSelector } from "react-redux";

function useCategories() {
    const books = useSelector((state) => state.books); // Fetch books from Redux state
    const categories = [...new Set(books.flatMap(book => book.genre))]; // Extract unique genres
    return categories;
}

export default useCategories;