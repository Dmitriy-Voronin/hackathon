import React from 'react'
import styles from './TabBar.module.css'
import { ITab, Tab } from './components/Tab'
import { generateRandomString } from '../../../utils/generateRandomString'

interface ITabBar extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  list: ITab[]
  setActiveTab?: (path: string) => void
}

export const TabBar = ({
  list,
  setActiveTab,
  className,
  ...props
}: ITabBar) => {
  return (
    <nav className={`${styles.tabBar__wrap} ${className}`} {...props}>
      {list.map((item) => (
        <Tab
          text={item.text}
          path={item.path}
          icon={item.icon}
          setActiveTab={setActiveTab}
          key={generateRandomString()}
        />
      ))}
    </nav>
  )
}