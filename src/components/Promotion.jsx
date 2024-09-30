import EmojiWink from "../images/emoji-wink.svg"
import EmojiKiss from "../images/emoji-kiss.svg"

const Promotion = () => {
    return(
        <>
            <div className="flex items-center justify-between px-12 py-36 mw-2100px">
                <div className="flex flex-col">
                    <img src={EmojiWink} className="w-[65px] h-[65px] object-contain mb-4" alt="EmojiWink" />
                    <p className="text-4xl space-grotesk-700 mb-2">Kararlı</p>
                    <p className="space-grotesk-400 text-xl opacity-50">Tabanımız olan [distro]; size sorunsuz, kararlı bir deneyim sunar.</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src={EmojiKiss} className="w-[65px] h-[65px] object-contain mb-4" alt="EmojiWink" />
                    <p className="text-4xl space-grotesk-700 mb-2">Performanslı</p>
                    <p className="space-grotesk-400 text-xl opacity-50 text-center">İşinize yaramayacak uygulamaları cihazınıza yerleştirmiyoruz.</p>
                </div>
                <div className="flex flex-col items-end">
                    <img src={EmojiWink} className="w-[65px] h-[65px] object-contain mb-4" alt="EmojiWink" />
                    <p className="text-4xl space-grotesk-700 mb-2">Kullanışlı</p>
                    <p className="space-grotesk-400 text-xl opacity-50 text-end">Arayüzümüz kolaydır, bir tuş için birden fazla yere seyahat etmezsiniz.</p>
                </div>
            </div>
        </>
    )
}

export default Promotion