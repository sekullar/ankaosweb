import "../css/main.css"
import "../css/download.css"

const Download = () => {
    return(
        <>
            <div className="mw-2100px">
                <div className="px-24 py-24 flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <p className="space-grotesk-700 text-6xl">Beğendiniz mi?</p>
                        <p className="space-grotesk-400 text-2xl opacity-80">Sitemize uğradığın için teşekkürler, seni de AnkaOS'a bekleriz. Hızlı bir indirme hızı deneyimi almak için* lütfen <br /> önerilen indirme bağlantısını kullan.</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <a href="#" className="px-32 bg-black rounded-lg text-white space-grotesk-700 text-2xl h-[55px] flex items-center">Önerilen indirme bağlantısını kullan</a>
                        <a href="#" className="px-20 border-black-special rounded-lg space-grotesk-400 text-xl h-[55px] flex items-center ms-8">Farklı bağlantı kullan</a>
                    </div>
                    <p className="mt-4 opacity-50 text-lg space-grotesk-400">* İnternet hızınıza bağlı aldığınız deneyim değişebilir. Eğer önerilen bağlantı hızlı değilse başka bir bağlantı seçin.</p>
                </div>
            </div>
        </>
    )
}

export default Download