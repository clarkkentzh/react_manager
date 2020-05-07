
import userApi from '../apis/userApi'
import {setToken} from '../utils/token'
export default {
    namespace: 'user',
    state: {
        userInfo: [],
    },
    effects: {
        *login({ payload,callback }, { call, put }) {
            const response = yield call( userApi.login, payload);
            if(response.code == 200){
                setToken(response.result.token)
                yield put({ type: 'changeType', payload: { userInfo: response.result.userInfo,departsInfo:  response.result.departs} });
                if(callback){
                    callback()
                }
            }
        },
    },
    reducers: {
        changeType(state, action) {
            return { ...state, ...action.payload };
        },
    },
}
