const API_BASE_URL = 'https://next-ecommerce-api.vercel.app/products';

const Fetch = async (searchTerm = '', skip = 0, sortBy = '', order = 'asc') => {
  const apiUrl = `${API_BASE_URL}?search=${searchTerm}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
  console.log('Fetching from:', apiUrl); // Log the API URL
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log the fetched data
    return data.products || []; // Ensure this matches the API response structure
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return []; // Return an empty array if fetch fails
  }
};

// Function to fetch all products without filters
const FetchAllProducts = async () => {
  const apiUrl = `${API_BASE_URL}`; 
  console.log('Fetching all products from:', API_BASE_URL); // Log the API URL
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.products || []; // Ensure this matches the API response structure
  } catch (error) {
    console.error('Failed to fetch all products:', error);
    return []; // Return an empty array if fetch fails
  }
};

export { Fetch, FetchAllProducts };
