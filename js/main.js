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
  viewSwap('entries');
});

function renderEntry(entry) {

  var $list = document.createElement('li');
  $list.className = 'flex';

  var $imageDiv = document.createElement('div');
  $imageDiv.className = 'column-half center';
  $list.appendChild($imageDiv);

  var $image = document.createElement('img');
  $image.setAttribute('src', entry.photoUrl);
  $image.setAttribute('onerror', 'this.src=\'images/placeholder-image-square.jpg\'');
  $image.className = 'image';
  $imageDiv.appendChild($image);

  var $textDiv = document.createElement('div');
  $textDiv.className = 'column-half';
  $list.appendChild($textDiv);

  var $title = document.createElement('h2');
  $title.textContent = entry.title;
  $textDiv.appendChild($title);

  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $textDiv.appendChild($notes);

  return $list;
}

function viewSwap(view) {
  data.view = view;
  var $views = document.querySelectorAll('[data-view]');
  if (view === 'entries') {
    var $uList = document.querySelector('ul');
    if (data.nextEntryId > 1) {
      document.querySelector('.empty').className = 'empty hidden';
    } else document.querySelector('.empty').className = 'empty';
    while ($uList.firstChild) {
      $uList.removeChild($uList.firstChild);
    }
    for (var i = data.entries.length - 1; i >= 0; i--) {
      $uList.appendChild(renderEntry(data.entries[i]));
    }
  }

  for (var y of $views) {
    if (y.getAttribute('data-view') === view) {
      y.className = 'column-full';
    } else y.className = 'hidden';
  }

}
document.addEventListener('DOMContentLoaded', viewSwap(data.view));
