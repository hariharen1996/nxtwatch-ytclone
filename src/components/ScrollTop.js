import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollTop = () => {
  const handleScroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button
      className="fixed mb-5 mr-5 text-[#ff0b37] right-0 bottom-0"
      onClick={handleScroll}
    >
      <IoIosArrowDropupCircle size={40} />
    </button>
  );
};

export default ScrollTop;
