class User {
  private id: number = 0;
  private email: string = "";
  private password: string = "";

  constructor(id: number, email: string, password: string) {
    this.setId(id);
    this.setEmail(email);
    this.setPassword(password);
  }

  private setId(id: number) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  private setEmail(email: string) {
    this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  private setPassword(password: string) {
    this.password = password;
  }

  public getPassword() {
    return this.password;
  }
}

export default User;
