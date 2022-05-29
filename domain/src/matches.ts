export function match<T, U>(a: T, ...matchers: Matcher<T, U>[]): U | undefined {
  let first = matchers.find((m) => m[0](a));
  return first?.[1](a);
}
export function propertyIs<T, V>(
  propertyName: string,
  value: V
): (value: T) => boolean {
  return function (v) {
    return v[propertyName] == value;
  };
}

export function byProperty<T, U, V>(
  name: string,
  functions: [V, (value: T) => U][]
): Matcher<T, U>[] {
  return functions.map((fun) => [propertyIs(name, fun[0]), fun[1]]);
}

type Matcher<T, U> = [(value: T) => boolean, (value: T) => U];
