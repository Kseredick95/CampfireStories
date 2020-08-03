import React, {Component} from "react";
import { Container, Row} from "../../Grid";
import Navbar from "../../Navbar/index"
import BookCard from "../BookCard/BookCard"
import API from "../../../utils/API_book"
import "./LibraryContainer.css"

class LibraryContainer extends Component{

state={
    library: []
}

componentDidMount() {
    API.getLibrary()
    .then(res => {this.setState({ library: res.data})})
    .catch(err => console.log(err))
}


// const title=this.state.

    render(){
       return( 
    <Container>
        <Navbar />
        <Row>
            {this.state.library.map(book => 
                <BookCard key={book.bookTitle} id={book._id} bookTitle={book.bookTitle}/>
            )}
       </Row>
    </Container>
    )
    }
}

export default LibraryContainer