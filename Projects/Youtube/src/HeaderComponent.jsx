import React, { useState } from "react";
function HeaderComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div
      className="header d-flex align-items-center justify-content-between"
      style={{
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        marginBottom: "20px",
      }}
    >
      <div className="d-flex align-items-center p-2">
        <i
          className="bi bi-youtube"
          style={{ fontSize: "2rem", color: "red", marginRight: "10px" }}
        ></i>
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>YouTube</span>
      </div>

      <div className="input-group" style={{ width: "50%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          style={{ padding: "10px", fontSize: "1rem" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          style={{ fontSize: "1rem" }}
          onClick={handleSearch}
        >
          <i className="bi bi-search" style={{ fontSize: "1.2rem" }}></i>
        </button>
      </div>

      <div className="d-flex align-items-center justify-content-center p-2">
        <div>
          <i
            className="bi bi-person-circle"
            style={{ fontSize: "2rem", marginRight: "20px", cursor: "pointer" }}
          ></i>
        </div>
        <div>
          <i
            className="bi bi-three-dots-vertical"
            style={{ fontSize: "2rem", marginRight: "20px", cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
export default HeaderComponent;
