import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useAdminStore, useAdminNotPersistStore} from '../../zustand';
import {Layout, Colors, Fonts, Images} from '../../theme';
import {LabelWithText} from '../../components';
import SwitchToggle from 'react-native-switch-toggle';
const Index = ({navigation, route}) => {
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
  const [toggleSwitch, setToggleSwitch] = useState(isActive);
  const setRefreshStudents = useAdminNotPersistStore(
    state => state.setRefreshStudents,
  );
  const refreshStudents = useAdminNotPersistStore(
    state => state.refreshStudents,
  );
  const changeActiveStatus = useAdminStore(state => state.changeActiveStatus);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.avatarView}>
        <Image source={{uri: picture}} style={styles.imageStyle} />
      </View>
      <View style={styles.nameView}>
        <Text style={styles.boldTextStyle}>
          {firstName} {lastName}
        </Text>
      </View>
      <View style={{marginTop: Layout.SV_15}}>
        <LabelWithText label={'Class Name'} text={className} />
        <LabelWithText label={'Roll Number'} text={rollNumber} />
      </View>
      <View style={styles.enableDisbaleView}>
        <Text style={styles.medimTextStyle}>Enable/Disable</Text>
        <SwitchToggle
          switchOn={toggleSwitch}
          onPress={() => {
            setToggleSwitch(!toggleSwitch);
            changeActiveStatus(index, !toggleSwitch);
            setRefreshStudents(!refreshStudents);
          }}
          containerStyle={styles.switchContainer}
          circleColorOff="#fff"
          circleColorOn="#fff"
          backgroundColorOn={Colors.Secondary.BLUE}
          backgroundColorOff={Colors.Primary.BLACK}
        />
      </View>
      <View style={styles.chatColumn}>
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
          <Text style={[styles.medimTextStyle, {marginRight: Layout.SV_2}]}>
            Chat
          </Text>
          <Image source={Images.chatdotIcon} style={styles.chatImageStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary.WHITE,
    // alignItems: 'center',
    paddingTop: Layout.SV_20,
  },
  avatarView: {
    alignSelf: 'center',
    width: Layout.SV_100,
    height: Layout.SV_100,
    borderRadius: Layout.SV_100,
    // backgroundColor: 'red',
  },
  imageStyle: {
    width: Layout.SV_100,
    height: Layout.SV_100,
    borderRadius: Layout.SV_100,
    resizeMode: 'contain',
  },
  boldTextStyle: {
    fontSize: Layout.FSV_14,
    color: Colors.Primary.BLACK,
    fontFamily: Fonts.bold,
  },
  medimTextStyle: {
    fontSize: Layout.FSV_12,
    color: Colors.Primary.BLACK,
    fontFamily: Fonts.medium,
  },
  nameView: {
    marginTop: Layout.SV_10,
    alignSelf: 'center',
  },
  chatColumn: {
    height: Layout.SV_50,
    flexDirection: 'row',
    // backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    // width: Layout.SV_100,
    // height: Layout.SV_100,
  },
  chatImageStyle: {
    // flex: 1,
    resizeMode: 'contain',
    tintColor: Colors.Secondary.BLUE,
  },
  switchContainer: {
    width: Layout.SV_50,
    height: Layout.SV_25,
    borderRadius: 25,
    padding: 2,
  },
  enableDisbaleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.SV_20,
    marginVertical: Layout.SV_10,
  },
});
