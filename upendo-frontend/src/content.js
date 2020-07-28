// Imported images
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

/**
 * This file stores hard coded content for the app and
 * provides local content for testing front-end appearance
 * when test-frontend is set to true in App.js.
 */

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

export class EnvironmentForest {
    static headerName="Forest Honey and Climate Change";
    static forestPhoto = ForestPhoto;
    static text=[
        "Our honey is carbon negative.", 
        "By keeping native forests healthy, CO2 is removed from the atmosphere.",
        "Buying honey from these forests means they will not be cleared.",
        "Here we compare the emissions related to our honey with those of a locally sourced jar of honey."];
}

export class CarbonGraph {
    static labels = ["Land Transport", "Packaging and Overheads", "Sea Freight", "Conserved Forests"];
    static headers= ["Land Transportation", "Packaging and Overheads", "Sea Freight", "Conserved Forests"];

    /** members of "tanzanian" and "domestic" objects below should NOT be changd
     * they are specific to the implementation of chart.js
     * IF MODIFIED, you must pass each member manually to chart.js
    */
    static data = [
        {
            label: "Tanzanian Honey",
            data:  [903, 661, 342, -4267],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 2
        },

        {
            label: "Domestic Honey",
            data:  [451, 661, 0, 0],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2
        }
    ];

    static part1 = [
        "Our honey comes from deep in the forests of remote Western Tanzania.",
        "We bring our honey from the forests to our packing facility where we prepare it for export.",
        "A local honey company collects honey from farms or other places around their country and brings it to their packing facility."
    ];
    static part2 = [
        "Glass jars, although reusable, take a lot of energy to produce (it is molten sand after all!).",
        "In this component we have also included our company’s other carbon emissions, such as utilities.",
        "We estimate these to be similar for a locally sourced honey."
    ];
    static part3 = [
        "90% of everything people buy is, at some point, shipped by sea freight. Sea freight is a large proportion of global emissions.",
        "However, CO2 emissions per kg of freight is much lower than by truck or rail.",
        "Of course, honey from in-country doesn’t need any sea freight."
    ];
    static part4 = [
        "By working with local communities we help reverse the devastating deforestation in some of the world’s most valuable tropical forests which store tons of carbon. Only forest honey and your decision to support our beekeepers can do that!",
        "To find out more please click the ‘Carbon Footprint’"
    ];

    static text = [this.part1, this.part2, this.part3, this.part4];

}

export class NetCarbonGraph {
    static headerName = ["Great Work!"];
    static labels = ["Net Carbon Emissions"];
    static data = [
        {
            label: "Tanzanian Honey",
            data:  [-2361],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            borderWidth: 2
        },

        {
            label: "Domestic Honey",
            data:  [1112],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2
        },
    ];

    static text=[
        "Congratulations! You’ve got amazingly tasty, fabulously healthy, unique honey. You’ve provided a sustainable income to a Tanzanian traditional beekeeper and their family. And you’ve removed ~600kg of CO2 from the atmosphere.",
        "All in all, not a bad day’s work!"];
}
