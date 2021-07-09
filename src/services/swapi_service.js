import axios from "axios";

class SwapiService {
  constructor() {
    this.base_url = "https://swapi.dev/api/people";
  }

  getAllPeople(path) {
    return axios.get(this.base_url + path);
  }
}

export default SwapiService;
