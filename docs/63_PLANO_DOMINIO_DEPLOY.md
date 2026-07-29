# 63 - Plano de Domínio e Estratégia de Deploy de Homologação
**Data:** 28/07/2026  
**Status:** [Plano de Implantação e Homologação]

---

## 1. Mapeamento de Domínios Oficiais Futuros (.br)
- `institutovidaplena.org.br` *(Opção Principal Recomendada para Terceiro Setor)*
- `vidaplena.org.br` *(Variante Secundária)*
- `institutovidaplena.com.br` *(Proteção de Marca Comercial)*

> **Aviso de Salvaguarda:** Nenhum domínio foi registrado ou adquirido nesta etapa. O registro será realizado após a homologação da Assembleia de Fundadores.

---

## 2. Estratégia de Deploy em Homologação na Vercel
1. **Ambiente de Homologação Privada (Preview / Staging):**  
   O deploy será realizado no ambiente Vercel vinculado ao repositório Git, gerando uma URL de homologação restrita (ex: `instituto-vida-plena-homologacao.vercel.app`).
2. **Flags de Segurança Ativas:**  
   - Modo de homologação ativo em `src/data/site-config.ts`.
   - Captação financeira desativada.
   - Metadados `noindex` nas rotas internas de planejamento.
3. **Versão de Homologação Institucional — Conteúdo em Revisão:**  
   Exibição do banner discreto de homologação privada para evitar divulgação pública prematura.
