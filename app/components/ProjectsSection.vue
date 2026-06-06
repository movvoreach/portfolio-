<script setup lang="ts">
const projects = [
  {
    title: 'FlowPay',
    description: 'ប្រព័ន្ធដំណើរការទូទាត់ពេលវេលាពិត ដែលគាំទ្ររូបិយប័ណ្ណច្រើន ការរកឃើញការក្លែងបន្លំ និង Dashboard សម្រាប់អាជីវករ។',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Vue 3', 'Stripe'],
    github: 'https://github.com/movvoreach/flowpay',
    demo: 'https://flowpay.demo',
    featured: true,
    color: 'from-primary-500/20 to-orange-500/20'
  },
  {
    title: 'DataStream',
    description: 'ប្រព័ន្ធបញ្ជូនទិន្នន័យ Event ល្បឿនខ្ពស់ដែលបង្កើតលើ Kafka មាន Dashboard និងការជូនដំណឹងពេលវេលាពិត។',
    tags: ['Go', 'Kafka', 'ClickHouse', 'React', 'Grafana'],
    github: 'https://github.com/movvoreach/datastream',
    demo: 'https://datastream.demo',
    featured: true,
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'DevKit CLI',
    description: 'ឧបករណ៍ CLI បែប Open Source សម្រាប់បង្កើត Microservice ដែលត្រៀមប្រើប្រាស់ជាមួយ Docker, CI/CD និងការតាមដានប្រព័ន្ធ។',
    tags: ['Go', 'Docker', 'GitHub Actions', 'Open Source'],
    github: 'https://github.com/movvoreach/devkit',
    demo: null,
    featured: true,
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'ContentAI',
    description: 'ប្រព័ន្ធគ្រប់គ្រងមាតិកាដែលប្រើ AI សម្រាប់ Tag ស្វ័យប្រវត្តិ ពិន្ទុ SEO និងដំណើរការអ្នកនិពន្ធច្រើននាក់។',
    tags: ['Next.js', 'Python', 'OpenAI', 'Supabase'],
    github: 'https://github.com/movvoreach/contentai',
    demo: 'https://contentai.demo',
    featured: false,
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    title: 'ShopEdge',
    description: 'ប្រព័ន្ធ E-commerce បែប Headless មាន Storefront ដែលអាចកែតម្រូវបាន ការគ្រប់គ្រងស្តុក និងវិភាគទិន្នន័យ។',
    tags: ['Nuxt 3', 'Medusa.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com/movvoreach/shopedge',
    demo: 'https://shopedge.demo',
    featured: false,
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    title: 'AuthForge',
    description: 'សេវាកម្ម Authentication ដែលដាក់នៅ Server ផ្ទាល់ មាន OAuth2, SAML, Magic Link និង UI សម្រាប់គ្រប់គ្រង។',
    tags: ['Go', 'JWT', 'Redis', 'Vue 3'],
    github: 'https://github.com/movvoreach/authforge',
    demo: null,
    featured: false,
    color: 'from-violet-500/20 to-purple-500/20'
  }
]

const filter = ref('ទាំងអស់')
const filters = ['ទាំងអស់', 'ពិសេស']
const filtered = computed(() =>
  filter.value === 'ពិសេស' ? projects.filter(p => p.featured) : projects
)
</script>

<template>
  <section id="projects" class="py-24">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-center mb-12"
      >
        <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">ការងារ</p>
        <h2 class="text-3xl sm:text-4xl font-bold">គម្រោង</h2>
        <p class="text-muted mt-4 max-w-xl mx-auto">
          គម្រោងមួយចំនួនដែលខ្ញុំបានបង្កើត ចាប់ពីឧបករណ៍ Open Source រហូតដល់ផលិតផល SaaS។
        </p>

        <div class="flex justify-center gap-2 mt-6">
          <UButton
            v-for="f in filters"
            :key="f"
            :color="filter === f ? 'primary' : 'neutral'"
            :variant="filter === f ? 'solid' : 'ghost'"
            size="sm"
            @click="filter = f"
          >
            {{ f }}
          </UButton>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, i) in filtered"
          :key="project.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 400, delay: i * 80 } }"
        >
          <UCard class="h-full card-hover group relative overflow-hidden">
            <div :class="['absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br', project.color]" />
            <div class="relative">
              <div class="flex items-start justify-between mb-3">
                <h3 class="font-bold text-lg">{{ project.title }}</h3>
                <UBadge v-if="project.featured" color="primary" variant="subtle" size="xs">
                  ពិសេស
                </UBadge>
              </div>
              <p class="text-sm text-muted leading-relaxed mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5 mb-4">
                <UBadge
                  v-for="tag in project.tags"
                  :key="tag"
                  color="neutral"
                  variant="subtle"
                  size="xs"
                >
                  {{ tag }}
                </UBadge>
              </div>
              <div class="flex items-center gap-2 pt-2 border-t border-border">
                <UButton
                  :to="project.github"
                  target="_blank"
                  icon="i-simple-icons-github"
                  color="neutral"
                  variant="ghost"
                  size="xs"
                >
                  កូដ
                </UButton>
                <UButton
                  v-if="project.demo"
                  :to="project.demo"
                  target="_blank"
                  icon="i-lucide-external-link"
                  color="primary"
                  variant="ghost"
                  size="xs"
                >
                  មើល Demo
                </UButton>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <div class="text-center mt-10">
        <UButton
          to="https://github.com/movvoreach"
          target="_blank"
          color="neutral"
          variant="outline"
          icon="i-simple-icons-github"
          trailing-icon="i-lucide-arrow-right"
        >
          មើលទាំងអស់នៅ GitHub
        </UButton>
      </div>
    </div>
  </section>
</template>
