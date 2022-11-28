import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useAdminStore, useAdminNotPersistStore} from '../../zustand';
import {Layout, Colors} from '../../theme';
import _ from 'lodash';
import {GiftedChat} from 'react-native-gifted-chat';
import {renderInputToolbar, renderComposer, renderSend} from './InputToolbar';
const Index = ({route}) => {
  const {
    firstName,
    lastName,
    className,
    rollNumber,
    isActive,
    picture,
    index,
    studentId,
  } = route.params;
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const addToChatList = useAdminStore(state => state.addToChatList);
  const chatList = useAdminStore(state => state.chatList);
  const setChatList = useAdminStore(state => state.setChatList);
  const allStudents = useAdminStore(state => state.allStudents);
  const refreshChatList = useAdminNotPersistStore(
    state => state.refreshChatList,
  );
  const setRefreshChatList = useAdminNotPersistStore(
    state => state.setRefreshChatList,
  );

  const checkIfAlreadyInChatList = item => {
    let tempChatList = _.cloneDeep(chatList);
    let alreadyInList = tempChatList.findIndex(
      student => student._id === item._id,
    );
    if (alreadyInList >= 0) {
      tempChatList.splice(alreadyInList, 1);
      tempChatList.unshift(item);

      setChatList([...tempChatList]);

      setRefreshChatList(!refreshChatList);
    } else {
      addToChatList(allStudents[index]);
      setRefreshChatList(!refreshChatList);
    }
  };

  const onSend = (currentMessages = []) => {
    currentMessages.unshift({
      _id: index + rollNumber,
      text: 'Admin You have a message from ' + `${firstName}`,
      createdAt: new Date(),
      user: {
        _id: index,
        name: firstName,
        avatar: picture,
      },
    });
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, currentMessages),
    );
    let currentStudent = allStudents.find(student => student._id === studentId);
    checkIfAlreadyInChatList(currentStudent);
  };
  return (
    <View style={styles.mainContainer}>
      <GiftedChat
        messages={messages}
        text={text}
        onInputTextChanged={setText}
        onSend={onSend}
        user={{
          _id: '12345admin',
          name: 'Ahmed Awais',
          avatar: 'https://placeimg.com/150/150/any',
        }}
        renderInputToolbar={renderInputToolbar}
        wrapInSafeArea={false}
        renderComposer={renderComposer}
        renderSend={renderSend}
        bottomOffset={-20}
        minComposerHeight={40}
        alignTop
        alwaysShowSend
        scrollToBottom
        showUserAvatar
        renderAvatarOnTop
        isCustomViewBottom
        messagesContainerStyle={styles.messagesContainerStyle}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  messagesContainerStyle: {
    backgroundColor: Colors.Secondary.BLUE,
    flexGrow: 1,
    paddingBottom: Layout.SV_30,
  },
});
