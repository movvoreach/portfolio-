<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-preview', () =>
  queryCollection('blog').order('date', 'DESC').limit(3).all()
)
</script>

<template>
  <section id="blog" class="py-24 bg-elevated/30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="flex items-end justify-between mb-12"
      >
        <div>
          <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">អត្ថបទ</p>
          <h2 class="text-3xl sm:text-4xl font-bold">អត្ថបទថ្មីៗ</h2>
          <p class="text-muted mt-2">គំនិតអំពីវិស្វកម្ម ស្ថាបត្យកម្មប្រព័ន្ធ និងវប្បធម៌អ្នកអភិវឌ្ឍន៍។</p>
        </div>
        <UButton to="/blog" variant="ghost" color="neutral" trailing-icon="i-lucide-arrow-right" class="hidden sm:flex">
          អត្ថបទទាំងអស់
        </UButton>
      </div>

      <div v-if="posts && posts.length > 0" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(post, i) in posts"
          :key="post.path"
          :to="post.path"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 100 } }"
        >
          <UCard class="h-full card-hover">
            <div class="flex flex-col h-full">
              <div class="flex items-center gap-2 mb-3">
                <UBadge color="primary" variant="subtle" size="xs">{{ post.category || 'វិស្វកម្ម' }}</UBadge>
                <span class="text-xs text-muted">{{ post.readTime || '៥ នាទីអាន' }}</span>
              </div>
              <h3 class="font-bold text-lg leading-snug mb-2 group-hover:text-primary-500 transition-colors">
                {{ post.title }}
              </h3>
              <p class="text-sm text-muted leading-relaxed flex-1">{{ post.description }}</p>
              <div class="flex items-center gap-2 mt-4 pt-4 border-t border-border">
                <UAvatar size="xs" icon="i-lucide-user" />
                <span class="text-xs text-muted">Reach · {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</span>
              </div>
            </div>
          </UCard>
        </NuxtLink>
      </div>

      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="i in 3"
          :key="i"
          class="card-hover"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: (i - 1) * 100 } }"
        >
          <div class="flex items-center gap-2 mb-3">
            <UBadge color="primary" variant="subtle" size="xs">វិស្វកម្ម</UBadge>
            <span class="text-xs text-muted">៨ នាទីអាន</span>
          </div>
          <h3 class="font-bold text-lg leading-snug mb-2">
            {{ ['ការបង្កើត API ដែលអាចពង្រីកបានជាមួយ Node.js និង PostgreSQL', 'ពី Monolith ទៅ Microservices៖ មេរៀនដែលបានរៀន', 'ហេតុអ្វីបទពិសោធន៍អ្នកអភិវឌ្ឍន៍មានសារៈសំខាន់'][i - 1] }}
          </h3>
          <p class="text-sm text-muted leading-relaxed">
            {{ ['ការពន្យល់អំពីការរចនា API ដែលអាចធ្វើការល្អនៅពេលមានអ្នកប្រើច្រើន។', 'អ្វីដែលខ្ញុំបានរៀនពីការបម្លែងកម្មវិធីចាស់ទៅជា Microservices។', 'ហេតុអ្វីបទពិសោធន៍អ្នកអភិវឌ្ឍន៍ជួយបង្កើនល្បឿនក្រុម។'][i - 1] }}
          </p>
          <div class="flex items-center gap-2 mt-4 pt-4 border-t border-border">
            <UAvatar size="xs" icon="i-lucide-user" />
            <span class="text-xs text-muted">Reach · មកដល់ឆាប់ៗ</span>
          </div>
        </UCard>
      </div>

      <div class="text-center mt-8 sm:hidden">
        <UButton to="/blog" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">
          អត្ថបទទាំងអស់
        </UButton>
      </div>
    </div>
  </section>
</template>
