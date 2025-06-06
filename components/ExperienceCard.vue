<template>
  <div ref="cardRef" :class="{ 'fade-in': isVisible }" class="fade-element">
  <UCard>
    <div>
      {{ props.experience.title }} ({{ props.experience.period }})
    </div>
    <ContentRenderer :excerpt="excerpt" :value="experience" class="prose max-w-none mt-12" />
    <UButton
      :label="item.label"
      size="md"
      color="neutral"
      variant="outline"
    @click="update"/>

  </UCard>
  </div>
</template>

<script setup lang="ts">
import type { MarkdownRoot } from '@nuxt/content';
import type { AccordionItem } from '@nuxt/ui/.';

const cardRef = ref(null);
const isVisible = ref(false)
const excerpt = ref(true)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  if (cardRef.value) {
    observer.observe(cardRef.value);
  }
});

const update = () => {
  excerpt.value = !excerpt.value

}


const props = defineProps<{
  experience: {
    id: string
    title: string
    period: string
    role: string
    // description: string
    body: MarkdownRoot
  },
}>()

const item = computed<AccordionItem>(() => ({
  label: excerpt.value  ? `担当フェーズ・使用技術など` : '閉じる',
  // defaultOpen: false,
}))
</script>

<style>
.fade-element {
  opacity: 0;
  transition: opacity 2s ease-in-out;
}
.fade-in {
  opacity: 1;
}
</style>