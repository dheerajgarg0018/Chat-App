const getSender = (loggedUser, users) => {
  if (users)
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  else {
    console.log("users is empty");
    return;
  }
};

export default getSender;
