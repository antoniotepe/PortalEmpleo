<template>
  <div class="mx-auto flex w-full flex-col">
    <div class="flex h-screen min-h-screen flex-1 flex-col md:flex-row">
      <!-- Columna izquierda -->
      <div class="min-h-screen w-full flex-1 bg-white md:w-1/2">
        <div class="sticky top-0 my-10 flex justify-center bg-white">
          <div class="w-3/4">
            <img
              src="~/assets/webp/logo-h.webp"
              class="h-20"
            />
          </div>
        </div>

        <div>
          <slot />
        </div>
      </div>

      <!-- Columna derecha -->
      <div class="flex min-h-screen flex-1 flex-col bg-slate-100 md:w-1/2">
        <div class="sticky top-10 m-10 my-20 flex gap-5">
          <NuxtLink
            to="/"
            class="border-b-2 border-[#0C31F1] font-bold"
          >
            Empresas
          </NuxtLink>

          <NuxtLink to="/"> Personas </NuxtLink>
        </div>

        <div class="flex flex-1 justify-center">
          <img
            src="~/assets/svg/message.svg"
            class="w-3/4 md:w-full"
          />
        </div>

        <div class="flex h-[25vh] flex-col items-center justify-center bg-[#142958]">
          <div class="flex flex-grow flex-col items-center justify-center">
            <h2 class="mb-6 text-xl font-bold text-white md:text-2xl lg:text-3xl">
              {{ $t('login.social') }}
            </h2>
            <div class="flex items-center justify-center space-x-4">
              <a
                href="https://www.facebook.com/Mintrabajoguatemala/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-600"
                style="color: white"
              >
                <i class="pi pi-facebook text-2xl md:text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/mintrabgt/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-600"
                style="color: white"
              >
                <i class="pi pi-instagram text-2xl md:text-3xl" />
              </a>
              <a
                href="https://x.com/MINTRABAJOGuate"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-600"
                style="color: white"
              >
                <i class="pi pi-twitter text-2xl md:text-3xl" />
              </a>
              <a
                href="https://www.youtube.com/user/MNTRABAJOGUATEMALA"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-600"
                style="color: white"
              >
                <i class="pi pi-youtube text-2xl md:text-3xl" />
              </a>
              <a
                href="https://www.tiktok.com/@mintrabgt"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white hover:text-blue-600"
                style="color: white"
              >
                <i class="pi pi-tiktok text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
