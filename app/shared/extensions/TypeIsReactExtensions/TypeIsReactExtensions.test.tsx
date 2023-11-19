import TypeIsReactExtensions from "./TypeIsReactExtensions";

describe("isReactNodeNull Function Tests", () => {
  it("returns true for null or undefined ReactNode", () => {
    expect(TypeIsReactExtensions.isReactNodeNull(<div />)).toBe(false);
    expect(TypeIsReactExtensions.isReactNodeNull(null)).toBe(true);
    expect(TypeIsReactExtensions.isReactNodeNull(undefined)).toBe(true);
  });
});

describe("isReactNodeNotNull Function Tests", () => {
  it("returns true for non-null or undefined ReactNode", () => {
    expect(TypeIsReactExtensions.isReactNodeNotNull(<div />)).toBe(true);
    expect(TypeIsReactExtensions.isReactNodeNotNull(null)).toBe(false);
    expect(TypeIsReactExtensions.isReactNodeNotNull(undefined)).toBe(false);
  });
});
