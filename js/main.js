/* global data */
/* exported data */

var photoUrl = document.querySelector('#photo');
var photo = document.querySelector('.image');
var $uList = document.querySelector('ul');

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

$uList.addEventListener('click', function () {
  viewSwap('entry-form');
});

function renderEntry(entry) {

  var $list = document.createElement('li');
  $list.setAttribute('data-entry-id', entry.entryID);
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

  var $editDiv = document.createElement('div');
  var $title = document.createElement('h2');
  var $edit = document.createElement('button');
  var $pencil = document.createElement('img');

  $edit.className = 'edit';
  $pencil.className = 'pencil';
  $pencil.src = 'data:image/png;base64,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';
  $title.textContent = entry.title;
  $editDiv.className = 'space-between flex';

  $editDiv.appendChild($title);
  $editDiv.appendChild($edit);
  $edit.appendChild($pencil);
  $textDiv.appendChild($editDiv);

  var $notes = document.createElement('p');
  $notes.textContent = entry.notes;
  $textDiv.appendChild($notes);

  return $list;
}

function viewSwap(view) {
  data.view = view;
  var $views = document.querySelectorAll('[data-view]');
  if (view === 'entries') {
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
