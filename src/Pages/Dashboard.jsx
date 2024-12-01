import React from "react";
import Table from "../Components/Table";
import List from "../Components/List";
import Button from "../Components/Button";

const Dashboard = ({ user, authData }) => {
  const tableHeader = ["Name", "Role", "Joined", "Status"];

  return (
    <>
      <div className=" flex justify-between  mx-8 my-5">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Members
        </h1>
        {user == "admin" && (
          <Button
            title={"Create +"}
            onClick={() => {
              console.log("creates");
            }}
          />
        )}
      </div>
      <div className="px-4 md:px-8 py-3">
        <Table headers={tableHeader}>
          <List
            user={user}
            members={user.role === "admin" ? authData.members : [user]}
          />
        </Table>
      </div>
    </>
  );
};

export default Dashboard;
