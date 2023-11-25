import React from "react";

type TMarker = React.SVGProps<SVGSVGElement> & {
    fill?: string
}

export const Marker = ({ fill = "#5A6ACF", ...props }: TMarker) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none" {...props}>
            <circle cx="5.79969" cy="6.5575" r="5.79969" fill={fill} />
        </svg>
    )

}