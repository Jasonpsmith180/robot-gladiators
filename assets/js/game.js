// This creates a prompt to ask for the player robot's name and establishes health and attack values
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// This establishes enemy name, health, and attack values
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Function to start a new game
var startGame = function() 
{
    // Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++)
    {
        // Alert players that they are starting the round
        if (playerHealth > 0 ) 
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // Reset enemyHealth before starting new fight
            enemyHealth = 50;

            // Pass the pickedEnemyName variable's value into the fight function
            fight(pickedEnemyName);

            // If we are not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1)
            {
                // Ask if okayer wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                // If yes take them to the store
                if(storeConfirm) 
                {
                    shop();
                }
            }
        }
        else 
        {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    // After the look ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// Function to end the entire game
var endGame = function() 
{
    window.alert("The game has now ended. Let's see how you did!");

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) 
    {
        startGame();
    }
    else
    {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// Shop function
var shop = function()
{
    // Ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt)
    {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7)
            {
                window.alert("Refilling player's health by 20 for 7 dollars.");
        
                // Increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else
            {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7)
            {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // Increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else
            {
                window.alert("You don't have enough money!")
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");

            // Do nothing so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

// This creates a function named "fight"
var fight = function(enemyName) 
{
    while(enemyHealth > 0 && playerHealth > 0)
    {

        // Alert and ask player if they want to fight or skip the battle
        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter 'Fight' or 'Skip' to choose.");

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
            playerMoney = playerMoney + 20;

            // Leave while() loop since enemy is dead
            break;
        }
        else 
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
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
            window.alert(playerName + " has died!");
            // Leave while() loop if player is dead
            break;
        }
        else 
        {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }            
    }
};

// Starts the game when the page loads
startGame();
