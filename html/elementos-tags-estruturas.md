Os elementos de estrutura organizam o conteúdo da página em regiões lógicas e semânticas.

Eles ajudam navegadores, mecanismos de busca e tecnologias assistivas a compreenderem melhor a organização do site.

---

# Introdução

Antigamente era comum construir toda a estrutura utilizando apenas:

```
<div></div>
```

Embora funcione, essa prática dificulta a interpretação do conteúdo por mecanismos de busca e leitores de tela.

Com a evolução do HTML5 surgiram elementos semânticos que descrevem claramente a função de cada área da página.

Exemplos:

```
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Essas tags melhoram:

- SEO
- Acessibilidade
- Organização do código
- Manutenção do projeto
- Legibilidade para outros desenvolvedores

---

# Divisão Genérica

## Tag

```
<div></div>
```

## Conceito

A tag `<div>` representa um contêiner genérico.

Ela não possui significado semântico.

Serve apenas para agrupar elementos.

---

## Exemplo

```
<div>
	<h2>Produtos</h2>
	<p>Lista de produtos disponíveis.</p>
</div>
```

---

## Quando usar

Quando não existir uma tag semântica mais apropriada.

Exemplos:

- Agrupamentos visuais
- Containers de layout
- Estruturas utilizadas com CSS e JavaScript

---

## Semântica

A `<div>` não informa o propósito do conteúdo.

```
<div>    Conteúdo</div>
```

O navegador sabe apenas que existe um agrupamento.

---

## Comparação

❌ Genérico

```
<div>    Menu principal</div>
```

✅ Semântico

```
<nav>    Menu principal</nav>
```

---

# Cabeçalho

## Tag

```
<header></header>
```

## Conceito

Representa o cabeçalho de uma página ou seção.

Normalmente contém:

- Logo
- Nome do site
- Menu de navegação
- Campo de busca

---

## Exemplo

```
<header>    <h1>Curso de HTML</h1>    <nav>        Menu    </nav></header>
```

---

## SEO

Ajuda os mecanismos de busca a identificar a área principal de introdução do conteúdo.

---

## Acessibilidade

Leitores de tela reconhecem automaticamente a região de cabeçalho.

---

# Navegação

## Tag

```
<nav></nav>
```

## Conceito

Representa uma área de navegação.

Seu objetivo é conter links importantes do site.

---

## Exemplo

```
<nav>
	<a href="#">Início</a>
	<a href="#">Cursos</a>
	<a href="#">Contato</a>
