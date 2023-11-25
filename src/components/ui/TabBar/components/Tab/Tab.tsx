
import { NavLink } from 'react-router-dom'
import styles from './Tab.module.css'
import { Icons } from '../../../Icons'

export interface ITab extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  path: string
  text: string
  icon?: string
  setActiveTab?: (path: string) => void
}

export const Tab = ({ path, text, icon, setActiveTab }: ITab) => {
console.log(icon)
  return (
    <>
      <NavLink
        to={path}
        className={path ? ({ isActive }) => [isActive ? styles.active : '', styles.tab].join(' ') : styles.tab}
        onClick={setActiveTab ? () => setActiveTab(path) : undefined}
      >
       {icon && <span>{Icons[icon]}</span>} 
      
       <span>{text}</span>
      </NavLink>
    </>
  )
}
