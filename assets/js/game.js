// Function to generate a random numeric value
var randomNumber = function(min, max)
{
    var value = Math.floor(Math.random() * (max - min + 1)  + min);

    return value;
    
};

// Function to start a new game
var startGame = function() 
{
    // Reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++)
    {
        // Alert players that they are starting the round
        if (playerInfo.health > 0 ) 
        {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            
            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // Reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // Pass the pickedenemy.name variable's value into the fight function
            fight(pickedEnemyObj);

            // If we are not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1)
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
            refillHealth();
            break;
        
        case "UPGRADE":
        case "upgrade":
            upgradeAttack();
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
var fight = function(enemy)
{
    while(enemy.health > 0 && playerInfo.health > 0)
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
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // Subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money)
                break;
            }
        }

        // Generate random damage value base on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        // Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' and use that result to update the value in the 'enemy.health' variable
        enemy.health = Math.max(0, enemy.health - damage);

        // Log a resulting message to the console so we know that it worked
        console.log 
        (
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining." 
        );

        // Check enemy health
        if (enemy.health <= 0) 
        {
            window.alert(enemy.name + " has died!");

            // Award player for winning
            playerInfo.money = playerInfo.money + 20;

            // Leave while() loop since enemy is dead
            break;
        }
        else 
        {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        // Generate random damage value based on enemy attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        // Subtract the value of 'enemy.attack' from the value of 'playerInfo.health' and use that result to updat the value in the 'playerInfo.health' variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked
        console.log 
        (
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        // Check player health
        if (playerInfo.health <= 0) 
        {
            window.alert(playerInfo.name + " has died!");
            // Leave while() loop if player is dead
            break;
        }
        else 
        {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }            
    }
};

// This creates a prompt to ask for the player robot's name and establishes health and attack values
var playerInfo = 
{
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function()
    {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function()
    {
        if (playerInfo.money >= 7)
            {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // Increase attack and decrease money
                this.health += 20;
                this.money -= 7;
            }
            else
            {
                window.alert("You don't have enough money!")
            }
    },
    upgradeAttack: function()
    {
        if (playerInfo.money >= 7)
            {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                // Increase attack and decrease money
                this.attack += 6;
                this.money -= 7;
            }
            else
            {
                window.alert("You don't have enough money!")
            }
    }
};

// This establishes enemy name, health, and attack values
var enemyInfo = 
[
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

// Starts the game when the page loads
startGame();
