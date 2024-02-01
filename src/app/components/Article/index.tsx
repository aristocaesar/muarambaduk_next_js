import classNames from "classnames";
import { ReactNode } from "react";

interface ArticleProps {
    isContent? : true
    children : ReactNode
}

const Article : React.FC<ArticleProps> = (props) => {
    return <div className="flex justify-center py-8 md:py-24 w-full">
    <div className="container flex justify-center text-cod-gray-950 w-full">
        <article className={classNames('text-md md:text-lg w-full', {
            'space-y-8' : props.isContent
        })}>
            {props.children}
        </article>
    </div>
</div>
}

export default Article;