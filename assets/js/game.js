// This creates a prompt to ask for the player robot's name and establishes health and attack values
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// This establishes enemy name, health, and attack values
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// This creates a function named "fight"
var fight = function(enemyName) 
{
    while(enemyHealth > 0 && playerHealth > 0)
    {

        // Alert and ask player if they want to fight or skip the battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'Fight' or 'Skip' to choose.")

        // If player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") 
        {
            // Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // If yes (true), leave fight
            if (confirmSkip)
            {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney)
                break;
            }
        }

        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked
        console.log 
        (
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." 
        );

        // Check enemy health
        if (enemyHealth <= 0) 
        {
            window.alert(enemyName + " has died!");

            // Award player for winning
            playerMoney = playerMoney = 20;

            // Leave while() loop since enemy is dead
            break;
        }
        else 
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to updat the value in the 'playerHealth' variable
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked
        console.log 
        (
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check player health
        if (playerHealth <= 0) 
        {
            window.alert(playerName + " has died.");
            // Leave while() loop if player is dead
            break;
        }
        else 
        {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }            
    }
}


// THIS EXECUTES THE FUNCTION NAMED "FIGHT"
for (var i = 0; i < enemyNames.length; i++)
{
    // Alert players that they are starting the round
    if (playerHealth > 0 ) 
    {
        window.alert("Welcome to Robot Gladiators! Round " + ( i = 1 ) );
        
        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // Reset enemyHealth before starting new fight
        enemyHealth = 50;

        // Pass the pickedEnemyName variable's value into the fight function
        fight(pickedEnemyName);
    }
    else 
    {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}