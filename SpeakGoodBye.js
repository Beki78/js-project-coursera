(function (window) {
  var byeSpeaker = {}; // Create an object

  var speakWord = "Good Bye"; // Define the speakWord variable

  byeSpeaker.speak = function (name) {
    // Attach the speak method to byeSpeaker object
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Expose byeSpeaker to the global scope
})(window);
