Os links são um dos recursos mais importantes da web.

Foi justamente a capacidade de conectar documentos através de hiperlinks que transformou a internet em uma rede de páginas interligadas.

No HTML, os links permitem:

- Navegar entre páginas do mesmo site
- Acessar sites externos
- Fazer downloads
- Abrir e-mails
- Navegar para seções específicas da página
- Melhorar a experiência do usuário

---

# Introdução

A navegação na web é baseada em hiperlinks.

Quando um usuário clica em um link, o navegador é instruído a carregar outro recurso.

Esse recurso pode ser:

- Uma página HTML
- Uma imagem
- Um arquivo PDF
- Um vídeo
- Um endereço de e-mail
- Uma seção da própria página

A principal tag utilizada para criar links é:

```
<a></a>
```

O nome da tag vem de **Anchor** (âncora).

---

# Links

## Tag

```
<a></a>
```

---

## Conceito

A tag `<a>` cria um hiperlink.

O destino do link é definido através do atributo `href`.

**href** significa:

> Hypertext Reference

ou

> Referência para um hipertexto.

---

## Estrutura Básica

```
<a href="https://www.google.com">    Acessar Google</a>
```

Resultado:

Acessar Google

---

## Como Funciona

O texto entre a abertura e o fechamento da tag será clicável.

```
<a href="https://www.exemplo.com">    Clique aqui</a>
```

---

## Exemplo Real

```
<p>    Visite o site da W3C:    <a href="https://www.w3.org">        Site Oficial    </a></p>
```

---

# Atributo href

## Conceito

O atributo `href` define para onde o link aponta.

Sem ele, o link não possui destino.

---

## Exemplo

```
<a href="pagina.html">    Abrir página</a>
```

---

## Sem href

```
<a>    Link sem destino</a>
```

Embora o navegador exiba o texto, ele não funcionará como um link de navegação.

---

# URLs Absolutas

## Conceito

Uma URL absoluta contém o endereço completo do recurso.

Inclui:

- protocolo
- domínio
- caminho

---

## Exemplo

```
<a href="https://www.mozilla.org">    Mozilla</a>
```

---

## Estrutura

```
https://www.site.com/pagina.html
```

Partes:

```
https://
```

Protocolo

```
www.site.com
```

Domínio

```
/ pagina.html
```

Recurso

---

## Quando Usar

Sempre que o destino estiver em outro site.

Exemplo:

```
<a href="https://www.youtube.com">    YouTube</a>
```

---

# URLs Relativas

## Conceito

Uma URL relativa aponta para arquivos dentro do próprio projeto.

Não precisa informar domínio.

---

## Estrutura

Imagine:

```
projeto/│├── index.html├── contato.html└── produtos.html
```

---

## Exemplo

```
<a href="contato.html">    Contato</a>
```

---

## Funcionamento

Se o usuário estiver em:

```
index.html
```

Ao clicar:

```
<a href="contato.html">
```

O navegador abrirá:

```
contato.html
```

---

## Vantagens

Se o domínio mudar:

```
meusite.com
```

para

```
novosite.com
```

Os links continuam funcionando.

---

# Navegação Entre Pastas

## Estrutura

```
projeto/│├── index.html│├── paginas/│   ├── sobre.html│   └── contato.html
```

---

## Acessar Arquivo Dentro da Pasta

```
<a href="paginas/sobre.html">    Sobre</a>
```

---

## Voltar Uma Pasta

```
<a href="../index.html">    Página Inicial</a>
```

O símbolo:

```
..
```

significa:

> Voltar um diretório.

---

# Navegação Entre Páginas

Uma das utilizações mais comuns dos links é criar menus de navegação.

---

## Exemplo

```
<nav>    <a href="index.html">Início</a>    <a href="sobre.html">Sobre</a>    <a href="contato.html">Contato</a></nav>
```

---

## Semântica

A navegação geralmente é colocada dentro da tag:

```
<nav></nav>
```

que representa uma área de links de navegação.

---

## Benefícios

- Melhor organização
- Melhor SEO
- Melhor acessibilidade
- Código mais semântico

---

# Abrindo Links em Nova Aba

## Atributo

```
target
```

---

## Conceito

Define onde o recurso será aberto.

---

## Valor Mais Utilizado

```
target="_blank"
```

---

## Exemplo

```
<a    href="https://www.google.com"    target="_blank">    Abrir Google</a>
```

