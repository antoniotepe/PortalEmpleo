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
        nombre_comercial: result.data.nombre_comercial,
        id_tipo_empresa: result.data.id_tipo_empresa,
        id_tipo_entidad: result.data.id_tipo_entidad,
        id_industrias: result.data.id_industrias,
        id_actividad_economica: result.data.id_actividad_economica,
        id_posee_igss: result.data.id_posee_igss,
        numero_patronal: result.data.numero_patronal,
        anio_inicio_operaciones: result.data.anio_inicio_operaciones,
      },
    })

    const response2 = await useApi<ServiceResponse>(
      '/company-service/api/v1/create-commercial-patent-registration',
      {
        method: 'POST',
        body: {
          id_empresa: result.data.id_tipo_empresa,
          id_sucursal: result.data.id_sucursal,
          id_representante_legal: result.data.id_representante_legal,
          id_tipo_registro_patente: result.data.id_tipo_registro_patente,
          numero_registro: result.data.numero_registro,
          folio: result.data.folio,
          libro: result.data.libro,
          fecha_registro: result.data.fecha_registro,
          id_representante: result.data.id_representante_legal,
        },
      }
    )

    console.log('respuesta 2', response2)

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
