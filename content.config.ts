// nuxt/contentを使う時に利用するファイル。今は対象外としているので本当は不要
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Export collections
export default defineContentConfig({
  collections: {
    // Define collection using `defineCollection` utility
    content: defineCollection({
      // Specify the type of content in this collection
      type: 'page',
      // Load every file matching this pattern
      source: '**/*.md',
      // Define custom schema for this collection
      schema: z.object({
        excerpt: z.object({
          type: z.string(),
          children: z.any(),
        }),
        date: z.date(),
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        badge: z.object({
          label: z.string(),
          color: z.string()
        }),
        period: z.string(),
        role:z.string(),
        company: z.string(),
        group: z.string(),
        mystatus: z.string(),
      })
    }),
  }
})