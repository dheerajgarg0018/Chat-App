import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    
    const [user, setUser] = useState();

    const history = useHistory();

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      setUser(userInfo);
      //Error due to !userInfo**************************
      if (userInfo === undefined)
        history.push("/");
    
        // if(userInfo === null)
        //     history.push("/");
      
    
    }, [history]);

    return <ChatContext.Provider value={{user, setUser}}>{ children }</ChatContext.Provider>
}

export const ChatState = () =>{
    return useContext(ChatContext);
}
