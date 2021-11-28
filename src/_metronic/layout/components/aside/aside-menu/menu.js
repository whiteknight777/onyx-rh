import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../../../_helpers';

// eslint-disable-next-line
export const Menu = [
    // {
    //   title: "Menu",
    //   type: "menu-section",
    // },
    {
        title: 'Tableau de bord',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Layout/Layout-arrange.svg')} />,
        url: '/tableau-de-bord',
        submenu: []
    },
    {
        title: 'Actualités',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Design/substract.svg')} />,
        url: '/actualites',
        submenu: []
    },
    {
        title: 'Collaborateurs',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Adress-book2.svg')} />,
        url: '/collaborateurs',
        submenu: []
    },
    {
        title: 'Unité Organisationnelle',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Code/CMD.svg')} />,
        url: '/unite-organisationnelle',
        submenu: []
    },
    {
        title: 'Conversations',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Group-chat.svg')} />,
        url: '/conversations',
        submenu: []
    },
    {
        title: 'Absences',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Earth.svg')} />,
        url: '/absences',
        submenu: []
    },
    {
        title: 'Planning absences',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/General/Bookmark.svg')} />,
        url: '/planning-absences',
        submenu: []
    },
    {
        title: 'Temps et Activités',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Home/Timer.svg')} />,
        url: '/suivi-activites',
        submenu: []
    },
    {
        title: 'Enquêtes',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Communication/Clipboard-list.svg')} />,
        url: '/enquêtes',
        submenu: []
    },
    {
        title: 'Documents',
        type: 'menu',
        icon: <SVG src={toAbsoluteUrl('/media/svg/icons/Files/Group-folders.svg')} />,
        url: '/documents-partages',
        submenu: []
    }

];
