import React from 'react'
import {
  CodeTwoTone,
  CustomerServiceTwoTone,
  FileTwoTone,
} from '@ant-design/icons'

import {App} from './App'
import {Desktop} from './DesktopContainer'
export const Main: React.FC = () => {
  return (
    <section>
      <Desktop>
        <App
          name="Code"
          icon={<CodeTwoTone style={{fontSize: '30px'}} />}
          window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
          defaultPosition={{x: 0, y: 0}}
        />
        <App
          name="Music"
          icon={<CustomerServiceTwoTone style={{fontSize: '24px'}} />}
          window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
          defaultPosition={{x: 0, y: 72}}
        />
        <App
          name="File"
          icon={<FileTwoTone style={{fontSize: '24px'}} />}
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
