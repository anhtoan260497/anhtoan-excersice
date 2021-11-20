import axiosClient from "./axiosClient";

const currentLocationWeatherApi = {
  getData(lat, lon, API_key) {
    const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    return axiosClient.get(url);
  },
};

export default currentLocationWeatherApi;
