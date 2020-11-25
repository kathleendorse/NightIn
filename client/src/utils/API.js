//importing axios to make our ajax calls
import axios from "axios";

export default {
  // Gets all nightin
  getNightin: function () {
    return axios.get("/api/nightin");
  },
  // Gets the night with the given id
  getNight: function (id) {
    return axios.get("/api/nightin/" + id);
  },
  // Deletes the night with the given id
  deleteNight: function (id) {
    return axios.delete("/api/nightin/" + id);
  },
};

 //these methods return the results of making an ajax call 
 //to a route back to wherever they are called from in the front end

 //**curently this file only includes ajax calls to nightin APi routes 
 //but will be expanded to include ajax calls to routes for other collections