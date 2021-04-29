import { GetStaticProps } from 'next'
import { Event } from '@interfaces/index';
import Layout from '@components/Layout'
import content from '@contents/education.json'

type Props = {
  education: Event[]
}

export const getStaticProps: GetStaticProps = async () => {
  const education: Event[] = content.education
  return { props: { education } }
}

export default function Page({ education }: Props) {
  return <Layout title="Education" id="education">
    <div className="timeline">
      {education.map((course) => (
        <div className="event">
          <p className="small">{course.dates}</p>
          <h2>{course.title}</h2>
          <h3>{course.institution}</h3>
        </div>
      ))}
    </div>
  </Layout>
}
