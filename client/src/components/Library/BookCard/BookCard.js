import React from "react";
import { Container } from "../../Grid";
import {Link} from "react-router-dom"
import BookPic from "../BookPic/BookPic"
function BookCard(props){
    return (           
        <div className="card LibCard">
        <Container>
            <Link to={`/storypage/${props.bookTitle}`}>
                <BookPic alt={props.bookTitle}></BookPic>
                <h3 className="libh3">{props.bookTitle}</h3>
                <button className="btn libBtn" onClick={() => {props.restartBook()}}>Restart Book</button>
            </Link>
        </Container>
        </div>
    )
}
export default BookCard