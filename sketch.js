var paddle, balls;
var ball, score;

function setup() {
  createCanvas(windowWidth, windowHeight)
  paddle = createSprite(width / 2, height - 100, 200, 20)
  score = 0
  balls = new Group()

}

function draw() {
  background('black')
  paddle.x = mouseX
  textSize(25)
  fill(255)
  text("Score:" + score, width - 200, 100)

  createBall()

  if (balls.bounceOff(paddle)) {
    score = score + 5
  }

  drawSprites()
}

function createBall() {
  if (frameCount % 100 === 0) {
    ball = createSprite(random(50, width - 50), 0, 20, 20);
    ball.velocityY = 5 + score / 10;
    ball.shapeColor = rgb(random(0, 255), random(0, 255), random(0, 255));
    balls.add(ball);
  }


}