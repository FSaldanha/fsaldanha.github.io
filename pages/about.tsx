import Layout from '@components/Layout'
import Obfuscate from 'react-obfuscate'

export default function Page() {
  return <Layout title="About" page="about">
    <div className="photo">
      <img src="/photo.jpg" alt="Felipe Saldanha" />
    </div>
    <div className="text">
      <p>Hi there.</p>
      <p>I am a freelance front-end developer based in São Paulo, Brazil. My top skills are <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>SQL</strong>, <strong>WordPress</strong> and <strong>React</strong>.</p>
      <p>Recently, I worked as Educational Technology Analyst and Consultant in Communication, developing and updating websites and hypertext resources, besides managing digital media.</p>
      <p>I am also a graphic designer, content writer, and researcher. I have an undergraduate degree in Journalism, an MBA in Marketing, and a PhD in Communication Sciences.</p>
      <h2>Reach me</h2>
      <p className="btn-list">
        <a className="btn" href="https://github.com/FSaldanha" target="_blank"><img src="/github.svg" /> GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/fsaldanha/?locale=en_US" target="_blank"><img src="/linkedin.svg" /> LinkedIn</a>
        <a className="btn" href="https://www.behance.net/fsaldanha" target="_blank"><img src="/behance.svg" /> Behance</a>
        <a className="btn" href="https://stackoverflow.com/users/7724384/felipe-saldanha" target="_blank"><img src="/stackoverflow.svg" /> Stack Overflow</a>
        <Obfuscate
          className="btn"
          obfuscateChildren={false}
          email="fgsaldanha@gmail.com"
          headers={{
            subject: '[Front-end dev]'
          }}
        >
          <img src="/envelope.svg" /> Email
        </Obfuscate>
      </p>
      <h2>Credits</h2>
      <p>I designed and developed this website with <a href="http://nextjs.org/" target="_blank">Next.JS</a>. Animation of the home page by <a href="https://lottiefiles.com/39998-web-development" target="_blank">Jignesh Gajjar on Lottie Files</a>. Icons by <a href="http://fontawesome.io/" target="_blank">FontAwesome</a> and <a href="https://www.freepik.com/" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>.</p>
    </div>
  </Layout>
}
