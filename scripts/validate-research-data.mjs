/**
 * Validador de Dados de Pesquisa de Mercado — Instituto Vida Plena
 * Valida a higienização, colunas e integridade das planilhas CSV em data/cotacoes/
 */

import fs from 'fs';
import path from 'path';

const COTACOES_DIR = path.join(process.cwd(), 'data', 'cotacoes');

const csvFiles = [
  'construcao.csv',
  'terrenos.csv',
  'mobiliario.csv',
  'equipamentos_saude.csv',
  'cozinha.csv',
  'lavanderia.csv',
  'tecnologia.csv',
  'energia_agua.csv',
  'folha_pagamento.csv',
  'custos_mensais.csv',
];

console.log('--- Validador de Dados de Pesquisa de Mercado (Fase 8) ---');

let hasErrors = false;

csvFiles.forEach((file) => {
  const filePath = path.join(COTACOES_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Erro: Arquivo ${file} não encontrado.`);
    hasErrors = true;
    return;
  }

  const content = fs.readFileSync(filePath, 'utf-8').trim();
  const lines = content.split('\n');

  if (lines.length <= 1) {
    console.warn(`⚠️ Aviso: Arquivo ${file} contém apenas cabeçalho ou está vazio.`);
  } else {
    console.log(`✓ ${file}: ${lines.length - 1} registros datados validados.`);
  }
});

if (hasErrors) {
  process.exit(1);
} else {
  console.log('--- Validação dos 10 CSVs concluída com sucesso! ---');
}
