import Leonard from './images/Leonard-Mahenge.jpg';
import Letter from './images/BK 1 Letter.jpeg';
import Jar from './images/dark-honey.jpg';
import Hive from './images/honey-hive.jpg';
import Comb from './images/honeycomb.jpg';
import EU from './images/EU-logo.jpg';
import US from './images/USDA-organic.jpg';
import Harvest1 from './images/beekeeper-in-tree.jpg';
import Harvest2 from './images/beekeeper-walking.jpg';
import ForestPhoto from './images/our-forest.JPG';

export class Beekeeper {
    static beekeeperPhoto = Leonard;
    static beekeeperName = "Leonard Mahenge";
    static beekeeperDescription = "Meet Leonard Mahenge, father of four and beekeeper. Leonard harvests his honey from the Mpanda Line Forest Reserve. At the end of each flowering season, Leonard and his children collect the ready honeycombs from high in the forest canopy.";
    static translation = "Dear Customer, Thank you for choosing our honey. In doing so you are helping us financially and also by giving us your feedback helps us and motivates us to work harder and smarter in beekeeping. Thank you and please welcome again.";
    static beekeeperLetter = Letter;
}

export class Honey {
    static varietyMessage = "A yes, Dark Amber Honey. An excellent choice.";
    static jarPhoto = Jar;
    static honeyDescription ="The dark amber variety has an earthy, rich caramel flavour. As dark as the African night this honeydew honey is produced from flowers in the short rainy season from October to December";
}

export class Health {
    static bulletPoints = ["High in antioxidants", "Antibacterial and antifungal", "Disinfects and heals wounds", "A potent probiotic", "Sooths a sore throat"];
    static part1 = "Honey has been used for 1000s of years as both a sweet food and an important medicine.";
    static part2 = "As a certified honey organic you can be sure it is free of all pesticides and insecticides (if it’s not certified organic, chances are high the honey contains pesticides and insecticides) and also never heated or pasteurised which destroys valuable protein chains.";
    
    static honeyHive = Hive;
    static honeyComb = Comb;
}

export class Harvest {
    static part1 = "This honey is wild harvested from native forests in the heart of Africa; not farmed from bees kept in painted hives year on year.";
    static part2 = "Wild bees move with the flowering season of the forest; governed by the natural rhythms of rain, fire and rejuvenation.";
    static part3 = "The honey is certified organic and as pure as nature intended.";
    
    static euLogo= EU;
    static usLogo= US;

    static harvest1 = Harvest1;
    static harvest2 = Harvest2;
}

export class Forest {
    static forestName = "Mpanda Forest Reserve";
    static totalArea = 720000;
    static animals = "Elephants, Chimpanzees";
    static beekeeperCount = 520;
    static plants = "Mnondo, Acacia";

    static forestPhoto = ForestPhoto;
}

export class CarbonInformation {

}