const API_KEY = "V02TV606ZJLMR5XG";
const BASE_URL = "https://www.alphavantage.co/query";

// ✅ Fetch Daily Time Series Data for the chart
export const fetchTimeSeriesDaily = async (symbol: any) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Fetched Time Series Data:", data); // ✅ log for debugging

    if (!data || Object.keys(data).length === 0 || !data["Time Series (Daily)"]) {
      console.log("no data is received");
      
    }

    return data;
  } catch (error) {
    console.error("Error fetching time series data:", error);
    throw error;
  }
};