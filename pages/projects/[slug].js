import ErrorPage from 'next/error'
import { useRouter } from 'next/router'

import markdownToHtml from '../../lib/markdownToHtml'
import { getProjectBySlug, getAllProjects } from '../../lib/api'

export default function Project({ project }) {
  const router = useRouter()

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: project.content }}/>
  )
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug({
    slug: params.slug,
    fields: ['title', 'date', 'slug', 'content'],
  })

  const content = await markdownToHtml({ markdown: project.content || ''})

  return {
    props: {
      project: {
        ...project,
        content
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects({fields: ['slug', 'comingSoon']})

  return {
    paths: projects.map(({ slug }) => {
      return {
        params: {
          slug
        }
      }
    }),
    fallback: false,
  }
}
