import React from 'react'
import {Divider, Space, Typography, Steps, Timeline, Button} from 'antd'

const {Title, Paragraph, Text} = Typography
const {Step} = Steps

const ResumeAppContent: React.FC = () => {
  return (
    <section>
      <Title level={2}>Привет! Меня зовут Артур.</Title>
      <Title level={3}>Я frontend разработчик.</Title>
      <Text>
        В основном разрабатываю на <Text strong>React</Text> и
        <Text strong> Typescript</Text>, хорошо разбираюсь в
        <Text strong> JavaScript</Text>, а также немного знаю
        <Text strong> Node.js</Text>, на достаточном уровне, чтобы написать свой
        небольшой сервер.
      </Text>
      <Divider />
      <Space direction="vertical">
        <Title level={3}>Опыт работы</Title>
        <Text>Пока опыта не так много</Text>
        <Steps direction="vertical">
          <Step
            title="Yandex"
            description={
              <>
                <Paragraph>Стажер-разработчик, 4 месяца.</Paragraph>
                <Paragraph>
                  Прошёл стажировку в Яндексе. За это время успел поработать над
                  большим проектом в команде Биллинг. В обязаности входило:
                </Paragraph>
                <Timeline>
                  <Timeline.Item>Разработка и поддержка проекта</Timeline.Item>
                  <Timeline.Item>
                    Исправления разной сложности багов
                  </Timeline.Item>
                  <Timeline.Item>Написание тестов</Timeline.Item>
                  <Timeline.Item>Перевод старых страниц на React</Timeline.Item>
                </Timeline>
                <Text>
                  Довольно много работал с React и Redux, успел написать пару
                  десятков тестов на Jest и Hermione, активно участвовал в
                  редизайне нескольких главных станиц, тесно работал с
                  командами.
                </Text>
              </>
            }
          />
          <Step
            title="Ваша компания :)"
            description={
              <>
                <Paragraph>Будущий разработчик</Paragraph>
                <Paragraph>
                  Возможно именно ваша компания станет следующим местом работы!
                </Paragraph>
              </>
            }
          />
        </Steps>
        <Divider />
        <Title level={3}>Контакты</Title>
        <Text strong>
          GitHub:
          <Button
            type="link"
            href="https://github.com/MaksFenek"
            target="_blank"
            rel="nofollow noopener">
            MaksFenek
          </Button>
        </Text>
        <Text strong>
          HeadHunter:
          <Button
            type="link"
            href="https://hh.ru/resume/1bb48cb7ff08c91eb20039ed1f3356576a3478"
            target="_blank"
            rel="nofollow noopener">
            Резюме
          </Button>
        </Text>
        <Text strong>
          Telegram:
          <Button
            type="link"
            href="https://t.me/m_fenek"
            target="_blank"
            rel="nofollow noopener">
            @m_fenek
          </Button>
        </Text>
      </Space>
    </section>
  )
}

export default ResumeAppContent
