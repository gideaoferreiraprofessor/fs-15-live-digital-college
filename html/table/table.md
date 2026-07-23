# Tabelas em HTML - table

## Objetivo da Aula

Nesta aula você aprenderá:

- O que são tabelas em HTML.
- Quando utilizar uma tabela.
- Quando **NÃO** utilizar uma tabela.
- Todas as principais tags relacionadas.
- Estrutura correta.
- Recursos avançados.
- Boas práticas.
- Acessibilidade.
- SEO e Semântica.
- Macetes utilizados por desenvolvedores.

---

# 1. História das Tabelas

No início da internet (anos 90), praticamente não existia CSS.

Como consequência, os desenvolvedores utilizavam tabelas para montar todo o layout dos sites.

Era comum encontrar páginas assim:

```
+--------------------------------+
|            Header              |
+---------------+----------------+
| Menu          | Conteúdo       |
|               |                |
|               |                |
+---------------+----------------+
|           Rodapé               |
+--------------------------------+
```

Tudo isso era feito usando apenas:

```
<table>
```

Hoje isso é considerado uma prática totalmente ultrapassada.

Desde o surgimento do CSS, as tabelas passaram a ter apenas uma função:

> Exibir dados tabulares.

---

# 2. O que é uma Tabela?

Uma tabela é uma estrutura utilizada para organizar informações em:

- Linhas
- Colunas

Assim como uma planilha do Excel.

Exemplo:

|Nome|Idade|Cidade|
|---|---|---|
|João|20|Recife|
|Maria|25|Fortaleza|

Toda essa estrutura pode ser criada em HTML.

---

# 3. Quando utilizar uma tabela?

Utilize tabelas sempre que os dados fizerem sentido em linhas e colunas.

Exemplos:

✅ Lista de alunos

|Nome|Nota|
|---|---|

---

✅ Produtos

|Produto|Valor|
|---|---|

---

✅ Relatórios

|Mês|Faturamento|
|---|---|

---

✅ Horários

|Hora|Evento|
|---|---|

---

✅ Planilhas

---

# 4. Quando NÃO utilizar uma tabela?

Nunca utilize tabelas para criar layouts.

Errado:

```
Cabeçalho

Menu | Conteúdo

Rodapé
```

Hoje usamos:

- Flexbox
- CSS Grid

Ao invés de:

```
<table>
```

---

# 5. Estrutura Básica

Toda tabela começa com:

```
<table>

</table>
```

Dentro dela teremos linhas.

Cada linha é criada com:

```
<tr>

</tr>
```

Dentro das linhas ficam as células.

```
<td>

</td>
```

Exemplo:

```
<table>

    <tr>
        <td>João</td>
        <td>20</td>
    </tr>

</table>
```

Resultado

| João | 20 |

---

# 6. As principais Tags

---

## `<table>`

É a tabela inteira.

```
<table>

</table>
```

---

## `<tr>` (Table Row)

Representa uma linha.

```
<tr>

</tr>
```

---

## `<td>` (Table Data)

Representa uma célula comum.

```
<td>Maria</td>
```

---

## `<th>` (Table Header)

Representa um cabeçalho.

Por padrão:

- fica em negrito
- centralizado

Exemplo

```
<th>Nome</th>
```

Resultado

| Nome |

---

## Exemplo completo

```
<table>

<tr>
    <th>Nome</th>
    <th>Idade</th>
</tr>

<tr>
    <td>João</td>
    <td>20</td>
</tr>

<tr>
    <td>Maria</td>
    <td>25</td>
</tr>

</table>
```

Resultado

|Nome|Idade|
|---|---|
|João|20|
|Maria|25|

---

# 7. Organização Semântica

O HTML possui tags para organizar melhor uma tabela.

---

## `<thead>`

Cabeçalho.

```
<thead>

</thead>
```

---

## `<tbody>`

Corpo da tabela.

```
<tbody>

</tbody>
```

---

## `<tfoot>`

Rodapé.

Muito utilizado para:

- Totais
- Médias
- Observações

---

Exemplo

```
<table>

<thead>

<tr>
    <th>Produto</th>
    <th>Valor</th>
</tr>

</thead>

<tbody>

<tr>
    <td>Notebook</td>
    <td>R$ 3500</td>
</tr>

<tr>
    <td>Mouse</td>
    <td>R$ 90</td>
</tr>

</tbody>

<tfoot>

<tr>
    <td>Total</td>
    <td>R$ 3590</td>
</tr>

</tfoot>

</table>
```

