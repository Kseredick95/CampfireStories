 import React from "react";
 import {Link} from "react-router-dom"


 // Checks certain arrays on user model, returns true if empty
 export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


// Registered users and logged in users info populates userHistory card resume button correctly
export function lastBookCheckBtn(book){
if (book === null){
    return (<div className="view"><button className="btn btn-primary">Resume</button></div>)
}
else if(isEmpty(book) === false){
    return (
    <Link to={`/storypage/${book.bookTitle}`}>
        <div className="view"><button className="btn btn-primary">Resume</button></div>
    </Link>)
}
else{
   return (<div className="view"><button className="btn btn-primary">Resume</button></div>)
}}


//// Registered users and logged in users info populates userHistory card book name correctly
export function lastBookCheckName(book){
if (book === null){
   return "None"
}
else if(isEmpty(book) === false){
return book.bookTitle
}
else{
   return "None"
}}