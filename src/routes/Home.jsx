import About from "./About"
import Download from "./Download"
import Guide from "./Guide"
import Landing from "./Landing"
import Orders from "./Orders"
import Wallet from "./Wallet"

const Home = () => {
  return (
    <div>
        <Landing />
        <About />
        <Wallet />
        <Orders />
        <Guide />
        <Download />
    </div>
  )
}

export default Home
