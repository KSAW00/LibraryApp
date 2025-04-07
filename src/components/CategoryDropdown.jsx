import { useNavigate } from 'react-router-dom';
import useCategories from '../data/categories'; // Use the custom hook to fetch categories dynamically
import "./CategoryDropdown.css"; // Import the CSS file for styling

function CategoryDropdown() {
  const navigate = useNavigate();
  const categories = useCategories(); // Dynamically fetch categories

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory) {
      navigate(`/browse/${selectedCategory.toLowerCase()}`);
    }
  };

  return (
    <select onChange={handleChange} defaultValue="" className="category-dropdown">
      <option value="" disabled>Select a category</option>
      <option value="all">All</option> {/* Add an option for "All" */}
      {categories.map((cat) => (
        <option key={cat} value={cat.toLowerCase()}>
          {cat}
        </option>
      ))}
    </select>
  );
}

export default CategoryDropdown;