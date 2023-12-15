import { useSelector } from "react-redux";

const ChatMessage = ({ name, message }) => {
  const theme = useSelector((store) => store.config.isTheme);
  return (
    <div
      className={`flex items-center p-2 shadow-sm ${
        !theme ? "text-white" : "text-black"
      }`}
    >
      <p>💬</p>
      <p className="font-bold pl-1 text-sm"> {name}:</p>
      <p className="text-sm mx-2">{message}</p>
    </div>
  );
};

export default ChatMessage;
