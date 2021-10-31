import {config, Spring, useSpring} from '@react-spring/core'
import {animated} from '@react-spring/web'
import {Divider, Space, Typography} from 'antd'
import moment from 'moment'
import React from 'react'
import {useCursor} from 'src/hooks'

import './account.scss'
import {AccountAppIcon} from './icon'

const {Text} = Typography

const AccountAppContent: React.FC = () => {
  const [className, onMouseEnter, onMouseMove, onMouseLeave] = useCursor()
  const cursor = {className, onMouseEnter, onMouseMove, onMouseLeave}
  const appearingStyles = useSpring({
    from: {
      opacity: 0,
      transform: 'translateX(100%)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0%)',
    },
    delay: 200,
    config: config.gentle,
  })
  return (
    <section className="account-app">
      <Space direction="vertical">
        <Space size="large">
          <AccountAppIcon />
          <Space direction="vertical" size="large">
            <Text>
              Name:{' '}
              <animated.strong {...cursor} style={appearingStyles}>
                Артур Вороков
              </animated.strong>
            </Text>
            <Text>
              Age:{' '}
              <span {...cursor}>
                <Spring
                  from={{number: 0}}
                  to={{
                    number: moment().get('y') - moment('2003-01-13').get('y'),
                  }}
                  delay={200}
                  config={config.molasses}>
                  {({number}) => (
                    <animated.strong>
                      {number.to(n => n.toFixed(0))}
                    </animated.strong>
                  )}
                </Spring>
              </span>
            </Text>
            <Text>
              City:{' '}
              <animated.strong {...cursor} style={appearingStyles}>
                Москва
              </animated.strong>
            </Text>
          </Space>
        </Space>
        <Divider />
        <Space direction="vertical" size="large">
          <Text>
            University:{' '}
            <animated.strong {...cursor} style={appearingStyles}>
              Московский Политех
            </animated.strong>
          </Text>
          <Text>
            Languages:{' '}
            <animated.strong {...cursor} style={appearingStyles}>
              Русский, Английский(B1-B2)
            </animated.strong>
          </Text>
          <Text>
            Metro st.:{' '}
            <animated.strong {...cursor} style={appearingStyles}>
              Электрозаводская
            </animated.strong>
          </Text>
          <Text>
            Phone:{' '}
            <animated.a
              href="tel:+79674206274"
              {...cursor}
              style={appearingStyles}>
              +7(967)420-62-72
            </animated.a>
          </Text>
          <Text>
            Mail:{' '}
            <animated.a
              {...cursor}
              href="mailto:makstreonin@gmail.com"
              style={appearingStyles}>
              makstreonin@gmail.com
            </animated.a>
          </Text>
          <Text>
            Additional mail:{' '}
            <animated.a
              {...cursor}
              href="mailto:arturvorokov@mail.ru"
              style={appearingStyles}>
              arturvorokov@mail.ru
            </animated.a>
          </Text>
        </Space>
      </Space>
    </section>
  )
}

export default AccountAppContent
