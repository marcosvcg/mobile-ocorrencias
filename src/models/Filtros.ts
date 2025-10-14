export const filtroMap: Record<string, string> = {
  "Filtrar por": "",
  "CPF": "cpf",
  "Protocolo": "protocolo"
} as const;

export type FiltroLabel = keyof typeof filtroMap;