import React from "react";

interface LogoutButtonProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onClickHandler }) => {
  return (
    <button className="text-white hover:text-gray-300" onClick={onClickHandler}>
      Logout
    </button>
  );
};

export default LogoutButton;
