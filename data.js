var champions = {
  // 'Akali': [
  //   ["Q", 5 , [130,115,100,85,70], "", ],
  //   ["W", 5 , [0,0,0,0,0], "", ],
  //   ["E", 5 , [30,30,30,30,30], "", ],
  //   ["R", 3 , [0,0,0,0,0], "", ],
  //   'energy'
  // ],
  //
  // 'Irelia': [
  //   ["Q", 5 , [20,20,20,20,20], "", ],
  //   ["W", 5 , [70,75,80,85,90], "", ],
  //   ["E", 5 , [50,50,50,50,50], "", ],
  //   ["R", 3 , [100,100,100], "", ],
  //   'mana'
  // ],
  //
  // 'Jarvan': [
  //   ["Q", 5 , [45,50,55,60,65], "", ],
  //   ["W", 5 , [30,30,30,30,30], "", ],
  //   ["E", 5 , [55,55,55,55,55], "", ],
  //   ["R", 3 , [100,100,100], "", ],
  //   'mana'
  // ],
  //
  // 'Jax': [
  //   ["Q", 5 , [65,65,65,65,65], "", ],
  //   ["W", 5 , [30,30,30,30,30], "", ],
  //   ["E", 5 , [50,60,70,80,90], "", ],
  //   ["R", 3 , [100,100,100], "", ],
  //   'mana'
  // ],
  //
  'Kayle': [
    ["Q", 5 , [70,75,80,85,90], "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Kayle_Radiant_Blast.png/revision/latest/scale-to-width-down/64?cb=20190219193954", ],
    ["W", 5 , [90,100,110,120,130], "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Kayle_Celestial_Blessing.png/revision/latest/scale-to-width-down/64?cb=20190219194057", ],
    ["E", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/0/0f/Kayle_Starfire_Spellblade.png/revision/latest/scale-to-width-down/64?cb=20190220223457", ],
    ["R", 3 , [100,50,0], "https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Kayle_Divine_Judgment.png/revision/latest/scale-to-width-down/64?cb=20190219193938", ],
    'mana'
  ],

  'Morgana': [
    ["Q", 5 , [50,55,60,65,70], "https://static.wikia.nocookie.net/leagueoflegends/images/3/3b/Morgana_Dark_Binding.png/revision/latest/scale-to-width-down/64?cb=20160608032328", ],
    ["W", 5 , [70,85,100,115,130], "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Morgana_Tormented_Shadow.png/revision/latest/scale-to-width-down/64?cb=20190306100900", ],
    ["E", 5 , [80,80,80,80,80], "https://static.wikia.nocookie.net/leagueoflegends/images/4/4c/Morgana_Black_Shield.png/revision/latest/scale-to-width-down/64?cb=20160608032305", ],
    ["R", 3 , [120,110,100], "https://static.wikia.nocookie.net/leagueoflegends/images/6/61/Morgana_Soul_Shackles.png/revision/latest/scale-to-width-down/64?cb=20190221173914", ],
    'mana'
  ],

  'Quinn': [
    ["Q", 5 , [50,55,60,65,70], "https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Quinn_Blinding_Assault.png/revision/latest/scale-to-width-down/64?cb=20130929123152", ],
    ["W", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/b/b2/Quinn_Heightened_Senses.png/revision/latest/scale-to-width-down/64?cb=20170818193234", ],
    ["E", 5 , [50,50,50,50,50], "https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Quinn_Vault.png/revision/latest/scale-to-width-down/64?cb=20130929123156", ],
    ["R", 3 , [100,50,0], "https://static.wikia.nocookie.net/leagueoflegends/images/f/f2/Quinn_Behind_Enemy_Lines.png/revision/latest/scale-to-width-down/64?cb=20160801045302", ],
    'mana'
  ],

  'Rammus': [
    ["Q", 5 , [60,60,60,60,60], "https://static.wikia.nocookie.net/leagueoflegends/images/1/1a/Rammus_Powerball.png/revision/latest/scale-to-width-down/64?cb=20150312023510", ],
    ["W", 5 , [40,40,40,40,40], "https://static.wikia.nocookie.net/leagueoflegends/images/a/af/Rammus_Defensive_Ball_Curl.png/revision/latest/scale-to-width-down/64?cb=20150312020949", ],
    ["E", 5 , [50,50,50,50,50],  "https://static.wikia.nocookie.net/leagueoflegends/images/8/89/Rammus_Frenzying_Taunt.png/revision/latest/scale-to-width-down/64?cb=20170308195431", ],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/1/19/Rammus_Soaring_Slam.png/revision/latest/scale-to-width-down/64?cb=20150312023125", ],
    'mana'
  ],

  'Swain': [
    ["Q", 5 , [55,75,95,115,135], "https://static.wikia.nocookie.net/leagueoflegends/images/d/d4/Swain_Death%27s_Hand.png/revision/latest/scale-to-width-down/64?cb=20180301213811", ],
    ["W", 5 , [70,80,90,100,110], "https://static.wikia.nocookie.net/leagueoflegends/images/2/29/Swain_Vision_of_Empire.png/revision/latest/scale-to-width-down/64?cb=20180301213848", ],
    ["E", 5 , [50,50,50,50,50], "https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Swain_Nevermove.png/revision/latest/scale-to-width-down/64?cb=20180301213703", ],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/8/83/Swain_Demonic_Ascension.png/revision/latest/scale-to-width-down/64?cb=20180301213631", ],
    'mana'
  ],

  'Zyra': [
    ["Q", 5 , [70,70,70,70,70], "https://static.wikia.nocookie.net/leagueoflegends/images/2/24/Zyra_Deadly_Spines.png/revision/latest/scale-to-width-down/64?cb=20160608035320", ],
    ["W", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Zyra_Rampant_Growth.png/revision/latest/scale-to-width-down/64?cb=20170818200552", ],
    ["E", 5 , [70,75,80,85,90], "https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Zyra_Grasping_Roots.png/revision/latest/scale-to-width-down/64?cb=20160608035405", ],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/f/fb/Zyra_Stranglethorns.png/revision/latest/scale-to-width-down/64?cb=20160608035451,"],
    'mana'
  ]
};
