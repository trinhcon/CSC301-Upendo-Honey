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
import UpendoLogo from './images/upendo-logo.jpg';

/**
 * This file stores hard coded content for the app and
 * provides local content for testing front-end appearance
 * when test-frontend is set to true in App.js.
 */

export class Tooltips {
    static swipeInstructions = "Swipe to move inside the flow";
    static beekeeperFlow = "Meet your Beekeeper";
    static environmentFlow = "Honey and Climate Change";
    static honeyFlow = "Show me the honey!";
    static forestFlow = "Go to the Tanzanian forest";
}

export class GoogleAnalytics {
    static productionTrackingID = "UA-173942974-1";
    static devTrackingID = "UA-174142083-1";
}

export class Menu {
    static upendoLogo = UpendoLogo;
    static upendoLink = "http://upendoagri.com/";
    static menuHeader = "Click an Icon to Discover More!";
}

export class Landing {
    static codeBoxHeaderText = "Trace Your Honey ... ";
    static codeBoxSubHeaderText = " ... right back to the forest";
    static codeBoxNoCodeText = "No Code? No worries! Enter 'PUREJOY' to start your adventure.";

    static codeInputPlaceholder = "Type Your Code Here!";
    static codeInputInvalid = "Invalid Code";
}

export class Beekeeper {
    /** Portrait and letter */
    static letterHeader = "A Little Letter to You...";
    static portraitHeader= "Meet your Beekeeper";
    static beekeeperPhoto = Leonard;
    static beekeeperName = "Leonard Mahenge";
    static beekeeperDescription = "Meet Leonard Mahenge, father of four and beekeeper. Leonard harvests his honey from the Mpanda Line Forest Reserve. At the end of each flowering season, Leonard and his children collect the ready honeycombs from high in the forest canopy.";
    static translation = "Dear Customer, Thank you for choosing our honey. In doing so you are helping us financially and also by giving us your feedback helps us and motivates us to work harder and smarter in beekeeping. Thank you and please welcome again.";
    static beekeeperLetter = Letter;

    /** Email Message Form */
    static messageHeader = "Send a Message to Your Beekeeper!";
    static textInit = "";
    static textPlaceholder = "Dear Beekeeper...";
    static emailInit= "";
    static emailPlaceholder = "Your Email";
    static nameInit = "";
    static namePlaceholder = "Your Name";
    static sendButtonValue = "Send!";
    static templateID = "test";                     /** ID of template used */
    static userID = "user_cTGmCITtt4QvUtVoNpigA";   /** Id obtained from EmailJS account */
    static serviceID = "sendgrid";                  /** ID of service used */
    static successMessage = "Success! Those buzzing bees will deliver your message!";
    static failureMessage = "Oh no! Something has gone horribly wrong!";




}

/** Honey Type  */
export class Honey {
    static headerName = "Your New Favourite Honey";
    static varietyMessage = "A yes, Dark Amber Honey. An excellent choice.";
    static jarPhoto =    Jar;
    static honeyDescription ="The dark amber variety has an earthy, rich caramel flavour. As dark as the African night this honeydew honey is produced from flowers in the short rainy season from October to December";
    static recipeText = "Need some sweet ideas? Click on the recipe book for inspiration!";
    static recipeLink = "http://recipe.upendoagri.com";

}

/** Honey Health */
export class Health {
    static headerName = "Heavenly Healthy Honey";
    static bulletPoints = ["High in antioxidants", "Antibacterial and antifungal", "Disinfects and heals wounds", "A potent probiotic", "Sooths a sore throat"];
    static part1 = "Honey has been used for 1000s of years as both a sweet food and an important medicine.";
    static part2 = "As a certified honey organic you can be sure it is free of all pesticides and insecticides (if it’s not certified organic, chances are high the honey contains pesticides and insecticides) and also never heated or pasteurised which destroys valuable protein chains.";
    
    static honeyHive = Hive;
    static honeyComb = Comb;
}

/** Honey Harvest */
export class Harvest {
    static headerName = "Raw, Organic, Wild Honey";
    static part1 = "This honey is wild harvested from native forests in the heart of Africa; not farmed from bees kept in painted hives year on year.";
    static part2 = "Wild bees move with the flowering season of the forest; governed by the natural rhythms of rain, fire and rejuvenation.";
    static part3 = "The honey is certified organic and as pure as nature intended.";
    
    static euLogo= EU;
    static usLogo= US;

    static harvest1 = Harvest1;
    static harvest2 = Harvest2;
}

/** Tanzania Forest  */
export class Forest {
    /** Forest Facts */
    static areaFactHeader = "Total Area: ";
    static animalFactHeader = "Animals: ";
    static beekeeperFactHeader = "Beekeepers: ";
    static plantFactHeader = "Flowering Plants: ";
    static beekeeperFactText = " beekeepers hard at work";
    static areaUnit = "Ha";
    static forestName = "Mpanda Forest Reserve";
    static totalArea = 720000;
    static animals = "Elephants, Chimpanzees";
    static beekeeperCount = 520;
    static plants = "Mnondo, Acacia";

    static forestPhoto = ForestPhoto;

    /** Google Maps API */
    static mapDescription = "This is where your honey is from!";
    static mapInstructions = "Click around to explore...";
    static APIKey = "AIzaSyAnxs16mCrI1dNW-I1ErjEPonHRROke9k";
    static src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAnxs16mCrI1dNW-I1ErjEPonHRROke9Fk&callback=resolveGoogleMapsPromise"
    static config = {
        center: {
          lat: -5.530581224999935,     /** Tanzania Coordinates */
          lng: 31.674771946000078
        },
        zoom: 3,
        mapTypeId: 'satellite',
      };
}

/** Environment Forest  */
export class EnvironmentForest {
    static headerName="Forest Honey and Climate Change";
    static forestPhoto = ForestPhoto;
    static text=[
        "Our honey is carbon negative.", 
        "By keeping native forests healthy, CO2 is removed from the atmosphere.",
        "Buying honey from these forests means they will not be cleared for agriculture or firewood.",
        "Here we compare the emissions related to our honey with those of a locally sourced jar of honey."];
}

export class CarbonGraph {
    static labels = ["Land Transport", "Packaging and Overheads", "Sea Freight", "Conserved Forests"];
    static headers= ["Land Transportation", "Packaging and Overheads", "Sea Freight", "Conserved Forests"];

    static link = "http://upendoagri.com/emissions";

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

    /** Not yet used */
    static options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "g of CO2  /  kg honey"
            }
          }]
        }
    }

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
    static labels = ["Net Carbon Emissions (g of CO2  /  kg honey)"];
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
    
    static options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Carbon"
            }
          }]
        }
    }

    static text=[
        "Congratulations! You’ve got amazingly tasty, fabulously healthy, unique honey. You’ve provided a sustainable income to a Tanzanian traditional beekeeper and their family. And you’ve removed ~600g of CO2 from the atmosphere just with this one jar of honey.",
        "All in all, not a bad day’s work!"];
}
