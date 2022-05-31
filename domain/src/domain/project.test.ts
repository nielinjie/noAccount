import cuid from "cuid";
import { SumAmount } from "./amount";
import { Project, Projects } from "./project";
import { PointRecord, Records } from "./record";
import { daysAfter } from "./time";
import { ExactValue } from "./value";
import {Record } from "./record";
test("as tree", () => {
  let projects = new Projects();
  let root = projects.getRoot();
  expect(root).toEqual(expect.objectContaining({ name: "root" }));

  expect(projects.getRoot()).not.toBeUndefined();
  let a = projects.add(projects.fromName("A"));
  let b = projects.fromName("B", a.id);
  projects.add(b);
  expect(projects.getChildren(projects.getRoot())).toEqual([a]);
  expect(projects.getChildren(a)).toEqual([b]);

});
test("a incomeProject", () => {
  let projects = new Projects();
  let c = incomeProject(projects)
  let income = projects.get(c.id)
  expect(income).toEqual(expect.objectContaining({ name: "incomeProject" }));
  let parent = projects.get(income.parent);
  expect(parent).toEqual(expect.objectContaining({ name: "root" }));
})

test("project and records", () => {
  let projects = new Projects();
  let records = new Records();
  let [p, rs] = projectAndRecord(projects, records)
  expect(p.records).toEqual(rs.map(r => r.id))
})

export function incomeProject(projects: Projects): Project {
  let existed = projects.nodes.find(node => node.name === "incomeProject")
  if (existed !== undefined) return existed;
  let c = projects.add(projects.fromName("incomeProject"));
  return c;
}

export function projectAndRecord(projects: Projects,records:Records): [Project, Record[]] {
  const now = new Date('2022-06-30T16:00:00.000Z')
  const yesterday = daysAfter(-1, now)
  let c = incomeProject(projects)
  let extra = new PointRecord(cuid(), yesterday, new SumAmount(new ExactValue("rmb", 10000)))
  c.linkRecord(extra.id)
  records.add(extra)
  return [c, [extra]]
}