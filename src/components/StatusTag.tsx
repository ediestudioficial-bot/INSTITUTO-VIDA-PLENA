type StatusType = "validado"|"estudo"|"pendente"|"futura"|"conceito"|"hipotese"|"risco";
export function StatusTag({ status, label }: { status: StatusType|string; label?: string }) {
  const normalized=status.toLowerCase();
  let style="border-brand-deep/20 text-brand-deep";
  if(normalized.includes("validado")) style="border-emerald-700/30 text-emerald-800";
  else if(normalized.includes("pendente")||normalized.includes("futura")) style="border-brand-gold/60 text-brand-deep";
  else if(normalized.includes("risco")) style="border-red-700/30 text-red-800";
  return <span className={`inline-flex border px-3 py-1 text-[10px] font-semibold uppercase tracking-[.12em] ${style}`}>{label||status}</span>;
}
