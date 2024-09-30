import Header from "./Header"
import "../css/main.css"
import Article from "./Article"
import Promotion from "./Promotion"
import CommentsSide from "./Comments"
import Producers from "./Producers"
import Download from "./Downlaod"
import Requirement from "./Requirement"
import Footer from "./Footer"

const Main = () => {
    return(
        <>
        <div className="bg-theme-dark">
            <Header/>
            <Article/>
        </div>
        <Promotion/>
        <div className="bg-theme-dark">
            <CommentsSide/>
            <Producers/>
        </div>
        <Download/>
        <div className="bg-theme-dark">
            <Requirement/>
        </div>
        <Footer/>
        </>
    )
} 

export default Main