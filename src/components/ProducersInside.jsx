import "../css/main.css"
import "../css/producers.css"
import topalemirfarukPp from "../images/topalemirfaruk.svg"
import oneweekPp from "../images/1week.svg"
import ediatiraPp from "../images/ediatira.svg"
import ryatresPp from "../images/ryatres.svg"
import novadarwin6462Pp from "../images/novadarwin6462.svg"
import sekullarxPp from "../images/sekullarx.svg"
import vastsea0 from "../images/vastsea0.svg"

const ProducersInside = () => {
    return(
        <>
        <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={topalemirfarukPp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">topalemirfaruk</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Proje Yöneticisi, Yapımcı</p>
                        </div>
                    </div>
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={oneweekPp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">1week.sh</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Proje ve Github Depo Yöneticisi, Yapımcı</p>
                        </div>
                    </div>
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={ediatiraPp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">ediatira.b</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Tasarımcı</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={vastSea} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">VastSea0</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Rust ve Web Geliştirici</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={ryatresPp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">ryatres</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Tasarımcı</p>
                        </div>
                    </div>
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={novadarwin6462Pp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">novadarwin6462</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Github depo yöneticisi</p>
                        </div>
                    </div>
                    <div className="flex items-center  border-gray-special bg-theme-dark-2 px-6 py-10 w-[560px] mw-560px rounded-lg gap-6">
                        <img src={sekullarxPp} className="w-[100px] object-contain h-[100px]" alt="Profil Photos" />
                        <div className="flex flex-col">
                            <p className="text-white space-grotesk-700 text-3xl gap-3">sekullarx</p>
                            <p className="space-grotesk-400 text-[22px] text-white">Front-End Yazılımcı</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProducersInside
