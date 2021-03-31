import React from 'react'
import { Message } from '@ory/kratos-client/api'
import { messageStyles } from '@ory/themes'
import styled from 'styled-components/native'
import { View } from 'react-native'

interface Props {
  messages?: Array<Message>
  testID?: string
}

const MessageText = styled.Text(messageStyles)

export default ({ messages = [], testID }: Props) => (
  <View testID={testID}>
    {messages.map(({ text, id }, k) => (
      <MessageText key={`${id}${k}`}>{text}</MessageText>
    ))}
  </View>
)
