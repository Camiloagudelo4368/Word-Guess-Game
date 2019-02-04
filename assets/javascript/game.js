// import city from "./citiesObject.js"
// import GetCityById from  './citiesObject.js';

var _cities = [];
var _city;
var _citiesDone = [];

// function than return a new city object
function NewCityObject() {
    return {
        id: 0,
        name: "",
        word: "",
        description: "",
        imgUrl: ""
    }
}

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 1;
_city.name = "Amsterdam, the Netherlands";
_city.word = "Amsterdam";
_city.description = "The Dutch capital's central Canal District was crowned a World Heritage Site in 2010, helping draw the gaze away from the red lights and the smoke houses and onto one of Europe’s most gorgeous cultural epicenters. Add windmills, cycling, cheese, storied facades, and Van Goghs to Amsterdam's storied charm. —CNT Editors";
_city.imgUrl = 'assets/images/cities/Amsterdan_Netherlands.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 2;
_city.name = "Beirut, Lebanon";
_city.word = "Beirut";
_city.description = "Even when faced with terror and destruction, Beirut is beautiful, charming, and strong. The Lebanese capital has astonishing art, architecture, food, and hotels—in fact, we think it's one of the great cities of the world. —CNT Editors";
_city.imgUrl = 'assets/images/cities/Beirut_Lebanon.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 3;
_city.name = "Bogotá, Colombia";
_city.word = "Bogota";
_city.description = "Bogotá is the capital and largest city in Colombia. A melting pot of people from around the country, it is diverse and multicultural, with a blend of modern and colonial architecture. The predominant colors in Bogotá are the green of the city’s many parks and the eastern mountains overlooking the sanctuaries of Monserrate and Guadalupe, and the rich red of its many brick buildings.";
_city.imgUrl = 'assets/images/cities/Bogota_Colombia.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 4;
_city.name = "Bruges, Belgium";
_city.word = "Bruges";
_city.description = "Characterized by cobblestone streets and canals, much of Bruges’s immaculately preserved old city was built between the 12th and 15th centuries: As a result, it’s not hard to feel like you’re in a medieval fairy tale here. Visit the Church of Our Lady for a viewing of Michelangelo’s Madonna and Child, or sit at a café and take in the views of the Markt, a historic square in the city center. —K.L.";
_city.imgUrl = 'assets/images/cities/Bruges_Belgium.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 5;
_city.name = "Budapest, Hungary";
_city.word = "Budapest";
_city.description = 'With some of the best Art Nouveau architecture in Europe, scenic Budapest has no bad angles. Széchenyi Chain Bridge offers magnificent views of the Danube River—especially at night. Moreover, it’s the only capital city in the world that’s rife with healing, thermal waters (hence its nickname,"The City of Baths"). —K.L.';
_city.imgUrl = 'assets/images/cities/Budapest_Hungary.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 6;
_city.name = "Cape Town, South Africa";
_city.word = "Cape Town";
_city.description = "The whole world witnessed Cape Town's beauty first hand during the 2010 World Cup: its penguin-populated, white-sand beaches within a few short miles of majestic Table Mountain, and rolling winelands just outside the city center. Coastal highways compare to the finest in the world, from the Amalfi Coast to the Pacific Coast Highway, and the gardens—notably Kirstenbosch National Botanic Gardens—are rich with king protea, a crowned flower that seems to (rightly) rule the floral kingdom. —L.D.R.";
_city.imgUrl = 'assets/images/cities/Cape-Town_South-Africa.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 7;
_city.name = "Cartagena, Colombia";
_city.word = "Cartagena";
_city.description = "Summery weather sticks around 12 months of the year in Cartagena, making a quick jaunt there—to admire the colonial architecture, stroll through the shady parks and plazas, and dine at ceviche restaurants like El Boliche or La Cevichería—a great idea at any time. —Andrew Sessa";
_city.imgUrl = 'assets/images/cities/Cartagena_Colombia.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 8;
_city.name = "Chefchaouen, Morocco";
_city.word = "Chefchaouen";
_city.description = 'Tucked high in Morocco’s Rif Mountains, the all-blue town of Chefchaouen is a calming respite from the overwhelming frenzy of Marrakech and Fez. The Jewish refugees from Europe who lived there during the 1930s first painted the city (either to symbolize heaven or as a mosquito repellent, depending on who you ask), and now the town is known as "The Blue Pearl." The town still keeps the tradition alive: Each year, the houses are washed with new coats of paint. —Lucy Laucht';
_city.imgUrl = 'assets/images/cities/Chefchaouen_Moroco.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 9;
_city.name = "Florence, Italy";
_city.word = "Florence";
_city.description = "You can ditch any old notions you may have of Florence as a frozen-in-amber monument to its various monuments; not only did the Renaissance capital shake off that fusty reputation a few years ago, it’s now arguably Italy’s most vibrant city. New museums and restaurants abound, all without making a dent in Florence’s timeless, heart-lifting beauty (which, really, is still the best reason to come here). —M.S.";
_city.imgUrl = 'assets/images/cities/Florence_Italy.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 10;
_city.name = "Havana, Cuba";
_city.word = "Havana";
_city.description = "Since regulations prohibiting travel to Cuba were relaxed in January 2015, U.S. travelers have never been more eager to visit the colorful streets of Havana—a study in contradictions, pastels and primary colors, rich and poor, the past and the future. (The onslaught of beautiful Airbnb properties doesn't hurt either.) —L.D.R. and Barbara Peterson";
_city.imgUrl = 'assets/images/cities/Havana_Cuba.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 11;
_city.name = " Hong Kong, China";
_city.word = "Hong Kong";
_city.description = "Hong Kong is impressive from many angles—beneath the towering skyscrapers, or from a ferry crossing Victoria Harbour—but you can see its finest side from the air. As your flight approaches the city, it feels like the mist parts and reveals Shangri-La, where hilly, verdant islands surround a concrete jungle. —Laura Dannen Redman";
_city.imgUrl = 'assets/images/cities/hong-kong_China.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 12;
_city.name = "Istanbul, Turkey";
_city.word = "Istanbul";
_city.description = "A historic crossroads of culture and design, Istanbul's landscape provides a prominent display of its two conquering empires. Travelers needn't look farther than the Blue Mosque or Hagia Sophia for the aesthetics central to both: the Byzantine dome and colored mosaics, and the Ottoman minarets and Islamic calligraphy. —Benita Hussain";
_city.imgUrl = 'assets/images/cities/Istanbul_Turkey.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 13;
_city.name = "Jerusalem, Israel";
_city.word = "Jerusalem";
_city.description = "Long a place of religious pilgrimage for Christians, Jews, and Muslims, Jerusalem is now drawing a different sort of pilgrim: the global traveler. In addition to its significant sacred and religious sights, the city boasts modern architecture, a cutting-edge light-rail transit network, and a growing number of notable restaurants. —K.L.";
_city.imgUrl = 'assets/images/cities/Jerusalem_Israel.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 14;
_city.name = "London, U.K";
_city.word = "London";
_city.description = "London is one of the most vibrant cities in the world, with history (Westminster Abbey) and models of modernity (London Eye, The Gherkin) mingling on the Thames. Art and literature seem to seep out of the city's walls—and in recent years, London has glammed up even more, with contemporary art galleries and boutique retailers adding some glimmer to formerly seedy areas. —CNT Editors";
_city.imgUrl = 'assets/images/cities/London_UK.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 15;
_city.name = "New York, United States";
_city.word = "New York";
_city.description = "New York's beauty is multi-sensory: It's the historic architecture, from the Flatiron Building to One World Trade Center, dwarfing the 8.4 million humans below; the feel of the grass beneath your feet in the great green oases of Central Park; the smell of roasted nuts on street corners; the sound of music pouring out of bars in the Village. It's the art of the Frick and the Met, MoMA, and the Museum of the Moving Image; and the beautiful, diverse people walking the city streets with heads held high. —L.D.R.";
_city.imgUrl = 'assets/images/cities/New-York_USA.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 16;
_city.name = "Paris, France";
_city.word = "Paris";
_city.description = "We're trying not to play favorites, but really, is there a city more dramatic than Paris? It's a place where romance and history play side by side, cafes line cobblestone streets, beautiful people stroll the Seine at all hours, and every neighborhood seems to have its own iconic landmark, be it Notre Dame, Sacré-Coeur, or the Eiffel Tower. —CNT Editors";
_city.imgUrl = 'assets/images/cities/Paris_France.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 17;
_city.name = "Prague, Czech Republic";
_city.word = "Prague";
_city.description = "Picturesque Prague beats with a bohemian heart: The bevy of museums and centuries-old architecture are a testament to the city’s artistic and intellectual foundations. Get off the well-trod path at any number of historic pubs (try U Zlatého Tygra or U Jelínků) or head up to Petřín Hill for incredible views of the city. —K.L.";
_city.imgUrl = 'assets/images/cities/Prague_Czech-Republic.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 18;
_city.name = "Queenstown, New Zealand";
_city.word = "Queenstown";
_city.description = "Did you know that New Zealand has no native predators? It’s a land of birdsong (and the occasional rat, introduced by the Europeans). But head all the way south to Queenstown, dubbed the adrenaline-junkie capital of the world, and you’ll find more than a few ways to look danger in the eye, while also checking out some of the most stunning views in the world. —L.D.R.";
_city.imgUrl = 'assets/images/cities/Queenstown_New-Zealand.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 19;
_city.name = "Riga, Latvia";
_city.word = "Riga";
_city.description = "Riga has all of the cosmopolitan dynamism and charm of cities like Paris and Barcelona—without the crowds or attitude. Visit the Jugendstil district, home to about 800 brilliantly preserved Art Nouveau buildings, and don’t miss the National Library, by Latvian-American architect Gunnar Birkerts. The building—which resembles a glass-and-steel mountain ridge along the city’s Daugava River—just opened in 2014. —CNT Editors";
_city.imgUrl = 'assets/images/cities/Riga_Latvia.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 20;
_city.name = "St. Petersburg, Russia";
_city.word = "St Petersburg";
_city.description = "Fyodor Dostoyevsky called his adopted metropolis “the most intentional and abstract city in the world.” Built in a short, fevered period of time based on one man’s—Peter the Great’s—vision, Russia’s second-largest city is a sort of work of art in and of itself, evoking comparisons to Florence, Italy. —Jenna Scherer";
_city.imgUrl = 'assets/images/cities/St-petersburg_Russia.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 21;
_city.name = "Stockholm, Sweden";
_city.word = "Stockholm";
_city.description = 'With its charming historic alleyways and a multitude of islands that lead many to dub it “the Venice of the north," Stockholm is one of the world’s most beautiful capitals. (It’s also the cultural, political, media, and economic center of Sweden.) —K.L.';
_city.imgUrl = 'assets/images/cities/stockholm_sweden.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 22;
_city.name = "Venice, Italy";
_city.word = "Venice";
_city.description = "Here's a general rule to abide by in Venice: If you don't get lost, you're not doing it right. Even visitors with a GPS-like sense of direction will likely be bested by the meandering streets of the city. There's no better way to explore the lovely maze than in a haze of mild confusion. —Katherine LaGrave";
_city.imgUrl = 'assets/images/cities/Venice_Italy.jpg';

