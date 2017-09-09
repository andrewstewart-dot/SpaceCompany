COST_TYPE = {
    FIXED: 0
};

TECH_TYPE = {
    UPGRADE: 0,
    UNLOCK: 1
};

BUILDING_TYPE = {
    PRODUCER: 0
};

RESOURCE_OBSERVER_TYPE = {
    CURRENT_VALUE: 0,
    SPECIFIC_VALUE: 1,
    CAPACITY: 2,
    PER_SECOND: 3
};

RESOURCE = {
	ENERGY: 'energy',
	PLASMA: 'plasma',
	URANIUM: 'uranium',
	LAVA: 'lava',
	OIL: 'oil',
	METAL: 'metal',
	GEM: 'gem',
	CHARCOAL: 'charcoal',
	WOOD: 'wood',
	SILICON: 'silicon',
	LUNARITE: 'lunarite',
	METHANE: 'methane',
	TITANIUM: 'titanium',
	GOLD: 'gold',
	SILVER: 'silver',
	HYDROGEN: 'hydrogen',
	HELIUM: 'helium',
	ICE: 'ice',
	METEORITE: 'meteorite',
	SCIENCE: 'science'
};

INDEX_NONE = -1;

Game.constants = (function(){

    var instance = {};
    instance.iconPath = "Icons/";
    instance.iconExtension = "png";

    instance.rank = ["Space Noob", "Space Explorer", "Solar Traveler", "Spaceship Pilot", "Dyson Sphere Technician", "Wonder Builder", "Overlord Associate", "Antimatter Tester", "Rocket Engineer", "Interstellar Space Farer", "Fleet Commander", "Faction Diplomat", "Console Cheater", "Save File Editor", "Source Code Hacker", "The Prestiged"]
    instance.achievementMax = 1000;
    instance.achievementIconsPerRow = 4;
    instance.achievementResourceBrackets = [50, 5000, 500000, 50000000, 5000000000];
    instance.achievementProducerBrackets = [10, 50, 100, 500, 1000];
    instance.achievementBracketColors = ["#9d9d9d", "#1eff00", "#0070dd", "#a335ee", "#ff8000"];

    instance.achievementCategoryResources = "Resources";
    instance.achievementCategoryProducers = "Producers";

    instance.statisticCategoryGeneral = "General";
    instance.statisticCategoryUnlockable = "Unlockables";
    instance.statisticCategoryTiming = "Timing";

    instance.maxTier = 6;

    instance.enableStorageNotifications = false;
    instance.enableMachineTab = false;

    return instance;
}());
