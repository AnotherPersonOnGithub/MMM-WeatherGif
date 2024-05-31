odule.register("MMM-weather-gif", {
  // Initialize the module.
  start: function () {
    this.loaded = false;
    this.gifElement = document.createElement("img");
    this.gifElement.className = "MMM-weather-gif";
    this.gifElement.style.display = "none";

    this.updateDom();
  },

  // Override notification handler.
  notificationReceived: function (notification, payload) {
    if (notification === "WEATHER_UPDATED" && payload.currentWeather) {
      this.showGifBasedOnWeather(payload.currentWeather);
    }
  },

  // Show GIF based on weather data.
  showGifBasedOnWeather: function (weatherData) {
    // Logic to determine which GIF to display based on weatherData
    const gifUrl = this.getGifUrlBasedOnWeather(weatherData);
    if (gifUrl) {
      this.gifElement.src = gifUrl;
      this.gifElement.style.display = "block";
      this.loaded = true;
      this.updateDom();
    }
  },

  // Logic to determine the URL of the GIF based on weather data.
getGifUrlBasedOnWeather: function (weatherData) {
    // Map each weather condition to its corresponding GIF URL
    const gifUrls = {
        "day-sunny": "<url_to_gif>",
        "day-cloudy": "<url_to_gif>",
        "cloudy": "<url_to_gif>",
        "cloudy-windy": "<url_to_gif>",
       "showers": "<url_to_gif>",
        "rain": "<url_to_gif>",
        "thunderstorm": "<url_to_gif>",
        "snow": "<url_to_gif>",
        "fog": "<url_to_gif>",
        "night-clear": "<url_to_gif>",
        "night-cloudy": "<url_to_gif>",
        "night-showers": "<url_to_gif>",
        "night-rain": "<url_to_gif>",
        "night-thunderstorm": "<url_to_gif>",
        "night-snow": "<url_to_gif>",
        "night-alt-cloudy-windy": "<url_to_gif>",
    };
    
    // Retrieve the corresponding GIF URL based on the weather condition
    const gifUrl = gifUrls[weatherData.weatherType];

    // Return the GIF URL if available, otherwise return the fallback GIF URL
    if (gifUrl) {
        return gifUrl;
    } else {
        // Fallback GIF URL for unexpected or unknown weather conditions
        return "<url_to_gif>";
    }
},



  // Override dom generator.
  getDom: function () {
    if (!this.loaded) {
      return document.createTextNode("Loading...");
    }
    return this.gifElement;
  },
});

