import { GetStaticProps } from 'next'
import { Event } from '@interfaces/index';
import Layout from '@components/Layout'
import content from '@contents/positions.json'

type Props = {
  positions: Event[]
}

export const getStaticProps: GetStaticProps = async () => {
  const positions: Event[] = content.positions
  return { props: { positions } }
}

export default function Page({ positions }: Props) {
  return <Layout title="Positions" id="positions">
    <p>Besides my freelance work since 2009 as a front-end developer, back-end developer (for WordPress and other PHP-based CMSs), art director, and content writer for many customers, here are some of my key positions:</p>
    <div className="timeline">
      {positions.map((position, k) => (
        <div className="event" key={k}>
          <p className="small">{position.dates}</p>
          <h2>{position.title}</h2>
          <h3>{position.institution}</h3>
          <p>{position.description}</p>
        </div>
      ))}
    </div>
  </Layout>
}
