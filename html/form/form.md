# Formulários

Os formulários são um dos recursos mais importantes do HTML.

Eles permitem que o usuário envie informações para uma aplicação, tornando as páginas web interativas.

Por meio dos formulários, é possível:

- Realizar login
- Criar cadastros
- Enviar mensagens
- Fazer pesquisas
- Anexar arquivos
- Efetuar pagamentos
- Realizar buscas

---

# Introdução

Grande parte das aplicações web depende da interação do usuário.

Sempre que um usuário preenche informações e clica em um botão para enviá-las, ele está utilizando um formulário.

Os dados informados podem ser enviados para um servidor, onde serão processados e armazenados.

O principal elemento utilizado para criar formulários é:

```
<form></form>
```

Todo campo de entrada de dados deve estar, preferencialmente, dentro de um formulário.

---

# Formulários

## Tag

```
<form></form>
```

---

## Conceito

A tag `<form>` representa uma área destinada à coleta de informações do usuário.

Dentro dela são adicionados campos como:

- Texto
- Senha
- E-mail
- Data
- Arquivos
- Botões
- Seleções

---

## Estrutura Básica

```
<form>

</form>
```

---

## Exemplo

```
<form>

    <input type="text">

    <button>Enviar</button>

</form>
```

---

# Atributo action

## Conceito

O atributo `action` informa para qual endereço os dados serão enviados.

---

## Exemplo

```
<form action="/cadastro">

</form>
```

---

## Funcionamento

Ao enviar o formulário, o navegador fará uma requisição para o endereço informado.

---

## Exemplo Completo

```
<form action="/login">

    <input type="text">

    <button>Entrar</button>

</form>
```

---

# Atributo method

## Conceito

O atributo `method` define como os dados serão enviados ao servidor.

Os métodos mais utilizados são:

- GET
- POST

---

## Exemplo

```
<form
    action="/login"
    method="POST">

</form>
```

---

# Método GET

## Conceito

Envia os dados pela URL.

É indicado para:

- Pesquisas
- Filtros
- Buscas

---

## Exemplo

```
<form
    action="/buscar"
    method="GET">

    <input
        type="text"
        name="produto">

    <button>Pesquisar</button>

</form>
```

---

## Resultado

Se o usuário pesquisar por:

```
Notebook
```

A URL poderá ficar assim:

```
/buscar?produto=Notebook
```

---

# Método POST

## Conceito

Envia os dados no corpo da requisição.

É o método recomendado para informações sensíveis ou operações que alteram dados.

---

## Exemplos de Uso

- Login
- Cadastro
- Atualização de informações
- Upload de arquivos

---

## Exemplo

```
<form
    action="/cadastro"
    method="POST">

</form>
```

---

# Campos do Formulário

Os formulários são compostos por diversos elementos.

Os mais comuns são:

- `<input>`
- `<textarea>`
- `<select>`
- `<button>`
- `<label>`

Cada um possui uma finalidade específica.

---

# Atributo name

## Conceito

O atributo `name` identifica o campo durante o envio do formulário.

Sem ele, o valor do campo não será enviado ao servidor.

---

## Exemplo

```
<input
    type="text"
    name="nome">
```

---

## Funcionamento

Quando o formulário for enviado, o servidor receberá:

```
nome=João
```

---

# Atributo placeholder

## Conceito

Exibe um texto de orientação dentro do campo.

---

## Exemplo

```
<input
    type="text"
    placeholder="Digite seu nome">
```

---

## Objetivo

Auxiliar o usuário informando o tipo de dado esperado.

---

# Atributo required

## Conceito

Torna o preenchimento obrigatório.

---

## Exemplo

```
<input
    type="email"
    required>
```

---

## Funcionamento

O navegador impedirá o envio enquanto o campo estiver vazio.

---

# Atributo autocomplete

## Conceito

Permite que o navegador sugira informações já utilizadas anteriormente.

---

## Exemplo

```
<input
    type="email"
    autocomplete="email">
```

