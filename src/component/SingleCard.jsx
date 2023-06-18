import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class SingleCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Card className='mb-2  flex-column justify-content-between gap-2 shadow' style={{ width: '18rem'}}>
            <Card.Img variant="top" className='w-100 h-50 object-fit-contain' src={this.props.img} />
            <Card.Body className=' d-flex text-center flex-column justify-content-evenly gap-2'>
            <Card.Title>{this.props.title}</Card.Title>
                    <Card.Title>{this.props.price + " €"}</Card.Title>
                <Button variant="primary" className='mx-5 shadow' >Go somewhere</Button>
            </Card.Body>
          </Card>
        );
    }

}

export default SingleCard;