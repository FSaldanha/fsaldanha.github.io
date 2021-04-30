import Layout from '@components/Layout'
import { Player } from '@lottiefiles/react-lottie-player';

export default function Page() {
  return <Layout id="home">
    <div className="information">
      <h1>Felipe Saldanha</h1>
      <h2>Front-end developer</h2>
    </div>
    <div className="illustration">
      <Player
        autoplay
        loop
        src="/animation.json"
      />
    </div>
  </Layout>
}