<script setup lang="ts">
useSeoMeta({
  title: 'វីដេអូ - Reach',
  description: 'វីដេអូអំពីគម្រោង ការសរសេរកូដ ការរៀន និងជីវិតជាអ្នកអភិវឌ្ឍន៍។'
})

interface Video {
  title: string
  description: string
  duration: string
  date: string
  category: string
  thumbnail: string
}

const videos: Video[] = [
  {
    title: 'ការបង្កើត Portfolio របស់ខ្ញុំ',
    description: 'ការពន្យល់អំពីជម្រើស Design ការរៀបចំ Nuxt និងផ្នែកនានានៅពីក្រោយ Reach.dev។',
    duration: '12:40',
    date: 'មិថុនា 2026',
    category: 'Portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'របៀបដែលខ្ញុំរៀបចំគម្រោង Full Stack',
    description: 'ចាប់ពីគំនិត រចនា Database, API Route, UI Component រហូតដល់បញ្ជីត្រួតពិនិត្យមុន Deploy។',
    duration: '9:25',
    date: 'មិថុនា 2026',
    category: 'ដំណើរការ',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'ឧបករណ៍អ្នកអភិវឌ្ឍន៍ដែលខ្ញុំចូលចិត្ត',
    description: 'មើលខ្លីៗអំពីឧបករណ៍ដែលខ្ញុំប្រើសម្រាប់សរសេរកូដ Debug រចនា និងបញ្ចេញការងារឱ្យលឿន។',
    duration: '7:18',
    date: 'មកដល់ឆាប់ៗ',
    category: 'ឧបករណ៍',
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'
  }
]

const featuredVideo = videos[0] as Video
const moreVideos = videos.slice(1)
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
      class="mb-12"
    >
      <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
        វីដេអូ
      </p>
      <h1 class="text-4xl sm:text-5xl font-bold mb-4">
        វីដេអូ
      </h1>
      <p class="text-muted max-w-2xl leading-relaxed">
        ព័ត៌មានថ្មីៗអំពីគម្រោង កំណត់ចំណាំការសរសេរកូដ ដំណើរការអ្នកអភិវឌ្ឍន៍ និងវីដេអូពីក្រោយការងាររបស់ Reach.dev។
      </p>
    </div>

    <div class="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-start">
      <UCard
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        class="overflow-hidden card-hover"
      >
        <div class="-m-6">
          <div class="relative aspect-video overflow-hidden bg-elevated">
            <img
              :src="featuredVideo.thumbnail"
              :alt="featuredVideo.title"
              class="w-full h-full object-cover"
            >
            <div class="absolute inset-0 bg-black/35 flex items-center justify-center">
              <div class="w-16 h-16 rounded-full bg-white/90 text-gray-950 flex items-center justify-center shadow-lg">
                <UIcon
                  name="i-lucide-play"
                  class="w-7 h-7 ml-1"
                />
              </div>
            </div>
            <UBadge
              color="neutral"
              variant="solid"
              class="absolute bottom-4 right-4"
            >
              {{ featuredVideo.duration }}
            </UBadge>
          </div>

          <div class="p-6">
            <div class="flex flex-wrap items-center gap-2 mb-3">
              <UBadge
                color="primary"
                variant="subtle"
              >
                ពិសេស
              </UBadge>
              <span class="text-sm text-muted">{{ featuredVideo.date }}</span>
            </div>
            <h2 class="text-2xl font-bold mb-3">
              {{ featuredVideo.title }}
            </h2>
            <p class="text-muted leading-relaxed">
              {{ featuredVideo.description }}
            </p>
          </div>
        </div>
      </UCard>

      <div class="space-y-4">
        <UCard
          v-for="(video, i) in moreVideos"
          :key="video.title"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 400, delay: 160 + i * 80 } }"
          class="card-hover"
        >
          <div class="flex gap-4">
            <div class="relative w-28 sm:w-36 aspect-video rounded-lg overflow-hidden bg-elevated shrink-0">
              <img
                :src="video.thumbnail"
                :alt="video.title"
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-black/25 flex items-center justify-center">
                <UIcon
                  name="i-lucide-play-circle"
                  class="w-7 h-7 text-white"
                />
              </div>
            </div>
            <div class="min-w-0">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <UBadge
                  color="neutral"
                  variant="subtle"
                  size="xs"
                >
                  {{ video.category }}
                </UBadge>
                <span class="text-xs text-muted">{{ video.duration }}</span>
              </div>
              <h3 class="font-semibold leading-snug">
                {{ video.title }}
              </h3>
              <p class="text-sm text-muted mt-1 line-clamp-2">
                {{ video.description }}
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
