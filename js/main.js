/* global data */
/* exported data */

var photoUrl = document.querySelector('#photo');
var photo = document.querySelector('.image');

photoUrl.addEventListener('input', function () {
  photo.setAttribute('src', event.target.value);
});
