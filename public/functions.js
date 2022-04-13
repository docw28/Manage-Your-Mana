function preload() {
  data = loadJSON("data.json");
}

function submit() {
  if (!busy) {
    busy = true;
    textAlign(CENTER);

    if (input.value() != "") {
      answer = int(input.value());
    }

    if (answer == cost) {
      health += 20;
      fill(0, 200, 0);
      text("Correct! Have 20hp", w * 0.5, h * 0.9125);
    } else {
      health -= abs(cost - answer);
      fill(200, 0, 0);
      if (health > 0) {
        text("Incorrect! The answer " + cost, w * 0.5, h * 0.9125);
      }
    }

    score++;

    if (health <= 0) {
      health = 0;
      updateHealth();
      setTimeout(function () {}, 750);
      textAlign(CENTER);
      fill(200, 0, 0);
      text("You're out of mana! Try again", w * 0.5, h * 0.9125);
      score = 0;
      setTimeout(setup, 750);
    } else if (health > 200) {
      health = 200;
      setTimeout(newInstance, 750);
    } else {
      setTimeout(newInstance, 750);
    }
  }
  input.value("");
}

function newInstance() {
  // clears the screen
  background(250);

  // generates a random champion, ability and rank
  c = int(random(data.champions.length));
  // c = 6;
  a = int(random(data.champions[c].abilities.length));
  r = int(random(data.champions[c].abilities[a].ranks));

  name = data.champions[c].name;
  ability = data.champions[c].abilities[a].butt;
  resource = data.champions[c].resource;
  cost = data.champions[c].abilities[a].cost[r];
  rank = r + 1;

  // populates the canvas with a question and image based on previous random results
  textAlign(CENTER);
  fill(0);
  text("What's the " + resource + " cost of:", w * 0.5, h * 0.05);

  loadImage(data.champions[c].abilities[a].url, (img) => {
    image(img, w / 2 - s / 2, h * 0.4 - s / 2, s, s);
  });

  text(name + " " + ability + " at rank " + rank + "?", w * 0.5, h * 0.75);

  // updates busy flag
  busy = false;

  updateHealth();
}

function updateHealth() {
  fill(200);
  rect(w * 0.125, h * 0.97 + 2.5, w * 0.75, -15);

  if (health <= 100 && health >= 0) {
    fill(0, 128, 255);
    rect(w * 0.125, h * 0.97 + 2.5, w * 0.75 * (health / 100), -15);
  } else if (health > 100) {
    fill(0, 128, 255);
    rect(w * 0.125, h * 0.97 + 2.5, w * 0.75, -15);

    fill(192, 148, 60);
    rect(
      w * 0.125 - 2.5,
      h * 0.97 + 5,
      w * 0.75 * ((health - 100) / 100) + 5,
      -20
    );

    fill(255, 197, 80);
    rect(w * 0.125, h * 0.97 + 2.5, w * 0.75 * ((health - 100) / 100), -15);
  } else {
    fill(200);
    rect(w * 0.125, h * 0.97 + 2.5, w * 0.75, -15);
  }

  textAlign(CENTER);
  fill(0);
  text(health + "/100", w * 0.5, h * 0.97);

  textAlign(RIGHT);
  text("Score: " + score, w, 10);
}
