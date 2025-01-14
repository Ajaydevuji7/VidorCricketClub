import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/scrape";

export const getPlayers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};

export const scrapeTeam = async (teamUrl) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/team`, null, {
      params: { teamUrl },
    });
    return response.data;
  } catch (error) {
    console.error("Error scraping team:", error);
    throw error;
  }
};

export const scrapePlayer = async (playerUrl) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/player`, null, {
      params: { playerUrl },
    });
    return response.data;
  } catch (error) {
    console.error("Error scraping player:", error);
    throw error;
  }
};