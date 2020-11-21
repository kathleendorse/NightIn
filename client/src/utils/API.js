import axios from "axios";

export default {
  // Gets all kates
  getKates: function() {
    return axios.get("/api/kates");
  },
  // Gets the kate with the given id
  getKate: function(id) {
    return axios.get("/api/kates/" + id);
  },
  // Deletes the kate with the given id
  deleteKate: function(id) {
    return axios.delete("/api/kates/" + id);
  }
};
