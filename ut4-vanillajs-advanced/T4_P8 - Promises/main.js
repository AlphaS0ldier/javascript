export const database = {
  users: [
    { id: 1, name: "Usuario 1" },
    { id: 2, name: "Usuario 2" },
    { id: 3, name: "Usuario 3" },
  ],
};

export const selectUserById = (value) => {
  return new Promise((resolve, reject) => {
    let verify = false;
    let numid = value;
    numid--;
    database.users.forEach((element) => {
      element.id == value ? (verify = true) : "";
    });
    setTimeout(() => {
      if (verify == true && value > 0) {
        resolve(database.users[numid]);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const selectUserByName = (value) => {
  return new Promise((resolve, reject) => {
    let verify = database.users.find((user) => user.name == value);
    setTimeout(() => {
      if (verify != undefined) {
        resolve(verify);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

export const calculateArray = (value) => {
  return new Promise((resolve, reject) => {
    if (value.length>0) {
      resolve(value.map((element)=>element*element));
    } else {
      reject("The length array is 0");
    }
  });
};

calculateArray([1,2,3,4,5])
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.error(error);
  });
