import "../css/requirement.css"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'; 
import { useState } from "react"

const Requirement = () => {

    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    

    const [hasAnimated, setHasAnimated] = useState(false);

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return(
        <>  
            <motion.div ref={ref} animate={{ opacity: hasAnimated ? 1 : 0 }} transition={{ duration: 1 }}  className="flex items-center py-24 px-8 justify-around">
                <div className="flex flex-col">
                    <p className="text-white space-grotesk-700 text-4xl">Asgari sistem özellikleri</p>
                    <div className="flex-col flex mt-3 gap-1">
                        <p className="theme-gray-font space-grotesk-400 text-xl">RAM: 1GB</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">İşlemci: [işlemci]</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">Depolama (HDD/SSD):10GB</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">Ekran Kartı: Gömülü ekran kartı</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">Ses Kartı: Herhangi bir ses kartı</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-white space-grotesk-700 text-4xl">Önerilen sistem özellikleri</p>
                    <div className="flex-col flex mt-3 gap-1">
                        <p className="theme-gray-font space-grotesk-400 text-xl">RAM: 4GB</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">İşlemci: [işlemci]</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">Depolama (HDD/SSD):50GB</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl" >Ekran Kartı: Harici NVIDIA ekran kartı</p>
                        <p className="theme-gray-font space-grotesk-400 text-xl">Ses Kartı: Herhangi bir ses kartı</p>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Requirement