import React from 'react'
import {Menu} from 'antd'
import {ISkillList, skills} from './list'

import {config, useSpring} from '@react-spring/core'
import {animated} from '@react-spring/web'

const {SubMenu} = Menu

const SkillsAppContent: React.FC = () => {
  const styles = useSpring({
    from: {
      transform: 'scale(0)',
      opacity: 0,
    },
    to: {
      transform: ' scale(1)',
      opacity: 1,
    },
    delay: 300,
    config: config.gentle,
  })

  const parseList = (list: ISkillList[]) => {
    const result: React.ReactNode[] = []
    for (const item of list) {
      result.push(
        <SubMenu icon={item.icon} key={item.title} title={item.title}>
          {item.items.map(skill => {
            if ('name' in skill) {
              return <Menu.Item key={skill.name}>{skill.name}</Menu.Item>
            }
            return parseList([skill])
          })}
        </SubMenu>,
      )
    }
    return result
  }
  return (
    <animated.section style={styles}>
      <Menu style={{background: 'none', border: 'none'}} mode="inline">
        {parseList(skills)}
      </Menu>
    </animated.section>
  )
}

export default SkillsAppContent
