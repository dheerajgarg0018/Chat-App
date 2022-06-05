import { Box } from "@chakra-ui/layout";
import { ChatState } from "../context/chatProvider";
import { useState } from "react";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  (() => {
    if (window.localStorage) {
      if (!localStorage.getItem("reload")) {
        localStorage["reload"] = true;
        window.location.reload();
      }
    }
  })();

  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  // console.log(user);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
