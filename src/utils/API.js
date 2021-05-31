import axios from "axios";
export default {
    getRandomUser: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};