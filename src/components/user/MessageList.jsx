import React from 'react';
import {ListGroup, Card, Image, Row, Col} from 'react-bootstrap';
import avater_placeholder from '../images/avater_placeholder.jpg';

export default function MessageList() {
    return (
        <div>
            <Card className="border-0">
                <Card.Header className="border-0" style={{backgroundColor: '#76ba1b'}}>
                    <b style={{color: 'white'}}>Messages</b>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Image src={avater_placeholder} style={styles.avater} roundedCircle />
                        <span>
                            <span style={{marginLeft: '3%'}}>Cras justo odio</span>
                            <p style={{marginLeft: '10%', marginTop: '-15px', fontSize: '13px', opacity: '0.5', fontWeight: 'bold'}}>2days ago</p>
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image src={avater_placeholder} style={styles.avater} roundedCircle />
                        <span>
                            <span style={{marginLeft: '3%'}}>Cras justo odio</span>
                            <p style={{marginLeft: '10%', marginTop: '-15px', fontSize: '13px', opacity: '0.5', fontWeight: 'bold'}}>2days ago</p>
                        </span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Image src={avater_placeholder} style={styles.avater} roundedCircle />
                        <span>
                            <span style={{marginLeft: '3%'}}>Cras justo odio</span>
                            <p style={{marginLeft: '10%', marginTop: '-15px', fontSize: '13px', opacity: '0.5', fontWeight: 'bold'}}>2days ago</p>
                        </span>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

const styles = {
    avater: {
        height: '50px'
    }
};