// add city to array cities
_cities.push(_city);

// -------------------------------------------------------------------------------

// create a new clear city object
_city = new NewCityObject();
// Set the values for each city to insert it in a array fo cities
_city.id = 23;
_city.name = "Vienna, Austria";
_city.word = "Vienna";
_city.description = "Artistic, exquisite, and largely shaped by its musical and intellectual foundations, Austria’s capital and largest city is as grand as they come and packed with culture. Make time to get a figurative taste of royalty at Schönbrunn, the Habsburgs’ former summer residence, and get an actual taste of Sacher torte, a chocolate cake born in the city. Just be sure to ask for it mit schlaag—with cream. —K.L.";
_city.imgUrl = 'assets/images/cities/Vienna_Austria.jpg';

// add city to array cities
_cities.push(_city);

//--------------------------------------------------------------------------//

// New object to store the result of the function
var _cityResult = new NewCityObject();
var _winsCounter = 0;
var _remainingCounter = 12;
var _start = 0;

// Function to find the city by id, returns a object city
function GetCityById(_id) {
    _cities.forEach(function (_cityItem) {
        if (_cityItem.id == _id) {
            _cityResult.id = _cityItem.id,
                _cityResult.name = _cityItem.name,
                _cityResult.word = _cityItem.word.toLowerCase(),
                _cityResult.description = _cityItem.description,
                _cityResult.imgUrl = _cityItem.imgUrl
        }
    });
}

