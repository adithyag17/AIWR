import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [responseq, setResponseq] = useState("no data");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sendQuery = async (query) => {
    try {
      const response = await fetch("http://localhost:5000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }), // Corrected
      });
      const jsonData = await response.json(); // Corrected
      setResponseq(jsonData.message); // Extract message from JSON response
    } catch (error) {
      console.error("Error sending query:", error);
    }
  };

  return (
    <div className="body">
      <div className="upper-dashboard">
        <div className="buttons">
          <span>Search.AI</span>
        </div>
      </div>
      <div className="searchbar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Enter your search query..."
          className="search-input"
        />
        <button
          className="search-button"
          onClick={() => sendQuery(searchQuery)} // Corrected
        >
          Search
        </button>
      </div>
      <div className="responsebox">
        <span>{responseq}</span>
      </div>
    </div>
  );
}

export default App;
