import { byProperty, match, propertyIs } from "./matches";

test("match ", () => {
  const re = match(
    { type: "A" },
    [({ type }) => type === "B", (v) => "type is b"],
    [({ type }) => type === "A", (v) => "type is a"]
  );
  expect(re).toEqual("type is a");
});
test("property ", () => {
  const re = match(
    { type: "A" },
    [propertyIs("type", "B"), (v) => "type is b"],
    [propertyIs("type", "A"), (v) => "type is a"]
  );
  expect(re).toEqual("type is a");
});

test("property ", () => {
  const re = match(
    { type: "A" },
    ...byProperty("type", [
      ["B", (v) => "type is b"],
      ["A", (v) => "type is a"],
    ])
  );
  expect(re).toEqual("type is a");
});
test("more than one typeof case", () => {
  const re = match(
    { type: "A" },
    ...byProperty("type", [
      ["B", (v) => "type is b"],
      ["C", (v) => "type is c"],
    ]),
    ...byProperty("type", [["A", (v) => "type is a"]])
  );
  expect(re).toEqual("type is a");
});