---

## Resultado

Ao clicar:

- A página atual permanece aberta
- Uma nova aba é criada

---

## Quando Usar

Links externos.

Exemplo:

```
<a    href="https://www.youtube.com"    target="_blank">    YouTube</a>
```

---

# Segurança com target="\_blank"

Ao abrir uma nova aba, recomenda-se utilizar:

```
rel="noopener noreferrer"
```

---

## Exemplo

```
<a    href="https://www.exemplo.com"    target="_blank"    rel="noopener noreferrer">    Abrir Site</a>
```

---

## Benefícios

- Mais segurança
- Melhor privacidade
- Evita que a página aberta controle a página original

---

# Download de Arquivos

## Atributo

```
download
```

---

## Conceito

Indica ao navegador que o recurso deve ser baixado em vez de aberto.

---

## Exemplo

```
<a href="arquivo.pdf" download>    Baixar PDF</a>
```

---

## Funcionamento

Ao clicar:

```
<a href="manual.pdf" download>
```

O navegador tentará baixar o arquivo.

---

## Definindo Nome do Arquivo

```
<a    href="manual.pdf"    download="manual-html.pdf">    Baixar Manual</a>
```

---

## Resultado

O arquivo será salvo como:

```
manual-html.pdf
```

---

# Links para E-mail

## Exemplo

```
<a href="mailto:contato@site.com">    Enviar E-mail</a>
``` 

---

## Funcionamento

Ao clicar:

- O cliente de e-mail é aberto
- O endereço é preenchido automaticamente

---

# Links para Telefone

## Exemplo

```
<a href="tel:+5585999999999">    Ligar Agora</a>
```

---

## Uso Comum

Muito utilizado em:

- Sites empresariais
- Landing pages
- Aplicações mobile

---

# Boas Práticas para Links

## Escreva Textos Descritivos

### Evite

```
<a href="curso.html">    Clique aqui</a>
```

---

### Melhor

```
<a href="curso-html.html">    Curso Completo de HTML</a>
```

---

## Motivos

Melhora:

- SEO
- Acessibilidade
- Experiência do usuário

---

# Acessibilidade

Leitores de tela anunciam os links encontrados na página.

Links genéricos dificultam a navegação.

---

## Ruim

```
<a href="produto.html">    Saiba mais</a>
```

---

## Melhor

```
<a href="produto.html">    Saiba mais sobre o Notebook Gamer</a>
```

---

# SEO

Os mecanismos de busca analisam:

- Texto do link
- Contexto do link
- Destino do link

---

## Exemplo

```
<a href="curso-html.html">    Curso Completo de HTML</a>
```

Ajuda os buscadores a entenderem o conteúdo da página de destino.

---

# Erros Comuns

## Usar "#" Sem Necessidade

```
<a href="#">    Clique</a>
```

Isso cria um link sem destino real.

---

## Usar JavaScript Onde Um Link Resolveria

❌

```
<button onclick="window.location='contato.html'">    Contato</button>
```

✅

```
<a href="contato.html">    Contato</a>
```

---

## Esquecer href

❌

```
<a>    Link</a>
```

✅

```
<a href="pagina.html">    Link</a>
```

---

# Resumo das Tags e Atributos

| Elemento     | Função                   | Possui Semântica? |
| ------------ | ------------------------ | ----------------- |
| `<a>`        | Criar links              | Sim               |
| `href`       | Define o destino         | Sim               |
| `target`     | Define onde abrir o link | Não               |
| `_blank`     | Nova aba                 | Não               |
| `download`   | Baixar arquivo           | Não               |
| URL Absoluta | Endereço completo        | Sim               |
| URL Relativa | Arquivo local            | Sim               |
| `mailto:`    | Abrir e-mail             | Sim               |
| `tel:`       | Fazer ligação            | Sim               |
| `<nav>`      | Área de navegação        | Sim               |

---

# Regra de Ouro

Os links devem descrever claramente para onde levam o usuário.

Prefira sempre textos objetivos e semânticos.

Exemplo:

✅

```
<a href="curso-html.html">    Curso Completo de HTML</a>
```

❌

```
<a href="curso-html.html">    Clique Aqui</a>
```

O usuário, os mecanismos de busca e as tecnologias assistivas entendem muito melhor o propósito do link quando ele descreve claramente seu destino.
