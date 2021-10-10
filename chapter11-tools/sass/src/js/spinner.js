import spinner from '../image/spinner.gif';

export function createSpinner(parent) {	
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  const imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = spinner;

  spinnerAreaEl.append(imageEl);
}