import { forEach, map, filter, reduce } from "./arrayUtils";

describe("forEach", () => {
  test("The function should perform forEach loop", () => {
    const mockCallback = jest.fn();
    forEach([3, 2], mockCallback);
    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(3);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(2);
  });
});

describe("map", () => {
  test("The function should perform map loop", () => {
    const mockCallback = jest.fn();
    map([4, 5, 6, 8, 9], mockCallback);

    // // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(5);

    // // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(4);
  });
});

describe("filter", () => {
  test("The function should perform filter loop", () => {
    const mockCallback = jest.fn();
    filter([4, 5, 6, 8, 9], mockCallback);

    // // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(5);

    // // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(4);
  });
});

describe("reduce", () => {
  test("The function should perform reduce loop", () => {
    const mockCallback = jest.fn();
    reduce([4, 5, 6, 8, 9], mockCallback, 5);

    // // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(5);

    // // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(5);
  });
});
