function GetAllCollections() {
    References = []

    Collections.forEach(collection => {
        References.push(collection.Reference);
    });

    return References;
}

function GetRandomWordFromCollection(uid)
{
    var found = Collections.find(collection => collection.Reference.UniqueIdentifier == uid)
    if (found != undefined) return UitilyLib.GetRandomItemFromList(found.Data)

    console.log("Something weird happened...")
    console.log(uid)

}

function GetCollectionNameByUID(uid)
{
    var found = Collections.find(collection => collection.Reference.UniqueIdentifier == uid)
    if (found != undefined) return found.Reference.CollectionName

    console.log("Something weird happened...")
}

const Collections = [
    /// Gender
    { // Genders
        Reference: {
            UniqueIdentifier: "0000",
            CollectionName: "Genders",
            Category: "Genders"

        },
        Data: [
            "Male", 
            "Female"
        ]
    },

    /// Race
    //https://d-n-d5e.fandom.com/wiki/Races
    { // Races
        Reference: {
            UniqueIdentifier: "0001",
            CollectionName: "Races",
            Category: "Races"
        },
        Data: [
            "Human",
        ]
    },
    { // DnD Base (Player's Handbook) Races
        Reference: {
            UniqueIdentifier: "0024",
            CollectionName: "DnD Base (Player's Handbook) Races",
            Category: "Races"
        },
        Data: [
            "Dragonborn",
            "Dwarf",
            "Elf",
            "Gnome",
            "Half-Elf",
            "Halfling",
            "Half-Orc",
            "Human",
            "Tiefling",
        ]
    },
    { // DnD Elemental Evil's Races
        Reference: {
            UniqueIdentifier: "0025",
            CollectionName: "DnD Elemental Evil's Races",
            Category: "Races"
        },
        Data: [
            "Aarakocra",
            "Genasi",
            "Goliath",
        ]
    },
    { // DnD Eberron Races
        Reference: {
            UniqueIdentifier: "0026",
            CollectionName: "DnD Eberron Races",
            Category: "Races"
        },
        Data: [
            "Changeling",
            "Kalashtar",
            "Shifter",
            "Warforged",
        ]
    },
    { // DnD Guildmater's Guide Races
        Reference: {
            UniqueIdentifier: "0027",
            CollectionName: "DnD Guildmater's Guide Races",
            Category: "Races"
        },
        Data: [
            "Centaur",
            "Loxodon",
            "Minotaur",
            "Simic Hybrid",
            "Vedalken",
        ]
    },
    { // DnD Plane Shifts
        Reference: {
            UniqueIdentifier: "0028",
            CollectionName: "DnD Plane Shifts",
            Category: "Races"
        },
        Data: [
            "Aetherborn",
            "Aven",
            "Khenra",
            "Kor",
            "Merfolk",
            "Naga",
            "Siren",
            "Vampire",
        ]
    },
    { // DnD Volo's Guide Races
        Reference: {
            UniqueIdentifier: "0029",
            CollectionName: "DnD Eberron Races",
            Category: "Races"
        },
        Data: [
            "Aasimar",
            "Bugbear",
            "Firbolg",
            "Goblin",
            "Hobgoblin",
            "Kenku",
            "Kobold",
            "Lizardfolk",
            "Orc",
            "Tabaxi",
            "Triton",
            "Yuan-ti Pureblood",
        ]
    },

    /// Age
    { // Age Groups
        Reference: {
            UniqueIdentifier: "0002",
            CollectionName: "Age Groups",
            Category: "Age"
        },
        Data: [
            "Child",
            "Teen",
            "Adult",
            "Senior",
            "Elderly"
        ]
    },
    { // Child (0-12)
        Reference: {
            UniqueIdentifier: "0023",
            CollectionName: "Child (0-12)",
            Category: "Age"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(0, 12)
    },
    { // Teen (13-19)
        Reference: {
            UniqueIdentifier: "0019",
            CollectionName: "Teen (13-19)",
            Category: "Age"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(13, 19)
    },
    { // Adult (20-50)
        Reference: {
            UniqueIdentifier: "0020",
            CollectionName: "Adult (20-50)",
            Category: "Age"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(20, 50)
    },
    { // Senior (50-75)
        Reference: {
            UniqueIdentifier: "0021",
            CollectionName: "Senior (50-75)",
            Category: "Age"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(50, 75)
    },
    { // Elderly (75-110)
        Reference: {
            UniqueIdentifier: "0022",
            CollectionName: "Elderly (75-110)",
            Category: "Age"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(75, 110)
    },
    
    // Professions
    // https://drive.google.com/file/d/116ybB5daRqYdQNOKn-xzhqJ-uWNvqATe/view
    { // Agriculture, Anumal husbandry & forestry professions
        Reference: {
            UniqueIdentifier: "0003",
            CollectionName: "Agriculture, Anumal husbandry & forestry professions",
            Category: "Professions"
        },
        Data: [
            "Animal Handler", 
            "Arborist",
            "Baler",
            "Beekeeper",
            "Birdcatcher",
            "Cowherd",
            "Dairyboy/Dairymaid",
            "Falconer",
            "Farmer",
            "Fisher",
            "Forager",
            "Gamekeeper",
            "Groom",
            "Herder",
            "Horse Trainer",
            "Hunter",
            "Master of Horses",
            "Master of Hounds",
            "Miller",
            "Miner",
            "Pathfinder",
            "Prospector",
            "Ranger",
            "Renderer",
            "Shepherd",
            "Stablehand",
            "Thresher",
            "Trapper",
            "Vintner",
            "Woodcutter",
            "Zookeeper"
        ]
    },
    { // Architecture & Construction professions
        Reference: {
            UniqueIdentifier: "0004",
            CollectionName: "Architecture & Construction professions",
            Category: "Professions"
        },
        Data: [
            "Architect",
            "Brickmaker",
            "Brickmason",
            "Carpenter",
            "Claymason",
            "Construction Worker",
            "Plasterer",
            "Roadlayer",
            "Roofer",
            "Stonemason",
            "Streetlayer",
            "Thatcher"
        ]
    },
    { // The Arts professions
        Reference: {
            UniqueIdentifier: "0005",
            CollectionName: "The Arts professions",
            Category: "Professions"
        },
        Data: [
            "Acrobat",
            "Actor",
            "Athlete",
            "Busker/Street Musician",
            "Celebrity",
            "Chef",
            "Circus Performer",
            "Dancer",
            "Fashion Designer",
            "Gladiator",
            "Glasspainter",
            "Jester",
            "Illuminator",
            "Minstrel",
            "Musician",
            "Painter",
            "Piper",
            "Playwright",
            "Poet",
            "Sculptor",
            "Singer/Soprano",
            "Skald",
            "Tattooist",
            "Wrestler/Brawler",
            "Writer",
        ]
    },
    { // Business & Trade professions
        Reference: {
            UniqueIdentifier: "0006",
            CollectionName: "Business & Trade professions",
            Category: "Professions"
        },
        Data: [
            "Accountant",
            "Actuary",
            "Ale/Wine Draper",
            "Appraiser",
            "Auctioneer",
            "Banker",
            "Bathhouse Owner/Bagniokeeper",
            "Bookkeeper",
            "Brothel Owner/Pimp",
            "Chandler",
            "Collector",
            "Entrepreneur",
            "Fishmonger",
            "General Contractor",
            "Grocer",
            "Guild Master",
            "Innkeeper",
            "Ironmonger",
            "Land Surveyor",
            "Merchant",
            "Peddler",
            "Plantation Owner",
            "Speculator",
            "Street Vendor",
            "Thriftdealer",
            "Tradesman",
        ]
    },
    { // Communication professions
        Reference: {
            UniqueIdentifier: "0007",
            CollectionName: "Communication professions",
            Category: "Profession"
        },
        Data: [
            "Billboardposter",
            "Courier",
            "Herald",
            "Interpreter",
            "Linguist",
            "Messenger",
            "Town Crier",
            "Translator",
        ]
    },
    { // Craftman professions
        Reference: {
            UniqueIdentifier: "0008",
            CollectionName: "Craftman professions",
            Category: "Professions"
        },
        Data: [
            "Accoutrement Maker",
            "Alabasterer",
            "Armorer",
            "Blacksmith",
            "Bladesmith",
            "Bookbinder",
            "Bottler",
            "Bowyer",
            "Brewer",
            "Broom Maker",
            "Candlemaker",
            "Cardmaker",
            "Cartwright",
            "Cobbler",
            "Cooper/Hooper",
            "Cutler",
            "Dyer",
            "Embroiderer",
            "Engraver",
            "Fletcher",
            "Furniture Artisan",
            "Furrier",
            "Glazier/Glassmaker",
            "Glovemaker",
            "Goldsmith/Silversmith",
            "Guilder",
            "Hatter/Milliner",
            "Jem Cutter",
            "Jeweler",
            "Leatherworker",
            "Locksmith",
            "Luthier",
            "Mercer",
            "Potter",
            "Printer",
            "Rope-maker",
            "Saddler",
            "Seamstress/Tailor",
            "Soaper",
            "Tanner",
            "Taxidermist",
            "Thatcher",
            "Tinker",
            "Toymaker",
            "Watchmaker",
            "Weaponsmith",
            "Weaver",
            "Wheelwright",
            "Whittler",
            "Woodcarver",
        ]
    },
    { // Crime professions
        Reference: {
            UniqueIdentifier: "0009",
            CollectionName: "Crime professions",
            Category: "Professions"
        },
        Data: [
            "Assassin",
            "Bandit",
            "Burglar",
            "Charlatan/Conman",
            "Cockfighter/Gamefighter",
            "Crime Boss",
            "Cutpurse",
            "Drug Dealer",
            "Drug Lord",
            "Fence",
            "Highwayman",
            "Kidnapper",
            "Loan Shark",
            "Outlaw",
            "Pirate",
            "Poacher",
            "Raider",
            "Smuggler",
            "Thief/Rogue",
        ]
    },
    { // Education, Science & Math professions
        Reference: {
            UniqueIdentifier: "0010",
            CollectionName: "Education, Science & Math professions",
            Category: "Professions"
        },
        Data: [
            "Abecedarian",
            "Anthropologist",
            "Apprentice",
            "Archaeologist",
            "Archivist",
            "Artificer",
            "Assayer",
            "Astrologer",
            "Botanist",
            "Cartographer",
            "Chemist",
            "Dean",
            "Engineer",
            "Historian",
            "Horologist",
            "Librarian",
            "Mathematician",
            "Philosopher",
            "Professor",
            "Scholar/Researcher",
            "Scribe",
            "Student",
            "Teacher",
            "Theologian",
            "Tutor",
        ]
    },
    { // Government & Law professions
        Reference: {
            UniqueIdentifier: "0011",
            CollectionName: "Government & Law",
            Category: "Professions"

        },
        Data: [
            "Affeeror",
            "Agister",
            "Alderman",
            "Alienist",
            "Archduke/Archduchess",
            "Aristocrat",
            "Assay Master",
            "Baron/Baroness",
            "Chancellor",
            "Chief",
            "Constable",
            "Count/Countess",
            "Courtier",
            "Diplomat",
            "Duke/Duchess",
            "Emperor/Empress",
            "Judge",
            "King/Queen",
            "Knight",
            "Lady-in-Waiting",
            "Lawyer/Advocate",
            "Marquess",
            "Master-of-Coin",
            "Master-of-the-Revels",
            "Minister",
            "Noble",
            "Orator/Spokesman",
            "Prince/Princess",
            "Senator",
            "Spymaster",
            "Steward",
            "Squire",
            "Tax Collector",
            "Viscount/Viscountess",
            "Ward",
        ]
    },
    { // Health professions
        Reference: {
            UniqueIdentifier: "0012",
            CollectionName: "Health professions",
            Category: "Professions"
        },
        Data: [
            "Accoucheur/Obstetrician",
            "Alchemist",
            "Apothecary",
            "Bloodletter",
            "Doctor",
            "Healer",
            "Herbalist",
            "Midwife",
            "Mortician",
            "Nurse",
            "Physician",
            "Surgeon/Chirurgeon",
            "Veterinarian",
        ]
    },
    { // Hospitality & common labor professions
        Reference: {
            UniqueIdentifier: "0013",
            CollectionName: "Hospitality & common labor professions",
            Category: "Professions"
        },
        Data: [
            "Acater",
            "Ale/Wine Tunner",
            "Baker",
            "Barber",
            "Barkeep",
            "Barmaid",
            "Butcher",
            "Caregiver",
            "Charcoal Maker",
            "Chatelaine/Majordomo",
            "Chimney Sweeper",
            "Clerk",
            "Cook",
            "Copyist",
            "Croupier",
            "Distiller",
            "Florist",
            "Food & Drink Taster",
            "Gardener",
            "Gongfarmer",
            "Gravedigger",
            "Housemaid",
            "Kitchen Drudge",
            "Laborer",
            "Lamplighter",
            "Landscaper",
            "Laundry Worker",
            "Longshoreman",
            "Maid/Butler",
            "Orphanage Caretaker",
            "Page",
            "Pastry Chef",
            "Plumer",
            "Porter",
            "Prostitute",
            "Quarryman",
            "Rag-and-Bone Man",
            "Slave",
            "Street Sweeper",
            "Tavern Worker",
            "Trainer",
            "Vermin Catcher",
            "Water Bearer",
        ]
    },
    { // The Magical Arts professions
        Reference: {
            UniqueIdentifier: "0014",
            CollectionName: "The Magical Arts",
            Category: "Professions"
        },
        Data: [
            "Abjurer",
            "Archmage",
            "Augurer",
            "Conjuror",
            "Druid",
            "Elementalist",
            "Enchanter/Enchantress",
            "Evoker",
            "Hearth-witch",
            "Illusionist",
            "Mage",
            "Medium",
            "Necromancer",
            "Ritualist",
            "Runecaster",
            "Sage",
            "Seer/Oracle",
            "Shaman",
            "Shapeshifter",
            "Sorcerer/Sorceress",
            "Summoner",
            "Transmuter",
            "Warlock",
            "Witchdoctor",
            "Witch",
            "Wizard",
            "Wordsmith",
        ]
    },
    { // Military & Security professions
        Reference: {
            UniqueIdentifier: "0015",
            CollectionName: "Military & Security",
            Category: "Professions"
        },
        Data: [
            "Admiral",
            "Archer",
            "Bailiff",
            "Bodyguard",
            "Bouncer",
            "Captain",
            "Castellan",
            "Cavalier",
            "City Watch",
            "Commissar",
            "Crossbowman",
            "Detective/Investigator",
            "Drummer/Fifer",
            "Duelist",
            "Executioner",
            "Field Medic/Combat Medic",
            "Fireman",
            "Friar",
            "Guard",
            "General",
            "Inspection Officer",
            "Intelligence Officer",
            "Jailer",
            "Man-at-Arms",
            "Marshall",
            "Mercenary",
            "Privateer",
            "Quartermaster",
            "Royal Guard",
            "Runner",
            "Sapper",
            "Sentinel",
            "Sergeant",
            "Sergeant-at-Arms",
            "Scout",
            "Siege Artillerist",
            "Slave Driver",
            "Soldier",
            "Spearman",
            "Special/SecretTroops",
            "Spy",
            "Tactician",
            "Tollkeeper",
            "Torturer",
            "Warden",
            "Warmage",
        ]
    },
    { // Religion professions
        Reference: {
            UniqueIdentifier: "0016",
            CollectionName: "Religion",
            Category: "Professions"
        },
        Data: [
            "Abbot/Abbess",
            "Acolyte",
            "Almoner",
            "Archbishop",
            "Bishop",
            "Cardinal",
            "Chaplain",
            "Clergy",
            "Cleric",
            "Cultist",
            "Cult Leader",
            "Diviner",
            "Exorcist",
            "Friar",
            "High Priest/Pope",
            "Inquisitor",
            "Missionary",
            "Monk",
            "Nun",
            "Paladin",
            "Pardoner",
            "Priest",
            "Prophet",
            "Sexton",
            "Templar",
        ]
    },
    { // Transportation professions
        Reference: {
            UniqueIdentifier: "0017",
            CollectionName: "Transportation",
            Category: "Professions"
        },
        Data: [
            "Boatman",
            "Bosun",
            "Cabbie/Wagoner",
            "Caravaneer",
            "Caravan Guard",
            "Charioteer",
            "Carter",
            "Ferryman",
            "First Mate",
            "Helmsman",
            "Navigator",
            "Purser",
            "Sailor",
            "Sea Captain",
            "Shipwright",
            "Swab",
        ]
    },
    { // Unemployed, self-employed & outcast professions
        Reference: {
            UniqueIdentifier: "0018",
            CollectionName: "Unemployed self-employed, & outcast",
            Category: "Professions"
        },
        Data: [
            "Adventurer",
            "Beggar/Pauper",
            "Blood Hunter/Monster Hunter",
            "Bounty Hunter",
            "Deserter",
            "Disgraced Noble",
            "Dungeon Delver",
            "Elder/Retiree",
            "Exile",
            "Explorer",
            "Ex-Criminal",
            "Far Traveler",
            "Folk Hero",
            "Fool",
            "Gambler",
            "Grave Robber/Tomb Raider",
            "Heckler",
            "Heretic",
            "Hermit",
            "Housewife/Househusband",
            "Pilgrim",
            "Rebel/PoliticalDissident",
            "Refugee",
            "Runaway Slave",
            "“Savage”",
            "Squatter",
            "Town Gossip",
            "Urchin",
            "Vagabond",
        ]
    },

    // TimePeriods 
    { // The Technology Periods
        Reference: {
            UniqueIdentifier: "0030",
            CollectionName: "The Technology Periods (Prehistory-Information Age)",
            Category: "TimePeriods"
        },
        Data: [
            // Prehistory
            "Paleolithic",
            "Mesolithic",
            "Neolithic",
            "Chalcolithic/Eneolithic",
            // Ancient History
            "Bronze Age",
            "Iron Age",
            // Late Middle Ages
            "Renaissance",
            // Early Modern history
            "Early Modern Period",
            // Modern History
            "Industrial Age (1760-1970)",
            "Machine Age (1880–1945)",
            "Atomic Age (1945/1950–present)",
            "Space Age (1957–present)",
            "Information Age (1970–present)",
        ]
    },
    { // Japanese Periods
        Reference: {
            UniqueIdentifier: "0031",
            CollectionName: "Japanese Periods",
            Category: "TimePeriods"
        },
        Data: [
            "Jōmon period (10,501 BCE - 400 BCE)",
            "Yayoi period (450 BCE - 250 CE)",
            "Kofun period (250-600)",
            "Asuka period (643-710)",
            "Nara period (743-794)",
            "Heian period (795-1185)",
            "Kamakura period (1185-1333)",
            "Muromachi period (1333-1573)",
            "Azuchi–Momoyama period (1573-1603)",
            "Tokugawa shogunate (1603-1868)",
            "Meiji period (1868-1912)",
            "Taishō period (1912-1926)",
            "Shōwa period (1926-1989)",
            "Heisei period (1989-2019)",
            "Reiwa period (2019-present)",
        ]
    },
    { // Year Number (1100-1800)
        Reference: {
            UniqueIdentifier: "0033",
            CollectionName: "Post-classical (year number) (500-1500)",
            Category: "TimePeriods"
        },
        Data: UitilyLib.ArrayWithNumbersFromMinToMax(500, 1500)
    },
]

/* TODO: Divide data into "Themes" (medieval worker profession pack)*/
/* https://thestoryreadingapeblog.com/2015/08/19/100-jobs-for-fantasy-characters-infographic/ */