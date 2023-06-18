import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import books from '../data/fantasy.json';
import React, {Component} from "react";
import SingleCard from './SingleCard';

class MainContent extends Component {
    constructor(props) {
        super(props);
    }

        render() {
            return(
                <Container className='my-5'>
                    <Row>
                        <Col className='d-flex flex-wrap gap-3 justify-content-center'>
                            {books.map((book) => {
                                return(
                                    
                                    <SingleCard
                                        key= {book.asin}
                                        img= {book.img}
                                        title= {book.title}
                                        price= {book.price}
                                    />
                                    
                                )
                            })}
                        </Col>
                    </Row>
                </Container>

            );
        }
    }
    
                    


export default MainContent;