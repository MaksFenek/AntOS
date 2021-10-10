import React from 'react'

import MenuLayout from 'antd/lib/menu'

const {SubMenu, ItemGroup, Item} = MenuLayout
// TODO: Complete the component after integrate redux

export const MenuList: React.FC = () => {
  return (
    <MenuLayout
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline">
      <SubMenu key="sub1" title="Navigation One">
        <ItemGroup key="g1" title="Item 1">
          <Item key="1">Option 1</Item>
          <Item key="2">Option 2</Item>
        </ItemGroup>
        <ItemGroup key="g2" title="Item 2">
          <Item key="3">Option 3</Item>
          <Item key="4">Option 4</Item>
        </ItemGroup>
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
