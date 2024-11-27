import React from "react";

const Button = ({ title, icon, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="bg-transparent text-sm hover:bg-zinc-800  hover:text-white  border border-zinc-500 hover:border-transparent  rounded-lg px-4 py-1"
    >
      <div className="flex justify-center items-center gap-2">
        {icon && icon}
        {title}
      </div>
    </button>
  );
};

export default Button;
