import React, { useState } from "react";
import Button from "./Button";

const ListOfMembers = () => {
  const members = [
    {
      name: "Sokheng",
      role: "admin",
      created_at: new Date().toDateString(),
      status: "active",
    },
    {
      name: "Sokheng",
      role: "user",
      created_at: new Date().toDateString(),
      status: "active",
    },
    {
      name: "Sokheng",
      role: "admin",
      created_at: new Date().toDateString(),
      status: "resigned",
    },
    {
      name: "Sokheng",
      role: "user",
      created_at: new Date().toDateString(),
      status: "active",
    },
  ];

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="  mx-2 rounded-sm">
      {members.map((member, index) => (
        <div
          className="grid grid-cols-5 gap-2 p-3 rounded-sm items-center font-normal  mb-2 shadow"
          key={index}
        >
          <h1 className="text-base font-medium  text-gray-800 dark:text-gray-200">
            {member.name}
          </h1>

          {/* Role Badge */}
          <div>
            <span
              className={`px-3 py-1 rounded-full shadow text-xs capitalize ${
                member.role === "admin"
                  ? " text-yellow-400 border-yellow-400"
                  : " text-blue-300 border-blue-300"
              } border`}
            >
              {member.role}
            </span>
          </div>

          {/* Creation Date */}
          <h1 className="text-gray-600 text-sm dark:text-gray-400">
            {member.created_at}
          </h1>

          {/* Status Badge */}
          <div>
            <span
              className={`px-3 py-1 rounded-full shadow text-xs capitalize ${
                member.status === "active"
                  ? " text-green-400 border-green-400 "
                  : " text-red-400 border-red-300"
              } border`}
            >
              {member.status}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 items-center">
            {/* <button className="text-red-600 hover:text-red-800 transition">
              Delete
            </button> */}
            <Button
              title={"Delete"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor" // Ensures the color is inherited from the parent
                >
                  <path
                    d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 16.5V10.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.5 16.5V10.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              }
              onPress={handleDelete}
            />
            <Button
              title={"Edit"}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  color="#000000"
                  fill="none"
                >
                  <path
                    d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 20H17"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfMembers;
