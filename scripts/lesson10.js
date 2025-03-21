function checkClass(className) {
  if(document.querySelector('.js-button').classList.contains(className)) {
    console.log('it has it!')
  } else {
    console.log('it doesn\'t have it!')
  }
}
function startGame(buttonId) {

  if(!document.querySelector(`#${buttonId}`).classList.contains('is-toggled')) {
    document.querySelector(`#${buttonId}`).classList.add('is-toggled');
  } else {
    document.querySelector(`#${buttonId}`).classList.remove('is-toggled');
  }
  if(buttonId == 'gaming') {
    if(document.querySelector('#music').classList.contains('is-toggled') || document.querySelector('#tech').classList.contains('is-toggled')) {
      document.querySelector(`#${buttonId}`).classList.remove('is-toggled');
    }
  } else if(buttonId === 'music') {
    if(document.querySelector('#gaming').classList.contains('is-toggled') || document.querySelector('#tech').classList.contains('is-toggled')) {
      document.querySelector(`#${buttonId}`).classList.remove('is-toggled');
    }
  } else if(buttonId === 'tech') {
    console.log('te');

    if(document.querySelector('#gaming').classList.contains('is-toggled') || document.querySelector('#music').classList.contains('is-toggled')) {
      document.querySelector(`#${buttonId}`).classList.remove('is-toggled');
    }
  }
}
function checkInput() {
  if(Number(document.querySelector('.js-in').value) < 0) {
    document.querySelector('.js-pp').innerHTML =  document.querySelector('.js-in').value;
  }
}