</nav>
```

---

## Semântica

Indica que os links fazem parte da navegação principal ou secundária.

---

## SEO

Ajuda os mecanismos de busca a identificar a estrutura de navegação do site.

---

## Acessibilidade

Leitores de tela permitem navegar diretamente para áreas marcadas com `<nav>`.

---

# Conteúdo Principal

## Tag

```
<main></main>
```

## Conceito

Representa o conteúdo principal da página.

Tudo que for único daquela página deve ficar dentro dele.

---

## Exemplo

```
<main>    <h1>Curso de HTML</h1>    <p>        Aprenda HTML do básico ao avançado.    </p></main>
```

---

## Regra importante

Deve existir apenas um `<main>` por página.

✅ Correto

```
<main>    Conteúdo principal</main>
```

❌ Errado

```
<main></main><main></main>
```

---

## SEO

Os buscadores dão grande importância ao conteúdo dentro do `<main>`.

---

## Acessibilidade

Permite que usuários pulem diretamente para o conteúdo principal.

---

# Seções

## Tag

```
<section></section>
```

## Conceito

Representa uma seção temática do conteúdo.

Cada seção geralmente possui um título.

---

## Exemplo

```
<section>    <h2>Sobre o Curso</h2>    <p>        Aprenda HTML do zero.    </p></section>
```

---

## Quando usar

Quando o conteúdo possuir um tema próprio.

Exemplos:

- Sobre nós
- Serviços
- FAQ
- Depoimentos

---

## Boa prática

Utilize títulos dentro das seções.

```
<section>    <h2>Perguntas Frequentes</h2></section>
```

---

# Artigos

## Tag

```
<article></article>
```

## Conceito

Representa um conteúdo independente e autocontido.

Deve fazer sentido mesmo se for removido da página.

---

## Exemplo

```
<article>    <h2>Como aprender HTML</h2>    <p>        Dicas para iniciantes.    </p></article>
```

---

## Exemplos comuns

- Posts de blog
- Notícias
- Comentários
- Artigos
- Publicações

---

## Teste rápido

Pergunta:

"O conteúdo faz sentido sozinho?"

Se sim, provavelmente é um `<article>`.

---

# Conteúdo Complementar

## Tag

```
<aside></aside>
```

## Conceito

Representa conteúdo relacionado ao conteúdo principal, mas não essencial.

---

## Exemplo

```
<aside>    <h3>Artigos Relacionados</h3>    <ul>        <li>CSS Básico</li>        <li>JavaScript Básico</li>    </ul></aside>
```

---

## Uso comum

- Barra lateral
- Links relacionados
- Publicidade
- Informações extras
- Biografia do autor

---

## Semântica

O conteúdo do `<aside>` é complementar.

A página continua fazendo sentido sem ele.

---

# Rodapé

## Tag

```
<footer></footer>
```

## Conceito

Representa o rodapé da página ou de uma seção.

---

## Exemplo

```
<footer>    <p>        © 2026 Curso de HTML    </p></footer>
```

---

## Conteúdo comum

- Direitos autorais
- Contatos
- Políticas de privacidade
- Redes sociais
- Informações legais

---

## Acessibilidade

Leitores de tela identificam facilmente a área de rodapé.

---

# Estrutura Completa de Exemplo

```
<body>    <header>        <h1>Meu Site</h1>        <nav>            <a href="#">Início</a>            <a href="#">Cursos</a>            <a href="#">Contato</a>        </nav>    </header>    <main>        <section>            <h2>Últimos Artigos</h2>            <article>                <h3>Aprendendo HTML</h3>                <p>                    Conteúdo do artigo...                </p>            </article>        </section>        <aside>            <h3>Conteúdo Relacionado</h3>        </aside>    </main>    <footer>        <p>            © 2026 Meu Site        </p>    </footer></body>
```

---

# Comparação: Div x Elementos Semânticos

## Apenas com div

```
<div class="header"></div><div class="menu"></div><div class="content"></div><div class="sidebar"></div><div class="footer"></div>
```

Problema:

Nem o navegador nem os mecanismos de busca sabem a função dessas áreas.

---

## Com HTML Semântico

```
<header></header><nav></nav><main></main><aside></aside><footer></footer>
```

Agora a estrutura possui significado.

---

# SEO e Estrutura Semântica

Os mecanismos de busca analisam:

- Cabeçalhos
- Navegação
- Conteúdo principal
- Artigos
- Seções

Uma estrutura semântica bem construída facilita a compreensão da página.

Isso não garante melhores posições no Google, mas ajuda os buscadores a entenderem corretamente o conteúdo.

---

# Resumo das Tags de Estrutura

| Tag         | Função                | Possui Semântica? |
| ----------- | --------------------- | ----------------- |
| `<div>`     | Agrupamento genérico  | Não               |
| `<header>`  | Cabeçalho             | Sim               |
| `<nav>`     | Navegação             | Sim               |
| `<main>`    | Conteúdo principal    | Sim               |
| `<section>` | Seção temática        | Sim               |
| `<article>` | Conteúdo independente | Sim               |
| `<aside>`   | Conteúdo complementar | Sim               |
| `<footer>`  | Rodapé                | Sim               |

---

# Regra de Ouro

Sempre que existir uma tag semântica adequada para representar uma região da página, utilize-a no lugar de uma `<div>`.

Exemplo:

✅

```
<nav>    <a href="#">Cursos</a></nav>
```

❌

```
<div class="menu">    <a href="#">Cursos</a></div>
```

Visualmente ambas podem parecer iguais, mas apenas a primeira comunica corretamente o significado da estrutura para navegadores, mecanismos de busca e tecnologias assistivas.
