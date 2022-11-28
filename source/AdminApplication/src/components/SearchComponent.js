import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {Layout, Colors} from '../theme';
const SearchComponent = ({onChangeText, value, placeholder}) => {
  return (
    <View style={styles.mainViewStyle}>
      <View style={[styles.InputTextView]}>
        <TextInput
          style={[styles.InputTextStyle]}
          placeholderTextColor={Colors.Primary.GREY_10}
          onChangeText={text => onChangeText(text)}
          value={value}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  InputTextView: {
    flex: 1,
    paddingLeft: Layout.SV_10,
  },
  InputTextStyle: {
    flex: 1,
    fontSize: Layout.FSV_14,
    color: Colors.Primary.BLACK,
    padding: 0,
  },
});

export default SearchComponent;
