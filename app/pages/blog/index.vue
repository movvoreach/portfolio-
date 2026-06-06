<script setup lang="ts">
useSeoMeta({
  title: 'ប្លុក - Reach',
  description: 'អត្ថបទអំពីវិស្វកម្ម ស្ថាបត្យកម្មប្រព័ន្ធ និងវប្បធម៌អ្នកអភិវឌ្ឍន៍។'
})

const { data: posts } = await useAsyncData('blog-all', () =>
  queryCollection('blog').order('date', 'DESC').all()
)

const search = ref('')
const form = reactive({
  title: '',
  description: '',
  category: 'សហគមន៍',
  content: ''
})
const loading = ref(false)
const sent = ref(false)
const error = ref('')

const filtered = computed(() => {
  if (!posts.value) return []
  if (!search.value) return posts.value
  const q = search.value.toLowerCase()
  return posts.value.filter(p =>
    p.title.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
  )
})

async function submitBlog() {
  loading.value = true
  sent.value = false
  error.value = ''

  try {
    await $fetch('/api/blog', {
      method: 'POST',
      body: form
    })
    form.title = ''
    form.description = ''
    form.category = 'សហគមន៍'
    form.content = ''
    sent.value = true
    await refreshNuxtData('blog-all')
  } catch (e: unknown) {
    error.value = (e as { data?: { message?: string } })?.data?.message || 'មិនអាចបោះពុម្ពអត្ថបទបានទេ។'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="mb-12"
    >
      <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
        អត្ថបទ
      </p>
      <h1 class="text-4xl font-bold mb-4">
        ប្លុក
      </h1>
      <p class="text-muted">
        គំនិតអំពីវិស្វកម្ម ស្ថាបត្យកម្មប្រព័ន្ធ និងការបង្កើត Software ដែលប្រើបានយូរ។
      </p>

      <UInput
        v-model="search"
        class="mt-6 max-w-sm"
        placeholder="ស្វែងរកអត្ថបទ..."
        icon="i-lucide-search"
      />
    </div>

    <UCard class="mb-10">
      <form
        class="space-y-6"
        @submit.prevent="submitBlog"
      >
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-border pb-6">
          <div>
            <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-2">
              បន្ថែមអត្ថបទ
            </p>
            <h2 class="text-2xl font-bold">
              បោះពុម្ពអត្ថបទថ្មី
            </h2>
          </div>
          <UButton
            type="submit"
            color="primary"
            size="lg"
            trailing-icon="i-lucide-send"
            :loading="loading"
            class="self-start"
          >
            បោះពុម្ព
          </UButton>
        </div>

        <div class="grid md:grid-cols-2 gap-5">
          <UFormField
            label="ចំណងជើង"
            required
          >
            <UInput
              v-model="form.title"
              placeholder="អ្នកកំពុងសរសេរអំពីអ្វី?"
              maxlength="120"
              class="w-full"
              required
            />
          </UFormField>

          <UFormField label="ប្រភេទ">
            <UInput
              v-model="form.category"
              placeholder="វិស្វកម្ម"
              class="w-full"
            />
          </UFormField>
        </div>

        <UFormField
          label="សេចក្តីសង្ខេប"
          required
        >
          <UInput
            v-model="form.description"
            placeholder="សេចក្តីសង្ខេបខ្លីសម្រាប់បញ្ជីប្លុក"
            maxlength="240"
            class="w-full"
            required
          />
        </UFormField>

        <UFormField
          label="មាតិកា"
          required
        >
          <UTextarea
            v-model="form.content"
            placeholder="សរសេរមាតិកាអត្ថបទនៅទីនេះ។ អាចប្រើ Markdown បាន។"
            :rows="8"
            class="w-full"
            required
          />
        </UFormField>

        <UAlert
          v-if="sent"
          color="success"
          variant="subtle"
          description="បានបោះពុម្ពអត្ថបទហើយ។ វានឹងបង្ហាញនៅក្នុងបញ្ជីខាងក្រោម។"
        />
        <UAlert
          v-if="error"
          color="error"
          variant="subtle"
          :description="error"
        />
      </form>
    </UCard>

    <div
      v-if="filtered.length > 0"
      class="space-y-6"
    >
      <NuxtLink
        v-for="(post, i) in filtered"
        :key="post.path"
        v-motion
        :to="post.path"
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 300, delay: i * 60 } }"
        class="block"
      >
        <UCard class="card-hover group">
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <UBadge
                  color="primary"
                  variant="subtle"
                  size="xs"
                >{{ post.category || 'វិស្វកម្ម' }}</UBadge>
                <span class="text-xs text-muted">{{ post.readTime || '៥ នាទីអាន' }}</span>
              </div>
              <h2 class="font-bold text-xl group-hover:text-primary-500 transition-colors">{{ post.title }}</h2>
              <p class="text-muted text-sm mt-2 leading-relaxed">{{ post.description }}</p>
              <p class="text-xs text-muted mt-3">{{ new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</p>
            </div>
            <UIcon
              name="i-lucide-arrow-right"
              class="w-5 h-5 text-muted group-hover:text-primary-500 group-hover:translate-x-1 transition-all mt-1 shrink-0"
            />
          </div>
        </UCard>
      </NuxtLink>
    </div>

    <div
      v-else
      class="text-center py-20"
    >
      <UIcon
        name="i-lucide-file-text"
        class="w-12 h-12 text-muted mx-auto mb-4"
      />
      <p class="text-muted">
        មិនទាន់មានអត្ថបទទេ។ សូមត្រឡប់មកមើលម្តងទៀតពេលក្រោយ។
      </p>
    </div>
  </div>
</template>
