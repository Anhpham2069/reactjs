
import React from 'react'
import {Row,Col} from 'antd'
import {Link} from 'react-router-dom'

const ConfirmOrders = () =>{
    return(
        <>
            <Row>
                <Col span={8} offset={3}>
                    <h1 style={{textAlign: 'center'}}>Confirm Orders</h1>
                    <Row>
                        <Col span={12}>
                            <p>vui long nhap thong tin</p>
                        </Col>
                        <Col span={12}>
                            <p>neu co tai khoan ro vui long <Link to="/login">dang nhap</Link></p>
                            <p>hien thi cac san pham trong gio hang</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </>
    )
}
export default React.memo(ConfirmOrders)