import React from "react";

const ComplexDashboardLayout = ({
  children,
  notifications,
  revenue,
  users,
  login,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) => {
  const loggedIn = false;

  return loggedIn ? (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  ) : (
    login
  );
};

export default ComplexDashboardLayout;
