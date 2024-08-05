import { z } from 'zod'

export const NewPatentSchema = z.object({
  id_empresa: z.number(),
  id_sucursal: z.number(),
  id_representante_legal: z.number(),
  id_tipo_registro_patente: z.number(),
  numero_registro: z.number(),
  folio: z.number(),
  libro: z.number(),
  fecha_registro: z.string(),
})
