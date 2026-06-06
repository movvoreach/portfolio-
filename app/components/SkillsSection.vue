<script setup lang="ts">
const categories = [
  {
    label: 'ផ្នែកមុខ',
    icon: 'i-lucide-monitor',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    skills: ['Html','Css', 'React', 'Javascript / Jquery', 'Tailwind CSS']
  },
  {
    label: 'ផ្នែកក្រោយ',
    icon: 'i-lucide-server',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    skills: ['Node.js / Express.js', 'Python / Django','Php / Laravel']
  },
  {
    label: 'មូលដ្ឋានទិន្នន័យ',
    icon: 'i-lucide-database',
    color: 'text-primary-500',
    bg: 'bg-primary-500/10',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB']
  },
  {
    label: 'DevOps និង Cloud',
    icon: 'i-lucide-cloud',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    skills: ['Docker','CI/CD']
  },
  {
    label: 'ឧបករណ៍',
    icon: 'i-lucide-wrench',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    skills: ['Git', 'GitHub Actions', 'Postman', 'Figma']
  },
  {
    label: 'ស្ថាបត្យកម្មប្រព័ន្ធ',
    icon: 'i-lucide-layers',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    skills: ['Microservices', 'Event-Driven', 'CQRS', 'DDD', 'Clean Arch.', 'Monorepos']
  }
]
</script>

<template>
  <section id="skills" class="py-24 bg-elevated/30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-16"
      >
        <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">ជំនាញ</p>
        <h2 class="text-3xl sm:text-4xl font-bold">បច្ចេកវិទ្យាដែលខ្ញុំប្រើ</h2>
        <p class="text-muted mt-4 max-w-xl mx-auto">
          សំណុំឧបករណ៍ និងបច្ចេកវិទ្យាដែលខ្ញុំប្រើសម្រាប់បង្កើតប្រព័ន្ធដែលលឿន ទុកចិត្តបាន និងងាយថែទាំ។
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cat, i) in categories"
          :key="cat.label"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
        >
          <UCard class="h-full card-hover">
            <div class="flex items-center gap-3 mb-4">
              <div :class="['w-10 h-10 rounded-lg flex items-center justify-center shrink-0', cat.bg]">
                <UIcon :name="cat.icon" :class="['w-5 h-5', cat.color]" />
              </div>
              <h3 class="font-semibold">{{ cat.label }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in cat.skills"
                :key="skill"
                color="neutral"
                variant="subtle"
                size="sm"
              >
                {{ skill }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
