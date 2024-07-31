export const DepartmentService = {
  getData() {
    return [
      {
        name: 'Alta Verapaz',
        code: 'AV',
      },
      {
        name: 'Baja Verapaz',
        code: 'BV',
      },
      {
        name: 'Chimaltenango',
        code: 'CM',
      },
      {
        name: 'Chiquimula',
        code: 'CQ',
      },
      {
        name: 'El Progreso',
        code: 'PR',
      },
      {
        name: 'Escuintla',
        code: 'ES',
      },
      {
        name: 'Guatemala',
        code: 'GT',
      },
      {
        name: 'Huehuetenango',
        code: 'HU',
      },
      {
        name: 'Izabal',
        code: 'IZ',
      },
      {
        name: 'Jalapa',
        code: 'JA',
      },
      {
        name: 'Jutiapa',
        code: 'JU',
      },
      {
        name: 'Petén',
        code: 'PE',
      },
      {
        name: 'Quetzaltenango',
        code: 'QZ',
      },
      {
        name: 'Quiché',
        code: 'QC',
      },
      {
        name: 'Retalhuleu',
        code: 'RE',
      },
      {
        name: 'Sacatepéquez',
        code: 'SA',
      },
      {
        name: 'San Marcos',
        code: 'SM',
      },
      {
        name: 'Santa Rosa',
        code: 'SR',
      },
      {
        name: 'Sololá',
        code: 'SO',
      },
      {
        name: 'Suchitepéquez',
        code: 'SU',
      },
      {
        name: 'Totonicapán',
        code: 'TO',
      },
      {
        name: 'Zacapa',
        code: 'ZA',
      },
    ]
  },

  getDepartment() {
    return Promise.resolve(this.getData())
  },
}
