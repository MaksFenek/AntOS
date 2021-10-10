import React from 'react'
import {HomeTwoTone} from '@ant-design/icons'

import {App} from './App'

export const Main: React.FC = () => {
  return (
    <section>
      <App
        icon={<HomeTwoTone style={{fontSize: '24px'}} />}
        window={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.`}
      />
    </section>
  )
}
