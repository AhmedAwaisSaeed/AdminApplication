import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {StudentCard} from '../../components';
import {useAdminStore, useAdminNotPersistStore} from '../../zustand';
import {Layout, Colors, Fonts} from '../../theme';
import {SearchComponent} from '../../components';
import _ from 'lodash';

const Index = ({navigation}) => {
  const allStudents = useAdminStore(state => state.allStudents);
  const refreshStudents = useAdminNotPersistStore(
    state => state.refreshStudents,
  );
  const setRefreshStudents = useAdminNotPersistStore(
    state => state.setRefreshStudents,
  );
  const [paginatedStudents, setPaginatedStudents] = useState([]);
  const [perPageStudents, setPerPageStudents] = useState(20);
  const [afterIndex, setAfterIndex] = useState(0);
  const [filterdArrayAllStudents, setFilterdArrayAllStudents] = useState([]);
  const [query, setQuery] = useState('');

  const getMoreStudents = () => {
    let lastIndex = afterIndex + perPageStudents;
    const nextStudents = allStudents.slice(afterIndex, lastIndex);
    if (paginatedStudents?.length > 0) {
      setPaginatedStudents(students => [
        ..._.concat(students, ...nextStudents),
      ]);
    } else {
      setPaginatedStudents([...nextStudents]);
    }
  };

  useEffect(() => {
    if (refreshStudents) {
      getMoreStudents();
      setRefreshStudents(false);
    }
  }, [refreshStudents]);

  useEffect(() => {
    if (afterIndex < allStudents.length) {
      getMoreStudents();
    }
  }, [afterIndex]);

  const handler = useCallback(
    _.debounce(() => {
      filterAllStudents();
    }, 100),
    [query],
  );

  useEffect(() => {
    if (query) {
      handler();
    }
  }, [query]);

  const filterAllStudents = () => {
    let filteredStudents = [];
    for (let i = 0, l = allStudents?.length; i < l; ++i) {
      if (
        allStudents[i].firstName.toLowerCase().includes(query.toLowerCase())
      ) {
        filteredStudents.push(allStudents[i]);
      }
    }
    setFilterdArrayAllStudents(filteredStudents);
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color={Colors.Primary.BLACK} />
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    const {firstName, lastName, className, rollNumber, isActive, picture} =
      item;
    return (
      <StudentCard
        key={item?._id}
        firstName={firstName}
        lastName={lastName}
        className={className}
        rollNumber={rollNumber}
        isActive={isActive}
        picture={picture}
        index={index}
        navigation={navigation}
        studentId={item?._id}
        fromChat={false}
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <SearchComponent
          value={query}
          onChangeText={setQuery}
          placeholder={'Search Student'}
        />
      </View>

      <View style={styles.flexOne}>
        <FlatList
          data={
            filterdArrayAllStudents?.length > 0 && query
              ? filterdArrayAllStudents
              : paginatedStudents
          }
          onEndReachedThreshold={0.6}
          onEndReached={({distanceFromEnd}) => {
            if (afterIndex < allStudents.length) {
              setAfterIndex(afterIndex + perPageStudents);
            }
          }}
          renderItem={renderItem}
          extraData={refreshStudents}
          ListFooterComponent={
            afterIndex < allStudents.length && !query && renderFooter
          }
        />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Primary.WHITE,
  },
  searchContainer: {
    height: Layout.SV_50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: Layout.SV_10,
  },
  footer: {
    paddingVertical: Layout.SV_50,
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: Layout.FSV_12,
    color: Colors.Primary.BLACK,
    fontFamily: Fonts.bold,
    letterSpacing: Layout.SV_1,
    lineHeight: Layout.SV_18,
  },
  flexOne: {
    flex: 1,
  },
});
