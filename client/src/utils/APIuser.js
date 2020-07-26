import axios from "axios";

export default {
  // Gets all saved user
  getSavedUser: function() {
    return axios.get("/api/user");
  },
  // Deletes the saved user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves an user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
