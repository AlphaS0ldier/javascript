import * as OOP from "./OOP-P2";

describe("OOP", () => {
  it("should gets title,author and published for la vida del lazarillo de Tormes", () => {
    let book = new OOP.Books(
      "La vida del lazarillo de Tormes",
      "Anonymous",
      "1554"
    );
    expect(book.title).toBe("La vida del lazarillo de Tormes");
    expect(book.author).toBe("Anonymous");
    expect(book.published).toBe("1554");
  });

  it("should gets title,author and published for The NeverEnding Story", () => {
    let book = new OOP.Books(
      "The NeverEnding Story",
      "Michael Ende",
      "1984"
    );
    expect(book.title).toBe("The NeverEnding Story");
    expect(book.author).toBe("Michael Ende");
    expect(book.published).toBe("1984");
  });
  it("should gets title,author and published for The Lord of the Rings", () => {
    let book = new OOP.Books(
      "The Lord of the Rings",
      "J. R. R. Tolkien",
      "1954"
    );
    expect(book.title).toBe("The Lord of the Rings");
    expect(book.author).toBe("J. R. R. Tolkien");
    expect(book.published).toBe("1954");
  });
  it("should gets title,author and published for Beowulf", () => {
    let book = new OOP.Books(
      "Beowulf",
      "Anonymous",
      "900"
    );
    expect(book.title).toBe("Beowulf");
    expect(book.author).toBe("Anonymous");
    expect(book.published).toBe("900");
  });
});
