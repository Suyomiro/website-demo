onload = () => {
  document.body.classList.remove("container");
};


const titleText = "MAME DIARRA ❤️🎉";
  const titleElement = document.getElementById("title");

  function showLetters(text, element, callback) {
    let index = 0;
    const interval = setInterval(() => {
      element.innerHTML += text[index];
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 200); // 0,2 seconde par lettre
  }

  showLetters(titleText, titleElement);