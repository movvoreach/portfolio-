<script setup lang="ts">
const form = reactive({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const sent = ref(false)
const error = ref('')

async function submit() {
  loading.value = true
  error.value = ''
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })
    sent.value = true
  } catch (e: unknown) {
    error.value = (e as { data?: { message?: string } })?.data?.message || 'មានបញ្ហាមួយកើតឡើង។ សូមព្យាយាមម្តងទៀត។'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="py-24"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
          ទំនាក់ទំនង
        </p>
        <h2 class="text-3xl sm:text-4xl font-bold">
          តោះធ្វើការជាមួយគ្នា
        </h2>
        <p class="text-muted mt-4 max-w-xl mx-auto">
          មានគម្រោងចង់ធ្វើ ឬគ្រាន់តែចង់ពិភាក្សា? ខ្ញុំតែងតែរីករាយសម្រាប់ការសន្ទនាដែលមានន័យ។
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
          class="space-y-6"
        >
          <div>
            <h3 class="font-bold text-xl mb-2">
              ទាក់ទងមកខ្ញុំ
            </h3>
            <p class="text-muted">
              ជាទូទៅ ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។ ប្រសិនបើបន្ទាន់ សូមផ្ញើអ៊ីមែលមកខ្ញុំដោយផ្ទាល់។
            </p>
          </div>

          <div class="space-y-4">
            <a
              href="mailto:movvoreach@gmail.com"
              class="flex items-center gap-4 group"
            >
              <div class="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <UIcon
                  name="i-lucide-mail"
                  class="w-5 h-5 text-primary-500"
                />
              </div>
              <div>
                <p class="text-xs text-muted">អ៊ីមែល</p>
                <p class="font-medium group-hover:text-primary-500 transition-colors">movvoreach@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mov-vo-reach-644846311/"
              target="_blank"
              class="flex items-center gap-4 group"
            >
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <UIcon
                  name="i-simple-icons-linkedin"
                  class="w-5 h-5 text-blue-500"
                />
              </div>
              <div>
                <p class="text-xs text-muted">LinkedIn</p>
                <p class="font-medium group-hover:text-blue-500 transition-colors">linkedin.com/in/mov-vo-reach</p>
              </div>
            </a>

            <a
              href="https://github.com/movvoreach"
              target="_blank"
              class="flex items-center gap-4 group"
            >
              <div class="w-12 h-12 rounded-xl bg-neutral-500/10 flex items-center justify-center group-hover:bg-neutral-500/20 transition-colors">
                <UIcon
                  name="i-simple-icons-github"
                  class="w-5 h-5"
                />
              </div>
              <div>
                <p class="text-xs text-muted">GitHub</p>
                <p class="font-medium group-hover:text-foreground transition-colors">github.com/movvoreach</p>
              </div>
            </a>
          </div>

          <UCard class="bg-primary-500/5 border-primary-500/20">
            <div class="flex items-start gap-3">
              <UIcon
                name="i-lucide-calendar"
                class="w-5 h-5 text-primary-500 mt-0.5 shrink-0"
              />
              <div>
                <p class="font-semibold text-sm">
                  កក់ពេលជជែក
                </p>
                <p class="text-xs text-muted mt-1">
                  កក់ការជជែក ៣០ នាទី ដើម្បីពិភាក្សាអំពីតម្រូវការគម្រោងរបស់អ្នក។
                </p>
                <UButton
                  size="xs"
                  color="primary"
                  variant="subtle"
                  class="mt-3"
                  to="https://cal.com/niroth"
                  target="_blank"
                >
                  កក់ពេល
                </UButton>
              </div>
            </div>
          </UCard>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 500 } }"
        >
          <UCard>
            <div
              v-if="sent"
              class="text-center py-8"
            >
              <div class="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <UIcon
                  name="i-lucide-check-circle"
                  class="w-8 h-8 text-green-500"
                />
              </div>
              <h3 class="font-bold text-xl mb-2">
                បានផ្ញើសារហើយ!
              </h3>
              <p class="text-muted">
                អរគុណសម្រាប់ការទាក់ទង។ ខ្ញុំនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។
              </p>
              <UButton
                class="mt-6"
                color="neutral"
                variant="outline"
                @click="sent = false"
              >
                ផ្ញើមួយទៀត
              </UButton>
            </div>

            <form
              v-else
              class="space-y-5"
              @submit.prevent="submit"
            >
              <div class="grid sm:grid-cols-2 gap-5">
                <UFormField
                  label="ឈ្មោះ"
                  required
                >
                  <UInput
                    v-model="form.name"
                    placeholder="ឈ្មោះរបស់អ្នក"
                    class="w-full"
                    required
                  />
                </UFormField>
                <UFormField
                  label="អ៊ីមែល"
                  required
                >
                  <UInput
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    class="w-full"
                    required
                  />
                </UFormField>
              </div>

              <UFormField
                label="ប្រធានបទ"
                required
              >
                <UInput
                  v-model="form.subject"
                  placeholder="សំណួរអំពីគម្រោង"
                  class="w-full"
                  required
                />
              </UFormField>

              <UFormField
                label="សារ"
                required
              >
                <UTextarea
                  v-model="form.message"
                  placeholder="ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក..."
                  :rows="6"
                  class="w-full"
                  required
                />
              </UFormField>

              <UAlert
                v-if="error"
                color="error"
                variant="subtle"
                :description="error"
              />

              <UButton
                type="submit"
                color="primary"
                block
                size="lg"
                :loading="loading"
                trailing-icon="i-lucide-send"
              >
                ផ្ញើសារ
              </UButton>
            </form>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
