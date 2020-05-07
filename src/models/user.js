
import userApi from '../apis/userApi'
export default {
    namespace: 'user',
    state: {
        personInfo: [],
    },
    effects: {
        // *getAppTypeDict({ payload }, { call, put }) {
        //     const response = yield call( personApi.getDict, payload);
        //     if(response.code == 200){
        //         yield put({ type: 'changeType', payload: { appTypeDict: response.result } });
        //     }
        // },
    },
    reducers: {
        changeType(state, action) {
            return { ...state, ...action.payload };
        },
    },
}
