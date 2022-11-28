import React from 'react';
import {Image} from 'react-native';
import {InputToolbar, Composer, Send} from 'react-native-gifted-chat';

import {Images, Colors, Layout} from '../../theme';

export const renderInputToolbar = props => (
  <InputToolbar
    {...props}
    containerStyle={{
      backgroundColor: Colors.Primary.GREY,
      paddingHorizontal: Layout.SV_10,
      paddingTop: Layout.SV_10,
      paddingBottom: Layout.SV_20,
    }}
    primaryStyle={{alignItems: 'center'}}
  />
);

export const renderComposer = props => {
  return (
    <Composer
      {...props}
      textInputStyle={{
        color: '#222B45',
        backgroundColor: '#EDF1F7',
        borderWidth: 1,
        borderRadius: Layout.SV_20,
        borderColor: '#E4E9F2',
        paddingTop: 11,
        paddingHorizontal: 12,
        marginLeft: 0,
      }}
      placeholder="Write a message.."
    />
  );
};

export const renderSend = props => (
  <Send
    {...props}
    disabled={!props.text}
    containerStyle={{
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: Colors.Secondary.BLUE,
      borderRadius: 44,
    }}>
    <Image style={{width: 20, height: 20}} source={Images.sendIcon} />
  </Send>
);
