import React from 'react'
import {Typography} from 'antd'

import './fallback.scss'

const {Title} = Typography

export class AppWindowErrorBoundary extends React.Component {
  state: {hasError: boolean}
  constructor(props: never) {
    super(props)
    this.state = {hasError: false}
  }

  static getDerivedStateFromError() {
    return {hasError: true}
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fallback">
          <Title level={2}>
            Что-то пошло не так. <br /> Попробуйте перезагрузить страницу.
          </Title>
        </div>
      )
    }

    return this.props.children
  }
}
