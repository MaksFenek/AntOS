import React from 'react'

import MenuLayout, {MenuItemProps} from 'antd/lib/menu'
import {App} from 'src/redux/types'
import {GithubOutlined, FileTextFilled} from '@ant-design/icons'

import TgIcon from 'src/assets/tg.svg'
import Gmail from 'src/assets/gmail.svg'

const {SubMenu, Item} = MenuLayout

interface IMenuList {
  apps: App[] | undefined
  onAppClick: MenuItemProps['onClick']
}

export const MenuList: React.FC<IMenuList> = ({apps, onAppClick}) => {
  return (
    <MenuLayout
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline">
      <SubMenu key="sub1" title="Apps">
        {apps?.map(app => (
          <Item
            onClick={onAppClick}
            title={app.name}
            icon={app.icon}
            key={app.name}>
            {app.name}
          </Item>
        ))}
      </SubMenu>
      <SubMenu key="sub2" title="Contacts">
        <Item icon={<GithubOutlined style={{fontSize: '30px'}} />} key="github">
          <a
            target="_blank"
            rel="nofollow noopener"
            href="https://github.com/MaksFenek">
            GitHub
          </a>
        </Item>
        <Item icon={<img src={TgIcon} style={{height: 30}} />} key="tg">
          <a
            target="_blank"
            href="https://t.me/m_fenek"
            rel="nofollow noopener">
            Telegram
          </a>
        </Item>
        <Item icon={<FileTextFilled style={{fontSize: '30px'}} />} key="resume">
          <a
            target="_blank"
            href="https://hh.ru/resume/1bb48cb7ff08c91eb20039ed1f3356576a3478"
            rel="nofollow noopener">
            Resume
          </a>
        </Item>
        <Item icon={<img src={Gmail} style={{height: 30}} />} key="mail">
          <a
            target="_blank"
            href="mailto:maksteonin@gmail.com"
            rel="nofollow noopener">
            Gmail
          </a>
        </Item>
      </SubMenu>
    </MenuLayout>
  )
}
