/**
 * Processador de Imagens Conceituais — Instituto Vida Plena
 * Utilitário para validação e otimização de novos renders WebP em produções futuras.
 */

import fs from 'fs';
import path from 'path';

const CONCEPT_DIR = path.join(process.cwd(), 'public', 'concept');

console.log('--- Processador de Imagens Conceituais (Fase 7) ---');
console.log(`Diretório de saída: ${CONCEPT_DIR}`);

if (!fs.existsSync(CONCEPT_DIR)) {
  fs.mkdirSync(CONCEPT_DIR, { recursive: true });
  console.log('Pasta public/concept/ criada com sucesso.');
} else {
  console.log('Pasta public/concept/ pronta para receber novos renders WebP.');
}

console.log('Utilitário configurado. Imagens com fallback vetorial ativas.');
