import axios from "axios";
import { Show } from "../models/show"; // Adjust path based on folder structure


export const API_URL = "https://api.tvmaze.com";

export const fetchShows = async (page: number): Promise<Show[]> => {
  try {
    const res = await axios.get<Show[]>(`${API_URL}/shows?page=${page}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching shows:", error);
    return [];
  }
};

export const searchShows = async (query: string): Promise<Show[]> => {
  try {
    const res = await axios.get<{ show: Show }[]>(`${API_URL}/search/shows?q=${query}`);
    return res.data.map((item) => item.show);
  } catch (error) {
    console.error("Error searching for shows:", error);
    return [];
  }
};

export const fetchShowDetails = async (id: number): Promise<Show | null> => {
  try {
    const res = await axios.get<Show>(`${API_URL}/shows/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching show details:", error);
    return null;
  }
};
