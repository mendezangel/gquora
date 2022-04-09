'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Questions', [
      {
        ownerId: 1,
        title: 'mario\'s sidekick',
        description: 'What is the name of Mario’s dinosaur sidekick?'
      },
      {
        ownerId: 2,
        title: 'antagonists in spiderman',
        description: 'Who are the main antagonists in Marvel\'s Spiderman (PS4)?'
      },
      {
        ownerId: 3,
        title: 'bonfires in dark souls',
        description: 'What do bonfires serve as in Dark Souls?'
      },
      {
        ownerId: 1,
        title: 'links doppelganger',
        description: 'What is the name of Link\'s evil doppelganger from Zelda II: The Adventure of Link?'
      },
      {
        ownerId: 1,
        title: 'pikachu evolution',
        description: 'What Pokémon does Pikachu evolve into?'
      },
      {
        ownerId: 1,
        title: 'pokeballs',
        description: 'What is the most effective Poke Ball in the game?'
      },
      {
        ownerId: 2,
        title: 'call of duty recomendation',
        description: ' I\'m looking to pick up a older Call of Duty game to remind me of the old days does any one have any recommendations?'
      },
      {
        ownerId: 1,
        title: 'Bioshock ending',
        description: "Can some explain to me the ending of BioShock? What does the phrase \"would you kindly\" have to do with anything?"
      },
      {
        ownerId: 3,
        title: 'apex legends skins',
        description: "Do skins in Apex legends actually make you better?"
      },
      {
        ownerId: 1,
        title: 'help remembering black ops 2 gun',
        description: "Can someone help me out? I'm trying to remember the name of a certain gun in Call of Duty Black Ops 2 and i just cant remember it was an SMG that shot really really fast that is all I can remember about it."
      },
      {
        ownerId: 2,
        title: 'fortnite building',
        description: "Did Fortnite ever get rid of the building mechanics?"
      },
      {
        ownerId: 2,
        title: 'pokemon fire red',
        description: "How do you catch Mew Two in Pokémon fire red?"
      },
      {
        ownerId: 3,
        title: 'origins high rounds',
        description: "How do you get to high rounds on the Call of Duty zombies map origins?"
      },
      {
        ownerId: 1,
        title: 'cod zombies mystery box',
        description: "What was the first Call of Duty zombies map to include a mystery box?"
      },
      {
        ownerId: 1,
        title: 'smash bros ultimate',
        description: "Who is the best most over powered character in Super Smash Bros Ultimate."
      },
      {
        ownerId: 3,
        title: 'csgo majors',
        description: "Who has the most CSGO major championship wins?"
      },
      {
        ownerId: 1,
        title: 'aces in csgo',
        description: "Who holds the record for Most Aces in a professional CSGO tournament?"
      },
      {
        ownerId: 3,
        title: 'legends in apex',
        description: "Who is the worst legend in Apex legends?"
      },
      {
        ownerId: 2,
        title: 'map win streaks csgo',
        description: "What was the longest Map win streak in CSGO?"
      },
      {
        ownerId: 1,
        title: 'ak in csgo',
        description: "What is better the AK-47 or M4A1-S in CSGO?"
      },
      {
        ownerId: 3,
        title: 'agents in Valorant',
        description: "Who is the worst agent in valorant?"
      },
      {
        ownerId: 2,
        title: 'fallout',
        description: "I recently got into Fallout and i want to play the older Fallout games but where should I start?"
      },
      {
        ownerId: 3,
        title: 'guns in apex',
        description: "What gun in Apex Legends has the fastest time to kill?"
      },
      {
        ownerId: 2,
        title: 'worst cod game',
        description: "I'm having a debate with my friends on what was the worst Call of Duty ever? We are arguing about whether its Infinite warfare or Black Ops cold war."
      },
      {
        ownerId: 1,
        title: 'heartbreaking death',
        description: "What is the most heart breaking character death in a video game?"
      },
      {
        ownerId: 3,
        title: 'csgo AWP',
        description: "Why did the AWP receive a nerf in CSGO?"
      },
      {
        ownerId: 1,
        title: 'headshots csgo',
        description: "Which pro as the highest head shot percentage in CSGO?"
      },
      {
        ownerId: 2,
        title: 'disappointing games',
        description: "What was the most disappointing game of all time?"
      },
      {
        ownerId: 3,
        title: 'forknife',
        description: "Hey I just started playing Fortnite, any advice for new players?"
      },
      {
        ownerId: 1,
        title: 'pc gaming',
        description: "So I am currently looking into getting into PC gaming, how do I begin that process?"
      },
      {
        ownerId: 2,
        title: 'elden ring boxes',
        description: "My boyfriend has been spending hours playing the elden ring and randomly hitting chest or boxes? Does anyone know why?"
      },
      {
        ownerId: 3,
        title: 'friend is making a website',
        description: "My friend is making a website to present to his class that’s due on Monday(it’s about video games). Anything I can do to help him?"
      },
      {
        ownerId: 3,
        title: "lost and maidenless",
        description: "So it would appear that I am maidenless and in the middle of nowhere and for some reason I must obtain the elden ring? How exactly would I accomplish this?"
      },
      {
        ownerId: 2,
        title: 'jedi fallen order',
        description: "In Star Wars Jedi: Fallen Order, who is the Second Sister and Ninth Sister?"
      },
      {
        ownerId: 1,
        title: 'pac man ghosts',
        description: "Do the four ghosts in Pac-Man have names?"
      },
      {
        ownerId: 3,
        title: 'mushroom mario character',
        description: "Which Mario character is a living mushroom?"
      },
      {
        ownerId: 2,
        title: 'sonic enemy',
        description: "Who is Sonic’s greatest enemy?"
      },
      {
        ownerId: 3,
        title: 'bubble shields in halo 3',
        description: "How do you use the bubble shield in Halo 3?"
      },
      {
        ownerId: 1,
        title: 'ring shaped objects in halo',
        description: "What are the huge ring-shaped objects in Halo?"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Questions', null, {});
  }
};
