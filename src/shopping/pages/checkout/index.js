import React from 'react'
import ConFirmOders from './components/confirm'
import PayMentOders from './components/payment'
import LayoutComponent from '../../components/layout'
import * as reselect from '../login/reselect/login-reselect'
import {isLogin} from '../../services/login_service'
import {useSelector} from 'react-redux'
import {createStructuredSelector} from 'reselect'

const CheckOut = () =>{
    const token = useSelector(createStructuredSelector({
        token: reselect.getTokenLoginUser
    }))
    const login = isLogin(token)
    return (
        <>
            <LayoutComponent>
                {login ? <PayMentOders /> : <ConFirmOders/>}
            </LayoutComponent>
        </>
    )
}
export default React.memo(CheckOut);