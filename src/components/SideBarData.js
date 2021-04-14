import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Cakes',
        path: '/cakes',
        icon: <BiIcons.BiCake/>,
        cName: 'nav-text'
    },
    {
        title: 'Galleries',
        path: '/galleries',
        icon: <RiIcons.RiGalleryFill/>,
        cName: 'nav-text'
    },  
    {
        title: 'About us',
        path: '/about-us',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <BiIcons.BiPhoneCall/>,
        cName: 'nav-text'
    }
]