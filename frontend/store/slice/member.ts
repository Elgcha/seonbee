import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Member } from "../interface/Member";
import { Lantern } from "../interface/Lantern";
const initialState: any = {
  nickname: "",
  member: [],

  myProfile: [] as Member[],
  lanterns: [
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 1,
      lanternType: 4,
    },
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 3,
      lanternType: 6,
    },
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 13,
      lanternType: 3,
    },
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 6,
      lanternType: 6,
    },
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 7,
      lanternType: 7,
    },
    {
      lanternId: 1,
      guestId: 1,
      nickname: "김선비",
      content: "ㅊㅊㅊ",
      position: 10,
      lanternType: 2,
    },
  ] as Lantern[],
  isLoading: false,
  error: null,
};

export const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    profileEdit: (state) => {},

    //로그인 리듀서
    getMember: (state) => {
      state.isLoading = true;
    },
    setMember: (state, { payload }) => {
      state.isLoading = false;
      state.member = payload;
    },
    setMemberFail: (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    },

    //호패 리듀서
    // state는 리듀서 상태, payload 는 인자
    // 요청할때 dispatch에 인자를 넣어 보내고 싶다면 payload까지 작성해줘야함
    getMyProfile: (state, { payload }: any) => {
      state.isLoading = true;
    },
    setMyProfile: (state, { payload }) => {
      state.isLoading = false;
      state.myProfile = payload;
    },
    setMyProfileFail: (state, { payload: error }) => {
      state.isLoading = false;
      state.error = error;
    },
  },
});

const { actions, reducer } = memberSlice;
export const memberActions = actions;
export default reducer;
