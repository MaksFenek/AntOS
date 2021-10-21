import React from 'react'
import {Carousel, Divider, Space, Typography, Timeline} from 'antd'

import DEWelcomePage from './images/digitalEstate/welcome.webp'
import DESearchPage from './images/digitalEstate/search.webp'
import DEProductPage from './images/digitalEstate/product.webp'

import LSWelcomePage from './images/liteScreen/welcome.webp'
import LSFriendsPage from './images/liteScreen/friends.webp'
import LSProfilePage from './images/liteScreen/profile.webp'
import LSMessagesPage from './images/liteScreen/messages.webp'
import LSChatPage from './images/liteScreen/chat.webp'

import MDarkPage from './images/messenger/dark.webp'
import MLightPage from './images/messenger/light.webp'

import MWMainPage from './images/miniWeather/main.webp'

import './portfolio.scss'
import {animated, config, useSpring} from 'react-spring'
const {Title, Text, Paragraph} = Typography

const PortfolioAppContent: React.FC = () => {
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 200,
    config: config.gentle,
  })
  return (
    <animated.section style={styles}>
      <Title level={2}>Портфолио</Title>
      <Text>Здесь собраны все мои личные проекты.</Text>
      <Divider />
      <article>
        <Title level={3}>Digital Estate</Title>
        <Paragraph strong className="portfolio-item__header">
          <Space size={36}>
            <a
              href="https://digitestate.herokuapp.com/"
              target="_blank"
              rel="nofollow noopener">
              Сайт
            </a>
            <a
              href="https://github.com/MaksFenek/RealEstate"
              target="_blank"
              rel="nofollow noopener">
              Код
            </a>
          </Space>
        </Paragraph>
        <Carousel
          autoplay
          dots={{className: 'dots'}}
          autoplaySpeed={4000}
          dotPosition="bottom"
          infinite>
          <img src={DEWelcomePage} alt="Welcome page" />
          <img src={DESearchPage} alt="Search page" />
          <img src={DEProductPage} alt="Product page" />
        </Carousel>
        <Paragraph>
          <Title level={4}>Описание</Title>
          <Text>
            Проект представляет из платформу для размещения недвижимости на
            продажу или аренду. Курсовая работа.
          </Text>
          <Title level={4}>Технологии</Title>
          <Space size={50}>
            <Timeline>
              <Timeline.Item>React</Timeline.Item>
              <Timeline.Item>TypeScript</Timeline.Item>
              <Timeline.Item>Next.js</Timeline.Item>
              <Timeline.Item>Ant Design</Timeline.Item>
              <Timeline.Item>SASS</Timeline.Item>
            </Timeline>
            <Timeline>
              <Timeline.Item>Node.js</Timeline.Item>
              <Timeline.Item>TypeScript</Timeline.Item>
              <Timeline.Item>NestJS</Timeline.Item>
              <Timeline.Item>MongoDB</Timeline.Item>
              <Timeline.Item>Graphql</Timeline.Item>
            </Timeline>
          </Space>
        </Paragraph>
        <Divider />
      </article>
      <article>
        <Title level={3}>Lite Screen</Title>
        <Paragraph strong className="portfolio-item__header">
          <Space size={36}>
            <a
              href="https://lite-screen.web.app/"
              target="_blank"
              rel="nofollow noopener">
              Сайт
            </a>
            <a
              href="https://github.com/MaksFenek/Lite-Screen"
              target="_blank"
              rel="nofollow noopener">
              Код
            </a>
          </Space>
        </Paragraph>
        <Carousel
          autoplay
          dots={{className: 'dots'}}
          autoplaySpeed={4000}
          dotPosition="bottom"
          infinite>
          <img src={LSWelcomePage} alt="Welcome page" />
          <img src={LSProfilePage} alt="Profile page" />
          <img src={LSFriendsPage} alt="Friends page" />
          <img src={LSChatPage} alt="Chat page" />
          <img src={LSMessagesPage} alt="Messages page" />
        </Carousel>
        <Paragraph>
          <Title level={4}>Описание</Title>
          <Text>
            Первый крупный проект, написанный на React и Typescript. <br />{' '}
            Данное приложение является некоторого рода социальной сетью, в
            котором есть возможность обмениваться сообщениями, настраивать
            профиль, делать посты и несколько других базовых возможностей.
          </Text>
          <Title level={4}>Технологии</Title>
          <Space size={50}>
            <Timeline>
              <Timeline.Item>React</Timeline.Item>
              <Timeline.Item>TypeScript</Timeline.Item>
              <Timeline.Item>Material UI</Timeline.Item>
            </Timeline>
            <Timeline>
              <Timeline.Item>Redux</Timeline.Item>
              <Timeline.Item>Redux-thunk</Timeline.Item>
              <Timeline.Item>Firebase</Timeline.Item>
            </Timeline>
          </Space>
        </Paragraph>
        <Divider />
      </article>
      <article>
        <Title level={3}>Messenger</Title>
        <Paragraph strong className="portfolio-item__header">
          <Space size={36}>
            <a
              href="https://github.com/MaksFenek/Messenger"
              target="_blank"
              rel="nofollow noopener">
              Код
            </a>
          </Space>
        </Paragraph>
        <Carousel
          autoplay
          dots={{className: 'dots'}}
          autoplaySpeed={4000}
          dotPosition="bottom"
          infinite>
          <img src={MDarkPage} alt="Main dark page" />
          <img src={MLightPage} alt="Main light page" />
        </Carousel>
        <Paragraph>
          <Title level={4}>Описание</Title>
          <Text>
            Второй относительно крупный проект, написанный на React и
            Typescript. <br /> Приложение не было закончено из-за архитектурных
            и техниеских проблем. Это был первый опыт написания собственного
            сервера, к тому же ещё и с websocket.
          </Text>
          <Title level={4}>Технологии</Title>
          <Space size={50}>
            <Timeline>
              <Timeline.Item>React</Timeline.Item>
              <Timeline.Item>TypeScript</Timeline.Item>
              <Timeline.Item>Redux</Timeline.Item>
              <Timeline.Item>Webpack</Timeline.Item>
            </Timeline>
            <Timeline>
              <Timeline.Item>Node.js</Timeline.Item>
              <Timeline.Item>Express</Timeline.Item>
              <Timeline.Item>MongoDB</Timeline.Item>
              <Timeline.Item>Socket.io</Timeline.Item>
            </Timeline>
          </Space>
        </Paragraph>
        <Divider />
      </article>
      <article>
        <Title level={3}>Mini-weather</Title>
        <Paragraph strong className="portfolio-item__header">
          <Space size={36}>
            <a
              href="https://mini-weather.netlify.app/"
              target="_blank"
              rel="nofollow noopener">
              Сайт
            </a>
            <a
              href="https://github.com/MaksFenek/mini-weather"
              target="_blank"
              rel="nofollow noopener">
              Код
            </a>
          </Space>
        </Paragraph>
        <Carousel>
          <img src={MWMainPage} alt="Main page" />
        </Carousel>
        <Paragraph>
          <Title level={4}>Описание</Title>
          <Text>
            Один из первых проектов на React, в котором познакомился с азами
            AJAX. Для практики написал свой небольшой webpack конфиг.
          </Text>
          <Title level={4}>Технологии</Title>
          <Space size={50}>
            <Timeline>
              <Timeline.Item>React</Timeline.Item>
              <Timeline.Item>TypeScript</Timeline.Item>
              <Timeline.Item>Redux</Timeline.Item>
              <Timeline.Item>Webpack</Timeline.Item>
            </Timeline>
            <Timeline>
              <Timeline.Item>SASS</Timeline.Item>
              <Timeline.Item>PostCSS</Timeline.Item>
              <Timeline.Item>Jest</Timeline.Item>
              <Timeline.Item>Enzyme</Timeline.Item>
            </Timeline>
          </Space>
        </Paragraph>
        <Divider />
      </article>
    </animated.section>
  )
}

export default PortfolioAppContent
