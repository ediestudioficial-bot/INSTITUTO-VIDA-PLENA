/**
 * Validador de integridade das bases de pesquisa.
 * Não certifica preços: impede que registros incompletos sejam apresentados como cotação validada.
 */
import fs from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "data", "cotacoes");
const files = fs.readdirSync(dir).filter((name) => name.endsWith(".csv")).sort();
const errors = [];
const warnings = [];

function parseLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { cells.push(current.trim()); current = ""; }
    else current += char;
  }
  cells.push(current.trim());
  return cells;
}

for (const file of files) {
  const lines = fs.readFileSync(path.join(dir, file), "utf8").replace(/^\uFEFF/, "").trim().split(/\r?\n/);
  const headers = parseLine(lines[0]);
  const urlIndex = headers.findIndex((h) => h === "url_fonte");
  const dateIndex = headers.findIndex((h) => h === "data_consulta");
  const trustIndex = headers.findIndex((h) => h === "grau_confiabilidade");
  const valueIndexes = headers.map((h, i) => /valor_|preco_|custo_/.test(h) ? i : -1).filter((i) => i >= 0);

  lines.slice(1).forEach((line, rowOffset) => {
    const row = parseLine(line);
    const rowNumber = rowOffset + 2;
    if (row.length !== headers.length) errors.push(`${file}:${rowNumber} possui ${row.length} colunas; esperado ${headers.length}.`);
    const hasValue = valueIndexes.some((i) => row[i] && Number(row[i]) > 0);
    if (hasValue) {
      if (urlIndex < 0 || !/^https:\/\//.test(row[urlIndex] || "")) errors.push(`${file}:${rowNumber} tem valor sem URL HTTPS específica.`);
      if (dateIndex < 0 || !/^\d{4}-\d{2}-\d{2}$/.test(row[dateIndex] || "")) errors.push(`${file}:${rowNumber} tem valor sem data de consulta válida.`);
      if (trustIndex >= 0 && /pendente|pesquisar|sem evidencia|nao verificado/i.test(row[trustIndex] || "")) errors.push(`${file}:${rowNumber} tem valor apesar de estar marcado como pendente.`);
    } else warnings.push(`${file}:${rowNumber} permanece pendente de pesquisa verificável.`);
  });
  console.log(`✓ ${file}: estrutura verificada (${Math.max(lines.length - 1, 0)} registros).`);
}

if (warnings.length) console.warn(`\nAvisos (${warnings.length}):\n- ${warnings.join("\n- ")}`);
if (errors.length) { console.error(`\nErros (${errors.length}):\n- ${errors.join("\n- ")}`); process.exit(1); }
console.log("\nIntegridade estrutural aprovada. Valores só serão aceitos com fonte específica e data.");
