import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectsDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectBySlug({ slug, fields = [] }) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects({ fields = [] }) {
  const slugs = getProjectSlugs()
  const projects = slugs
    .map((slug) => getProjectBySlug({slug, fields}))
    .sort((project1, project2) => (project1.date > project2.date ? '-1' : '1'))
    .filter(project => project.comingSoon !== true)
  return projects
}
