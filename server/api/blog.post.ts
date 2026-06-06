import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

interface BlogBody {
  title?: string
  description?: string
  category?: string
  content?: string
}

function cleanText(value: string) {
  return value.trim().replace(/\s+/g, ' ')
}

function escapeYaml(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function estimateReadTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

export default defineEventHandler(async (event) => {
  const body = await readBody<BlogBody>(event)
  const title = cleanText(body.title || '')
  const description = cleanText(body.description || '')
  const category = cleanText(body.category || 'Community')
  const content = (body.content || '').trim()

  if (!title || !description || !content) {
    throw createError({ statusCode: 400, message: 'Title, description, and content are required.' })
  }

  if (title.length > 120) {
    throw createError({ statusCode: 400, message: 'Title must be 120 characters or less.' })
  }

  if (description.length > 240) {
    throw createError({ statusCode: 400, message: 'Description must be 240 characters or less.' })
  }

  const date = new Date().toISOString().slice(0, 10)
  const slug = slugify(title) || `post-${Date.now()}`
  const fileName = `${date}-${slug}.md`
  const blogDir = join(process.cwd(), 'content', 'blog')
  const postPath = join(blogDir, fileName)
  const markdown = `---
title: "${escapeYaml(title)}"
description: "${escapeYaml(description)}"
date: ${date}
category: "${escapeYaml(category)}"
readTime: "${estimateReadTime(content)}"
---

# ${title}

${content.replace(/<script/gi, '&lt;script')}
`

  await mkdir(blogDir, { recursive: true })
  await writeFile(postPath, markdown, { flag: 'wx' })

  return {
    success: true,
    path: `/blog/${fileName.replace(/\.md$/, '')}`
  }
})
