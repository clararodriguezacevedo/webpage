import React from 'react';
import i18n from '../../i18n/index.js';
import logoCompleto from '../../images/logo_completo.png';
import { HashLink as Link } from "react-router-hash-link";

// Icons
import Icon from '@mdi/react'
import { mdiInstagram, mdiYoutube, mdiLinkedin, mdiHeart } from '@mdi/js';

import footer from '../../data/footer'

function Footer () {
    return <footer className='bg-brand_secondary h-screen-half w-full flex flex-col justify-between items-center overflow-hidden'>
        <div className="w-full h-4/12 sm:h-6/12 items-center justify-center flex flex-row">
            <img 
            src={logoCompleto} 
            className='max-h-full object-contain sm:w-4/12 md:w-4/12' 
            alt='Computer Society Logo'
            />
        </div>
        <nav className="w-full h-5/12 items-center justify-center">
            <ul className="list-none flex flex-col flex-wrap sm:flex-row sm:flex-nowrap w-full h-full items-center justify-center">
                {
                    footer.nav.map((item, index) => {
                        return (
                            <Link smooth key={index} to={item.href} className="m-2 sm:my-2 sm:mx-3 w-5/12 sm:w-auto text-h5 leading-h5 transition duration-150 hover:text-white focus:text-white focus:outline-none">
                                {i18n.t(item.text)}
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
        <div className="w-full h-3/12 sm:h-2/12 flex flex-col-reverse sm:flex-row justify-start sm:justify-between px-16 mb-2 sm:mb-4 items-center">
            <div>
                {i18n.t('footer.love_1')}
                <Icon path={mdiHeart}
                size={1}
                className="inline mx-1 transform duration-100 hover:text-red-700 hover:animate-pulse"
                />
                {i18n.t('footer.love_2')}
            </div>
            <div className="flex flex-row justify-center items-center mb-2 sm:mb-0">
                {footer.social.map((item, index) => {
                    let icon = undefined
                    let className = "px-2 text-typography_primary transform duration-100 "
                    switch (item.logo) {
                        case 'youtube': 
                            icon = mdiYoutube
                            className = className + "hover:text-red-700 hover:scale-125 active:text-red-700 active:scale-125 focus:text-red-700 focus:scale-125 focus:outline-none"
                        break;
                        case 'linkedin': 
                            icon = mdiLinkedin
                            className = className + "hover:text-blue-700 hover:scale-125 active:text-blue-700 active:scale-125 focus:text-blue-700 focus:scale-125 focus:outline-none"
                        break;
                        case 'instagram': 
                        default:
                            icon = mdiInstagram
                            className = className + "hover:text-purple-700 hover:scale-125 active:text-purple-700 active:scale-125 focus:text-purple-700 focus:scale-125 focus:outline-none"
                    }

                    return (
                        <a key={index} href={item.href} target="_blank" rel="noreferrer" className={className}>
                            <Icon path={icon}
                            size={1}
                            className="focus:outline-none"
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    </footer>
}

export default Footer; 