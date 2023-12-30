(function (window) {
  var helloSpeaker = {}; // Create an object

  var speakWord = "Hello"; // Define the speakWord variable

  helloSpeaker.speak = function (name) {
    // Attach the speak method to helloSpeaker object
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker; // Expose helloSpeaker to the global scope
})(window);
