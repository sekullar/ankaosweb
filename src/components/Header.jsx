import AnkaOSImg from "../images/Vector.svg"
import "../css/main.css"


const Header = () =>  {
    return(
        <>
        <div className="flex justify-between items-center p-8 mw-2100px ">
            <img src={AnkaOSImg} className="w-[40px] h-[40px] object-contain" alt="AnkaOS" />
            <div className="flex items-center gap-5">
                <a href="#" className="inter-400 text-lg text-white">İndir</a>
                <a href="#" className="inter-400 text-lg text-white">Destekçiler</a>
                <a href="#" className="inter-400 text-lg text-white">İletişim</a>
            </div>
        </div>
        </>
    )
}

export default Header
