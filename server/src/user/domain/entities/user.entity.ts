export class User {
  constructor(
    public name: string,
    public email: string,
    public readonly id?: number,
  ) {}
  static create(name: string, email: string): User {
    return new User(name, email);
  }
  changeName(name: string): void {
    this.name = name;
  }
}
