const fillers = {
    steve: ["Steve", "Dave", "Coreaux", "Dude", "Calestar", "Shephard", "AAAAAAAAAA", "Ikari", "Vost", "Argo", "Felstar", "Sahalin", "Toby Maquire from Spiderman 2 (2004) released on DVD and Blu-Ray", "Zora", "Blackwood"],
    decree: ["royal decree", "vote", "the orders", "consensus", "the wisdom", "their holy light"],
    supreme: ["Supreme", "Grand", "God", "Green", "Red", "Humble", "Lord", "Didactic", "Dudely"],
    chancellor: ["Chancellor", "Emperor", "King", "Queen", "Empress", "Inquisitor", "President", "Chairman", "Leader", "Dude", "Overseer", "Inquisitor", "Executive Council"],
    galactic: ["Galactic", "Planetary", "Ekumenary", "Grand", "Holy", "Interstellar", "United"],
    federation: ["Federation", "Empire", "Republic", "Kingdom", "House of $steve", "Hegemony"],
    new: ["state-of-the-art", "brand new", "venerable", "old", "shitty", "advanced", "cutting edge", "powerful", "great", "amazing"],
    vessel: ["frigate", "cruiser", "battle cruiser", "dreadnought", "scoutship", "torchship", "spinship", "starship", "asteroid-cruiser", "flagship"],
    iron: ["Iron", "Crystal", "Steel", "Blue", "Holy", "Fane", "Heavenly", "Unholy", "Lonely", "Polar", "Dark", "Mystic", "Arctic", "Black", "Dudely"], 
    serpent: ["Serpent", "Spear", "Sword", "Cross", "Fire", "Spirit", "Dude", "Dragon", "Star", "Vision", "Sun"],
    anomadj: ["strange", "really wierd", "unexplained", "odd", "crazy"],
    anomalies: ["anomalies", "events", "disappearances", "sensor blips", "alien attacks", "chemical phenomena", "stuff", "seismic anomalies"],
    outer: ["Outer", "Volcanus", "Elysium", "Tharsis", "Hellas", "Pegasus", "Zeus", "Mercurial", "Saturnine", "Barren", "Dark", "Shadowed"],
    rim: ["Rim", "Wastes", "Spiral Arm", "Crescent", "Cluster", "System", "Constellation"],
    pre: ["Ad", "Tain", "Noor", "Skur", "Baan", "Ti", "Yi", "Fai", "Om", "Can", "Um", "Kor", "Xor", "deez", "Psai", "E"],
    post: ["fera", "el", "an", "chak", "urz", "min", "kren", "shi", "delar", "mun", "ana", "venna", "telios", "elia", "a", "nuts", "sandor"], 
    clandestine: ["Subversives", "Krisk", "Investigations", "Anomalies", "Unexplained Phenomena", "Helios", "Military Intelligence", "Special Tactics"],
    group: ["Group", "Task Force", "Agency", "Bureau"],
    pirates: ["space pirates", "evil space Nazis", "Ota$post Raiders", "a Graal$post $vessel", "kamikaze space chickens", "berzerk AIs", "a chicken", "beans", "GEESE", "\"bees\"", "an enemy $vessel"],
    godspeed: ["Godspeed", "Have a nice day", "Good luck", "Cheers", "Be careful out there", "May the force be with you", "Eat your veggies", "bruh,"]
    
  };

  
  const template = `Commander $steve, 
  By $decree of the $supreme $chancellor of the $galactic $federation, you shall be given command of the $new $vessel 
  the $iron $serpent.  Your first mission will to be to investigate reports of $anomadj $anomalies in the $outer $rim.  Agent $pre$post of the 
  $clandestine $group will accompany you as an observer.  Be advised, here have been reports of $pirates in the area.

  $godspeed commander.`;
  
  
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
