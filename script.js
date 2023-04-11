function check() {
  let input = document.getElementById('pass-confirm');
  if (input.value != document.getElementById('password').value) {
    input.setCustomValidity('Password does not match!');
  } else {
    input.setCustomValidity('');
  }
}