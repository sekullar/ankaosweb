import "../css/article.css"

const Article = () => {
    return(
        <>
            <div id="article">
                <div className="flex items-center flex-col justify-center relative h-full">
                    <p className="text-white space-grotesk-700 text-5xl">El emeği, göz nuru!</p>
                    <p className="text-white opacity-50 space-grotesk-400 mt-4 text-2xl">Yerli, kullanımı kolay, basit bir distro. İndirin, kurun ve kalitenin keyfine bakın.</p>
                    <div className="flex items-center mt-4 gap-4">
                        <a href="#" className="bg-white text-2xl py-3 px-8 rounded-md  space-grotesk-700">Hemen indir</a>
                        <a href="#" className="border-white text-2xl text-white border-2 padding-y-special px-8 rounded-md space-grotesk-700">Dökümantasyon</a>
                    </div>
                    <p className="absolute bottom-0 mb-7 inter-400 text-2xl text-white opacity-50">Burada bitmiyor, aşağı kaydır!</p>
                </div>
            </div>
        </>
    )
} 

export default Article