import React from 'react';

import { ChatMessageContainer, DialogueTail } from './styled';
import { IChatMessageProps } from './types';

const ChatMessage = (props: IChatMessageProps) => {
  const { message, role } = props;

  const isMessageFromCustomer = role === 'customer'

  return (
    <ChatMessageContainer fromCustomer={isMessageFromCustomer}>
      {message}
      <DialogueTail fromCustomer={isMessageFromCustomer} />
    </ChatMessageContainer>
  );
};

export default ChatMessage;
