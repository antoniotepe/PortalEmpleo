<script lang="ts" setup>
const form = ref({ foreign: false })
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('companies.new.title') }}
        </span>
      </template>
    </p-card>

    <p-card>
      <template #title>Información de Empresa</template>

      <template #content>
        <div>
          <label class="mb-2 block">¿Es extranjera?</label>

          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-2">
              <p-radio-button
                v-model="form.foreign"
                input-id="foreign-true"
                :value="true"
              />

              <label for="foreign-true"> Sí </label>
            </div>

            <div class="flex items-center gap-2">
              <p-radio-button
                v-model="form.foreign"
                input-id="foreign-false"
                :value="false"
              />

              <label for="foreign-false"> No </label>
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>Información de Patentes</template>

      <template #content>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> Código Único de Identificación </label>

              <p-input-text
                id="cui"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> Primer Nombre </label>

              <p-input-text
                id="firstName"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> Segundo Nombre </label>

              <p-input-text
                id="secondName"
                value="Cristina"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> Tercer Nombre </label>

              <p-input-text
                id="thirdName"
                value="Eloisa"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstSurname"> Primer Apellido </label>

              <p-input-text
                id="firstSurname"
                value="Aguirre"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> Segundo Apellido </label>

              <p-input-text
                id="secondSurname"
                value="de León"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> Apellido de Casada </label>

              <p-input-text
                id="marriedSurname"
                value="García"
                filled
                fluid
                disabled
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>Información de Ubicación</template>

      <template #content>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> Código Único de Identificación </label>

              <p-input-text
                id="cui"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> Primer Nombre </label>

              <p-input-text
                id="firstName"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> Segundo Nombre </label>

              <p-input-text
                id="secondName"
                value="Cristina"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> Tercer Nombre </label>

              <p-input-text
                id="thirdName"
                value="Eloisa"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstSurname"> Primer Apellido </label>

              <p-input-text
                id="firstSurname"
                value="Aguirre"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> Segundo Apellido </label>

              <p-input-text
                id="secondSurname"
                value="de León"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> Apellido de Casada </label>

              <p-input-text
                id="marriedSurname"
                value="García"
                filled
                fluid
                disabled
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>Datos de Contacto</template>

      <template #content>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> Código Único de Identificación </label>

              <p-input-text
                id="cui"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> Primer Nombre </label>

              <p-input-text
                id="firstName"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> Segundo Nombre </label>

              <p-input-text
                id="secondName"
                value="Cristina"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> Tercer Nombre </label>

              <p-input-text
                id="thirdName"
                value="Eloisa"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstSurname"> Primer Apellido </label>

              <p-input-text
                id="firstSurname"
                value="Aguirre"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> Segundo Apellido </label>

              <p-input-text
                id="secondSurname"
                value="de León"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> Apellido de Casada </label>

              <p-input-text
                id="marriedSurname"
                value="García"
                filled
                fluid
                disabled
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>Representación Legal</template>

      <template #content>
        <div class="flex flex-col gap-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="cui"> Código Único de Identificación </label>

              <p-input-text
                id="cui"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName"> Primer Nombre </label>

              <p-input-text
                id="firstName"
                value="Ana"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondName"> Segundo Nombre </label>

              <p-input-text
                id="secondName"
                value="Cristina"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="thirdName"> Tercer Nombre </label>

              <p-input-text
                id="thirdName"
                value="Eloisa"
                filled
                fluid
                disabled
              />
            </div>
          </div>

          <div class="grid grid-cols-3 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstSurname"> Primer Apellido </label>

              <p-input-text
                id="firstSurname"
                value="Aguirre"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> Segundo Apellido </label>

              <p-input-text
                id="secondSurname"
                value="de León"
                filled
                fluid
                disabled
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="marriedSurname"> Apellido de Casada </label>

              <p-input-text
                id="marriedSurname"
                value="García"
                filled
                fluid
                disabled
              />
            </div>
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <div class="flex items-center justify-end gap-2 font-normal">
          <p-button
            label="Cancelar"
            severity="secondary"
            text
            rounded
          />

          <p-button
            label="Crear"
            rounded
          />
        </div>
      </template>
    </p-card>
  </div>
</template>
