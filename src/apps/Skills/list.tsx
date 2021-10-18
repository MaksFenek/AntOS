import React from 'react'
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

export interface ISkillList {
  icon: React.ReactNode
  title: string
  items: (IListItem | ISkillList)[]
}

interface IListItem {
  name: string
}
export const skills: ISkillList[] = [
  {
    title: 'Базовые',
    icon: <CalculatorOutlined />,
    items: [
      {
        name: 'JavaScript',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'SASS',
      },
      {
        name: 'Git',
      },
    ],
  },
  {
    title: 'React',
    icon: <HeartOutlined />,
    items: [
      {
        name: 'React hooks',
      },
      {
        name: 'React-router',
      },
      {
        name: 'React Native',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'GraphQL (Apollo)',
      },
      {
        title: 'Библиотеки компонентов',
        icon: <LayoutOutlined />,
        items: [
          {
            name: 'Material UI',
          },
          {
            name: 'Ant Design',
          },
        ],
      },
    ],
  },
  {
    title: 'Redux',
    icon: <ApartmentOutlined />,
    items: [
      {
        name: 'Redux-thunk',
      },
      {
        name: 'Redux-saga',
      },
      {
        name: 'Redux-toolkit',
      },
    ],
  },
  {
    title: 'Тестирование',
    icon: <BugOutlined />,
    items: [
      {
        name: 'Jest',
      },
      {
        name: 'Hermione',
      },
      {
        name: 'Enzyme',
      },
      {
        name: 'React-testing-library',
      },
    ],
  },
  {
    title: 'Backend',
    icon: <DatabaseOutlined />,
    items: [
      {
        title: 'Node.js',
        icon: <SettingOutlined />,
        items: [
          {
            name: 'Express',
          },
          {
            name: 'NestJS',
          },
        ],
      },
      {
        title: 'Базы данных',
        icon: <ConsoleSqlOutlined />,
        items: [
          {
            name: 'MongoDB',
          },
          {
            name: 'Firebase',
          },
        ],
      },
      {
        name: 'REST API',
      },
      {
        name: 'WebSocket (Socket.io)',
      },
    ],
  },
  {
    title: 'Сборка',
    icon: <MergeCellsOutlined />,
    items: [
      {
        name: 'Webpack',
      },
      {
        name: 'Babel',
      },
      {
        name: 'PostCSS',
      },
      {
        title: 'Code style',
        icon: <ClearOutlined />,
        items: [
          {
            name: 'ESlint',
          },
          {
            name: 'Prettier',
          },
        ],
      },
    ],
  },
]
