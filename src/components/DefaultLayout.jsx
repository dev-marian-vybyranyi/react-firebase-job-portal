const DefaultLayout = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="layout">
      <div className="sidebar justify-content-between flex">
        <span className="logo">sidebar</span>
      </div>
      <div className="content">
        <div className="header justify-content-between d-flex">
          <span>Job Portal</span>
          <div className="d-flex align-items-center gap-1">
            <i className="ri-shield-user-line"></i>
            <span>{user?.name}</span>
          </div>
        </div>
        <div className="body">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
