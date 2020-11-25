//importing axios to make our ajax calls
import axios from "axios";

export default {
  //Finds a recipe with the provided id 
  getNight: function (id) {
    return axios.get("/api/nightin/" + id);
  },
  // Deletes a recipe with the provided id
  deleteNight: function (id) {
    return axios.delete("/api/nightin/" + id);
  },
  //Finds recipes with the provided query term
  getNightin: function (query){
    return axios.get("/api/nightin", { params: { q: query } }) 
  },
};

 //these methods return the results of making an ajax call 
 //back to wherever they are called from in the front end

 //**curently this file only includes ajax calls to nightin APi routes 
 //but will be expanded to include ajax calls to routes for other collections