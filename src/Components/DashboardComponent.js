import React from "react";
import SidebarComponent from "./SidebarComponent";
const DashboardComponent = () => {
  return (
    <>
      <div className="header-container">
        <SidebarComponent />
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div class="dashboard-menu-container">
          <div className="dashboard-menu">
                <div className="dashboard-menu-box col-md-6">
                   <h1> Total Jobs</h1> 
                </div>
                <div className="dashboard-menu-box col-md-6">
                    <h1> Active Jobs</h1>
                </div>
                <div className="dashboard-menu-box col-md-6">
                    <h1> Total Users</h1>
                </div>
                <div className="dashboard-menu-box col-md-6">
                    <h1> Active Users</h1>
                </div>
                <div className="dashboard-menu-box col-md-6">
                    <h1> Complete Jobs</h1>
                </div>
                <div className="dashboard-menu-box col-md-6">
                    <h1> Monthly Jobs</h1>
                </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardComponent;
