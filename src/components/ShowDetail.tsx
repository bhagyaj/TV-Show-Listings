import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchShowDetails } from "../services/apiService";
import { Show } from "../models/show"; // Ensure you are using the correct model

const ShowDetail = () => {
  const { id } = useParams();  // id is a string
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    if (id) {
      fetchShowDetails(parseInt(id, 10))  // Convert id to number
        .then(setShow)
        .catch(console.error);
    }
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image?.medium} alt={show.name} />
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  );
};

export default ShowDetail;

