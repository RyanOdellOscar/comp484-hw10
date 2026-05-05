$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.attack-button').click(clickedAttackButton);

  
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    pet_array = new Array(6);
    var number_of_pets = 0;
    var punching_bag_health = 100;
    var bag_level = 1;
    const style = "color: blue; font-size: 16px";
    // Hide punching bag until attack button is clicked
    $('.punching-bag-image').hide();
    var pet_info = {name: "Pet", weight:1, happiness:0 };
    const nameBox = document.querySelector('.name-input');
    nameBox.addEventListener('click', function(event){
      const duration = 5000;
      const start = new Date().getTime();
      while (new Date().getTime() < start + duration) {
    // Block the main thread for 3 seconds.
      }})
    //names a pet when user types in name input box and presses enter
    nameBox.addEventListener('keypress', function(event){
      if(event.key === 'Enter') {
        current_pet = new Pet(nameBox.value || "Pet");
        
        if(number_of_pets == 6) {
          index = replace_pet(current_pet);
          console.error("Maximum pets reached!");
        document.getElementById("pet-comment").innerHTML = current_pet.name + " has been added. " + pet_array[index].name + " has been removed.";
        console.table(pet_array);
      }
      else{
        index = number_of_pets;
        number_of_pets += 1;
        console.log("I have " + number_of_pets + " pets.");
        console.warn("I can only have 6 pets, so I will have to replace one if I want to add more.");
        console.table(pet_array);
      }
      pet_array[index] = current_pet;
      pet_info = current_pet;
      console.log("%cNew pet added!", style);
      console.group();
      for(var i = 0; i < number_of_pets; i++){
        console.log("This is pet number " + (i + 1) + " named " + pet_array[i].name);
      }
      console.groupEnd();
      console.table(pet_array);
      checkAndUpdatePetInfoInHtml();

    }
  });

    //pet contructor function
    function Pet(name) {
      this.name = name;
      this.weight = 1
      this.happiness = 0;
    }
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 1;
      pet_info.weight += 0.5;
      //comment from pet
      document.getElementById("pet-comment").innerHTML = "Yummy! I love treats!";

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 1;
      pet_info.weight -= 0.5;
      //comment from pet
      document.getElementById("pet-comment").innerHTML = "I had so much fun playing!";

      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 1;
      pet_info.weight -= 2;
      //comment from pet
      document.getElementById("pet-comment").innerHTML = "I'm getting tired from all that exercise!";

      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
        pet_info.weight = 0;
        alert("Your pet is too skinny! Please feed it some treats.");
        console.error("pet weight is 0!");
      }
      // Add conditional so if happiness is lower than zero.
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
        alert("Your pet is sad! Please play with it.");
        console.warn("pet happiness is 0!");
      }

      if(pet_info.happiness <= 0 && pet_info.weight == 0) {
        alert(pet_info.name + " has fainted! Resetting pet info...");
        pet_info.happiness = 0;
        pet_info.weight = 1;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    function clickedAttackButton() {
      // calculates attack power with weight and happyness
      var attack_power = Math.floor((pet_info.happiness / pet_info.weight) * 10);
      $('.punching-bag-image').slideDown("slow", function(){
        document.getElementById("pet-comment").innerHTML = "level " + bag_level + " punching bag has appeared! ";
        document.getElementById("pet-comment").innerHTML += pet_info.name + " dealt " + attack_power + " damage!";
      });
      punching_bag_health -= attack_power;
      if(punching_bag_health <= 0) {
        setTimeout(() => {
          $('.punching-bag-image').slideUp("slow", function(){
          document.getElementById("pet-comment").innerHTML = "defeated level " + bag_level + " punching bag!";
          bag_level += 1;
          punching_bag_health = 100 * bag_level;
        });
        }, 2000);
        
      } else {
        setTimeout(function() {
          document.getElementById("pet-comment").innerHTML = "punching bag has " + punching_bag_health + " health left!";
        }, 2000);
      }
    }

    function replace_pet(new_pet) {
      var index = prompt("please select a pet to replace: " + pet_array[0].name + ", " + pet_array[1].name + ", " + pet_array[2].name + ", " + pet_array[3].name + ", " + pet_array[4].name + ", " + pet_array[5].name);
      if(index < 0 || index > 5) {
        alert("invalid index, replacing pet 0 by default");
        return 0;
      }
      return index;
    }

    function show_all_pets() {
      var pet_list = "Your pets: ";
      for(var i = 0; i < number_of_pets; i++) {
        pet_list += pet_array[i].name + " ";
      }
      alert(pet_list);
    }



// cause 404. Fetch a file that does not exist
fetch('nonexistentfile.txt')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching file:', error));

// cause TypeError. Call a non-function
try {
  var notAFunction = {};
  notAFunction();
} catch (error) {
  console.error('TypeError:', error);
}

// cause Violation. Use setTimeout with a long delay

const duration = 5000;
const start = new Date().getTime();
while (new Date().getTime() < start + duration) {
    // Block the main thread for 3 seconds.
}