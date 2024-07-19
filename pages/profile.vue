<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <div class="flex items-center justify-between font-normal">
          <div class="flex gap-2">
            <p-avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              size="xlarge"
              shape="circle"
            />

            <div class="flex flex-col justify-center">
              <h1 class="text-2xl font-bold">Amy Elsner</h1>
              <p class="text-subtitle">amy.elsner@gmail.com</p>
            </div>
          </div>

          <p-button
            label="Editar"
            icon="pi pi-pencil"
            rounded
          />
        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>Información Personal</template>

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
      <template #title>Notificaciones</template>

      <template #content>
        <span>Listado de Correos</span>
      </template>
    </p-card>
  </div>
</template>
