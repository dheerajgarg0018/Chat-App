import React,{useState} from 'react'
import { Avatar, Box } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react';
import { Button, Text } from '@chakra-ui/react';
import  ProfileModal  from './ProfileModal';
import { useHistory } from 'react-router-dom';

import {Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { ChatState } from "../../context/chatProvider";

export const SideDrawer = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingChats, setLoadingChats] = useState ();

    const {
      setSelectedChat,
      user,
      notification,
      setNotification,
      chats,
      setChats,
    } = ChatState();

    const history = useHistory();

    const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };
  
    return (
      <div>
        <Box
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          w="100%"
          p="5px 10px 5px 10px"
          borderWidth="5px"
        >
          <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
            <Button variant="ghost">
              <i class="fas fa-search"></i>
              <Text d={{ base: "none", md: "flex" }} px={4}>
                Search User
              </Text>
            </Button>
          </Tooltip>
          <Text fontSize="2xl" fontFamily="Work sans">
            Walkie-Talkie
          </Text>
          <div>
            <Menu>
              <MenuButton p={1}>
                <BellIcon fontSize="2x1" m={1} />
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                <Avatar
                  size="sm"
                  cursor="pointer"
                  name={user.name}
                  src={user.picture}
                />
              </MenuButton>
              <MenuList>
                <ProfileModal user={user}>
                  <MenuItem>My Profile</MenuItem>
                </ProfileModal>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Box>
      </div>
    );


  }

export default SideDrawer