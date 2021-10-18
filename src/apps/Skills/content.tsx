import React from 'react'
import {Menu} from 'antd'
import {ISkillList, skills} from './list'

import './content.scss'

const {SubMenu} = Menu

const SkillsAppContent: React.FC = () => {
  const parseList = (list: ISkillList[]) => {
    const result: React.ReactNode[] = []
    list.forEach((item, index) => {
      let done = false
      const timeout = setTimeout(() => {
        done = true
        clearTimeout(timeout)
      }, index * 100)
      result.push(
        <SubMenu
          style={{animationDelay: index * 100 + 300 + 'ms'}}
          className={`skills-list-item ${done ? 'skills-list-item_done' : ''}`}
          icon={item.icon}
          key={item.title}
          title={item.title}>
          {item.items.map(skill => {
            if ('name' in skill) {
              return <Menu.Item key={skill.name}>{skill.name}</Menu.Item>
            }
            return parseList([skill])
          })}
        </SubMenu>,
      )
    })
    return result
  }
  return (
    <section>
      <Menu style={{background: 'none', border: 'none'}} mode="inline">
        {parseList(skills)}
      </Menu>
    </section>
  )
}

export default SkillsAppContent
