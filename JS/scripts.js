function generatePoem() {
    // Get a random poem from the poemsArray
    const randomPoem = poemsArray[Math.floor(Math.random() * poemsArray.length)];
    
    // Find the poemDisplay div and set its content to the randomly selected poem
    const poemDisplay = document.getElementById('poemDisplay');
    poemDisplay.textContent = randomPoem;
}
