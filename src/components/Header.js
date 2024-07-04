import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="Header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">Welcome</h2>
    </div>
  );
}
