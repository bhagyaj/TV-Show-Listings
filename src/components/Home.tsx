import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchShows, searchShows } from "../services/apiService";
import { Show } from "../models/show";

const Home = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchShows(page).then(setShows);
  }, [page]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    searchShows(search).then(setShows);
  };

  return (
    <div>
      <h1>TV Show Listings</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a show..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {shows.map((show) => (
          <div key={show.id}>
            <Link to={`/show/${show.id}`}>
              <h3>{show.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
    </div>
  );
};

export default Home;
