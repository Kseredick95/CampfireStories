import axios from "axios";

export default {
    // Gets all saved user
    getSavedBooks: function() {
        return axios.get("/api/book");
    }
}