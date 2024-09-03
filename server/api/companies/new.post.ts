import { FetchError } from 'ofetch'

import { useApi } from '~/server/utils/useApi'
import { NewCompanySchema } from '~/validators/schemas/company/newCompany'

type ServiceResponse = {
  status: string
  data: string
}

type Response = {
  status: string
  data: string
}

export default defineEventHandler(async (event) => {
  const result = await readValidatedBody(event, NewCompanySchema.safeParse)

  if (!result.success) {
    throw createError({
      status: 400,
      statusMessage: 'Validation Failure',
      data: result.error,
    })
  }

  try {
    const response = await useApi<ServiceResponse>('/company-service/api/v1/create-company', {
      method: 'POST',
      body: {
        nit: result.data.nit,
        razon_social: result.data.name,
        nombre_comercial: result.data.comercialName,
        id_tipo_empresa: result.data.companyType_id,
        id_tipo_entidad: result.data.entityType_id,
        id_industrias: result.data.industry_id,
        id_actividad_economica: result.data.activity_id,
        id_posee_igss: result.data.affiliationNumber,
        // result.data.id_posee_igss,
        numero_patronal: result.data.affiliationNumber,
        anio_inicio_operaciones: result.data.operationYear,
        // result.data.operationYear,
      },
    })

    const response2 = await useApi<ServiceResponse>(
      '/company-service/api/v1/create-commercial-patent-registration',
      {
        method: 'POST',
        body: {
          id_empresa: 5,
          // result.data.companyType_id,
          // id_sucursal: result.data.id_sucursal,
          id_representante_legal: result.data.nitRepresent,
          id_tipo_registro_patente: result.data.patentType_id,
          numero_registro: result.data.registerNumber,
          folio: result.data.invoiceNumber,
          libro: result.data.book,
          fecha_registro: '2024-08-02 20:27:14',
          // result.data.registerDate,
          id_representante: 5,
          // result.data.id_representante_legal,
        },
      }
    )

    const response3 = await useApi<ServiceResponse>('/company-service/api/v1/create-contact', {
      method: 'POST',
      body: {
        id_empresa: 5,
        // id_sucursal: result.data.id_sucursal,
        id_representante_legal: result.data.nitRepresent,
        nombre: 'antonio', //result.data.contactName,
        puesto: 'programador', //result.data.contactPosition,
        email: 'antonio@gmail.com', //result.data.contactEmail,
        telefono1: 12345678, //result.data.contactPhone,
        telefono2: 87654321, // result.data.contactPhoneTwo,
      },
    })

    const response4 = await useApi<ServiceResponse>(
      '/company-service/api/v1/create-legal-representative',
      {
        method: 'POST',
        body: {
          id_empresa: 5,
          // id_sucursal: result.data.id_sucursal,
          id_sucursal: 5,
          id_persona: result.data.nitRepresent,
          default: 5, //result.data.default,
          fecha_acta_nombramiento: '2024-08-02 20:27:14', //result.data.appointmentDate,
          notario_autorizo: result.data.notaryAuthorization,
          nombramiento: result.data.appointment,
          vigencia: result.data.duration,
        },
      }
    )

    if (response.status != 'success') {
      throw createError({
        status: 400,
        statusMessage: 'Validation Failure',
        data: result.error,
      })
    }

    return {
      status: response.status,
      data: response.data,
      status_2: response2.status,
      data_2: response2.data,
      status_3: response3.status,
      data_3: response3.data,
      status_4: response4.status,
      data_4: response4.data,
    } as Response
  } catch (error) {
    if (error instanceof FetchError) {
      throw createError({
        status: error.response?.status || 500,
        statusMessage: error.response?.statusText || 'Internal Server Error',
        data: error.response?._data?.message,
      })
    }

    return {
      status: 500,
      body: {
        message: 'Internal Server Error',
      },
    }
  }
})
