import React from 'react'
import {HomeTwoTone} from '@ant-design/icons'

import {App} from './App'
import {Desktop} from './Desktop'

export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <App
          icon={<HomeTwoTone style={{fontSize: '24px'}} />}
          window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
        />
        <App
          icon={<HomeTwoTone style={{fontSize: '24px'}} />}
          window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
          defaultPosition={{x: 0, y: 72}}
        />
        <App
          icon={<HomeTwoTone style={{fontSize: '24px'}} />}
          window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
          defaultPosition={{x: 0, y: 144}}
        />
      </Desktop>
    </section>
  )
}
