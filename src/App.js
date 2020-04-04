import React from 'react';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
        <Row>
          <Col span={8}>
            <Card style={{ width: 'inherit', height: 'inherit', margin: '20px 10px 20px 20px', borderRadius: 10 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card> 
          </Col>
          <Col span={16}>
            <Card style={{ width: 'inherit', height: 'inherit', margin: '20px 20px 20px 10px', borderRadius: 10 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default App;
