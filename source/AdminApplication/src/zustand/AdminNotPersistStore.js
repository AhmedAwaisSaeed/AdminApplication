import create from 'zustand';
import {combine} from 'zustand/middleware';
import _ from 'lodash';
const initialState = {
  refreshStudents: false,
  refreshChatList: false,
};

const store = combine(initialState, (set, get) => ({
  setRefreshStudents: refreshStudents => set({refreshStudents}),
  setRefreshChatList: refreshChatList => set({refreshChatList}),
}));

export const useAdminNotPersistStore = create(store);
