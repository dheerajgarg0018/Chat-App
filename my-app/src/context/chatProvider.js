import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  // const [user, setUser] = useState();

  // const history = useHistory();

  // useEffect(() => {
  //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  //   setUser(userInfo);
  //   //Error due to !userInfo**************************
  //   if (userInfo === undefined)
  //     history.push("/");

  //     // if(userInfo === null)
  //     //     history.push("/");

  // }, [history]);

  // return <ChatContext.Provider value={{user, setUser}}>{ children }</ChatContext.Provider>
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log(userInfo);

    if (userInfo === undefined) history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  return (
    <ChatContext.Provider
      value={{
        user,
        setUser,
        selectedChat,
        setSelectedChat,
        notification,
        setNotification,
        chats,
        setChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
