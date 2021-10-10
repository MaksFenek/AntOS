import React from 'react'
import {AppIcon, AppWindow} from 'src/components'
import {HomeTwoTone} from '@ant-design/icons'
export const App: React.FC = () => {
  return (
    <section>
      <AppIcon>
        <HomeTwoTone style={{fontSize: '24px'}} />
      </AppIcon>
      <AppWindow>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores dicta
        architecto, nulla facilis ipsum voluptatem minima aut eveniet veniam
        voluptatibus similique rerum modi libero aliquid dolorum, cumque
        eligendi quae fugit.
      </AppWindow>
    </section>
  )
}
