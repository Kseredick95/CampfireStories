import axios from "axios";

export default {
    // Gets all saved user
    getLibrary: function() {
        return axios.get("/api/book");
    },

    findByTitle: function() {
        return axios.get("/api/book/:bookTitle")
    }
}