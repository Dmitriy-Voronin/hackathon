import React from 'react'

export type TIcons = React.SVGProps<SVGSVGElement> & {
    [key: string]: React.ReactNode
}

export const Icons: TIcons = {
    'IconDashboard': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <g clipPath="url(#clip0_31_2284)">
            <path d="M9.99998 19.0002V14.0002H14V19.0002C14 19.5502 14.45 20.0002 15 20.0002H18C18.55 20.0002 19 19.5502 19 19.0002V12.0002H20.7C21.16 12.0002 21.38 11.4302 21.03 11.1302L12.67 3.60021C12.29 3.26021 11.71 3.26021 11.33 3.60021L2.96998 11.1302C2.62998 11.4302 2.83998 12.0002 3.29998 12.0002H4.99998V19.0002C4.99998 19.5502 5.44998 20.0002 5.99998 20.0002H8.99998C9.54998 20.0002 9.99998 19.5502 9.99998 19.0002Z" fill="#50B848" />
        </g>
        <defs>
            <clipPath id="clip0_31_2284">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    'SearchIcon': <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
        <circle cx="5" cy="5.62402" r="4.3" stroke="#2B3674" strokeWidth="1.4" />
        <line x1="10.0101" y1="11.624" x2="8" y2="9.61397" stroke="#2B3674" strokeWidth="1.4" strokeLinecap="round" />
    </svg>,
    'notifications_none': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path d="M19.29 14.685L18 13.6617V9.69557C18 7.26036 16.36 5.22176 13.5 4.68236V4.14297C13.5 3.48459 12.83 2.95312 12 2.95312C11.17 2.95312 10.5 3.48459 10.5 4.14297V4.68236C7.62999 5.22176 5.99999 7.25242 5.99999 9.69557V13.6617L4.70999 14.685C4.07999 15.1847 4.51999 16.0414 5.40999 16.0414H18.58C19.48 16.0414 19.92 15.1847 19.29 14.685ZM16 14.4549H7.99999V9.69557C7.99999 7.72836 9.50999 6.12604 12 6.12604C14.49 6.12604 16 7.72836 16 9.69557V14.4549ZM12 18.4211C13.1 18.4211 14 17.7072 14 16.8346H9.99999C9.99999 17.7072 10.89 18.4211 12 18.4211Z" fill="#A3AED0" />
    </svg>,
    'moon_solid': <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <g clipPath="url(#clip0_31_2239)">
            <path d="M9.95691 14.6277C12.7329 14.6277 15.2683 13.6259 16.948 11.9843C17.1965 11.7414 16.9255 11.3866 16.5415 11.4447C12.175 12.1043 8.1651 9.44862 8.1651 5.95221C8.1651 3.93816 9.52431 2.0861 11.7334 1.08889C12.0739 0.935179 11.9883 0.52566 11.6013 0.468965C11.0589 0.389625 10.5085 0.349675 9.95691 0.349609C4.98902 0.349609 0.956909 3.54297 0.956909 7.48867C0.956909 11.4293 4.98269 14.6277 9.95691 14.6277Z" fill="#A3AED0" />
        </g>
        <defs>
            <clipPath id="clip0_31_2239">
                <rect width="18" height="14.2781" fill="white" transform="translate(0 0.349609)" />
            </clipPath>
        </defs>
    </svg>,
    'info_outline': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path d="M11 6.52278H13V8.10924H11V6.52278ZM12 14.4551C12.55 14.4551 13 14.0981 13 13.6618V10.4889C13 10.0526 12.55 9.6957 12 9.6957C11.45 9.6957 11 10.0526 11 10.4889V13.6618C11 14.0981 11.45 14.4551 12 14.4551ZM12 2.55664C6.48 2.55664 2 6.1103 2 10.4889C2 14.8675 6.48 18.4212 12 18.4212C17.52 18.4212 22 14.8675 22 10.4889C22 6.1103 17.52 2.55664 12 2.55664ZM12 16.8348C7.59 16.8348 4 13.9871 4 10.4889C4 6.99079 7.59 4.1431 12 4.1431C16.41 4.1431 20 6.99079 20 10.4889C20 13.9871 16.41 16.8348 12 16.8348Z" fill="#A3AED0" />
    </svg>,
    'IconTables': <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <g clipPath="url(#clip0_31_2278)">
            <path d="M7.46665 10.7335H7.69998C8.59831 10.7335 9.33331 11.4685 9.33331 12.3668V20.5335C9.33331 21.4318 8.59831 22.1668 7.69998 22.1668H7.46665C6.56831 22.1668 5.83331 21.4318 5.83331 20.5335V12.3668C5.83331 11.4685 6.56831 10.7335 7.46665 10.7335ZM14 5.8335C14.8983 5.8335 15.6333 6.5685 15.6333 7.46683V20.5335C15.6333 21.4318 14.8983 22.1668 14 22.1668C13.1016 22.1668 12.3666 21.4318 12.3666 20.5335V7.46683C12.3666 6.5685 13.1016 5.8335 14 5.8335ZM20.5333 15.1668C21.4316 15.1668 22.1666 15.9018 22.1666 16.8002V20.5335C22.1666 21.4318 21.4316 22.1668 20.5333 22.1668C19.635 22.1668 18.9 21.4318 18.9 20.5335V16.8002C18.9 15.9018 19.635 15.1668 20.5333 15.1668Z" fill="#A3AED0" />
        </g>
        <defs>
            <clipPath id="clip0_31_2278">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
    </svg >,
    'IconKanban': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_31_2272)">
            <path d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z" fill="#A3AED0" />
        </g>
        <defs>
            <clipPath id="clip0_31_2272">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    'IconProfile': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_31_2266)">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="#A3AED0" />
        </g>
        <defs>
            <clipPath id="clip0_31_2266">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    'IconAuthentication': <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clipPath="url(#clip0_31_2266)">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="#A3AED0" />
        </g>
        <defs>
            <clipPath id="clip0_31_2266">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>,
    'arrow_down': <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
        <path d="M5.41727 1.65771L5.41727 13.0401" stroke="#F2383A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.96285 9.77295L5.48145 14.2543L1.00006 9.77295" stroke="#F2383A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    'check': <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#666666" stroke-width="1.5" />
        <path d="M9.5 11.5L11.5 13.5L15.5 9.5" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
}
