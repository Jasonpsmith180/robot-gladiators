// This creates a prompt to ask for the player robot's name and establishes health and attack values
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

// This establishes enemy name, health, and attack values
var enemyName = "Roborto"
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"
var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked
    console.log (
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
    );

    // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to updat the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked
    console.log (
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

  // Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    // Check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died.");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

// THIS EXECUTES THE FUNCTION NAMED "FIGHT"
fight();