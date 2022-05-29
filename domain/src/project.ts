export class Project {
  static fromName(name: string): Project {
    let re = new Project();
    re.name = name;
    return re;
  }
  name: string;
  id: string;
} //xiangmu
