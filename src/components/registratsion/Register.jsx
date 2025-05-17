import React, { useState } from "react";

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[1200px] p-[15px] mx-auto">
      <button onClick={toggleForm} className="flex justify-center items-center mx-auto w-[250px] h-[40px] rounded-[15px]  bg-blue-600 text-white cursor-pointer hover:bg-blue-800 duration-300">
        Open Registration Menu
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[2000px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}`}>
        <h1 className="mx-auto relative text-[30px] w-[200px] text-black font-semibold tracking-[1px] text-center mt-2 hover:text-gray-700  cursor-pointer duration-300 before:absolute before:left-0 before:bottom-0 before:w-[100%] before:h-[3px] before:scale-0 before:bg-gray-700 hover:before:scale-100 before:duration-300">
          Registration
        </h1>

        <form
          action=""
          className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mt-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="id">Register ID</label>
            <input
              type="number"
              id="id"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              type="password"
              id="cPassword"
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div>
            <h2 className="text-[20px] font-medium mb-2">Gender</h2>
            <div className="flex justify-between gap-x-2">
              <div className="flex  gap-x-1">
                <input type="radio" name="gender" id="" />
                <label htmlFor="">Male</label>
              </div>
              <div className="flex  gap-x-1">
                <input type="radio" name="gender" id="" />
                <label htmlFor="">Female</label>
              </div>
              <div className="flex  gap-x-1">
                <input type="radio" name="gender" id="" />
                <label htmlFor="">Prefer not to say</label>
              </div>
            </div>
          </div>
          <br className="max-sm:hidden" />
          <button className="w-[250px] h-[40px] rounded-[15px]  bg-blue-600 text-white cursor-pointer hover:bg-blue-800 duration-300 max-sm:w-[100%]">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Register);
