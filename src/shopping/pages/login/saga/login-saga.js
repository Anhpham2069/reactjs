import { take, put, call, fork, cancel, cancelled } from 'redux-saga/effects'
import * as actions from '../actions/index'
import * as types from '../actions/types'
import * as api from '../../../services/login_service'
import { push } from 'connected-react-router'

function* loginSaga(user,pass){
    try {
        yield put(actions.startLogin(true));
        const response = yield call(api.loginUser,user,pass);
        if(response.hasOwnProperty('code') && response['code']===200){
            yield put(actions.loginSuccess(response));
            //luu token
            yield put(actions.saveTokenLogin(response['token_user']))
            yield put(actions.startLogin(false));
            //quay lai trang home
        yield put(push('/home'))
        }else{
            yield put(actions.loginError('sai ten dang hap hoac mat khau'))
        }
    } catch (error) {
        yield put(actions.loginError('error,vui long thu lai'))
    } finally {
        //khong the ket noi
        if(yield cancelled()){
            yield put(actions.loginCancelled({
                cod: 500,
                message: 'Sync cancelled!'
            }))
        }
    }
}
export default function* loginSagaFlowing(){
    while(true){
    //thuc su theo do khi co actions cua user va lay ra du lieu nguoi dung
    const {user,pass } = yield take(types.LOGIN_REQUEST)
    const taskLogin = yield fork(loginSaga,user,pass )
    //khi neu co hanh dong log out haoc login err thi dung hanh dong login lai
    const act = yield take([types.LOGIN_REQUEST,types.LOGIN_ERROR]);
    if(act.type===types.LOGIN_REQUEST||act.type===types.LOGIN_ERROR){
        yield put(actions.startLogin(false));
        //huy hanh dong login
        yield cancel(taskLogin);
        //xoa token
        yield put(actions.removeTokenLogin(null));
        //mac dinh quy ve trang login
        yield put(push('/login'))
    }
}
}