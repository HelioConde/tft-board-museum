# TFT Board Museum — encerramento técnico do MVP 1.0

**Revisão:** 09/10/2026  
**Estado:** desenvolvimento principal concluído; pronto para **beta controlado**.  
**Importante:** encerramento técnico não substitui homologação com contas/dispositivos reais, nem aprovação do AdSense ou da Riot.

## Produto entregue

- [x] Busca por Riot ID/servidor e histórico TFT via backend gamer sem chave da Riot no frontend.
- [x] Visualização histórica de boards com champions, estrelas, itens, augments e traits.
- [x] Paginação, filtros, ordenação e evolução por Set, patch e período.
- [x] Comparação de duas composições, Hall da Fama e insights pessoais.
- [x] Favoritos, notas, coleções, arquivo de partidas e histórico entre sessões autenticadas.
- [x] Compartilhamento público com preview server-side e exportação PNG.
- [x] PT-BR principal, inglês secundário e interface desktop/mobile.
- [x] Imagens próprias, páginas legais, SEO básico e espaços de anúncios desativados até configuração válida.
- [x] A ausência da posição real final dos hexes na Match API está claramente declarada; o site não representa o arranjo ilustrativo como telemetria verdadeira.

## Segurança e estabilidade

- [x] Supabase gamer `bieihhaobdztjyoweewa` está `ACTIVE_HEALTHY`.
- [x] Functions de TFT e compartilhamento `tft-museum-share` verificadas como `ACTIVE`.
- [x] Cinco tabelas `tft_museum_*` com Row Level Security.
- [x] Tabelas privadas de estado, coleções, arquivo e perfis monitorados sem `SELECT` anônimo.
- [x] Compartilhamentos públicos com leitura limitada pela política `is_public = true`; demais linhas são acessíveis ao proprietário.
- [x] Corrigido `sw.js`: cache apenas de arquivos do Museum, sem reescrever o `index.html` com outras páginas, sem guardar URLs com parâmetros de perfil e sem interceptar projetos de outras pastas.
- [x] Preservados caches de outros produtos hospedados na mesma origem.
- [x] Criados testes de regressão no navegador para isolamento de cache, parâmetros privados, upgrade do service worker e acesso ao shell offline.
- [x] CI instala a versão exata de Chromium exigida pelo Playwright, mesmo com cache de navegador pré-existente.

## Testes e evidências

- [x] **QA estático:** [aprovado](https://github.com/HelioConde/tft-board-museum/actions/runs/37928437671).
- [x] **Playwright E2E:** smoke de desktop/mobile, comparador, filtros, tradução e testes de PWA [aprovado](https://github.com/HelioConde/tft-board-museum/actions/runs/37928437890).
- [x] **Capturas e gate visual:** desktop/mobile, home e `AlchemyFlames#br1`, sem falhas de qualidade; [workflow aprovado](https://github.com/HelioConde/tft-board-museum/actions/runs/37928437890).
- [x] `screenshots/visual-quality.json`: `passed: true`, lista de falhas vazia, gerado em 09/10/2026.
- [x] Visual: sem overflow indevido, controles pequenos, erros de console, requisições falhas ou imagens quebradas nas quatro capturas.
- [x] Perfil `AlchemyFlames#br1` apareceu nas capturas desktop/mobile, com cards e imagens; teste em um dispositivo real permanece pendente.

## Homologação humana e dependências externas

- [ ] Testar mais 2–3 Riot IDs reais em diferentes regiões, filas e históricos longos.
- [ ] Confirmar magic link e redirect autorizado do Supabase Auth no domínio GitHub Pages.
- [ ] Conferir favoritos, notas, coleções e arquivo em duas sessões/dispositivos reais.
- [ ] Verificar compartilhamento social do board em apps e dispositivos reais.
- [ ] Validar entendimento dos usuários sobre a organização ilustrativa dos hexes.
- [ ] Ativar anúncios apenas após Publisher ID, slots, aprovação e consentimento adequado.
- [ ] Confirmar no GitHub Pages a publicação mais recente de todos os commits de encerramento.

## Regras de manutenção

**Congelar novas funcionalidades por enquanto.** Reabrir apenas para regressões, segurança/compliance, mudanças na Riot ou necessidades validadas por usuários. Continuar acompanhando a [issue #1](https://github.com/HelioConde/tft-board-museum/issues/1) até a homologação humana.

Site: https://helioconde.github.io/tft-board-museum/  
Repositório: https://github.com/HelioConde/tft-board-museum
