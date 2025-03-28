// src/pages/ProfilePage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import mockUser from "../data/mockUser";
import "../styles/ProfilePage.css";
import useravatar from "../assets/User_Avatar.png";

const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...mockUser });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser({ ...formData });
    setIsEditing(false);
    alert("Profile updated successfully! (mock)");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {/* Profile Avatar */}
        <img
          className="profile-avatar"
          src={useravatar}
          alt="User Avatar"
        />

        <h2>My Profile</h2>

        {isEditing ? (
          <div className="profile-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <button className="profile-button" onClick={handleSave}>
              Save
            </button>
          </div>
        ) : (
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Address:</strong> {user.address}</p>
            <button className="profile-button" onClick={handleEditToggle}>
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Profile Links */}
      <div className="profile-links">
        <Link to="/orders">View Past Orders</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
