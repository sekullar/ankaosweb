import CommentsInside from "../components/CommentsInside"
import "../css/main.css"
import "../css/comments.css"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer'; 
import { useState } from "react"

const CommentsSide = () => {

    const { ref, inView } = useInView({
        threshold: 0.3,
    });
    

    const [hasAnimated, setHasAnimated] = useState(false);

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return(
        <>
        <motion.div ref={ref} animate={{ opacity: hasAnimated ? 1 : 0 }} transition={{ duration: 1 }}  className="mw-2100px p-12 py-36 pb-20">
            <div className="flex flex-col gap-3 mb-8 m-special">
                <p className="text-white space-grotesk-700 text-4xl">Bunları biz söylemiyoruz.</p>
            </div>
            <CommentsInside/>
        </motion.div>
        </>
    )
}

export default CommentsSide