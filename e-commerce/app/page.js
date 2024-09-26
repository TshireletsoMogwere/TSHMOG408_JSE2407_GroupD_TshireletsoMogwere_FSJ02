'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Search from './components/searchBar';
import Filter from './components/filter'; 
import Sort from './components/sort'; 
import ProductList from './components/productList'; 

const Home = () => {
  const router = useRouter(); 
  const [products, setProducts] = useState([]); 
  const [categories, setCategories] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [sortOrder, setSortOrder] = useState('default'); 
  const [loading, setLoading] = useState(true); 

  // Fetch products from the API
  const fetchProducts = async () => {
    const response = await fetch(`https://next-ecommerce-api.vercel.app/products`);
    const data = await response.json();
    setProducts(data); 
    setLoading(false); 
  };

  // Fetch unique categories from products
  const fetchCategories = () => {
    const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
    setCategories(['All', ...uniqueCategories]); 
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      fetchCategories(); 
    }
  }, [products]);

  // Filter products based on search and category
  const filteredProducts = (Array.isArray(products) ? products : []).filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.price - b.price;
    if (sortOrder === 'highToLow') return b.price - a.price;
    return 0; // Default sorting
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  // Handle category filter change
  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
  };

  // Handle sort change
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
  };

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Filter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      <Sort sortOrder={sortOrder} onSortChange={handleSortChange} />

      {/* Display a loading message while fetching */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;
