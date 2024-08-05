import { z } from 'zod'

export const NewCompanySchema = z.object({
  nit: z.number(),
  name: z.string(),
  comercialName: z.string(),
  companyType: z.number(),
  id_tipo_entidad: z.number(),
  id_industrias: z.number(),
  id_actividad_economica: z.number(),
  id_posee_igss: z.number(),
  numero_patronal: z.number(),
  anio_inicio_operaciones: z.number(),
  id_empresa: z.number(),
  id_sucursal: z.number(),
  id_representante_legal: z.number(),
  id_tipo_registro_patente: z.number(),
  numero_registro: z.number(),
  folio: z.number(),
  libro: z.number(),
  fecha_registro: z.string(),
})
