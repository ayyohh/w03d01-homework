class Gotchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
  }
  feedPet() {
    if(this.hunger > 0){
      this.hunger--;
      $('.hungers').text('Hunger: ');
      $('.hungers').append(this.hunger);
      console.log(`Hunger: ${this.hunger}`);
    }
  }
  turnOffLights() {
    if(this.sleepiness > 0){
      this.sleepiness--;
      $('.sleeps').text('Sleepiness: ');
      $('.sleeps').append(this.sleepiness);
      console.log(`Sleepiness: ${this.sleepiness}`);
    }
  };
  playWithPet() {
    if(this.boredom > 0){
      this.boredom--;
      $('.boredoms').text('Boredom: ');
      $('.boredoms').append(this.boredom);
      console.log(`Boredom: ${this.boredom}`);
    }
  };
  deadPet() {
    if((this.age >= 100) || (this.hunger >= 10) || (this.sleepiness >= 10) || (this.boredom >= 10)){
      alert("You are dead");
      console.log("you are dead");
      clearInterval(gameTime);
      clearInterval(hungerTime);
      clearInterval(sleepTime);
      clearInterval(boredomTime);
    }
  }
}






let morty = new Gotchi("Morty");


for (let i = -1; i < morty.age; i++) {
  $('.ages').text("Age: ");


    let gameTime = setInterval(function() {
      if(morty.age < 100){
        $('.ages').empty();
        morty.age++;
        $('.ages').append("Age: " + morty.age);
        console.log(`Age: ${morty.age}`);
          if(morty.age > 12){
            $('.babyGotchi').attr('src', 'css/teenGotchi.png');
          }
          if (morty.age > 25) {
            $('.babyGotchi').attr('src', 'css/adultGotchi.png');
          }
      }else {
        morty.deadPet();
        clearInterval(gameTime);
        clearInterval(hungerTime);
        clearInterval(sleepTime);
        clearInterval(boredomTime);
      }

    }, 1000);
}


//makes hunger go up every 12000ms
for (let i = 0; i < morty.hunger; i++) {
  $('.hungers').text("Hunger: ");
  let hungerTime = setInterval(function() {
      if(morty.hunger < 10){
        $('.hungers').empty();
        morty.hunger++;
        $('.hungers').append("Hunger: " + morty.hunger);
        console.log(`Hunger: ${morty.hunger}`);
      }else {
        morty.deadPet();
        clearInterval();
      }
    }, 12000);
  }

//makes sleepiness go up every 24000ms
for (let i = 0; i < morty.sleepiness; i++) {
  $('.sleeps').text("Sleepiness: ");
  let sleepTime = setInterval(function() {
      if(morty.sleepiness < 10){
        $('.sleeps').empty();
        morty.sleepiness++;
        $('.sleeps').append("Sleepiness: " + morty.sleepiness);
        console.log(`Sleepiness: ${morty.sleepiness}`);
      }else {
        morty.deadPet();
        clearInterval();
      }
    }, 24000);
  }

//makes boredom go up every 6000ms

for (let i = 0; i < morty.boredom; i++) {
  $('.boredoms').text("Boredom: ");

  if(morty.boredom < 10){
    let boredomTime = setInterval(function() {
      $('.boredoms').empty();
      morty.boredom++;
      $('.boredoms').append("Boredom: " + morty.boredom);
      console.log(`Boredom: ${morty.boredom}`);

    }, 6000);
  }else {
    morty.deadPet();
    clearInterval();
  }
}



$('form').on('submit', (e) => {

  e.preventDefault();
  const name = $('#inputBox').val();
  $('.names').append(name);
  $('#inputBox').val("");
})


$('.feed').on('click', (e) => {
    console.log('button is working');
    morty.feedPet();
})
$('.sleep').on('click', (e) => {
    console.log('button is working');
    morty.turnOffLights();
})
$('.play').on('click', (e) => {
    console.log('button is working');
    morty.playWithPet();
})
