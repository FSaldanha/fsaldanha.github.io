import Layout from '@components/Layout'
import animationData from "../assets/animation.json"
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
        src={animationData}
      />
    </div>
  </Layout>
}