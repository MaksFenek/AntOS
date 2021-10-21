import {Button, Modal, Typography} from 'antd'
import {useCallback, useEffect, useState} from 'react'

const {Title, Text} = Typography

export const WarningModal = () => {
  const [isMobile, setIsMobile] = useState(false)

  const clickOk = useCallback(() => {
    setIsMobile(false)
  }, [])

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      setIsMobile(true)
    }
  }, [])

  return (
    <Modal
      closable={false}
      title={<Title level={3}>Кажется вы используете мобильный браузер</Title>}
      visible={isMobile}
      footer={[
        <Button danger type="primary" key="back" onClick={clickOk}>
          Продолжить
        </Button>,
      ]}>
      <Title level={4}>
        Если у вас есть возможность, переключитесь на компьютер!
      </Title>
      <Text>
        Так как сайт не расчитан на мобильные экраны, он может вести себя
        непредсказуемо.
        <br />
      </Text>
      <Text>Тем не менее, вы можете продолжить.</Text>
    </Modal>
  )
}
