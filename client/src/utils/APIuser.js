import axios from "axios";

export default {
<<<<<<< HEAD
  // Gets all saved users
  getSavedUser: function() {
    return axios.get("/api/user");
  },
  //Get by email
  getEmail: function(email) {
    return axios.get("/api/user/" + email);
  },
  getById: function(id) {
    return axios.get("/api/user/" + id)
  },
  // Deletes the saved user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves an user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
=======
    // Gets all saved users
    getSavedUser: function() {
        return axios.get("/api/user");
    },
    //Get by email
    getEmail: function(email) {
        return axios.get("/api/user/" + email);
    },
    getById: function(id) {
        console.log(id)
        return axios.get("/api/user/" + id)
    },
    // Deletes the saved user with the given id
    deleteUser: function(id) {
        return axios.delete("/api/user/" + id);
    },
    // Updates user by given id
    update: function(id, obj) {
        return axios.put("/api/user/" + id, obj)
    },
    // Saves an user to the database
    saveUser: function(userData) {
        return axios.post("/api/user", userData);
    },
>>>>>>> 6c89363ebd16e24ee0e1da18df817c536701202b

    loginUser: function(userData) {
        return axios.post("/api/login", userData)
    },
    logoutUser: function() {
        return axios.post("/api/logout")
    }
};