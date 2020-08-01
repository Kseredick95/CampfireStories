import axios from "axios";

export default {
  // Gets all saved users
  getSavedUser: function() {
    return axios.get("/api/user");
  },
  //Get by email
  getEmail: function(email) {
    return axios.get("/api/user/" + email);
  },
  // Deletes the saved user with the given id
  deleteUser: function(email) {
    return axios.delete("/api/user/" + email);
  },
  // Saves an user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
