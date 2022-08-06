"use strict";
// SISTEMA A SER TESTADO
// SUT (System Under Test)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class UserMemoryRepository {
    constructor() {
        this.users = [];
        this.users = [
            new User_1.default(1, "email1@gmail.com", "senha123"),
            new User_1.default(2, "email2@gmail.com", "123senha"),
            new User_1.default(3, "email3@gmail.com", "123#senha"),
            new User_1.default(4, "email4@gmail.com", "456*asd"),
            new User_1.default(5, "email5@gmail.com", "abc123"),
        ];
    }
    static getInstance() {
        if (!UserMemoryRepository.instance) {
            UserMemoryRepository.instance = new UserMemoryRepository();
        }
        return UserMemoryRepository.instance;
    }
    // Retorna todos os usuários
    getUsers() {
        let allUsers = [];
        this.users.forEach((val) => allUsers.push(val));
        return allUsers;
    }
    getUser(email) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getEmail() == email) {
                return this.users[i];
            }
        }
        throw new Error("Usuário não encontrado.");
    }
    emailDisponivel(email) {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].getEmail() == email) {
                return false;
            }
        }
        return true;
    }
    validarEmail(email) {
        let regex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$");
        let validation = regex.test(email);
        if (validation)
            return true;
        else
            return false;
    }
    cadastrarUsuario(email, password) {
        if (this.emailDisponivel(email) && this.validarEmail(email)) {
            let id = this.users.length + 1;
            let novoUsuario = new User_1.default(id, email, password);
            this.users.push(novoUsuario);
            return novoUsuario;
        }
        else {
            throw new Error("Email já cadastrado.");
        }
    }
    removerUsuario(email) {
        let user = this.getUser(email);
        let pos = this.users.indexOf(user);
        this.users.splice(pos, 1);
        return "Usuário removido com sucesso.";
    }
}
exports.default = UserMemoryRepository;
