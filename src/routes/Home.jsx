import About from "./About"
import Download from "./Download"
import Guide from "./Guide"
import Landing from "./Landing"
import Orders from "./Orders"
import Wallet from "./Wallet"

const Home = () => {
  return (
    <div>
        <Landing  id="Landing" />
        <About  id="About"/>
        <Wallet  id="Wallet"/>
        <Orders  id="Orders"/>
        <Guide  id="Guide"/>
        <Download  id="Download"/>
    </div>
  )
}

export default Home
