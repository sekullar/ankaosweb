import ProducersInside from "./ProducersInside"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'; 
import { useState } from "react"

const Producers = () => {

    const { ref, inView } = useInView({
        threshold: 0.4,
    });
    

    const [hasAnimated, setHasAnimated] = useState(false);

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return(
        <>
            <motion.div ref={ref} animate={{ opacity: hasAnimated ? 1 : 0 }} transition={{ duration: 1 }} className="mw-2100px p-12 py-20" id="producers">
            <div className="flex flex-col gap-3 mb-8 m-special">
                <p className="text-white space-grotesk-700 text-4xl">El ele hep birlikte.</p>
            </div>
            <ProducersInside/>
        </motion.div>
        </>
    )
}

export default Producers