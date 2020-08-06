import React from "react";
import {Link} from "react-router-dom"
import BookPic from "../BookPic/BookPic"

function BookCard(props){
    return (           
        <div className="card LibCard">
            <Link to={`/storypage/${props.bookTitle}`}>
                <BookPic alt={props.bookTitle}></BookPic>
                <h3 className="libh3">{props.bookTitle}</h3>
            </Link>
        </div>
    )
}

export default BookCard