import * as OOP from "./OOP-P3";

describe("OOP", () => {
  it("should gets name,surname,country and age", () => {
    let person = new OOP.Persons(
      "John",
      "Doe",
      "USA",
      "32"
    );
    expect(person.name).toBe("John");
    expect(person.surname).toBe("Doe");
    expect(person.country).toBe("USA");
    expect(person.age).toBe("32");
  });

  it("should sets name,surname,country and age", () => {
    let person = new OOP.Persons();
    expect(person.name="Peter").toBe("Peter");
    expect(person.surname="Jackson").toBe("Jackson");
    expect(person.country="CANADA").toBe("CANADA");
    expect(person.age="39").toBe("39");
  });
});
