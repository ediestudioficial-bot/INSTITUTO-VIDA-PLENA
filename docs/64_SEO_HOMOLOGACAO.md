# 64 - Diretrizes de SEO para o Período de Homologação
**Data:** 28/07/2026  
**Status:** [Diretrizes de SEO]

---

## 1. Configuração de Indexação de Segurança
Para garantir a proteção jurídica e evitar a indexação prévia de informações ainda em estudo:

- **Rotas de Acesso Público:** Indexadas normalmente (`/`, `/o-projeto`, `/como-sera`, `/etapas`, `/transparencia`, `/parceiros`, `/en`), permitindo a apresentação institucional.
- **Rotas Restritas de Planejamento:** Protegidas com metadados `noindex, nofollow` (`/planejamento/cotacoes`, `/homologacao`).
- **Vedação de Schema.org com Dados Falsos:** Proibida a inclusão de marcações de microdados que declarem endereço físico fictício, telefone inexistente ou fundação jurídica concluída.

---

## 2. Metadados e Sitemap
- Sitemap XML atualizado dinamicamente em [`/sitemap.xml`](file:///d:/Meus%20Arquivos/Documentos/MEUS%20PROJETOS/INSTITUTO%20VIDA%20PLENA/src/app/sitemap.ts).
- Arquivo [`/robots.txt`](file:///d:/Meus%20Arquivos/Documentos/MEUS%20PROJETOS/INSTITUTO%20VIDA%20PLENA/src/app/robots.ts) bloqueando bots em caminhos internos de rascunhos.
