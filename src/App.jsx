import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Stats from "./component/Stats";
import CreateAccount from "./component/CreateAccount";
import Pricing from "./component/Pricing"
import Workflow from "./component/Workflow"
import Footer from "./component/Footer"

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Banner></Banner>
       <Stats></Stats>
       <CreateAccount></CreateAccount>
       <Pricing></Pricing>
       <Workflow></Workflow>
       <Footer></Footer>
    </>
  )
}

export default App;
