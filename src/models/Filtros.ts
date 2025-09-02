export const filtroMap: Record<string, string> = {
  "Filtrar por": "",
  "CPF": "cpf",
  "Protocolo": "protocolo",
  "Situação": "status",
  "Serviço": "servico"
} as const;

export type FiltroLabel = keyof typeof filtroMap;