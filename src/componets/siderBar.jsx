import React, { useState, useEffect } from "react";
import { CgAdd, CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Trạng thái của sidebar
  const [dropdownStates, setDropdownStates] = useState([true, false, false, false]); // Trạng thái của các dropdown

  const Filters = ["Category", "Brand", "Color", "Size"];
  const Options = [
    ["Men", "Male", "All"],
    ["Nike", "Adidas", "Puma"],
    ["Red", "Blue", "Green"],
    ["Small", "Medium", "Large"]
  ];

  useEffect(() => {
    // Lấy trạng thái của sidebar từ localStorage
    const sidebarState = localStorage.getItem("sidebarOpen");
    if (sidebarState === "false") {
      setIsOpen(false);
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Đảo ngược trạng thái hiển thị của sidebar
    // Lưu trạng thái của sidebar vào localStorage
    localStorage.setItem("sidebarOpen", JSON.stringify(!isOpen));
  };

  // Hàm xử lý sự kiện khi nhấn vào dropdown
  const toggleDropdown = (index) => {
    const newDropdownStates = [...dropdownStates]; // Tạo một bản sao của mảng dropdownStates
    newDropdownStates[index] = !newDropdownStates[index]; // Đảo ngược trạng thái của dropdown tương ứng
    setDropdownStates(newDropdownStates); // Cập nhật lại state
  };

  const [scrollY, setScrollY] = useState(0); // State để lưu vị trí của thanh cuộn

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex h-full">
     
      {/* Sử dụng lớp h-full thay cho h-screen */}
      <div
        className={`bg-black text-white w-36 flex-shrink-0 ${
          isOpen ? "" : "hidden"
        }`}
      >
         <div className="font-body text-xl font-bold hover:text-yellow-300">Filter</div>
        {Filters.map((filter, index) => (
          <div key={index} className="p-4">
            <h2
              className="text-xl flex hover:text-yellow-300 font-sans cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              {filter}
            </h2>
            {/* Dropdown */}
            <ul className={`mt-4 ${dropdownStates[index] ? "" : "hidden"}`}>
              {Options[index].map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className=" flex py-2 hover:text-yellow-300 cursor-pointer"
                >
                  <CgAdd className="mr-2"/>{option}
                </li>
              ))}
            </ul>
            {/* End Dropdown */}
          </div>
        ))}
      </div>
      <button
        className={`bg-black hover:bg-gray-900 text-white w-6 flex-shrink-0 relative ${
          scrollY > 100 ? "fixed top-2 right-2" : ""
        }`}
        onClick={toggleSidebar}
      >
        <div className="items-center justify-center">
          {isOpen ? (
            <CgChevronDoubleLeft size={24} />
          ) : (
            <CgChevronDoubleRight size={24} />
          )}
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
