
const API_KEY = "HPV8DNARN6U7L0ZK";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchTopMovers = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TOP_GAINERS_LOSERS&apikey=${API_KEY}`
    );

    if (!response.ok) {
      // non-200 HTTP response
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log('Fetched data:', data); // ✅ log the fetched data
    

    if (!data.top_gainers && !data.top_losers) {
      // API returned but no expected data
      throw new Error("No stock data found");
    }

    return data; // ✅ return parsed JSON
  } catch (error) {
    console.error("Error fetching top movers:", error);
    throw error; // ✅ let TanStack Query catch and manage it
  }
};
