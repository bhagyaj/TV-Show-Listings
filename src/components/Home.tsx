import { useState, useEffect } from "react";
import { fetchShows, searchShows } from "../services/apiService";
import { Show } from "../models/show";
import { Link } from "react-router-dom";

const Home = () => {
  const [shows, setShows] = useState<Show[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 10; // Set how many shows to display per page

  useEffect(() => {
    fetchShows(1).then(setShows).catch(console.error); // Pass default page 1
  }, []);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    searchShows(search).then(setShows);
  };

  // Calculate total pages
  const totalPages = Math.ceil(shows.length / showsPerPage);

  // Get current page's shows
  const startIndex = (currentPage - 1) * showsPerPage;
  const currentShows = shows.slice(startIndex, startIndex + showsPerPage);

  return (
    <div>
      <h1>TV Show Listings</h1>
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a show..."
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button type="submit" style={{ padding: "10px 15px", borderRadius: "5px", background: "#007bff", color: "white", border: "none" }}>
          Search
        </button>
      </form>
      {currentShows.map((show) => (
        <div key={show.id} style={{ marginBottom: "10px" }}>
          <Link to={`/show/${show.id}`} style={{ color: "blue", fontSize: "20px" }}>
            {show.name}
          </Link>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