---

# 8. Título da Tabela

Utilizamos:

```
<caption>
```

Exemplo

```
<table>

<caption>
Vendas de Junho
</caption>

</table>
```

Resultado

```
Vendas de Junho

Nome    Valor
...
```

É excelente para acessibilidade.

---

# 9. Unindo Colunas

## colspan

Une colunas.

Exemplo

```
<td colspan="2">
Total
</td>
```

Antes

| Nome | Idade |

Depois

| Total |

---

# 10. Unindo Linhas

## rowspan

Une linhas.

```
<td rowspan="2">
Administração
</td>
```

Muito utilizado em cronogramas.

---

# 11. Exemplo Completo

```
<table border="1">

<caption>
Funcionários
</caption>

<thead>

<tr>
    <th>Nome</th>
    <th>Cargo</th>
    <th>Salário</th>
</tr>

</thead>

<tbody>

<tr>
    <td>João</td>
    <td>Dev</td>
    <td>5000</td>
</tr>

<tr>
    <td>Maria</td>
    <td>Designer</td>
    <td>4200</td>
</tr>

</tbody>

<tfoot>

<tr>
    <td colspan="2">Total</td>
    <td>9200</td>
</tr>

</tfoot>

</table>
```

---

# 12. Atributos Importantes

## colspan

Une colunas.

---

## rowspan

Une linhas.

---

## scope

Muito importante para acessibilidade.

Pode ser:

```
<th scope="col">
```

ou

```
<th scope="row">
```

Isso ajuda leitores de tela a identificar corretamente se um cabeçalho se refere a uma coluna ou a uma linha.

---

## headers

Relaciona células (`<td>`) a cabeçalhos específicos (`<th>` com `id`), sendo útil em tabelas complexas.

Exemplo:

```
<th id="nome">Nome</th>
<th id="idade">Idade</th>

<td headers="nome">João</td>
<td headers="idade">20</td>
```

---

# 13. Boas Práticas

✅ Utilize `<th>` para cabeçalhos.

✅ Organize a tabela com `<thead>`, `<tbody>` e `<tfoot>`.

✅ Utilize `<caption>` para descrever a tabela.

✅ Use `scope` nos cabeçalhos sempre que possível.

✅ Evite tabelas muito largas em dispositivos móveis; utilize CSS para torná-las responsivas.

✅ Prefira CSS para estilização em vez do atributo `border`.

---

# 14. SEO e Semântica

## Semântica

As tags de uma tabela informam ao navegador e às tecnologias assistivas a função de cada parte do conteúdo.

Por exemplo:

- `<thead>` identifica o conjunto de cabeçalhos.
- `<tbody>` identifica o conteúdo principal.
- `<tfoot>` identifica resumos ou totais.
- `<caption>` descreve o assunto da tabela.
- `<th>` define células de cabeçalho.

Essa organização torna o HTML mais significativo e facilita a interpretação por leitores de tela e outras ferramentas.

---

## SEO

As tabelas não melhoram diretamente o posicionamento nos mecanismos de busca, mas podem contribuir para uma melhor compreensão do conteúdo quando usadas corretamente.

Boas práticas incluem:

- Utilizar `<caption>` com um título descritivo.
- Criar cabeçalhos claros com `<th>`.
- Organizar a tabela com `<thead>`, `<tbody>` e `<tfoot>`.
- Evitar usar tabelas para layout.
- Garantir que a tabela represente dados tabulares reais.

Uma tabela bem estruturada melhora a qualidade do HTML, favorece a acessibilidade e facilita a interpretação do conteúdo pelos mecanismos de busca.

---

# 15. Macetes de Desenvolvedor

### 1. Nunca use tabela para criar layouts

Essa prática ficou no passado. Para layout, utilize Flexbox e CSS Grid.

---

### 2. Sempre pense na planilha do Excel

Se os dados poderiam ser organizados em uma planilha, provavelmente uma tabela HTML é a escolha correta.

---

### 3. Use `<caption>`

Muitos desenvolvedores ignoram essa tag, mas ela melhora a acessibilidade e fornece contexto para quem utiliza tecnologias assistivas.

---

### 4. Utilize `scope`

Em tabelas simples, `scope="col"` e `scope="row"` já resolvem a maioria dos cenários de acessibilidade.

---

### 5. Evite tabelas gigantes

Quando houver muitas colunas, considere:

- Dividir as informações em mais de uma tabela.
- Criar versões responsivas.
- Permitir rolagem horizontal com CSS.