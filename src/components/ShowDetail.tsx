import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails } from "../services/apiService";
import { Show } from "../models/show";

const ShowDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<Show | null>(null);

  useEffect(() => {
    fetchShowDetails(id).then(setShow);
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
    <div>
      <h1>{show.name}</h1>
      {show.image && <img src={show.image.medium} alt={show.name} />}
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  );
};

export default ShowDetail;
