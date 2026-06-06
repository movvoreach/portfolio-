<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+Khmer:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }
  ],
  htmlAttrs: { lang: 'km' }
})

useSeoMeta({
  title: 'Reach - អ្នកអភិវឌ្ឍន៍ Full Stack',
  description: 'អ្នកអភិវឌ្ឍន៍ Full Stack ដែលផ្តោតលើការបង្កើតគេហទំព័រ កម្មវិធីវេប API និងឧបករណ៍សម្រាប់អ្នកអភិវឌ្ឍន៍។',
  ogTitle: 'Reach - អ្នកអភិវឌ្ឍន៍ Full Stack',
  ogDescription: 'អ្នកអភិវឌ្ឍន៍ Full Stack ដែលផ្តោតលើការបង្កើតគេហទំព័រ កម្មវិធីវេប API និងឧបករណ៍សម្រាប់អ្នកអភិវឌ្ឍន៍។',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <AppNavbar />
    <UMain>
      <NuxtPage />
    </UMain>
    <AppFooter />
  </UApp>
</template>
