import { BASE_URL } from "../environment/apiConfig";
const API_KEY = "60G224F3L4O8V7HQ"; // your API key
// const BASE_URL = "https://www.alphavantage.co/query";
export const fetchCompanyOverview = async (symbol: any) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Fetched Company Overview:", data); 

    if (!data || Object.keys(data).length === 0) {
      throw new Error("No company data found");
    }

    return data;
  } catch (error) {
    console.error("Error fetching company overview:", error);
    throw error;
  }
};
