import React, {ReactNode} from "react";

function Card({title, children, showExpandButton}: {title: string, children: ReactNode, showExpandButton: boolean}) {
    return (
        <div className={'app-card'}>
            <div className={'app-card__heading'}>
                {title}

                {showExpandButton ?
                    <a className={'psv-card__expand'} href="workflow-stage">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4H15C15.5523 4 16 4.44772 16 5V10M10 16H5C4.44772 16 4 15.5523 4 15V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>
                    </a>
                    : null}
            </div>
            <div className={'app-card__contents'}>
                {children}
            </div>
        </div>
    )
}

export default Card;
