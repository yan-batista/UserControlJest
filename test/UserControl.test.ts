import UserMemoryRepository from "../src/UserMemoryRepository";
import User from "../src/User";

describe("Feature: buscar usuário por email", () => {
  it("1º Comportamento: UserService deve ser capaz de encontrar e retornar um usuário", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let outputUser = new User(1, "email1@gmail.com", "senha123");
    let email = "email1@gmail.com";
    // When
    let user = sut.getUser(email);
    // Then
    expect(user).toEqual(outputUser);
  });

  it("2º Comportamento: UserService deve ser capaz de retornar um erro caso não encontre o usuário", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email_nao_cadastrado@gmail.com";
    // When
    /* buscando usuário por email, retornando erro sut.getUser(email) */
    // Then
    expect(() => {
      sut.getUser(email);
    }).toThrow("Usuário não encontrado");
  });
});

describe("Feature: validação de email", () => {
  it("1º Comportamento: UserService deve ser capaz de verificar se dado email é válido", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email1@gmail.com";
    // When
    let validation = sut.validarEmail(email);
    // Then
    expect(validation).toBeTruthy();
  });

  it("2º Comportamento: UserService deve ser capaz de verificar se dado email é inválido", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email_inválido#gmail.com";
    // When
    let validation = sut.validarEmail(email);
    // Then
    expect(validation).toBeFalsy();
  });
});

describe("Feature: cadastrar novo usuário", () => {
  it("1º Comportamento: UserService deve ser capaz de cadastrar um usuário com email e senha válidos", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "emailNovo@gmail.com";
    let senha = "minhasenha";
    // When
    let user = sut.cadastrarUsuario(email, senha);
    // Then
    expect(user).toEqual(sut.getUser(email));
  });

  it("2º Comportamento: UserService deve ser capaz de retornar um erro caso o usuário já exista", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email1@gmail.com";
    let senha = "minhasenha";
    // When

    // Then
    expect(() => {
      sut.cadastrarUsuario(email, senha);
    }).toThrow("Email já cadastrado");
  });
});

describe("Feature: remover usuário", () => {
  it("1º Comportamento: UserService deve ser capaz de remover um usuário com email", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email1@gmail.com";
    // When
    let result = sut.removerUsuario(email);
    // Then
    expect(result).toBe("Usuário removido com sucesso.");
  });

  it("2º Comportamento: UserService deve ser capaz de retornar um erro caso não encontre o email informado", () => {
    // Given
    let sut = UserMemoryRepository.getInstance();
    let email = "email_nao_cadastrado@gmail.com";
    // When

    // Then
    expect(() => {
      sut.removerUsuario(email);
    }).toThrow("Usuário não encontrado");
  });
});
