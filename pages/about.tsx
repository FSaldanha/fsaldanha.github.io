import Layout from '@components/Layout'

export default function Page() {
  return <Layout title="About" id="about">
    <div className="photo">
      <img src="/photo.jpg" alt="Felipe Saldanha" />
    </div>
    <div className="text">
      <p>Hi there.</p>
      <p>I am a freelancer front-end developer, based in São Paulo (Brazil). My main skills are <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>SQL</strong>, <strong>WordPress</strong> and <strong>React</strong>.</p>
      <p>Recently, I worked as Educational Technology Analyst and Consultant in Communication, developing and updating sites and hypertext resources, besides managing digital media.</p>
      <p>I am also a graphic designer, content writer and researcher. I have an Undergraduate degree in Journalism, an MBA in Marketing and I am a PhD Candidate in Communication Sciences.</p>
      <h2>Reach me</h2>
      <p className="btn-list">
        <a className="btn" href="https://github.com/FSaldanha" target="_blank"><img src="/github.svg" /> GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/fsaldanha/?locale=en_US" target="_blank"><img src="/linkedin.svg" /> LinkedIn</a>
        <a className="btn" href="mailto:contato@fsaldanha.com.br?subject=[Front-end dev]" target="_blank"><img src="/envelope.svg" /> Email</a>
      </p>
      <h2>Credits</h2>
      <p>This site was designed and developed with Next.JS by me, Felipe Saldanha. Animation of home page by <a href="https://lottiefiles.com/39998-web-development" target="_blank">Jignesh Gajjar on Lottie Files</a>. Icons by <a href="http://fontawesome.io/" target="_blank">FontAwesome</a> and <a href="https://www.freepik.com/" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank">Flaticon</a>.</p>
    </div>
  </Layout>
}
