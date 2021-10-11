import React from 'react'

import MenuLayout, {MenuItemProps} from 'antd/lib/menu'
import {App} from 'src/redux/types'

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
      <SubMenu key="sub2" title="Navigation Two">
        <Item key="5">Option 5</Item>
        <Item key="6">Option 6</Item>
        <SubMenu key="sub3" title="Submenu">
          <Item key="7">Option 7</Item>
          <Item key="8">Option 8</Item>
        </SubMenu>
      </SubMenu>
    </MenuLayout>
  )
}
