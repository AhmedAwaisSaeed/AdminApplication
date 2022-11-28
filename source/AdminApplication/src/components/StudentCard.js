import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts, Images} from '../theme';
import FastImage from 'react-native-fast-image';
const StudentCard = ({
  firstName,
  lastName,
  className,
  rollNumber,
  isActive,
  picture,
  index,
  navigation,
  studentId,
  fromChat,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.mainContainer,
        {
          backgroundColor: isActive
            ? Colors.Secondary.BLUE
            : Colors.Primary.DARK_GREY,
        },
      ]}
      onPress={() =>
        navigation.navigate(fromChat ? 'Chat' : 'Student Profile', {
          firstName,
          lastName,
          className,
          rollNumber,
          isActive,
          picture,
          index,
          studentId,
        })
      }>
      <View style={styles.imageColumn}>
        <FastImage
          source={{uri: picture}}
          style={styles.imageStyle}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View style={styles.textcolumn}>
        <Text style={[styles.textStyle, {fontFamily: Fonts.medium}]}>
          {firstName} {lastName}
        </Text>
        {/* <Text style={styles.textStyle}>{lastName}</Text> */}
        <Text style={styles.textStyle}>Class Name: {className}</Text>
        <Text style={styles.textStyle}>Roll Number: {rollNumber}</Text>
      </View>
      <TouchableOpacity
        style={styles.chatColumn}
        onPress={() =>
          navigation.navigate('Chat', {
            firstName,
            lastName,
            className,
            rollNumber,
            isActive,
            picture,
            index,
            studentId,
          })
        }>
        <Image source={Images.chatdotIcon} style={styles.chatImageStyle} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default StudentCard;

const styles = StyleSheet.create({
  mainContainer: {
    height: Layout.SV_100,
    marginVertical: Layout.SV_10,
    marginHorizontal: Layout.SV_10,
    borderRadius: Layout.SV_10,
    flexDirection: 'row',
  },
  textStyle: {
    color: Colors.Primary.WHITE,
    fontSize: Layout.FSV_12,
    marginVertical: Layout.SV_2,
    fontFamily: Fonts.light,
  },
  rowStyle: {
    flexDirection: 'row',
  },
  imageColumn: {
    // flex: 1,
    marginRight: Layout.SV_10,
    marginLeft: Layout.SV_10,
    marginTop: Layout.SV_10,
  },
  imageStyle: {
    height: Layout.SV_80,
    width: Layout.SV_80,
    borderRadius: Layout.SV_10,
  },
  textcolumn: {
    flex: 1,
    marginTop: Layout.SV_10,
  },
  chatColumn: {
    width: Layout.SV_50,
  },
  chatImageStyle: {
    flex: 1,
    resizeMode: 'contain',
    tintColor: Colors.Primary.WHITE,
  },
});
