import React from "react";
import SidebarComponent from "./SidebarComponent";
import { FaSearch } from "react-icons/fa";
import { Button } from "react-bootstrap";
const UserComponent = () => {
  return (
    <div className="header-container">
      <SidebarComponent />
      <div className="user-container">
        <h1>User </h1>
        <div className="user-search-container">
          <input
            type="text"
            className="inputTextUserSearchField"
            placeholder="Search Courses"
            name="search"
          />
          <Button variant="primary">
            <FaSearch />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UserComponent;