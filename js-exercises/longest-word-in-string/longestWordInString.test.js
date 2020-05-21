import { longestWordInString } from "./longestWordInString";

describe("longestWordInString", () => {
  test("returns the longest word in a string", () => {
    expect(
      longestWordInString(
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
      )
    ).toBe("established");

    expect(
      longestWordInString(
        "Contrary to popular belief, Lorem Ipsum is not simply random text"
      )
    ).toBe("Contrary");

    expect(
      longestWordInString(
        "that they cannot foresee the pain and trouble that are bound to ensue"
      )
    ).toBe("foresee");
  });
});
