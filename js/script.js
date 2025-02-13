window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");

    game = new Game();
    game.start();
  }

  window.addEventListener("keydown", playerPress);

  function playerPress(event){
    const key = event.key
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (possibleKeystrokes.includes(key)){
      event.preventDefault();

      switch (key){
        case "ArrowUp":
          game.player.directionY = -1;
          break;
        case "ArrowDown":
          game.player.directionY = 1;
          break;
        case "ArrowLeft":
          game.player.directionX = -1;
          break;
        case "ArrowRight":
          game.player.directionX = 1;
          break;
      }
    }
  }

  window.addEventListener("keyup", playerRelease);

  function playerRelease(event){
    const key = event.key
    const possibleKeystrokes = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (possibleKeystrokes.includes(key)){
      event.preventDefault();

      switch (key){
        case "ArrowUp":
        case "ArrowDown":
          game.player.directionY = 0;
          break;
        case "ArrowLeft":
        case "ArrowRight":
          game.player.directionX = 0;
          break;
      }
    }
  }
};
