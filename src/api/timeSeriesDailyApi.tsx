import { BASE_URL } from "../environment/apiConfig";
const API_KEY = "V02TV606ZJLMR5XG";
// const BASE_URL = "https://www.alphavantage.co/query";


export const fetchTimeSeriesDaily = async (symbol: any) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Fetched Time Series Data:", data); 

    if (!data || Object.keys(data).length === 0 || !data["Time Series (Daily)"]) {
      console.log("no data is received");
      
    }

    return data;
  } catch (error) {
    console.error("Error fetching time series data:", error);
    throw error;
  }
};