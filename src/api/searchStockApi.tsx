
import { BASE_URL } from "../environment/apiConfig";
export const fetchSearchStocks = async (keywords: string) => {
  const API_KEY = "HJZBI9IOT4OOAL2C"; // your API key
// const BASE_URL = "https://www.alphavantage.co/query";
  try {
    const response = await fetch(
      `${BASE_URL}?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(keywords)}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Fetched Search Results:", data); 
    if (!data || !data.bestMatches || data.bestMatches.length === 0) {
      throw new Error("No search results found");
    }

    // Format the search results to be more usable
    const formattedResults = data.bestMatches.map((match: any) => ({
      symbol: match['1. symbol'],
      name: match['2. name'],
      type: match['3. type'],
      region: match['4. region'],
      marketOpen: match['5. marketOpen'],
      marketClose: match['6. marketClose'],
      timezone: match['7. timezone'],
      currency: match['8. currency'],
      matchScore: parseFloat(match['9. matchScore'])
    }));

    return formattedResults;
  } catch (error) {
    console.error("Error searching stocks:", error);
    throw error;
  }
};