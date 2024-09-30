import AnkaOSImg from "../images/Vector.svg"
import "../css/main.css"
import "../css/header.css"


const Header = () =>  {
    return(
        <>
            <div className="flex justify-between items-center p-8 mw-2100px" id="header">
                <img src={AnkaOSImg} className="w-[40px] h-[40px] object-contain" alt="AnkaOS" />
                <div className="flex items-center gap-5">
                    <a href="#download" className="inter-400 text-lg text-white">İndir</a>
                    <a href="#producers" className="inter-400 text-lg text-white">Destekçiler</a>
                    <a href="#footer" className="inter-400 text-lg text-white">İletişim</a>
                </div>
            </div>
        </>
    )
}

export default Header
