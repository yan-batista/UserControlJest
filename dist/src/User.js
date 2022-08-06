"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, email, password) {
        this.id = 0;
        this.email = "";
        this.password = "";
        this.setId(id);
        this.setEmail(email);
        this.setPassword(password);
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
    setPassword(password) {
        this.password = password;
    }
    getPassword() {
        return this.password;
    }
}
exports.default = User;
