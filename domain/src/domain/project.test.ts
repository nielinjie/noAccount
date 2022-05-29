import { Projects } from "./project";

test("as tree", () => {
  let projects = new Projects();
  expect(projects.getRoot()).toBeUndefined();
  projects.add(projects.fromName("A"));
  let a = projects.getRoot();
  expect(a).toEqual(expect.objectContaining({ name: "A" }));
  let b = projects.fromName("B");
  b.parent = a.id;
  projects.add(b);
  expect(projects.getChildren(projects.getRoot())).toEqual([b]);
  let c = projects.fromName("C");
  projects.add(c, a);
  expect(projects.getChildren(projects.getRoot())).toEqual([b, c]);
});
