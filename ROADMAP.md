# Roadmap de implementação

## Concluído
- [x] Riot ID + região.
- [x] Perfil TFT com rank, colocação média, Top 4, win rate e partidas.
- [x] Histórico oficial por backend.
- [x] Paginação até 100 partidas.
- [x] Champions com imagem, estrelas e custo/raridade.
- [x] Itens no board e no detalhe.
- [x] Traits com ícones.
- [x] Augments.
- [x] Data, horário, duração, fila, dano e eliminações.
- [x] Filtros por Set, patch, resultado, favoritos e busca livre.
- [x] Ordenação.
- [x] Timeline Set -> patch -> partidas.
- [x] Favoritos locais.
- [x] Notas pessoais locais.
- [x] Comparação detalhada de units, traits, itens, augments, estrelas e economia.
- [x] URL compartilhável de perfil.
- [x] Deep link de board.
- [x] Compartilhamento/cópia de link.
- [x] Open Graph dinâmico de perfil/board via Edge Function.
- [x] Página pública server-rendered para preview social.
- [x] Insights pessoais.
- [x] Estatísticas por Set.
- [x] Hall da Fama com highlights sustentados pelos dados disponíveis.
- [x] Card PNG exportável.
- [x] Login e sincronização autenticada de favoritos/notas.
- [x] Coleções personalizadas persistidas no backend.
- [x] RLS para dados pessoais e compartilhamentos.
- [x] PT-BR/EN.
- [x] Mobile responsivo.
- [x] SEO básico, sitemap, robots, canonical e metadata social.
- [x] Manifest e favicon.
- [x] Páginas Sobre, Privacidade, Termos e Contato.
- [x] Espaços de anúncio preparados.
- [x] Preferência de consentimento preparada com anúncios desativados por padrão.
- [x] QA automático e verificação contra chave Riot no frontend.
- [x] Screenshots automáticos desktop/mobile no GitHub.
- [x] Atualização automática de versão.
- [x] GitHub Pages.

## Dependências externas / bloqueios honestos
- [ ] Posicionamento histórico real das units: depende de telemetria confiável; a Riot Match API não fornece os hexes finais exatos.
- [ ] Highlight de "maior comeback" real: depende de evolução rodada a rodada suficiente para provar o comeback; o Museum não infere isso sem dado.
- [ ] Ativar rede de anúncios: só quando houver provedor aprovado/configurado; o código mantém ads desativados até lá.
- [ ] Preview social com PNG raster dinâmico no servidor: hoje o preview dinâmico usa imagem SVG; pode ser migrado para PNG/Storage quando houver necessidade de compatibilidade adicional.
- [ ] Login por magic link depende de a URL do GitHub Pages estar autorizada na configuração de redirects do Supabase Auth.

## Próximas melhorias incrementais
- [x] Renomear/excluir coleções pela interface.
- [x] Tornar coleções públicas opcionalmente.
- [x] Estatísticas mensais e anuais além de Set.
- [x] Histórico maior que 100 partidas via arquivo privado acumulado em consultas autenticadas.
- [x] Exportação PNG tenta incluir portraits e itens reais, com fallback seguro quando CORS impedir o asset.
- [x] Página pública navegável para coleções compartilhadas.
- [x] Automação periódica de snapshots opt-in sem exigir que o usuário abra o perfil.


## Qualidade final concluída
- [x] Tradução PT-BR dinâmica de traits/composições usando Data Dragon localizado.
- [x] E2E Playwright de filtros, modal, comparação, idioma e overflow mobile.
- [x] Diagnóstico automático de overflow nos snapshots.
- [x] Skip link, foco visível e respeito a prefers-reduced-motion.
- [x] JSON-LD e card social estático para a home.