// Function to fill the variable "_cityResult"
function GetCity() {
    var _randomId = Math.floor(Math.random() * 23) + 1;
    GetCityById(_randomId);
    console.log(_randomId);
    console.log(_cityResult.word);
}

function start() {
    GetCity();

    // Add city to array control no duplicate
    _citiesDone.push(_cityResult.id);

    if (_citiesDone.indexOf(_cityResult.id) !== -1) {
        // catch html elements
        var _currentWordDiv = document.getElementById("currentWord");
        var _imgCityImg = document.getElementById("imgCity");
        var _missingLettersSpan = document.getElementById("missingLetters");
        // var _scoreWinsSpan = document.getElementById("scoreWins");
        var _remainingLettersSpan = document.getElementById("remainingLetters");
        var _messageH1 = document.getElementById("message");
        var _pressAnyP = document.getElementById("pressAny");

        // Set html values
        // _currentWordwordDiv.textContent = _cityResult.word;
        // _imgTextP.textContent = _cityResult.description;
        _imgCityImg.src = _cityResult.imgUrl;
        _missingLettersSpan.textContent = "";
        _currentWordDiv.textContent = "";
        $("#scoreWins").text(_winsCounter);
        _remainingLettersSpan.textContent = "12";
        _messageH1.style.display = "none";
        _pressAnyP.textContent = "Press any key to start...";
        _remainingCounter = 12;
        DrawCurrentWord();

        // _citiNameH1.textContent = _cityResult.name;
    }
}

