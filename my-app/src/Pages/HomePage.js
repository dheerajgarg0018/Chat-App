import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import SignUp from '../components/authentication/signUp.js'
import Login from "../components/authentication/login.js";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
      
      if (user) {
          history.push('/chat');
      }

  },[history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="2xl"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          Walkie-Talkie
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        boxShadow="2xl"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
