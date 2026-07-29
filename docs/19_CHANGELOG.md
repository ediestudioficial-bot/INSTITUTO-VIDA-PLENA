# 19 - Histórico de Alterações (Changelog)
**Projeto:** INSTITUTO VIDA PLENA

---

## [8.0.0] - 28/07/2026 — FASE 8: VALIDAÇÃO EXTERNA, PESQUISA DE MERCADO E DOSSIÊ DE DECISÃO

### Adicionado
- **Documentação da Fase 8 (`/docs` 71 a 82):**
  - `docs/71_FONTES_OFICIAIS_E_REFERENCIAS.md`: Mapeamento datado de órgãos federais, estaduais e municipais.
  - `docs/72_MAPA_PRELIMINAR_TERRENOS.md`: Estudo de amostras públicas de terrenos em Macapá/AP.
  - `docs/73_REGIOES_PARA_PROSPECCAO.md`: Análise de viabilidade por regiões de Macapá.
  - `docs/74_MAPA_FORNECEDORES_REGIONAIS.md`: Mapeamento de fornecedores por categoria.
  - `docs/75_REDE_PROFISSIONAL_NECESSARIA.md`: Mapeamento de especialistas por fase.
  - `docs/76_DOSSIE_NOME_E_MARCA.md`: Estratégia de proteção no INPI.
  - `docs/77_ESTUDO_DE_DOMINIOS.md`: Estudo de sufixos de internet (.org.br).
  - `docs/78_CRITERIOS_GRUPO_FUNDADOR.md`: Perfil e competências desejáveis dos fundadores.
  - `docs/79_MATRIZ_CONFLITOS_INTERESSE.md`: Regras de integridade e impedimentos.
  - `docs/80_MATRIZ_DECISAO_FASE_8.md`: Mapeamento de decisões estratégicas.
  - `docs/81_RELATORIO_VALIDACAO_EXTERNA.md`: Síntese dos achados de mercado.
  - `docs/82_POLITICA_DADOS_PESQUISA.md`: Diretriz de privacidade e proteção a dados (LGPD).
- **Páginas & Scripts:**
  - `src/app/planejamento/terrenos/page.tsx`: Painel interno de amostras de terrenos (`noindex`).
  - `src/app/planejamento/marca/page.tsx`: Painel interno de pesquisa de marca (`noindex`).
  - `scripts/validate-research-data.mjs`: Validador de integridade dos 10 CSVs.

### Alterado
- Correção definitiva do status dos renders em `src/data/concept-images.ts`, `docs/67`, `PROJECT_STATUS.md` e painéis internos (0/16 gerados | 16/16 fallbacks ativos).
- Atualização completa dos 10 arquivos CSV em `data/cotacoes/` com fontes e datas de consulta.
