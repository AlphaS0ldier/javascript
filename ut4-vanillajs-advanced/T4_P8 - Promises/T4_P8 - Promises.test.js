import * as promises from "./main.js";

describe("Database Promises - selectUserById", () => {
  it("it should gets user with id = 2", () => {
    return expect(promises.selectUserById(1)).resolves.toEqual(promises.database.users[0]);
  });
  
  it("should gets User not found with id = 5", () => {
    return expect(promises.selectUserById(999)).rejects.toEqual("User not found");
  });
  
});

describe("Database Promises - selectUserByName", () => {
  it("it should gets user with id = Usuario 3", () => {
    return expect(promises.selectUserByName("Usuario 3")).resolves.toEqual(promises.database.users[2]);
  });
  
  it("should gets User not found with id = John", () => {
    return expect(promises.selectUserByName("John")).rejects.toEqual("User not found");
  });
});

describe("Calculate Pow Promise", () => {
  it("it should get [1,4,9,16,25] with [1,2,3,4,5]", () => {
    return (expect(promises.calculateArray([1,2,3,4,5])).resolves.toEqual([ 1, 4, 9, 16, 25 ]));
  });
  
  it("should get the length arrays is 0 with []", () => {
    return expect(promises.calculateArray([])).rejects.toEqual("The length array is 0");
  });
});
