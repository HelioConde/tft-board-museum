<div align="center">

<h1>🏛️ TFT Board Museum</h1>

<strong>Um museu visual das composições que marcaram sua jornada em Teamfight Tactics</strong>

<p>Revisite tabuleiros, acompanhe sua evolução entre Sets e compartilhe seus melhores momentos.</p>

<a href="https://helioconde.github.io/tft-board-museum/"><img alt="Abrir TFT Board Museum" src="https://img.shields.io/badge/EXPLORAR-MUSEU%20TFT-334155?style=for-the-badge"></a>

<p><a href="https://helioconde.github.io/tft-board-museum/"><strong>Ver projeto publicado</strong></a> · <a href="RELEASE_V1.md"><strong>Relatório técnico</strong></a> · <a href="#como-usar"><strong>Como usar</strong></a></p>

</div>

---

## O que é TFT Board Museum?

Um produto visual para revisitar sua história no **Teamfight Tactics**. Em vez de mostrar apenas uma tabela de resultados, a aplicação organiza o histórico do jogador em **boards, coleções, comparações e recordes**.

**Situação:** MVP técnico 1.0 publicado e descrito como **beta controlado**. Testes com usuários e validação externa continuam importantes antes de tratar o produto como lançamento público estável.

## Experiências principais

| Área | O que você encontra |
| --- | --- |
| **Histórico** | Busca por Riot ID, rank, partidas recentes e filtros |
| **Boards** | Unidades, estrelas, traits, itens e augments |
| **Comparação** | Dois tabuleiros lado a lado |
| **Coleções** | Favoritos, anotações e agrupamentos |
| **Memórias** | Hall da Fama, marcos e visão por Sets |
| **Compartilhar** | Exportação de imagem e links de perfil/board |
| **Dados** | Consulta ao backend Riot e sincronização opcional para recursos autenticados |

### Sobre a precisão dos tabuleiros

A API de partidas da Riot **não informa o posicionamento final exato das unidades em todos os casos**. Quando a posição não é conhecida, a aplicação usa uma organização visual e deve informar essa limitação ao jogador.

**Não confunda reconstrução visual com replay literal.**

## Como usar

1. Acesse [TFT Board Museum](https://helioconde.github.io/tft-board-museum/).
2. Pesquise usando seu **Riot ID** e a região.
3. Abra uma partida e explore o tabuleiro, os itens e traits disponíveis.
4. Salve favoritos, compare partidas ou compartilhe a composição.

Os dados disponíveis podem variar conforme a API, a região, o histórico recente e a persistência configurada. Conteúdo de demonstração deve continuar claramente identificado.

## Desenvolvimento e validação

O projeto é um frontend web publicado via GitHub Pages, com integração Riot por backend — **a chave privada Riot não pertence ao JavaScript público**.

Os scripts documentados incluem:

```bash
npm install
npm run e2e
npm run screenshots
```

Os scripts executam verificações e capturas previstas no repositório; dependem das ferramentas e da configuração do ambiente. O relatório técnico histórico e as execuções em CI podem ser consultados antes de afirmar que uma versão está homologada.

## Próximos passos

O objetivo pós-MVP é **validar a utilidade real para jogadores**, corrigir problemas críticos, aprimorar cobertura de dados e reforçar privacidade e estabilidade. As limitações da Riot API continuam sendo parte do produto.

[Relatório técnico](RELEASE_V1.md) · [Histórico anterior do README](docs/README_HISTORY_2026-10-25.md)

> Projeto independente, não oficial e não afiliado à Riot Games. Teamfight Tactics é propriedade de seus respectivos titulares.

---

<div align="center"><strong>Desenvolvido por <a href="https://github.com/HelioConde">Hélio Conde</a></strong></div>
