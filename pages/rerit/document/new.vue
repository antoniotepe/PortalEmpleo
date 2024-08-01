<script lang="ts" setup>
const form = ref({
  regulationType: false,
  FileUpload: null as File | null,
})

const onSelect = (event: { files: File[] }) => {
  form.value.FileUpload = event.files[0] || null
}

const onClear = () => {
  form.value.FileUpload = null
}

const onRemove = () => {
  form.value.FileUpload = null
}

const isFileUploaded = () => {
  return form.value.FileUpload !== null
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <p-card>
      <template #content>
        <span class="text-lg font-bold">
          {{ $t('rerit.principal.sections.uploadDocuments.title') }}
        </span>
      </template>
    </p-card>

    <p-card>
      <template #content>
        <div class="flex items-center gap-12">
          <div class="ui-input-binary">
            <label class="mb-2 block">
              {{ $t('rerit.principal.sections.uploadDocuments.type') }}
            </label>

            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <p-radio-button
                  v-model="form.regulationType"
                  input-id="regulationType-yes"
                  :value="true"
                />

                <label for="regulationType-yes">
                  {{ $t('rerit.principal.sections.uploadDocuments.new') }}
                </label>
              </div>

              <div class="flex items-center gap-2">
                <p-radio-button
                  v-model="form.regulationType"
                  input-id="regulationType-no"
                  :value="false"
                />

                <label for="regulationType-no">
                  {{ $t('rerit.principal.sections.uploadDocuments.modification') }}
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="mx-auto mt-5 flex w-1/2 flex-col items-center justify-center gap-12">
          <label>
            {{ $t('patents.new.inputs.appendDocuments.label') }}
          </label>
          <p-file-upload
            name="demo[]"
            url="/api/upload"
            accept="application/pdf"
            :max-file-size="1000000"
            :show-upload-button="false"
            :choose-label="$t('ui.buttons.chooseFile.label')"
            :cancel-label="$t('ui.buttons.cancel.label')"
            @select="onSelect($event)"
            @clear="onClear()"
            @remove="onRemove()"
          >
            <template #empty>
              <span>Sube tu archivo aquí.</span>
            </template>
          </p-file-upload>
        </div>
      </template>
    </p-card>

    <p-card class="mt-5">
      <template #content>
        <div class="flex items-center justify-center gap-2 font-normal">
          <NuxtLink to="/">
            <p-button
              :label="$t('ui.buttons.cancel.label')"
              severity="secondary"
              text
              rounded
            />
          </NuxtLink>
          <NuxtLink to="/rerit/list">
            <p-button
              :label="$t('ui.buttons.save.label')"
              rounded
            />
          </NuxtLink>
        </div>
      </template>
    </p-card>
  </div>
</template>
<style>
.p-fileupload-file img {
  display: none;
}
.p-fileupload-file .p-badge {
  display: none;
}
</style>
