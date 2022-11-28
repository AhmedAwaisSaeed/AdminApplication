import create from 'zustand';
import {combine, persist} from 'zustand/middleware';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dummyStudents from '../constants/DummyStudents';
const initialState = {
  allStudents: [...dummyStudents],
  chatList: [],
};

const store = combine(initialState, (set, get) => ({
  setAllStudents: students => set({allStudents: students}),
  changeActiveStatus: (index, isActive) => {
    let tempAllStudents = [...get().allStudents];
    tempAllStudents[index].isActive = isActive;
    set({allStudents: [...tempAllStudents]});
  },
  setChatList: chatList => set({chatList: [...chatList]}),
  addToChatList: item => {
    let tempChatList = [...get().chatList];
    tempChatList.unshift(item);
    set({chatList: [...tempChatList]});
  },
}));

const persistentStore = persist(store, {
  name: 'admin-store',
  getStorage: () => AsyncStorage,
});
export const useAdminStore = create(persistentStore);
