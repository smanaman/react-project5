import Card from "../component/Card"
import Nav from "../component/Nav"
import Proudect from "../component/Proudect"
import ProudectSlider from "../component/ProudectSlider"
import Scroll from "../component/scroll"
import './Home.css'
function Home() {
   return(
    <>
    <Nav/>
    <Scroll/>
    <Card/>
    <Proudect/>
   <ProudectSlider/>
    </>
   ) 
}
export default Home