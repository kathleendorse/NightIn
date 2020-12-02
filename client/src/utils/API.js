//importing axios to make our ajax calls
import axios from "axios";

export default {
  // user login
  userLogin: function (userObj) {
    return axios.post("/api/user/login", userObj);
  },
  userRegister: function (userObj) {
    return axios({
      method: "POST",
      data: userObj,
      withCredentials: true,
      url: "http://localhost:3001/api/user/register",
    });
  },

  userLogout: function (userObj) {
    return axios({
      method: "Get",
      withCredentials: true,
      url: "http://localhost:3001/api/user/logout",
    });
  },

  //Finds recipes with the provided query term
  getRecipes: function (query) {
    return axios.get("/api/recipe", { params: { q: query } });
  },
  //Finds a recipe with the provided id
  getRecipe: function (id) {
    return axios.get("/api/recipe/" + id);
  },
  // Deletes a recipe with the provided id
  deleteRecipe: function (id) {
    return axios.delete("/api/recipe/" + id);
  },

  //TESTING
  getWines: function () {
    return axios.get("/api/wine");
  },
  getWine: function (id) {
    return axios.get("/api/wine/" + id);
  },
};

//these methods return the results of making an ajax call
//back to wherever they are called from in the front end
