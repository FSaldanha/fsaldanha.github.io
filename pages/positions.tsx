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
    <p>Besides my freelancer work since 2009 as front-end developer, back-end developer (for WordPress and other PHP-based CMSs), art director and content writer for a variety of customers, here are some of my main positions:</p>
    <div className="timeline">
      {positions.map((position) => (
        <div className="event">
          <p className="small">{position.dates}</p>
          <h2>{position.title}</h2>
          <h3>{position.institution}</h3>
          <p>{position.description}</p>
        </div>
      ))}
    </div>
  </Layout>
}
