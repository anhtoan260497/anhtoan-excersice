import axiosClient from "./axiosClient";

const curentWeatherApi = {
  getData(lat, lon, API_key) {
    const url = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    return axiosClient.get(url);
  },

  get7DaysData(lat,lon,API_key){
    const url = `/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${API_key}`
    return axiosClient.get(url)
  }
};

export default curentWeatherApi;