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
    <p>Also, the website where you are is open source, and its code is <a href="https://github.com/FSaldanha/fsaldanha.github.io" target="_blank">available on GitHub</a>. It uses <a href="http://nextjs.org/" target="_blank">Next.JS</a>.</p>
  </Layout>
}