 /**
 * Fetches a list of products from the API.
 */
const API_BASE_URL = 'https://next-ecommerce-api.vercel.app/products';
/** 
* @param {number} [skip=0] - The number of products to skip in the API request.
* @returns {Promise<Object[]>} - A promise that resolves to an array of product objects.
* @throws {Error} - Throws an error if the API request fails.
*/

export default async function Fetch(search, skip, currentSort) {
  const query = search ? `&search=${encodeURIComponent(search)}` : '';
  const sortQuery = currentSort ? `&sort=${encodeURIComponent(currentSort)}` : '';

  const response = await fetch(`${API_BASE_URL}/?skip=${skip}${query}${sortQuery}`);
  if (!response.ok) {
    throw new Error ('fetching failed');
  }
  return response.json();
  }

  export async function FetchProductById(id) {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json(); 
  }
