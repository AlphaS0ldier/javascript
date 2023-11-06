import { addAllNumbers,createLine,doubleAllNumbers,showDoubled,showLine,showResult } from "./main";

describe("Callbacks", () => {
  it("should gets 23, when adds [1,2,3,4,5] + [2,3,1,2]", () => {
    let array1 = [1,2,3,4,5];
    let array2 = [2,3,1,2];
    expect(showResult(array1,array2,addAllNumbers)).toBe(23);
  });

  it("should gets My tasks list: study buy sleep play, when pass [study,buy,sleep,play]", () => {
    let array = ["study","buy","sleep","play"]
    expect(showLine(array,createLine)).toBe("My tasks list: study buy sleep play");
  });

});
