import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layout, Colors, Fonts} from '../theme';
const LabelWithText = ({label, text}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelView}>
        <Text style={styles.boldTextStyle}>{label}</Text>
      </View>
      <View style={styles.textView}>
        <Text style={styles.medimTextStyle}>{text}</Text>
      </View>
    </View>
  );
};

export default LabelWithText;

const styles = StyleSheet.create({
  mainContainer: {
    // height: Layout.SV_30,
    flexDirection: 'row',
    paddingHorizontal: Layout.SV_20,
    marginVertical: Layout.SV_10,
    paddingVertical: Layout.SV_2,
  },
  boldTextStyle: {
    fontSize: Layout.FSV_12,
    color: Colors.Primary.BLACK,
    fontFamily: Fonts.medium,
  },
  medimTextStyle: {
    fontSize: Layout.FSV_12,
    color: Colors.Primary.BLACK,
    fontFamily: Fonts.medium,
  },
  labelView: {
    flex: 1,
    // backgroundColor: 'orange',
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
