import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class Newscard extends Component {
    render() {
        let { key,title,description,imgurl,refe,author,date } = this.props;
        return (
            <>
                <div className="col-md-4">
                <Card  className='my-5 mx-3'>
                    <Card.Img variant="top" src={imgurl?imgurl:"https://static.toiimg.com/thumb/msid-104630555,width-1070,height-580,imgsize-50546,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} />
                    <Card.Body>
                        <Card.Title id={key}>{title?title.slice(0,20):" "}</Card.Title>
                        <Card.Text>
                            {description?description.slice(0,35):" "}
                        </Card.Text>
                        <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {date.slice(0,10)} at {date.slice(12,19)}</small></p>
                        <Button variant="danger"><a rel="noreferrer" style={{textDecoration:'none',color:'white'}} href={refe?refe:"https://www.google.com"} target="_blank">Read more</a></Button>
                    </Card.Body>
                </Card>
                </div>
            </>
        )
    }
}