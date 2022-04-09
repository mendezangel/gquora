'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Answers', [
      {
        userId: 1,
        questionId: 7,
        answer: "If you want to relive the glory days of good map design and really powerful weapons and kill streaks i highly recommend you give Modern Warfare 2 a try."
      },
      {
        userId: 2,
        questionId: 8,
        answer: "In the first BioShock game, Atlas the guy helping you through your journey in Rapture is named Atlas and he always says the phrase \"Would you kindly\" before asking you to do something. At the end of the game you learn that Atlas was not your ally instead he was manipulating you by using that phrase because you were brainwashed before even getting to rapture to do what ever the request is following the phrase would you kindly. "
      },
      {
        userId: 2,
        questionId: 9,
        answer: "Short answer is no the skins in the game are cosmetic only and do not effect the power of your weapon. However some skins in the game giving you more clear iron sights which can give an advantage over other players that don't have that specific skin."
      },
      {
        userId: 3,
        questionId: 10,
        answer: "Could it be the Scorpion Evo?"
      },
      {
        userId: 3,
        questionId: 11,
        answer: "Yes Fortnite removed building earlier this year because the game was suffering from having a very steep learning curve that drove new players away."
      },
      {
        userId: 1,
        questionId: 12,
        answer: "Complete the game, beat the elite four then walk around til you find the nugget bridge. At the top left at the end of the bridge there is road that takes you to a cave full of very high level Pokémon, walk around in the cave until you Mew Two, he is at the lowest level in the center. I highly recommend using your one master ball on him because the chances of you catching him with anything else are slim to none."
      },
      {
        userId: 1,
        questionId: 13,
        answer: "build as many staffs as you like there are plenty of tutorials on YouTube on how to build them. I highly recommend the Fire and Ice staves then run a train next to the Jugger nog machine, once you get pack-a-punch and your upgraded staves."
      },
      {
        userId: 2,
        questionId: 14,
        answer: "Shino Numa Call of Duty World at War."
      },
      {
        userId: 3,
        questionId: 15,
        answer: "Bayonetta before her nerf."
      },
      {
        userId: 2,
        questionId: 16,
        answer: "Astralis, with the roster consisting of  Dupreeh, Magisk, g1aive, dev1ce, and Xyp9nx.and coach Zonic. They won four major titles and are considered the best of all time."
      }, {
        userId: 3,
        questionId: 17,
        answer: "S1mple of NaVi with 5 aces in one tournament."
      },
      {
        userId: 1,
        questionId: 18,
        answer: "In my opinion it would have to be crypto. His kit is too team oriented and if you team does not have good communication then he is almost completely ineffective. His ultimate hurts you and it slows your teammates so its not effective in a close range fight, he relies to much on his drone to scan enemies when you have legends like blood hound and Seer that can scan enemies faster and its more effective. Plus both of those legends kits do not take you out of a fight."
      },
      {
        userId: 1,
        questionId: 19,
        answer: "Ninjas in Pajamas (NIP) with and impressive 87-0 map win streak from 2012-2013."
      },
      {
        userId: 2,
        questionId: 20,
        answer: "The AK can get a one shot kill through head armor at any range but it is less accurate spray weapon. While the M4A1-S cannot get a one shot kill it has a tighter spray pattern. Its entirely dependent on your play style and how well you can aim."
      },
      {
        userId: 2,
        questionId: 21,
        answer: "In my opinion it was got to be Yoru."
      },
      {
        userId: 3,
        questionId: 22,
        answer: "Fallout New Vegas is personal favorite."
      },
      {
        userId: 1,
        questionId: 23,
        answer: "That's either the R99 or Havoc with a turbo Charger Hop up. That's assuming you don't miss a single bullet wit both of those weapons'."
      },
      {
        userId: 3,
        questionId: 24,
        answer: " I think black Ops cold war is the worst Call of Duty. No gun feels unique the map design is terrible and the kill streaks are unrewarding. The game just feels boring and unoriginal."
      },
      {
        userId: 2,
        questionId: 25,
        answer: "It has got to be Joel's daughter at the beginning of Last of Us for me. It was so sudden and the emotion displayed on screen just tugs at the heart strings."
      },
      {
        userId: 1,
        questionId: 26,
        answer: "Because players were getting to aggressive in their play styles and the developers didn't want the game to be dominated by the AWP. The man to pioneer the aggressive AWP play style was a French professional named kennyS. He was so unbelievably good at sniping that Valve decided to give the entire gun a nerf because of his play style."
      },
      {
        userId: 3,
        questionId: 27,
        answer: "ScreaM with a staggering 62% head shot percentage in pro matches. No one has even come close to that record. "
      },
      {
        userId: 3,
        questionId: 28,
        answer: "In my opinion its a tie between No Mans Sky and Cyber Punk 2077. Both games fell flat because developers did not follow through on their promises on what the games were going to be like. The devs of No Mans Sky straight up cut 70% of the features out of the game and straight up lied to it consumer base. While Cyber punk was n unplayable buggy mess when it was released with a very bland story line and boring characters."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Peoples', null, {});
  }
};
