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

      // Ensure minutes attribute is printed with two digits (using
      // leading zero if necessary).
      minutes = ("0" + minutes).substr(-2);

      // Update DOM elements
      $milliseconds.text(milliseconds);
      $seconds.text(seconds);
      $minutes.text(minutes);
      $hours.text(hours);
    }, 100);

 });

}(this, this.jQuery));