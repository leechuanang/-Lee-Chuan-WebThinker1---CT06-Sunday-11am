const WORDS = [
    "BRAZIL",
    "PIZZA",
    "SOCCER",
    "EIFFEL TOWER",
    "PIKACHU",
    "DHOBY GHAUT",
    "CARPE DIEM",
    "CANADA",
    "BAGUETTE",
    "BASEBALL",
    "PYRAMIDS",
    "CHARIZARD",
    "BISHAN",
    "LIVE AND LEARN",
    "CHINA",
    "LASAGNA",
    "BASKETBALL",
    "STONEHENGE",
    "BULBASAUR",
    "PASIR RIS",
    "LESS IS MORE",
    "DENMARK",
    "SUSHI",
    "VOLLEYBALL",
    "TAJ MAHAL",
    "JIGGLYPUFF",
    "JURONG EAST",
    "LIFE GOES ON",
    "EGYPT",
    "BURRITO",
    "BADMINTON",
    "COLOSSEUM",
    "MEOWTH",
    "RAFFLES PLACE",
    "BELIEVE IN YOU",
    "FRANCE",
    "RISOTTO",
    "CRICKET",
    "MACHU PICCHU",
    "PSYDUCK",
    "OUTRAM PARK",
    "DARE TO DREAM",
    "GERMANY",
    "PANCAKE",
    "RUGBY",
    "GREAT WALL",
    "ONIX",
    "YISHUN",
    "TIME FLIES FAST",
    "HUNGARY",
    "OMELETTE",
    "GOLF",
    "PETRA",
    "SQUIRTLE",
    "SEMBAWANG",
    "TO THINE OWN SELF BE TRUE",
    "ICELAND",
    "FALAFEL",
    "TENNIS",
    "ACROPOLIS",
    "VAPOREON",
    "TAMPINES",
    "LOVE CONQUERS ALL",
    "JAPAN",
    "GOULASH",
    "HOCKEY",
    "ANGKOR WAT",
    "SNORLAX",
    "SERANGOON",
    "KNOWLEDGE IS POWER",
    "KENYA",
    "KIMCHI",
    "ARCHERY",
    "CHRIST THE REDEEMER",
    "MEWTWO",
    "WOODLANDS",
    "PATIENCE IS KEY",
    "LAOS",
    "TEMPURA",
    "JUDO",
    "SYDNEY OPERA HOUSE",
    "TOGEPI",
    "CLEMENTI",
    "LAUGHTER IS MEDICINE",
    "MEXICO",
    "QUINOA",
    "FENCING",
    "MOUNT RUSHMORE",
    "CYNDAQUIL",
    "CHINATOWN",
    "JOY IN THE JOURNEY",
    "NAMIBIA",
    "GUACAMOLE",
    "KARATE",
    "LOUVRE MUSEUM",
    "LUGIA",
    "BUGIS",
    "CHANGE IS CONSTANT",
    "OMAN",
    "CHURROS",
    "SAILING",
    "BUCKINGHAM PALACE",
    "MUDKIP",
    "LAVENDER",
    "PEACE BEGINS WITHIN",
    "PERU",
    "TOFU",
    "WRESTLING",
    "NOTRE-DAME",
    "RAYQUAZA",
    "BUKIT BATOK",
    "ART IS FREEDOM",
    "QATAR",
    "WAFFLE",
    "LACROSSE",
    "SISTINE CHAPEL",
    "LUCARIO",
    "PUNGGOL",
    "DREAM BIG FEAR LITTLE",
    "RUSSIA",
    "PAELLA",
    "POLO",
    "GOLDEN GATE BRIDGE",
    "CHIMCHAR",
    "HARBOURFRONT",
    "STRENGTH IN UNITY",
    "SPAIN",
    "CEVICHE",
    "BOXING",
    "NIAGARA FALLS",
    "GIRATINA",
    "CITY HALL",
    "EVERY END IS A NEW BEGINNING",
    "TURKEY",
    "BAKLAVA",
    "ROWING",
    "TOWER OF PISA",
    "OSHAWOTT",
    "KRANJI",
    "HOPE ANCHORS THE SOUL",
    "UGANDA",
    "COUSCOUS",
    "SURFING",
    "CHICHEN ITZA",
    "ZEKROM",
    "ORCHARD",
    "VIETNAM",
    "TORTILLA",
    "SKATEBOARDING",
    "HAGIA SOPHIA",
    "FROAKIE",
    "EUNOS",
    "YEMEN",
    "BIRYANI",
    "TAEKWONDO",
    "PARTHENON",
    "GOOMY",
    "NOVENA",
    "ZIMBABWE",
    "RATATOUILLE",
    "GYMNASTICS",
    "BRANDENBURG GATE",
    "ROWLET",
    "SENGKANG",
    "IRELAND",
    "BRUSCHETTA",
    "BOBSLEIGH",
    "TABLE MOUNTAIN",
    "MIMIKYU",
    "PAYA LEBAR",
    "GREECE",
    "POUTINE",
    "TRIATHLON",
    "EDINBURGH CASTLE",
    "TOXTRICITY",
    "EXPO",
    "BHUTAN",
    "HUMMUS",
    "HANDBALL",
    "GRAND CANYON",
    "WOOLOO",
    "KENT RIDGE",
    "BOLIVIA",
    "TABOULEH",
    "SQUASH",
    "MOUNT FUJI",
    "DRACOVISH",
    "BOTANIC GARDENS",
    "FIJI",
    "CANNOLI",
    "TABLE TENNIS",
    "NGORONGORO CRATER",
    "RILLABOOM",
    "KHATIB",
    "NEPAL",
    "MUFFIN",
    "CURLING",
    "SAGRADA FAMILIA",
    "CUFANT",
    "TEST"]
    
    let wordsLength = WORDS.length
    let idx = Math.floor(Math.random() * wordsLength)
    
    let WORD =  WORDS[idx] ;
    let GUESS = [];
    let LIFE = 7;
    let INCORRECT_GUESSES = [];
    console.log(WORD);
    
    for(let i = 0; i < WORD.length; i++){
        if(WORD[i] == " "){
            $("#hint").append('<div class="fs-4 fw-bold p-3 m-1> </div>')
        }
        else $("#hint").append('<div class="card border-dark fs-4 fw-bold p-3 m-1">_</div>');
    }
    
    const submitGuess = () => {
        let guess = $('#guessInput').val().toUpperCase();
        if (guess.length === 1 && /^[A-Z]$/.test(guess)) {
            checkLetter(guess);
            $('#guessInput').val('');
        } else {
            alert('Please enter a valid letter.');
        }
    }
    
    const checkLetter = (key) => {
        if (GUESS.indexOf(key) == -1) {
            GUESS.push(key);
            if (WORD.indexOf(key) != -1) {
                $('#hint').html('');
                let found = true;
                for (let i = 0; i < WORD.length; i++) {
                    if (WORD[i] == " ") $('#hint').append(`<div class="fs-4 fw-bold p-3 m-1"> </div>`);
                    else if (GUESS.indexOf(WORD[i]) != -1) $('#hint').append(`<div class="card border-dark fs-4 fw-bold p-3 m-1">${WORD[i]}</div>`);
                    else {
                        $('#hint').append(`<div class="card border-dark fs-4 fw-bold p-3 m-1">_</div>`);
                        found = false;
                    }
                }
                if (found) {
                    $('#game').addClass("bg-success");
                    showAnswer();
                }
            } else {
                LIFE -= 1;
                INCORRECT_GUESSES.push(key);
                updateWrongGuess();
                if (LIFE == 0) {
                    $('#game').addClass("bg-danger");
                    showAnswer();
                }
            }
        }
    };
    
    let updateWrongGuess = () => {
        $('#incorrectGuesses').html(INCORRECT_GUESSES.join(','))
        $('#life').attr('src', `img/hangman-${LIFE}.svg`);
    }

    let showAnswer = () => {
        
        $('#hint').empty();

        for (let i = 0; i < WORD.length; i++) {
            
            if (WORD[i] == " "){
                $('#hint').append(`<div class="fs-4 fw-bold p-3 m-1"> </div>`);
            }
            else{
                $('#hint').append(`<div class="card border-dark fs-4 fw-bold p-3 m-1">${WORD[i]}</div>`);
            }  
        }
}




    
    const newGame = () => {
        location.reload();
    };

