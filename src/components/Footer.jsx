import "../css/main.css"

const Footer = () => {
    return(
        <>
            <div className="flex flex-col p-8" id="footer">
                <p className="space-grotesk-700 text-4xl relative">anka <span className="absolute space-grotesk-400">os</span> </p>
                <p className="opacity-50 space-grotesk-400 text-xl">Yerli malı, el emeği ile hazırlanmış <br />Linux distrosu.</p>
                <p className="mt-3 space-grotesk-400 text-xl">Daha fazla bilgi almak için lütfen ziyaret et:</p>
                <div className="flex items-center gap-8">
                    <a href="https://www.instagram.com/ankalinuxx?igsh=bmp6dmFqamh0dGRm"target="_blank" className="font-theme-3">@ankalinuxx</a>
                    <a href="https://youtube.com/@ankalinuxos?si=GdkcK6Ek2Ge9f8r0" target="_blank" className="font-theme-3">ankaos</a>
                    <a href="https://x.com/ankalinuxx" target="_blank" className="space-grotesk-400 font-theme-3">(X)<span>ankalinuxx</span></a>
                </div>
            </div>
        </>
    )
}

export default Footer