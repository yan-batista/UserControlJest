# Sistema de Controle de Usuários

## Objetos

### Objeto Usuário

Contém:

- Email
- Senha
- Getters e (privado) Setters

### Objeto Repositório

Contém:

- **Users**: lista de usuários obtida de um banco (simulado)
- **Cadastrar usuário**:
  - Insere email, password;
  - Não pode ter email repetido;
  - Retorna Usuário ou Erro("Email já cadastrado.")
- **Buscar Usuário**:
  - Insere Email;
  - Retorna o usuário de acordo com email ou Error("Usuário não encontrado.")
- **Buscar todos os Usuários**:
  - Retorna users
- **Remover Usuário**:
  - Insere email
  - Só deve ser capaz de excluir usuário existente
  - Retorna "Usuário removido com sucesso." ou Erro("Usuário não encontrado.")
- **Verificar email válido**
  - regex: `` ^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$ ``
