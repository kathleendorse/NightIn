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
