import { AiOutlineLogout } from 'react-icons/ai'

import { MdSpaceDashboard, MdPayment } from 'react-icons/md'

import { CgProfile } from 'react-icons/cg'

import { BiMoneyWithdraw } from 'react-icons/bi'

import { BsFillBagHeartFill } from 'react-icons/bs'

export const libraries:
  | ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[]
  | undefined = ['places']

export const navlinks = [
  {
    name: 'dashboard',
    Image: MdSpaceDashboard,
    link: '/',
  },
  {
    name: 'wishlist',
    Image: BsFillBagHeartFill,
    link: '/wishlist',
  },
  {
    name: 'payment',
    Image: MdPayment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    Image: BiMoneyWithdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    Image: CgProfile,
    link: '/profile',
    disabled: true,
  },
  {
    name: 'logout',
    Image: AiOutlineLogout,
    link: '/',
    disabled: true,
  },
]

export const website = {
  name: 'Artfi',
}
