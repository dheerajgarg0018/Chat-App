export const getSender = (loggedUser, users) => {
  // console.log(loggedUser);
  // if (users && loggedUser) {
  // if (loggedUser._id !== users[0]._id && loggedUser._id !== users[1]._id)
  //   return;

  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  // } else {
  // return;
  // const user1 = JSON.parse(localStorage.getItem("userInfo"));
  // if (user1._id !== users[0]._id && user1._id !== users[1]._id) return;

  // console.log(user1);
  // console.log("users is empty");
  // return users[0]._id === user1._id ? users[1].name : users[0].name;
  // }
};

export const getSenderFull = (loggedUser, users) => {
  if (users) return users[0]._id === loggedUser._id ? users[1] : users[0];
  else {
    // console.log("users is empty");
    return;
  }
};

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId
  );
};

export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId &&
    messages[messages.length - 1].sender._id
  );
};

export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};
