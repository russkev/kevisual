function copyToClipboard(event, text) {
  event.preventDefault();
  navigator.clipboard.writeText(text);
}

var clipboardEmail = document.getElementById("clipboard-email")
clipboardEmail.addEventListener('click', (event) => {
  copyToClipboard(event, "russkev@gmail.com")
  clipboardEmail.innerHTML = "Success!"
  setTimeout(() => {
    clipboardEmail.innerHTML = "Copy to clipboard";
  }, 2000) 
})