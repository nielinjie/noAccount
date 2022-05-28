export class Account {
  name: string;
  id: string;
}
export class Category {
  name: string;
  id: string;
}
export class Project {
  static fromName(name: string): Project {
    let re = new Project();
    re.name = name;
    return re;
  }
  name: string;
  id: string;
} //xiangmu
export class Change{}