import axios from "axios";
import { Show } from "../models/show";

export const API_URL = "https://api.tvmaze.com";

export const fetchShows = async (page: number): Promise<Show[]> => {
  const res = await axios.get(`${API_URL}/shows?page=${page}`);
  return res.data;
};

export const searchShows = async (query: string): Promise<Show[]> => {
  const res = await axios.get(`${API_URL}/search/shows?q=${query}`);
  return res.data.map((item: { show: Show }) => item.show);
};

export const fetchShowDetails = async (id: string): Promise<Show> => {
  const res = await axios.get(`${API_URL}/shows/${id}`);
  return res.data;
};
