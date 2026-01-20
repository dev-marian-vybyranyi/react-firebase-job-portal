import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const userMenu = [
    {
      title: "Home",
      onClick: () => navigate("/"),
      icon: <i className="ri-home-7-line"></i>,
      path: "/",
    },
    {
      title: "Applied Jobs",
      onClick: () => navigate("/applied-jobs"),
      icon: <i className="ri-file-list-3-line"></i>,
      path: "/applied-jobs",
    },
    {
      title: "Posted Jobs",
      onClick: () => navigate("/posted-jobs"),
      icon: <i className="ri-file-list-2-line"></i>,
      path: "/posted-jobs",
    },
    {
      title: "Profile",
      onClick: () => navigate(`/profile/${user.id}`),
      icon: <i className="ri-user-2-line"></i>,
      path: "/profile",
    },
    {
      title: "Logout",
      onClick: () => {
        localStorage.removeItem("user");
        navigate("/login");
      },
      icon: <i className="ri-logout-box-r-line"></i>,
      path: "/login",
    },
  ];

  return (
    <div className="layout">
      <div className="sidebar justify-content-between flex">
        <div className="menu" style={{ width: collapsed ? "40px" : "150px" }}>
          {userMenu.map((item, index) => {
            const isActive = item.path === window.location.pathname;
            return (
              <div
                className={`menu-item ${isActive ? "active-menu-item" : ""}`}
                onClick={item.onClick}
                key={index}
              >
                {item.icon}
                {!collapsed && <span>{item.title}</span>}
              </div>
            );
          })}
        </div>
      </div>
      <div className="content">
        <div className="header justify-content-between d-flex">
          <div className="d-flex align-items-center gap-2">
            {collapsed ? (
              <i
                className="ri-menu-2-fill"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-line"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            <span className="logo">Job Portal</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <i className="ri-shield-user-line"></i>
            {!collapsed && <span>{user?.name}</span>}
          </div>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
