import CommentsInside from "../components/CommentsInside"
import "../css/main.css"
import "../css/comments.css"

const CommentsSide = () => {
    return(
        <>
        <div className="mw-2100px p-12 py-36 pb-20">
            <div className="flex flex-col gap-3 mb-8 m-special">
                <p className="text-white space-grotesk-700 text-4xl">Bunları biz söylemiyoruz.</p>
            </div>
            <CommentsInside/>
        </div>
        </>
    )
}

export default CommentsSide