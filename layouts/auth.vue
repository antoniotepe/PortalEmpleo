<template>
  <div class="flex">
    <div class="flex-1 bg-white">
      <div class="m-10 my-20 flex gap-5">
        <img
          src="~/assets/webp/logo-h.webp"
          class="h-14"
        />
      </div>

      <div class="m-10 flex gap-5">
        <slot />
      </div>
    </div>

    <div class="flex h-screen flex-1 flex-col bg-slate-100">
      <div class="m-10 my-20 flex gap-5">
        <NuxtLink
          to="/"
          class="border-b-2 border-[#0C31F1] font-bold"
        >
          Empresas
        </NuxtLink>

        <NuxtLink to="/"> Personas </NuxtLink>
      </div>

      <div class="flex flex-1">
        <img src="~/assets/svg/message.svg" />
      </div>

      <div class="h-[25vh] bg-[#142958]">Redes "D"</div>
    </div>
  </div>
</template>
