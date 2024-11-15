function getSplashText(filePath) {
    const request = new XMLHttpRequest();
    request.open('GET', filePath, false); // Synchronous request
    request.send();
  
    if (request.status === 200) {
      const lines = request.responseText.split('\n');
      const index = Math.floor(Math.random() * lines.length);
      const splashText = lines[index];
      return splashText;
    } else {
      console.error('Error fetching file:', request.statusText);
      return null;
    }
  }
  
const filePath = '../MISC/splashes.txt';
const splashText = getSplashText(filePath);

if (splashText) {
  const splashField = document.getElementById("splash");
  splashField.innerText = splashText;
}