---

## Desabilitando

```
<input
    type="text"
    autocomplete="off">
```

---

# Atributo enctype

## Conceito

Define como os dados serão codificados durante o envio.

---

## Quando Utilizar

Sempre que houver envio de arquivos.

---

## Exemplo

```
<form
    action="/upload"
    method="POST"
    enctype="multipart/form-data">

</form>
```

---

# Botão de Envio

O envio do formulário normalmente é realizado por um botão.

---

## Exemplo

```
<button type="submit">
    Enviar
</button>
```

---

## Funcionamento

Ao clicar, todos os campos do formulário serão enviados ao servidor.

---

# Associação de Labels

## Tag

```
<label></label>
```

---

## Conceito

A tag `<label>` descreve o campo correspondente.

Ela melhora a acessibilidade e facilita a interação do usuário.

---

## Exemplo

```
<label for="email">
    E-mail
</label>

<input
    id="email"
    type="email">
```

---

## Benefícios

- Melhor acessibilidade
- Maior área de clique
- Código mais organizado

---

# Exemplo Completo

```
<form
    action="/cadastro"
    method="POST">

    <label for="nome">
        Nome
    </label>

    <input
        id="nome"
        name="nome"
        type="text"
        placeholder="Digite seu nome"
        required>

    <br><br>

    <label for="email">
        E-mail
    </label>

    <input
        id="email"
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        required>

    <br><br>

    <button type="submit">
        Cadastrar
    </button>

</form>
```

---

# Boas Práticas

## Utilize Labels

Todo campo deve possuir uma descrição utilizando a tag `<label>`.

---

## Defina o name

Sempre informe o atributo `name`, pois ele identifica o dado enviado ao servidor.

---

## Escolha o Método Correto

Utilize:

- GET para consultas e pesquisas.
- POST para cadastros, login e alterações de dados.

---

## Utilize required Quando Necessário

Evite que informações obrigatórias sejam enviadas em branco.

---

## Organize os Campos

Agrupe campos relacionados para melhorar a leitura e a experiência do usuário.

---

# Erros Comuns

## Esquecer o atributo name

❌

```
<input type="text">
```

✅

```
<input
    type="text"
    name="nome">
```

---

## Não utilizar label

❌

```
<input type="email">
```

✅

```
<label for="email">
    E-mail
</label>

<input
    id="email"
    type="email">
```

---

## Utilizar GET para senhas

❌

```
<form method="GET">
```

✅

```
<form method="POST">
```

---

## Não definir o método

Quando o atributo `method` não é informado, o navegador utiliza **GET** como padrão.

Sempre defina explicitamente o método adequado para o formulário.

---

# Resumo das Tags e Atributos

| Elemento/Atributo | Função                             | Possui Semântica? |
| ----------------- | ---------------------------------- | ----------------- |
| `<form>`          | Define um formulário               | Sim               |
| `action`          | Define o destino dos dados         | Sim               |
| `method`          | Define o método de envio           | Sim               |
| `GET`             | Envia dados pela URL               | Sim               |
| `POST`            | Envia dados no corpo da requisição | Sim               |
| `name`            | Identifica o campo enviado         | Sim               |
| `placeholder`     | Exibe uma dica ao usuário          | Não               |
| `required`        | Torna o campo obrigatório          | Não               |
| `autocomplete`    | Sugere preenchimento automático    | Não               |
| `enctype`         | Define a codificação dos dados     | Sim               |
| `<label>`         | Descreve um campo do formulário    | Sim               |
| `<button>`        | Cria um botão de ação              | Sim               |

---

# Regra de Ouro

Um formulário bem construído deve ser claro, acessível e fácil de preencher.

Utilize sempre `label`, escolha corretamente o método (`GET` ou `POST`), defina o atributo `name` para todos os campos e valide as informações obrigatórias com `required`.

Essas práticas tornam a aplicação mais organizada, acessível e preparada para integração com o back-end.
