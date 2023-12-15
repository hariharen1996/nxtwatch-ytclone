import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../redux/chatSlice";
import {
  generateRandomId,
  generateRandomName,
  makeRandomMessage,
} from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineSend } from "react-icons/md";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const authuser = useSelector((store) => store.users);
  const chatMessages = useSelector((store) => store.chat.messages);
  const theme = useSelector((store) => store.config.isTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    //API POLLING
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          id: generateRandomId(10),
          name: generateRandomName(),
          message: makeRandomMessage(),
        })
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        id: generateRandomId(10),
        name: authuser?.displayName,
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <h1 className={`${theme ? "text-black" : "text-white"} p-2`}>
        Live Chat
      </h1>

      <div
        className={`h-96  p-2 border border-black ${
          theme ? "bg-slate-100 border-black" : "bg-[#333] border-white"
        } rounded-lg overflow-y-scroll flex flex-col-reverse`}
      >
        {chatMessages.map((items, index) => (
          <ChatMessage key={index} message={items.message} name={items.name} />
        ))}
      </div>
      <div>
        <form
          className="w-full mt-5 lg:ml-2 flex items-center gap-2"
          onSubmit={handleChatSubmit}
        >
          <input
            className={`rounded-md p-2 outline-none border-b-2 w-full ${
              !theme
                ? "border-white bg-[#333] text-white"
                : "border-black bg-[#f1f1f1] text-black"
            }`}
            type="text"
            name="chat"
            placeholder="enter message"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
          />
          <button
            className={`cursor-pointer bg-none border-none ${
              theme ? "text-black" : "text-white"
            }`}
          >
            <MdOutlineSend className="w-full" size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
