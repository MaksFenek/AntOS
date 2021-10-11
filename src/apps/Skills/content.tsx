import React from 'react'
import {Menu} from 'antd'
import {
  CalculatorOutlined,
  HeartOutlined,
  ApartmentOutlined,
  BugOutlined,
  DatabaseOutlined,
  MergeCellsOutlined,
  LayoutOutlined,
  ConsoleSqlOutlined,
  SettingOutlined,
  ClearOutlined,
} from '@ant-design/icons'

const {SubMenu} = Menu

export const SkillsAppContent: React.FC = () => {
  return (
    <section>
      <Menu style={{background: 'none', border: 'none'}} mode="inline">
        <SubMenu icon={<CalculatorOutlined />} key="sub1" title="Базовые">
          <Menu.Item key="1">JavaScript</Menu.Item>
          <Menu.Item key="2">TypeScript</Menu.Item>
          <Menu.Item key="3">HTML</Menu.Item>
          <Menu.Item key="4">CSS</Menu.Item>
          <Menu.Item key="5">SASS</Menu.Item>
          <Menu.Item key="6">Git</Menu.Item>
        </SubMenu>
        <SubMenu icon={<HeartOutlined />} key="sub2" title="React">
          <Menu.Item key="7">React hooks</Menu.Item>
          <Menu.Item key="8">React-router</Menu.Item>
          <Menu.Item key="9">React Native</Menu.Item>
          <Menu.Item key="11">Next.js</Menu.Item>
          <Menu.Item key="12">GraphQL (Apollo)</Menu.Item>
          <SubMenu
            icon={<LayoutOutlined />}
            key="sub3"
            title="Библиотеки компонентов">
            <Menu.Item key="13">Material UI</Menu.Item>
            <Menu.Item key="14">Ant Design</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu icon={<ApartmentOutlined />} key="sub4" title="Redux">
          <Menu.Item key="15">Redux-thunk</Menu.Item>
          <Menu.Item key="16">Redux-saga</Menu.Item>
          <Menu.Item key="17">Redux-toolkit</Menu.Item>
        </SubMenu>
        <SubMenu icon={<BugOutlined />} key="sub5" title="Тестирование">
          <Menu.Item key="18">Jest</Menu.Item>
          <Menu.Item key="19">Hermione</Menu.Item>
          <Menu.Item key="20">Enzyme</Menu.Item>
          <Menu.Item key="21">React-testing-library</Menu.Item>
        </SubMenu>
        <SubMenu icon={<DatabaseOutlined />} key="sub6" title="Backend">
          <SubMenu icon={<SettingOutlined />} key="sub7" title="Node.js">
            <Menu.Item key="22">Express</Menu.Item>
            <Menu.Item key="23">NestJS</Menu.Item>
          </SubMenu>
          <SubMenu icon={<ConsoleSqlOutlined />} key="sub8" title="Базы данных">
            <Menu.Item key="24">MongoDB</Menu.Item>
            <Menu.Item key="25">Firebase</Menu.Item>
          </SubMenu>
          <Menu.Item key="26">REST API</Menu.Item>
          <Menu.Item key="27">WebSocket (Socket.io)</Menu.Item>
        </SubMenu>
        <SubMenu icon={<MergeCellsOutlined />} key="sub9" title="Сборка">
          <Menu.Item key="28">Webpack</Menu.Item>
          <Menu.Item key="29">Babel</Menu.Item>
          <Menu.Item key="30">PostCSS</Menu.Item>
          <SubMenu icon={<ClearOutlined />} key="sub10" title="Code style">
            <Menu.Item key="31">ESlint</Menu.Item>
            <Menu.Item key="32">Prettier</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </section>
  )
}
