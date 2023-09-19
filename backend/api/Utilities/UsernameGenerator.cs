namespace api.Utilities;

public static class UsernameGenerator
{

    private static readonly IReadOnlyList<string> Adjectives = new[]
    {
        "adventurous", "agile", "ambitious", "animated", "audacious", "badass", "bewildered", "blazing", "brilliant",
        "brooding", "bubbly", "captivating", "cautious", "charismatic", "charming", "clever", "cosmic", "courageous",
        "cozy", "crafty", "cranky", "daring", "dashing", "dauntless", "dazzling", "defiant", "delightful", "determined",
        "dynamic", "eccentric", "ecstatic", "eerie", "elusive", "energetic", "enigmatic", "epic", "ethereal",
        "exquisite", "fabled", "fierce", "flaming", "flawless", "focused", "frantic", "free-spirited", "frosty",
        "galactic", "gallant", "geeky", "genius", "ghostly", "giddy", "glamorous", "glorious", "gritty", "groovy",
        "harmonic", "heroic", "hilarious", "humble", "hyper", "iconic", "illustrious", "imaginative", "impulsive",
        "incognito", "indomitable", "intrepid", "ironic", "jubilant", "jumpy", "keen", "kooky", "lively", "luminous",
        "majestic", "melancholic", "mighty", "mysterious", "mystic", "noble", "nonchalant", "nostalgic", "notorious",
        "optimistic", "overdrive", "paranoid", "passionate", "peaceful", "peculiar", "perceptive", "perky",
        "persistent", "pioneering", "playful", "posh", "quirky", "radiant", "reckless", "resilient",
    };

    private static readonly IReadOnlyList<string> Nouns = new[]
    {
        "avatar", "bandit", "beacon", "captain", "champion", "cipher", "comet", "cosmos", "crusader", "cyborg",
        "dazzle", "defender", "demon", "drifter", "dynamo", "eagle", "eclipse", "element", "emperor", "enigma",
        "explorer", "falcon", "firebrand", "flame", "fox", "gamer", "giant", "gladiator", "goblin", "guardian",
        "harbinger", "hero", "hobbit", "hunter", "impulse", "jester", "juggernaut", "knight", "leopard", "lion", "mage",
        "marauder", "maverick", "meteor", "minotaur", "mystic", "nemesis", "neutron", "ninja", "nomad", "oracle",
        "outlaw", "paladin", "phantom", "phoenix", "pirate", "prophet", "pulsar", "quasar", "quest", "raider", "ranger",
        "rebel", "robot", "sage", "sailor", "samurai", "savage", "scout", "shadow", "shaman", "siren", "skull",
        "slayer", "sorcerer", "specter", "spellbinder", "sphinx", "spider", "sprite", "spy", "stalker", "star",
        "summoner", "swordsman", "templar", "thunder", "titan", "trickster", "unicorn", "valkyrie", "vampire",
        "vanguard", "viking", "viper", "wanderer", "warlock", "warrior", "wizard", "wolf", "wraith", "xenomorph",
        "yeti", "zealot", "zombie",
    };

    private static readonly Random Generator = new();
    
    public static string Generate()
    {
        var adjective = Adjectives[Generator.Next(Adjectives.Count)];
        var noun = Nouns[Generator.Next(Nouns.Count)];
        return $"{adjective}-{noun}-{Generator.Next(1000)}";
    }
}