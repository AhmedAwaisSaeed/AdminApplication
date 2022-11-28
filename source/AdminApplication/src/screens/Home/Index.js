import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../../theme';

const Index = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => navigation.navigate('Student Profiles')}>
        <Text style={styles.textStyle}>Student Profiles</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.ButtonContainer}
        onPress={() => navigation.navigate('Chat List')}>
        <Text style={styles.textStyle}>Chat List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary.WHITE,
  },
  ButtonContainer: {
    marginVertical: Layout.SV_10,
    backgroundColor: Colors.Secondary.BLUE,
    padding: Layout.SV_10,
    borderRadius: Layout.SV_10,
  },
  textStyle: {
    color: Colors.Primary.WHITE,
    fontSize: Layout.FSV_12,
    fontFamily: Fonts.medium,
  },
});
