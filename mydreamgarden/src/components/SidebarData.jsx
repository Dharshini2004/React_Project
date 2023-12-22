import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GrassIcon from '@mui/icons-material/Grass';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import LoginIcon from '@mui/icons-material/Login';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'AboutUs',
    path: '/aboutus',
    icon: <AutoAwesomeIcon/>
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Seeds',
        path: '/products/seeds',
        icon: <GrassIcon/>,
        cName: 'sub-nav'
      },
      {
        title: 'GrowBags',
        path: '/products/growBags',
        icon: <ShoppingBagIcon />,
        cName: 'sub-nav'
      },
      {
        title: 'Pots',
        path: '/products/pots',
        icon: <TakeoutDiningIcon />
      }
    ]
  },

  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Login',
    path: '/login',
    icon: <LoginIcon />
  },

];