// Function to inicialize game
function Restart() {

    GetCity();
    console.log(_cityResult.word);

    // Add city to array control no duplicate
    _citiesDone.push(_cityResult.id);

    if (_citiesDone.indexOf(_cityResult.id) !== -1) {
        // catch html elements
        var _currentWordwordDiv = document.getElementById("currentWord");
        var _imgTextP = document.getElementById("imgText");
        var _imgCityImg = document.getElementById("imgCity");
        var _citiNameH1 = document.getElementById("citiName");
        var _missingLettersSpan = document.getElementById("missingLetters");

        // Set html values
        _currentWordwordDiv.textContent = _cityResult.word;
        _imgTextP.textContent = _cityResult.description;
        _imgCityImg.src = _cityResult.imgUrl;
        _citiNameH1.textContent = _cityResult.name;
    }
}

function DrawCurrentWord() {

    var _currentWordDiv = document.getElementById("currentWord");
    var _divCount = 0;
    str = Array.from(_cityResult.word.toString());

    str.forEach(function (_item) {
        // insert divs
        if (_item != " ") {
            var _div = document.createElement("div");
            _div.className = "divWord";
            _div.id = "divWord" + _divCount;
            _currentWordDiv.appendChild(_div);
            _divCount++;
        }
        else {
            var _div = document.createElement("div");
            _div.className = "divWordNB";
            _div.id = "divWord" + _divCount;
            _currentWordDiv.appendChild(_div);
            _divCount++;
        }
    });
}

var _wordControl = "";

// fill the div with _keyPressed by index
function fillCurrentWord(_keyPressed, _index) {

    $("#divWord" + _index).text(_keyPressed.toUpperCase());

}

var _currentWordDiv = document.getElementById("currentWord");
ary = Array.from(_currentWordDiv.textContent);

var _newWord = new Array(ary.length);
// console.log(GetCityById(1));

// event triggers when a key is pressed
document.onkeyup = (function (event) {

    var _currentWordDiv = document.getElementById("currentWord");
    ary = Array.from(_currentWordDiv.textContent);
    console.log(ary);

    _key = event.key.toLowerCase();
    // Control the inicial key press to start, it will call the start() function only when the page reload
    if (_start !== 0) {

        // If the pressed key is correct insert in div current word else insert in missing letters
        var _index = _cityResult.word.indexOf(_key);
        console.log(_cityResult.word);
        console.log(_index);

        if (_index !== -1) {

            for (var _i = 0; _i < _cityResult.word.length; _i++) {
                //Ask if the key pressed is already in the missing letters span
                if (_cityResult.word[_i].toString() === _key) {
                    if (_wordControl.length < _cityResult.word.length) {
                        if ($("#divWord" + _i).text().indexOf(_key.toUpperCase()) === -1) {
                            fillCurrentWord(_key, _i);

                        }
                        else {
                            //Play sound when the letter is already in the text
                            var snd = new Audio('assets/Audio/incorrect.mp3');
                            snd.play();
                        }
                        _wordControl += _key.toUpperCase();
                    }
                    else {


                        win();

                        // start();
                        // _start = 1;
                        // _wordControl = "";
                        // $("#pressAny").text("");
                        // $("#missingLetters").text("");

                    }
                }
            }
        }
        else {

            if (_remainingCounter > 1) {
                var _missingLettersSpan = document.getElementById("missingLetters");

                //Ask if the key pressed is already in the missing letters span
                if (_missingLettersSpan.textContent.indexOf(_key.toUpperCase()) === -1) {
                    _missingLettersSpan.textContent += _key.toUpperCase();
                    _remainingCounter--;
                }
                else {
                    //Play sound when the letter is already in the text
                    var snd = new Audio('assets/Audio/nope.mp3');
                    snd.play();
                }

                var _remainingLettersSpan = document.getElementById("remainingLetters");
                _remainingLettersSpan.textContent = _remainingCounter;
            }
            else {

                start();
                var _messageH1 = document.getElementById("message");
                _messageH1.textContent = 'You lose';
                _messageH1.style.display = "block";
                var _imgCityImg = document.getElementById("imgCity");
                _imgCityImg.src = "";
                _start = 0;
            }

        }
    }
    else {
        start();
        _start = 1;
        $("#pressAny").text("");
    }

    function win() {
        var _messageH1 = document.getElementById("message");
        _messageH1.textContent = 'You Win';
        // _messageH1.style.display = "block";
        _winsCounter++;
        $("#scoreWins").text(_winsCounter);
        //Play sound when the letter is already in the text
        var snd = new Audio('assets/Audio/win.mp3');
        snd.play();
        $("#citiName").text(_cityResult.name);
    }

});