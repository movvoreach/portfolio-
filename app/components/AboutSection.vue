<script setup lang="ts">
const highlights = [
  { icon: 'i-lucide-map-pin', label: 'ទីតាំង', value: 'កម្ពុជា / ពីចម្ងាយ' },
  { icon: 'i-lucide-briefcase', label: 'តួនាទី', value: 'អ្នកអភិវឌ្ឍន៍ Full Stack' },
  { icon: 'i-lucide-graduation-cap', label: 'ផ្តោតលើ', value: 'កម្មវិធីវេប និង API' },
  { icon: 'i-lucide-heart', label: 'ចូលចិត្ត', value: 'UI ស្អាត និងឧបករណ៍មានប្រយោជន៍' }
]
</script>

<template>
  <section
    id="about"
    class="py-24"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
        >
          <p class="text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">
            អំពីខ្ញុំ
          </p>
          <h2 class="text-3xl sm:text-4xl font-bold mb-6">
            ខ្ញុំគឺ Mov Voreach អ្នកអភិវឌ្ឍន៍ដែលបង្កើតផលិតផលឌីជីថលមានប្រយោជន៍
          </h2>
          <div class="space-y-4 text-muted leading-relaxed">
            <p>
              ខ្ញុំឈ្មោះ Mov Voreach ឬ VoReach ជា​អ្នកអភិវឌ្ឍន៍ Full Stack ដែលផ្តោតលើការបង្កើតគេហទំព័រទំនើប កម្មវិធីវេប និង API ដែលអាចទុកចិត្តបាន។ ខ្ញុំចូលចិត្តបម្លែងគំនិតទៅជាផលិតផលដែលលឿន មានប្រយោជន៍ និងងាយប្រើ។
            </p>
            <p>
              ការងាររបស់ខ្ញុំរួមមានការបង្កើតផ្នែកមុខជាមួយ Vue, Nuxt, React, TypeScript និង Tailwind CSS ព្រមទាំងប្រព័ន្ធ Backend ជាមួយ Node.js, PHP, Database, Authentication និងដំណើរការ Deploy។ ខ្ញុំយកចិត្តទុកដាក់លើកូដស្អាត រចនាសម្ព័ន្ធច្បាស់ និងបទពិសោធន៍អ្នកប្រើប្រាស់រលូន។
            </p>
            <p>
              ខ្ញុំតែងតែបង្កើនជំនាញ រៀនវិធីដោះស្រាយបញ្ហាឱ្យកាន់តែល្អ និងបង្កើតគម្រោងដែលជួយឱ្យមនុស្សធ្វើការបានលឿន និងទំនាក់ទំនងតាមអនឡាញបានប្រសើរជាងមុន។
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-8">
            <div
              v-for="item in highlights"
              :key="item.label"
              class="flex items-start gap-3"
            >
              <div class="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon
                  :name="item.icon"
                  class="w-4 h-4 text-primary-500"
                />
              </div>
              <div>
                <p class="text-xs text-muted">
                  {{ item.label }}
                </p>
                <p class="text-sm font-medium">
                  {{ item.value }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 40 }"
          :visible="{ opacity: 1, x: 0, transition: { duration: 600 } }"
          class="space-y-4"
        >
          <UCard class="card-hover">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                <UIcon
                  name="i-lucide-building-2"
                  class="w-6 h-6 text-primary-500"
                />
              </div>
              <div>
                <p class="font-semibold">
                  អ្នកអភិវឌ្ឍន៍ Full Stack - គម្រោង Portfolio
                </p>
                <p class="text-sm text-muted">
                  បច្ចុប្បន្ន
                </p>
                <p class="text-sm text-muted mt-1">
                  បង្កើតគេហទំព័រ Responsive, Dashboard និងកម្មវិធីដែលប្រើ API។
                </p>
              </div>
            </div>
          </UCard>

          <UCard class="card-hover">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <UIcon
                  name="i-lucide-building"
                  class="w-6 h-6 text-blue-500"
                />
              </div>
              <div>
                <p class="font-semibold">
                  ការអភិវឌ្ឍន៍ Frontend
                </p>
                <p class="text-sm text-muted">
                  Vue, Nuxt, React
                </p>
                <p class="text-sm text-muted mt-1">
                  បង្កើត UI ស្អាត ដោយប្រើ Component ដែលអាចប្រើឡើងវិញបាន និង Layout ដែលសមស្របគ្រប់ទំហំអេក្រង់។
                </p>
              </div>
            </div>
          </UCard>

          <UCard class="card-hover">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                <UIcon
                  name="i-lucide-laptop"
                  class="w-6 h-6 text-purple-500"
                />
              </div>
              <div>
                <p class="font-semibold">
                  ការអភិវឌ្ឍន៍ Backend និង API
                </p>
                <p class="text-sm text-muted">
                  Node.js, PHP, Databases
                </p>
                <p class="text-sm text-muted mt-1">
                  បង្កើត Logic ខាង Server មុខងារ Database និងការភ្ជាប់ប្រព័ន្ធសម្រាប់ផលិតផលពិត។
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </section>
</template>
