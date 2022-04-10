function preload() {
  //load all relevant images from the assets folder
  keys = Object.keys(champions)
  for (let i = 0; i < keys.length; i++) {
    for (let j = 0; j < champions[keys[i]].length-1; j++) {
      champions[keys[i]][j][4] = loadImage(champions[keys[i]][j][3]);
    }
  }

}

function submit() {
  textAlign(CENTER);
  answer = 0;

  if (input.value() != '') {
    answer = int(input.value());
  }

  if (answer == cost) {
    health = health + 20;
    fill(0, 200, 0);
    text("Correct! Have 20hp", w*0.5, h*0.9125);
  }
  else {
    health = health - abs((cost - answer));
    fill(200, 0, 0);
    text("Incorrect! The answer was " + cost, w*0.5, h*0.9125);
  }
  if (health > 200) { health = 200};
  input.value('');

  score++;
  setTimeout(newInstance, 750);

}

function newInstance() {

  //clear the screen
  background(250);
  updateHealth();

  //generate a random champion, ability and rank
  champ = random(Object.keys(champions));

  ability = int(random(0, 4));
  button = champions[champ][ability][0]

  rank = int(random(0, champions[champ][ability][1]));
  cost = champions[champ][ability][2][rank];

  //populate the canvas with question and image based on previous random results
  textAlign(CENTER);
  fill(0);
  //text(champ + ", " + button + ", " + rank + ", " + cost, 50, h); //testing purposes
  text("What's the " + champions[champ][4] + " cost of:", w*0.5, h*0.05);

  // image(champions[champ][ability][3], w/2 - s/2, h*0.4 - s/2, s, s);
  image(champions[champ][ability][4], w/2 - s/2, h*0.4 - s/2, s, s);

  text(champ + " " + button + " at rank " + (int(rank) + 1) + "?",w*0.5, h*0.75);
}

function updateHealth() {
  fill(200);
  rect(w*0.125, h*0.97 + 2.5, w*0.75, -15);

  if (health <= 0) {
    fill(200, 0, 0);
    text("You're out of mana! Try again", w*0.5, h*0.9125);
    setTimeout(setup, 3000);

  } else if (health <= 100) {
    fill(0, 128, 255);
    rect(w*0.125, h*0.97 + 2.5, w*0.75*(health/100), -15);

  } else {
    fill(0, 128, 255);
    rect(w*0.125, h*0.97 + 2.5, w*0.75, -15);

    fill(192, 148, 60);
    rect(w*0.125 - 2.5, h*0.97 + 5, w*0.75*((health - 100)/100) + 5, -20);

    fill(255, 197, 80);
    rect(w*0.125, h*0.97 + 2.5, w*0.75*((health - 100)/100), -15);
  }

  textAlign(CENTER);
  fill(0);
  text(health + "/100", w*0.5, h*0.97);

  textAlign(RIGHT);
  text("Score: " + score, w, 10);
}
