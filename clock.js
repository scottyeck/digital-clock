(function(window, $, undefined) {

  /*
   * This is an exercise in creating a Digital Clock using Javascript
   * and jQuery used in NYCDA's Introductory Web Development courses.
   *
   * We create this clock by establishing a timed interval, during
   * each iteration of which we get the current time and update the
   * corresponding DOM nodes representing the "time-components" (i.e.
   * hours, minutes, seconds, milliseconds).
   */

  /**
   * Adds leading zeros to a string of digits.
   *
   * @param {String} string     The string of digits to which we want
   *                            to add leading zeros.
   * @param {Number} digitCount The number of digits we would like the
   *                            string above to occupy.
   */
  function addLeadingZeroes(string, digitCount) {

    var zeroString,
        hasLeadingZero,
        hasCorrectLength;

    // Add maximum number of zeros to the front of the string
    zeroString = '';
    for (var i = 0; i < digitCount - 1; i++) {
      zeroString += '0';
    }
    hasLeadingZero = zeroString + string;

    // Trim string to desired length to eliminate any unnecessary
    // leading zeros
    hasCorrectLength = hasLeadingZero.substr(digitCount * -1);

    return hasCorrectLength;
  }

  $(document).ready(function(){

    var dateTime,
        milliseconds,
        seconds,
        minutes,
        hours;

    // Cache DOM elements
    var $milliseconds = $('#milliseconds'),
        $seconds = $('#seconds'),
        $minutes = $('#minutes'),
        $hours = $('#hours');

    window.setInterval(function(){

      // Get current time
      dateTime = new Date();

      // Store desired time attributes
      milliseconds = dateTime.getMilliseconds();
      seconds = dateTime.getSeconds();
      minutes = dateTime.getMinutes();
      hours = dateTime.getHours();

      // Ensure attributes are printed with correct digit count (using
      // addLeadingZeros function as defined above).
      minutes = addLeadingZeroes(minutes, 2);
      seconds = addLeadingZeroes(seconds, 2);
      milliseconds = addLeadingZeroes(milliseconds, 3);


      // Update DOM elements
      $milliseconds.text(milliseconds);
      $seconds.text(seconds);
      $minutes.text(minutes);
      $hours.text(hours);
    }, 100);

 });

}(this, this.jQuery));