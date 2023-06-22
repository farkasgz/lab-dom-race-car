class Game {
    // code to be added
    constructor() {
        this.startScreen = document.getElementById('game-intro');
        this.gameScreen = document.getElementById('game-screen');
        this.gameEndScreen = document.getElementById('game-end');

        this.height = 600;
        this.width = 500;

        this.player = new Player(
            this.gameScreen,
            210,
            480,
            80,
            150,
            "images/car.png"
        );
        this.obstacles = [];

        this.score = 0;
        this.lives = 3;

        this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.gameloop();
    }

    gameloop(){
        if (this.gameIsOver){
            this.endGame();
        }
        this.update();
        window.requestAnimationFrame(() => this.gameloop());
    }

    update(){
        this.player.move();
    }
}