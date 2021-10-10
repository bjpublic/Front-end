export function createSpinner(parent) {
  const spinnerAreaEl = parent.querySelector('.spinner-area');
  const imageEl = document.createElement('img');
  imageEl.alt = 'spinner';
  imageEl.src = './src/image/spinner.gif';

  spinnerAreaEl.append(imageEl);
}
