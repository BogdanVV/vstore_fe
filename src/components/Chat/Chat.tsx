import React from 'react';

import {
  ChatContainer,
  ChatContentContainer,
  ChatDefaultQuestionsContainer,
  ChatHeaderContainer,
  ChatHideButton,
  ChatHideButtonIcon,
  ChatMessagesContainer,
  ChatWrapper,
  ConsultantAvatar,
  ConsultantInfoContainer,
  ConsultantName,
  ConsultantPost,
  DefaultQuestion
} from './styled';
import { IChatProps } from './types';

import ChatMessage from '../ChatMessage/ChatMessage';

import randomGuy from '../../assets/images/randomGuy.png';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';

const Chat = (props: IChatProps) => {
  const { isVisible, visibilityHandler } = props;

  const mockChatMessages = [
    {
      content: 'Some random message from the God knows who',
      author: 'customer',
      createdAt: new Date('2022-08-08 11:47'),
    },
    {
      content: 'Yeah, this bot\'s gonna send you whatever you want to hear, just buy something in the end',
      author: 'bot',
      createdAt: new Date('2022-08-08 11:52'),
    },
    {
      content: 'Hi, Maria! How can I help you?',
      author: 'bot',
      createdAt: new Date('2022-08-08 11:45'),
    },
    {
      content: 'Start',
      author: 'customer',
      createdAt: new Date('2022-08-08 11:42'),
    },
  ].sort((a, b) => +a.createdAt - +b.createdAt);

  const mockDefaultQuestions = [
    'I want to buy everything in my basket',
    'Where is the fitting room?',
    'Where I can find newest items?',
  ];

  const handleQuestionPick = (question: string) => {
    console.log(question);
  };

  return (
    <ChatContainer isVisible={isVisible}>
      <ChatWrapper>
        <ChatHideButton onClick={visibilityHandler}>
          <ChatHideButtonIcon src={arrowDownIcon} />
        </ChatHideButton>
        <ChatHeaderContainer>
          <ConsultantAvatar src={randomGuy} />
          <ConsultantInfoContainer>
            <ConsultantName>DONALD TRUMP</ConsultantName>
            <ConsultantPost>consultant</ConsultantPost>
          </ConsultantInfoContainer>
        </ChatHeaderContainer>
        <ChatContentContainer>
          <ChatMessagesContainer>
            {mockChatMessages.map(({content, author, createdAt}) => (
              <ChatMessage
                message={content}
                role={author}
                key={+createdAt}
              />
            ))}
          </ChatMessagesContainer>
          <ChatDefaultQuestionsContainer>
            {mockDefaultQuestions.map(question => (
              <DefaultQuestion
                key={question}
                onClick={() => handleQuestionPick(question)}
              >
                {question}
              </DefaultQuestion>
            ))}
          </ChatDefaultQuestionsContainer>
        </ChatContentContainer>
      </ChatWrapper>
    </ChatContainer>
  );
};

export default Chat;
