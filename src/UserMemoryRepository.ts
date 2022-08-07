// SISTEMA A SER TESTADO
// SUT (System Under Test)

import User from "./User";

class UserMemoryRepository {
  private static instance: UserMemoryRepository;
  private users: User[] = [];

  private constructor() {
    this.users = [
      new User(1, "email1@gmail.com", "senha123"),
      new User(2, "email2@gmail.com", "123senha"),
      new User(3, "email3@gmail.com", "123#senha"),
      new User(4, "email4@gmail.com", "456*asd"),
      new User(5, "email5@gmail.com", "abc123"),
    ];
  }

  public static getInstance(): UserMemoryRepository {
    if (!UserMemoryRepository.instance) {
      UserMemoryRepository.instance = new UserMemoryRepository();
    }

    return UserMemoryRepository.instance;
  }

  // Retorna todos os usuários
  public getUsers(): User[] {
    let allUsers: User[] = [];
    this.users.forEach((val) => allUsers.push(val));
    return allUsers;
  }

  public getUser(email: string): User {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].getEmail() == email) {
        return this.users[i];
      }
    }
    throw new Error("Usuário não encontrado.");
  }

  public emailDisponivel(email: string): boolean {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].getEmail() == email) {
        return false;
      }
    }
    return true;
  }

  public validarEmail(email: string): boolean {
    let regex = new RegExp(
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
    );
    let validation = regex.test(email);

    return validation;
  }

  public cadastrarUsuario(email: string, password: string): User {
    if (this.emailDisponivel(email) && this.validarEmail(email)) {
      let id = this.users.length + 1;
      let novoUsuario = new User(id, email, password);
      this.users.push(novoUsuario);

      return novoUsuario;
    } else if (!this.emailDisponivel(email)) {
      throw new Error("Email já cadastrado.");
    } else {
      throw new Error("Email inválido.");
    }
  }

  public removerUsuario(email: string) {
    let user = this.getUser(email);
    let pos: number = this.users.indexOf(user);
    this.users.splice(pos, 1);
    return "Usuário removido com sucesso.";
  }
}

export default UserMemoryRepository;
