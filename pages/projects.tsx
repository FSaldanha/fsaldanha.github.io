import { GetStaticProps } from 'next'
import Layout from '@components/Layout'
import content from '@contents/projects.json'

type Project = {
  title?: string
  url?: string
  description?: string
}

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: Project[] = content.projects;
  return { props: { projects } }
}

export default function Page({ projects }: Props) {
  return <Layout title="Projects" id="projects">
    {projects.map((project) => (
      <div className="card">
        <p>
          <a href={project.url} target="_blank"><strong>{project.title}</strong><br />
            {project.description}</a>
        </p>
      </div>
    ))}
    <p>Also, the site where you are is open sourced and its code is <a href="https://github.com/FSaldanha/fsaldanha.github.io" target="_blank">available on GitHub</a>. It was made with Next.JS.</p>
  </Layout>
}