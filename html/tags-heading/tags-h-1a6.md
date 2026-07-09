# Títulos

## Tags

```
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

## Conceito

As tags de título criam uma hierarquia de informações na página.

Elas funcionam como capítulos e subtítulos de um livro.

O nível vai de:

- `<h1>` → mais importante
- `<h6>` → menos importante

---

## Exemplo

```
<h1>Curso de HTML</h1>
<h2>Módulo 1</h2>
<h3>Introdução ao HTML</h3>
<h4>História do HTML</h4>
<h5>Primeiras versões</h5>
<h6>Curiosidades</h6>
```

---

## Hierarquia correta

```
<h1>Curso de HTML</h1>
<h2>Capítulo 1</h2>
<h3>Tópico 1.1</h3>
<h3>Tópico 1.2</h3>
<h2>Capítulo 2</h2>
```

Evite pular níveis sem necessidade:

❌ Ruim

```
<h1>Título</h1>
<h4>Subtítulo</h4>
```

✅ Melhor

```
<h1>Título</h1>
<h2>Subtítulo</h2>
```

---

## SEO

Os mecanismos de busca utilizam os títulos para entender a estrutura do conteúdo.

Boas práticas:

- Ter apenas um `<h1>` principal por página.
- Utilizar os demais níveis de forma hierárquica.
- Escrever títulos descritivos.

Exemplo:

✅

```
<h1>Receita de Bolo de Chocolate</h1>
```

❌

```
<h1>Página Inicial</h1>
```

---

## Acessibilidade

Leitores de tela utilizam a hierarquia dos títulos para permitir que usuários naveguem rapidamente pelo conteúdo.

Por isso, nunca utilize títulos apenas para aumentar o tamanho do texto.
