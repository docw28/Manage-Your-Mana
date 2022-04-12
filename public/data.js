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
  'Jarvan': [
    ["Q", 5 , [45,50,55,60,65], "https://static.wikia.nocookie.net/leagueoflegends/images/2/2e/Jarvan_IV_Dragon_Strike.png"],
    ["W", 5 , [30,30,30,30,30], "https://static.wikia.nocookie.net/leagueoflegends/images/0/0b/Jarvan_IV_Golden_Aegis.png"],
    ["E", 5 , [55,55,55,55,55], "https://static.wikia.nocookie.net/leagueoflegends/images/0/0a/Jarvan_IV_Demacian_Standard.png"],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Jarvan_IV_Cataclysm.png"],
    'mana'
  ],

  'Jax': [
    ["Q", 5 , [65,65,65,65,65], "https://static.wikia.nocookie.net/leagueoflegends/images/c/ca/Jax_Leap_Strike.png"],
    ["W", 5 , [30,30,30,30,30], "https://static.wikia.nocookie.net/leagueoflegends/images/5/57/Jax_Empower.png"],
    ["E", 5 , [50,60,70,80,90], "https://static.wikia.nocookie.net/leagueoflegends/images/9/9b/Jax_Counter_Strike.png"],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/5/52/Jax_Grandmaster%27s_Might.png"],
    'mana'
  ],

  'Kayle': [
    ["Q", 5 , [70,75,80,85,90], "https://static.wikia.nocookie.net/leagueoflegends/images/a/ae/Kayle_Radiant_Blast.png"],
    ["W", 5 , [90,100,110,120,130], "https://static.wikia.nocookie.net/leagueoflegends/images/1/1e/Kayle_Celestial_Blessing.png"],
    ["E", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/0/0f/Kayle_Starfire_Spellblade.png"],
    ["R", 3 , [100,50,0], "https://static.wikia.nocookie.net/leagueoflegends/images/c/ce/Kayle_Divine_Judgment.png"],
    'mana'
  ],

  'Morgana': [
    ["Q", 5 , [50,55,60,65,70], "https://static.wikia.nocookie.net/leagueoflegends/images/3/3b/Morgana_Dark_Binding.png"],
    ["W", 5 , [70,85,100,115,130], "https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Morgana_Tormented_Shadow.png"],
    ["E", 5 , [80,80,80,80,80], "https://static.wikia.nocookie.net/leagueoflegends/images/4/4c/Morgana_Black_Shield.png"],
    ["R", 3 , [120,110,100], "https://static.wikia.nocookie.net/leagueoflegends/images/6/61/Morgana_Soul_Shackles.png"],
    'mana'
  ],

  'Quinn': [
    ["Q", 5 , [50,55,60,65,70], "https://static.wikia.nocookie.net/leagueoflegends/images/2/2d/Quinn_Blinding_Assault.png"],
    ["W", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/b/b2/Quinn_Heightened_Senses.png"],
    ["E", 5 , [50,50,50,50,50], "https://static.wikia.nocookie.net/leagueoflegends/images/f/f9/Quinn_Vault.png"],
    ["R", 3 , [100,50,0], "https://static.wikia.nocookie.net/leagueoflegends/images/f/f2/Quinn_Behind_Enemy_Lines.png"],
    'mana'
  ],

  'Rammus': [
    ["Q", 5 , [60,60,60,60,60], "https://static.wikia.nocookie.net/leagueoflegends/images/1/1a/Rammus_Powerball.png"],
    ["W", 5 , [40,40,40,40,40], "https://static.wikia.nocookie.net/leagueoflegends/images/a/af/Rammus_Defensive_Ball_Curl.png"],
    ["E", 5 , [50,50,50,50,50],  "https://static.wikia.nocookie.net/leagueoflegends/images/8/89/Rammus_Frenzying_Taunt.png"],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/1/19/Rammus_Soaring_Slam.png"],
    'mana'
  ],

  'Swain': [
    ["Q", 5 , [55,75,95,115,135], "https://static.wikia.nocookie.net/leagueoflegends/images/d/d4/Swain_Death%27s_Hand.png"],
    ["W", 5 , [70,80,90,100,110], "https://static.wikia.nocookie.net/leagueoflegends/images/2/29/Swain_Vision_of_Empire.png"],
    ["E", 5 , [50,50,50,50,50], "https://static.wikia.nocookie.net/leagueoflegends/images/e/eb/Swain_Nevermove.png"],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/8/83/Swain_Demonic_Ascension.png"],
    'mana'
  ],

  'Zyra': [
    ["Q", 5 , [70,70,70,70,70], "https://static.wikia.nocookie.net/leagueoflegends/images/2/24/Zyra_Deadly_Spines.png"],
    ["W", 5 , [0,0,0,0,0], "https://static.wikia.nocookie.net/leagueoflegends/images/b/bd/Zyra_Rampant_Growth.png"],
    ["E", 5 , [70,75,80,85,90], "https://static.wikia.nocookie.net/leagueoflegends/images/8/84/Zyra_Grasping_Roots.png"],
    ["R", 3 , [100,100,100], "https://static.wikia.nocookie.net/leagueoflegends/images/f/fb/Zyra_Stranglethorns.png"],
    'mana'
  ]
};
