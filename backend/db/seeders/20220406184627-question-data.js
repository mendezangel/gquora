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
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 2,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 3,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 1,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 1,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
      },
      {
        ownerId: 1,
        title: 'fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui id ornare arcu odio. Massa ultricies mi quis hendrerit dolor magna. Eros in cursus turpis massa. Enim nec dui nunc mattis enim ut tellus elementum.'
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
