import { z } from 'zod'

export const NewCompanySchema = z.object({
  nit: z.number(),
  name: z.string(),
  comercialName: z.string(),
  companyType_id: z.number(),
  entityType_id: z.number(),
  industry_id: z.number(),
  activity_id: z.number(),
  guild_id: z.number(),
  affiliationNumber: z.number(),
  operationYear: z.number(),
  nitRepresent: z.number(),
  patentType_id: z.number(),
  registerNumber: z.number(),
  invoiceNumber: z.number(),
  book: z.number(),
  // contactName: z.string(),
  // contactPosition: z.string(),
  // contactEmail: z.string().email(),
  // contactPhone: z.number(),
  // contactPhoneTwo: z.number(),
  // appointmentDate: z.number(),
  notaryAuthorization: z.string(),
  appointment: z.string(),
  duration: z.string(),
  // contactCellphone: z.string(),
  // contactAddress: z.string(),
  // contactCity: z.string(),
  // registerDate: z.string(),
  // id_empresa: z.number(),
  // patentType_id: z.number(),
  // id_posee_igss: z.number(),
  // id_sucursal: z.number(),
  // id_representante_legal: z.number(),
  // id_tipo_registro_patente: z.number(),
  // numero_registro: z.number(),
  // folio: z.number(),
  // libro: z.number(),
  // fecha_registro: z.string(),
})
