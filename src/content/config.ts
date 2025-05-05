import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number(),
  })
});

const insightsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    publishDate: z.date(),
  })
});

const navCollection = defineCollection({
  type: 'content', // o 'data' si prefieres archivos JSON o YAML
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number().optional(),
    isExternal: z.boolean().optional().default(false),
    highlight: z.boolean().optional().default(false),
    description: z.string().optional()
  })
});

const footerConfig = defineCollection({
  type: 'content',
  schema: z.object({
    bgColor: z.string(),
    textColor: z.string(),
    borderColor: z.string(),
    textSecondaryColor: z.string(),
    copyright: z.string(),
  }),
});

const footerColumns = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    type: z.enum(['about', 'links']),
    description: z.string(),
    links: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      })
    ),
  }),
});

export const collections = {
  'services': servicesCollection,
  'insights': insightsCollection,
  'nav': navCollection,
  'config': footerConfig,
  'footer': footerColumns,
};