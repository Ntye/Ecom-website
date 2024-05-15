import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch categories on component mount
    axios.get('http://127.0.0.1:8000/api/categories').then(response => {
      setCategories(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/search', {
        params: {
          query,
          category_id: category,
          min_price: minPrice,
          max_price: maxPrice,
        },
      });
      setItems(response.data.items);
      console.log(response.data.items)
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h2>Search Items</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.idCat} value={cat.idCat}>
              {cat.nomCat}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.codePro}>{item.nomPro} - ${item.prix}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;