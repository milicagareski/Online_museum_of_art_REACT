import React, { useState } from "react";
const urlPaintings = "http://localhost:5003/api/artworks/";
export default function Collection() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(urlPaintings);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const paintings = await response.json();
      setData(paintings);
      console.log(paintings);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button onClick={fetchData} className="btn">
        {isLoading ? "Loading..." : "Fetch Data"}
      </button>
      {/* Render fetched data here */}
    </>
  );
}
