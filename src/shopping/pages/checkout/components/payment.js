import React from 'react'
import {Row,Col} from 'antd'


const PayMentOders = () => {
    return (
        <>
            <Row>
                <Col span={8} offset={3}>
                    <h1 style={{textAlign: 'center'}}>PayMent</h1>
                </Col>
                <Row>
                    <Col span={12}>
                        <p>yeu cau nhap dia chi giao hang</p>
                        <p>nhap ghi chu gioa don hang</p>
                        <p>nhap ma giam gia</p>
                        <p>chonphuong thuc thanh toan</p>
                    </Col>
                    <Col span={12}>
                            <p>hien thi cac san pham trong gio hang</p>
                        </Col>
                </Row>
            </Row>
        </>
    )
}

export default React.memo(PayMentOders)