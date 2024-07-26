import { NuxtLink } from '../../.nuxt/components';
<script  setup lang="ts">

const InitProfileData={
       FirstName:'Ana',
       SecondName:'Cristina',
       FirstSurname:'Aguirre',
       SecondSurname:'de León',
       ThirdName:'Eloisa',
       LastNameMarried:'García',
       Cui:'3279501101',

}
let Profile=true;
const ProfileData=reactive({...InitProfileData});
const OriginalProfileData=ref({...InitProfileData});
const isEditing = ref(false)
const cuiEdit=ref(false);
const DateMailAdded=ref('Agregado hace 1 mes');
const toggleEdit = () => {
  isEditing.value = !isEditing.value
  if (!isEditing.value) {

  

    
    // Aquí puedes agregar la lógica para guardar los cambios
  }

}
 const cancelEdit = () => {
   isEditing.value = false

   if(isEditing.value===false){
      Object.assign(ProfileData, OriginalProfileData.value);
    console.log(ProfileData.FirstName)
   }
  }
 interface FormData {
   firstName: string
   email: string
  }

  const form:FormData=reactive({
   firstName: 'Amy Elsner Reyes',
   email: 'amy.elsner@gmail.com',

  })
  onBeforeMount(()=>{
  console.log('datos son los siguientes',form.firstName)

  })

const AddEmail=()=>{
  const Datos=false;
  Profile=Datos;
}
  
</script>
<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <div class="flex items-center justify-between font-normal"  >
          <div class="flex gap-2" >
            <p-avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              size="xlarge"
              shape="circle"
            />

            <div class="flex flex-col justify-center">
              <h1 class="text-2xl font-bold"> {{form.firstName}} </h1>
              <p class="text-subtitle"> {{ form.email}}</p>
            </div>
          </div>

          <div class="flex flex-col items-center gap-2 sm:flex-row" >
            <p-button
              icon="pi pi-pencil"
              class="bg-[#142958] px-5 text-white redondeado-lg border-0"
              :label="isEditing ? $t('ui.buttons.save.label'): $t('ui.buttons.edit.label')"
              @click="toggleEdit"
            />
            <p-button
              v-if="isEditing"
              icon="pi pi-times"
              class="bg-[#142958] px-5 text-white redondeado-lg border-0"
              :label="$t('ui.buttons.cancel.label')"
              link
              @click="cancelEdit"
            />
          </div>
        </div>
      </template>
    </p-card>

    <p-card>
      <!-- <template #title>{{ $t('profile.personalInformation') }}</template> -->

      <template #content>
        <div v-if="Profile" class="w-full flex gap-4">

          <div class="w-1/2 flex flex-col gap-4" >
            <div class="flex flex-col gap-2">
              <label for="firstName"> {{ $t('profile.firstName') }} </label>

              <p-input-text
                id="firstName"
                :value="ProfileData.FirstName"
                filled
                v-model="ProfileData.FirstName"
                fluid
                :disabled="!isEditing"
              />
            </div>
              <div class="flex flex-col gap-2">
              <label for="firstSurname"> {{ $t('profile.firstSurname') }} </label>

              <p-input-text
                id="firstSurname"
                :value="ProfileData.FirstSurname"
                v-model="ProfileData.FirstSurname"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>
             <div class="flex flex-col gap-2">
              <label for="marriedSurname"> {{ $t('profile.marriedName') }} </label>

              <p-input-text
                id="marriedSurname"
                :value="ProfileData.LastNameMarried"
                v-model="ProfileData.LastNameMarried"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>           
          </div>

          <div class=" w-1/2 flex flex-col gap-4" >
              <div class="flex flex-col gap-2" >
              <label for="secondName"> {{ $t('profile.middleName') }} </label>

              <p-input-text
                id="secondName"
                :value="ProfileData.SecondName"
                filled
                v-model="ProfileData.SecondName"
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="secondSurname"> {{ $t('profile.secondSurname') }} </label>

              <p-input-text
                id="secondSurname"
                :value="ProfileData.SecondSurname"
                v-model="ProfileData.SecondSurname"
                filled
                fluid
                :disabled="!isEditing"
              />
            </div>

            <div class="flex flex-col gap-2" >
            <div class="flex flex-col gap-2">
              <label for="cui"> {{ $t('profile.uniqueIdentificationCode') }} </label>

              <p-input-text
                id="cui"
                :value="ProfileData.Cui"
                filled
                fluid
                v-model='ProfileData.Cui'
                :disabled="!cuiEdit"
              />
            </div>
          </div>
          </div>
        </div>
        <div class="w-full flex gap-4" v-else>
          <h1>hola</h1>

        </div>
      </template>
    </p-card>

    <p-card>
      <template #title>{{ $t('profile.notifications') }}</template>

      <template #content>
        <div class="flex flex-col gap-4 " >
          <div class="flex flex-wrap gap-2 justify-start" >
            <div class="flex">
               <div class="flex place-items-center p-6 rounded-full bg-[#ECF3FF]">
                <i class="pi pi-envelope text-[#ffffff]  bg-[#4182F9]"/>
              </div>
              <div class="ml-2">
                <p>{{form.email}}</p>
              <p class=" text-black opacity-60"> {{DateMailAdded}} </p>
              </div>
            </div>

          </div>
          <div class="">
             <p-button
              icon="pi pi-plus"
              class=" bg-[#ECF3FF] px-5 redondeado-lg text-[#4182F9] border-0"
              :label=" $t('ui.buttons.AddNewMail.label')"
              @click="AddEmail"
            />
          </div>
        </div>
      </template>
    </p-card>
  </div>
</template>
