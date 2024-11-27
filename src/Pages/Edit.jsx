import React, { useState } from "react";

const Edit = () => {
  const modes = ["Basic", "Account", "Advance"];
  const [activeMode, setActiveMode] = useState(modes[0]);

  console.log(activeMode);
  return (
    <div className="flex  min-h-full flex-1 flex-col justify-center px-5 py-12 lg:px-8">
      <div className="  sm:mx-auto sm:w-full sm:max-w-sm  ">
        <h2 className="  text-2xl/9 font-bold tracking-tight text-white">
          Edit member
        </h2>
        <p className="  text-sm/6 text-gray-400">Make changes to profile</p>

        {/* Modes */}
        <div className="flex  my-4 px-5 rounded-md   justify-evenly w-full bg-slate-800  items-center py-1 space-x-2">
          {modes.map((mode, i) => (
            <button
              onClick={() => setActiveMode(mode)}
              className={` w-full text-sm text-center px-2 py-1 rounded-md ${
                activeMode === mode
                  ? "bg-slate-900 px-6 text-white font-semibold "
                  : "text-grey-400 font-normal "
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* selected modes */}
        <div className="w-full mb-4 p-2 ">
          {activeMode === "Basic" && <Basic />}
          {activeMode === "Advance" && <Advance />}
          {activeMode === "Account" && <Account />}
        </div>

        <div className=" flex justify-between items-center gap-3">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md   px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-500 border-2 border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;

const Basic = () => {
  return (
    <>
      <form action="#" method="POST" className="space-y-3">
        <div>
          <label className="block text-sm/6 font-medium text-white">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm/6 font-medium text-white">
              Password
            </label>
          </div>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm/6 font-medium text-white">
              Confirm Password
            </label>
          </div>
          <div className="mt-1">
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              className="block p-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
      </form>
    </>
  );
};
const Account = () => {
  return <></>;
};
const Advance = () => {
  return <></>;
};
