<script setup lang="ts">
const roles = ['អ្នកអភិវឌ្ឍន៍ Full Stack', 'អ្នករៀបចំ API', 'អ្នកគ្រប់គ្រង DevOps', 'អ្នកចូលរួម Open Source']
const currentRole = ref(0)
const displayText = ref('')
const isDeleting = ref(false)

onMounted(() => {
  let timeout: ReturnType<typeof setTimeout>

  const type = () => {
    const current = roles[currentRole.value]
    if (!isDeleting.value) {
      displayText.value = current.slice(0, displayText.value.length + 1)
      if (displayText.value === current) {
        isDeleting.value = true
        timeout = setTimeout(type, 1800)
        return
      }
    } else {
      displayText.value = current.slice(0, displayText.value.length - 1)
      if (displayText.value === '') {
        isDeleting.value = false
        currentRole.value = (currentRole.value + 1) % roles.length
      }
    }
    timeout = setTimeout(type, isDeleting.value ? 60 : 100)
  }

  type()
  onUnmounted(() => clearTimeout(timeout))
})
</script>

<template>
  <section class="relative min-h-screen flex items-center hero-glow pt-16">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <UBadge
            color="primary"
            variant="subtle"
            class="mb-6"
          >
            <span class="mr-1.5 inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            អាចទទួលការងារថ្មី
          </UBadge>

          <h1 class="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-4">
            សួស្តី ខ្ញុំគឺ
            <span class="gradient-text block">VoReach</span>
          </h1>

          <div class="h-10 mb-6">
            <p class="text-xl sm:text-2xl text-muted font-medium">
              <span>{{ displayText }}</span>
              <span class="animate-pulse text-primary-500">|</span>
            </p>
          </div>

          <p class="text-lg text-muted leading-relaxed mb-8 max-w-lg">
            ខ្ញុំបង្កើតកម្មវិធីវេប និង API ដែលមានគុណភាព ស្ថេរភាព និងអាចពង្រីកបាន។ ខ្ញុំចូលចិត្តស្ថាបត្យកម្មកូដស្អាត បទពិសោធន៍អ្នកអភិវឌ្ឍន៍ល្អ និងការបង្កើតផលិតផលដែលប្រើបានយូរ។
          </p>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="#projects"
              size="lg"
              color="primary"
              trailing-icon="i-lucide-arrow-right"
            >
              មើលគម្រោង
            </UButton>
            <UButton
              to="#contact"
              size="lg"
              color="neutral"
              variant="outline"
            >
              ទាក់ទងមកខ្ញុំ
            </UButton>
            <UButton
              to="/resume.pdf"
              target="_blank"
              size="lg"
              color="neutral"
              variant="ghost"
              icon="i-lucide-download"
            >
              ប្រវត្តិរូប
            </UButton>
          </div>

          <div class="flex items-center gap-6 mt-10">
            <div class="text-center">
              <p class="text-2xl font-bold">
                1+
              </p>
              <p class="text-sm text-muted">
                ឆ្នាំបទពិសោធន៍
              </p>
            </div>
            <div class="w-px h-10 bg-border" />
            <div class="text-center">
              <p class="text-2xl font-bold">
                50+
              </p>
              <p class="text-sm text-muted">
                គម្រោង
              </p>
            </div>
            <div class="w-px h-10 bg-border" />
            <div class="text-center">
              <p class="text-2xl font-bold">
                30+
              </p>
              <p class="text-sm text-muted">
                អតិថិជន
              </p>
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
          class="flex justify-center"
        >
          <div class="relative">
            <div class="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary-400/20 to-primary-600/20 border border-primary-500/20 flex items-center justify-center">
              <div class="w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary-500/10 to-orange-500/10 border border-primary-400/30 flex items-center justify-center overflow-hidden">
                <UIcon
                  name="i-lucide-code-2"
                  class="w-32 h-32 text-primary-500/40"
                />
              </div>
            </div>

            <div class="absolute -top-4 -right-4 bg-background border border-border rounded-xl p-3 shadow-lg">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-500" />
                <span class="text-xs font-medium">ទទួលការងារពីចម្ងាយ</span>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 bg-background border border-border rounded-xl p-3 shadow-lg">
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-zap"
                  class="w-4 h-4 text-primary-500"
                />
                <span class="text-xs font-medium">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <UIcon
          name="i-lucide-chevrons-down"
          class="w-6 h-6 text-muted"
        />
      </div>
    </div>
  </section>
</template>
