/* global data */
/* exported data */

var photoUrl = document.querySelector('#photo');
var photo = document.querySelector('.image');

photoUrl.addEventListener('input', function () {
  photo.setAttribute('src', event.target.value);
});

var $form = document.querySelector('form');

$form.addEventListener('submit', function () {
  event.preventDefault();
  var entry = {
    title: $form.elements.title.value,
    photoUrl: $form.elements.photo.value,
    notes: $form.elements.notes.value,
    entryID: data.nextEntryId
  };
  data.entries.push(entry);
  data.nextEntryId++;
  $form.reset();
  photo.setAttribute('src', 'images/placeholder-image-square.jpg');
});
