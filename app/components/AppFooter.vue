<script setup lang="ts">
const socials = [
  { icon: 'i-simple-icons-github', href: 'https://github.com/movvoreach', label: 'GitHub' },
  { icon: 'i-simple-icons-linkedin', href: 'https://www.linkedin.com/in/mov-vo-reach-644846311/', label: 'LinkedIn' },
  { icon: 'i-simple-icons-x', href: 'https://x.com/niroth', label: 'X / Twitter' }
]
</script>

<template>
  <footer class="border-t border-border mt-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p class="font-bold text-lg">
            <span class="gradient-text">Reach</span>
            <span class="text-muted">.dev</span>
          </p>
          <p class="text-sm text-muted mt-1">អ្នកអភិវឌ្ឍន៍ Full Stack</p>
        </div>

        <div class="flex items-center gap-2">
          <UButton
            v-for="s in socials"
            :key="s.href"
            :to="s.href"
            target="_blank"
            :icon="s.icon"
            :aria-label="s.label"
            color="neutral"
            variant="ghost"
          />
        </div>
      </div>

      <USeparator class="my-6" />

      <p class="text-center text-sm text-muted">
        © {{ new Date().getFullYear() }} Reach។ បង្កើតជាមួយ Nuxt 3 និង Nuxt UI។
      </p>
    </div>
  </footer>
</template>
