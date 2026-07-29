# 62 - Plano Metodológico para Backend de Contato Futuro
**Data:** 28/07/2026  
**Status:** [Estudo Técnico de Integração]

---

## 1. Comparativo de Soluções de Disparo de E-mails e CRM

| Solução | Vantagens | Custos Estimados | Segurança & Antispam | Recomendação |
| :--- | :--- | :--- | :--- | :--- |
| **Resend (API Next.js)** | Integração nativa com React Email; alta entregabilidade; SDK moderno. | Gratuito até 3.000 envios/mês | Suporte a DKIM/SPF dedicado | **Altamente Recomendado** |
| **SendGrid** | Robusto para grandes volumes; relatórios avançados. | Gratuito até 100 e-mails/dia | Exige configuração de domínio | Opção Secundária |
| **Banco de Dados (Supabase / PostgreSQL)** | Armazena histórico completo de cadastros sem depender de e-mail. | Gratuito na camada inicial | Criptografia em repouso (RLS) | Excelente para CRM |
| **Gmail Institucional (SMTP)** | Baixa complexidade inicial. | Incluído no Google Workspace | Sujeito a bloqueios por volume | Não Recomendado para produção |

---

## 2. Requisitos Obrigatórios de Privacidade e Segurança (LGPD)
- **Consentimento Explícito:** Caixa de seleção obrigatória confirmando aceite da Política de Privacidade.
- **Proteção Antispam:** Implementação de campo *honeypot* invisível ou Cloudflare Turnstile (sem captchas incômodos para idosos).
- **Sem Dados Sensíveis:** Proibição estrita de coleta de dados de saúde ou financeiros nos formulários de contato.
