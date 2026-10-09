# TFT Board Museum

Museu visual da sua história no Teamfight Tactics.

> **TFT Board Museum 1.0:** desenvolvimento principal concluído e publicado. Auditoria de 09/10/2026 aprovou E2E, capturas desktop/mobile e segurança do cache PWA. O produto está pronto para **beta controlado**, com homologação humana ainda pendente. Consulte o [relatório de encerramento técnico](RELEASE_V1.md).

## Produção

GitHub Pages: https://helioconde.github.io/tft-board-museum/

## Funcionalidades

- busca por Riot ID e região;
- perfil TFT com rank e resumo;
- histórico oficial via backend, sem expor RIOT_API_KEY;
- paginação de até 100 partidas recentes;
- boards visuais com champions, estrelas, custo/raridade e itens;
- nomes de traits/composições localizados em PT-BR pelo Data Dragon, com inglês separado;
- traits com ícones e augments;
- filtros por Set, patch, resultado, favoritos e busca textual;
- ordenação por data, colocação e ouro;
- linha do tempo por Set;
- favoritos e notas locais com sincronização autenticada opcional;
- coleções persistidas no Supabase;
- arquivo privado de partidas para acumular histórico além do recorte da Riot;
- comparação lado a lado de units, traits, itens, augments e estrelas;
- URLs compartilháveis de perfil e board com preview server-rendered;
- exportação PNG de board;
- Hall da Fama, estatísticas por Set, mês e ano;
- evolução recente comparando blocos de partidas;
- recomendação de boards historicamente parecidos por units e traits;
- renderização progressiva para arquivos grandes, evitando centenas de cards simultâneos;
- insights de champion assinatura, item recorrente, 3★ e Sets;
- PT-BR principal e English;
- layout responsivo;
- espaços reservados para anúncios;
- atualização automática de versão;
- SEO básico, sitemap, robots, manifest, favicon e páginas legais;
- QA no GitHub Actions;
- E2E Playwright e screenshots automáticos desktop/mobile;
- atualização automática opcional do histórico a cada 6 horas para perfis autenticados.

## Regra de posicionamento

A Riot Match API não fornece o posicionamento final exato das units. Quando não há dado confiável de posição, o site usa uma organização visual e informa isso explicitamente.

## Dados demonstrativos

O site mantém uma coleção demonstrativa como fallback quando nenhum Riot ID foi consultado ou quando a integração oficial está indisponível.

## Desenvolvimento local

```bash
python -m http.server 4173
```

Acesse http://localhost:4173.

## Compliance

TFT Board Museum não é endossado pela Riot Games e não reflete as opiniões da Riot Games ou de qualquer pessoa oficialmente envolvida na produção ou gestão das propriedades da Riot Games.


## Política pós-MVP

O núcleo do produto está fechado. A partir de 07/10/2026, novas features ficam congeladas até existir feedback real, bug P0/P1, requisito de segurança/compliance ou mudança relevante da Riot.

Permanecem como validação externa/humana:
- testar perfis TFT reais adicionais e históricos maiores;
- validar magic link no domínio publicado com redirects corretos do Supabase Auth;
- confirmar sincronização autenticada de favoritos, notas e coleções em uso real;
- revisar snapshots automáticos desktop/mobile apenas para regressões objetivas;
- ativar AdSense somente após aprovação/configuração real.

A ausência de posicionamento final exato das units é uma limitação oficial da fonte de dados: não deve bloquear o MVP nem ser "corrigida" com inferência não confiável.
