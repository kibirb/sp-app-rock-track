import selector from "./selector";

describe("Selector test", () => {
  it("returns selected values correctly", () => {
    const state = {
      tracksList: [],
      isLoading: true,
    };
    const result = selector(state);

    expect(result.isLoading).toEqual(true);
  });
});
