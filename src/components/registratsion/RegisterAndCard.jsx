import React, { useEffect, useRef, useState } from "react";
import { FaTelegramPlane, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const RegisterAndCard = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });
  const surnameRef = useRef(null);
  const phoneRef = useRef(null);
  const cPasswordRef = useRef(null);

  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data]);
  
  // const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      id: new Date().getTime(),
      name: form.name,
      surname: surnameRef.current.value,
      email: form.email,
      phone: phoneRef.current.value,
      password: form.password,
      cPassword: cPasswordRef.current.value,
      gender: form.gender,
    };
    console.log("New User", newUser);
    setData([...data, newUser]);

    setForm({
      name: "",
      email: "",
      password: "",
      gender: "",
    });
    surnameRef.current.value = "";
    phoneRef.current.value = "";
    cPasswordRef.current.value = "";
  };

  const closeOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-[1200px] p-[15px] mx-auto">
      <button
        onClick={closeOpen}
        className="flex justify-center items-center mx-auto w-[250px] h-[40px] rounded-[15px]  bg-blue-600 text-white cursor-pointer hover:bg-blue-800 duration-300"
      >
        {isOpen ? "Close Registration Menu" : "Open Registration Menu"}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-[2000px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <h1 className="mx-auto relative text-[30px] w-[200px] text-black font-semibold tracking-[1px] text-center mt-2 hover:text-gray-700  cursor-pointer duration-300 before:absolute before:left-0 before:bottom-0 before:w-[100%] before:h-[3px] before:scale-0 before:bg-gray-700 hover:before:scale-100 before:duration-300">
          Registration
        </h1>

        <form
          onSubmit={handleSubmit}
          action=""
          className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mt-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Full Name</label>
            <input
              required
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="surname">Surname</label>
            <input
              required
              type="text"
              id="surname"
              name="surname"
              ref={surnameRef}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Phone Number</label>
            <input
              required
              type="text"
              name="phone"
              ref={phoneRef}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="cPassword">Confirm Password</label>
            <input
              required
              type="password"
              id="cPassword"
              name="cPassword"
              ref={cPasswordRef}
              className="border-gray-400 border shadow-[1px_1px_5px_#333333] outline-none h-[45px] rounded-[10px] px-3"
            />
          </div>
          <div>
            <h2 className="text-[20px] font-medium mb-2">Gender</h2>
            <div className="flex justify-between gap-x-2 max-w-[250px]">
              <div className="flex  gap-x-1">
                <input
                  required
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex  gap-x-1">
                <input
                  required
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <br className="max-sm:hidden" />
          <button className="w-[250px] h-[40px] rounded-[15px]  bg-blue-600 text-white cursor-pointer hover:bg-blue-800 duration-300 max-sm:w-[100%]">
            Register
          </button>
        </form>
      </div>
      <div className='max-w-[1200px] mx-auto p-4'>
      
      <h1 className="mx-auto relative text-[30px] w-[100px] text-black font-semibold tracking-[1px] text-center mt-2 hover:text-gray-700  cursor-pointer duration-300 mb-3 before:absolute before:left-0 before:bottom-0 before:w-[100%] before:h-[3px] before:scale-0 before:bg-gray-700 hover:before:scale-100 before:duration-300">
          Cards
        </h1>
      <div className='w-[320px] shadow-[1px_1px_8px_#333333] bg-gray-100 p-4 flex justify-center flex-col items-center gap-2 rounded-2xl'>
        <div className='w-[300px] h-[280px] rounded-2xl overflow-hidden'>
        <img src="./men.jpg" alt="menImg" className='rounded-2xl hover:scale-110 w-full h-full duration-500 cursor-pointer'/>
        </div>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Name:</span> Jamshid</p>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Surname:</span> Jamshid</p>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Email: </span>Jamshid@gamil.com</p>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Number:</span> Jamshid</p>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Password:</span> Jamshid</p>
        <p className='text-[15px] font-medium text-gray-700 text-center'><span className='text-black text-[18px] font-semibold'>Gender:</span> Jamshid</p>
        <div className='flex text-[24px] gap-x-6'>
        <FaTelegramPlane className='text-blue-700 cursor-pointer hover:scale-105 duration-300'/>
        <FaInstagramSquare className='text-pink-500 cursor-pointer hover:scale-105 duration-300'/>
        <FaTwitter className='text-blue-500 cursor-pointer hover:scale-105 duration-300'/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default React.memo(RegisterAndCard);
