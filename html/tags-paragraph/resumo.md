# Resumo das Tags de Texto

| Tag             | Função                | Possui Semântica? |
| --------------- | --------------------- | ----------------- |
| `<h1>` a `<h6>` | Títulos               | Sim               |
| `<p>`           | Parágrafo             | Sim               |
| `<br>`          | Quebra de linha       | Sim               |
| `<hr>`          | Separação temática    | Sim               |
| `<strong>`      | Forte importância     | Sim               |
| `<em>`          | Ênfase                | Sim               |
| `<b>`           | Negrito visual        | Não               |
| `<i>`           | Itálico visual        | Não               |
| `<mark>`        | Texto destacado       | Sim               |
| `<small>`       | Informação secundária | Sim               |

## Regra de Ouro

Sempre que existir uma tag semântica para representar o significado do conteúdo,
prefira ela em vez de uma tag puramente visual.

Exemplo:

✅

```
<strong>Aviso importante</strong>
```

❌

```
<b>Aviso importante</b>
```

O navegador exibirá algo parecido visualmente, mas apenas a primeira opção comunica o verdadeiro significado do conteúdo para SEO, acessibilidade e manutenção do código.
