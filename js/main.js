"use strict";

/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
    body.classList.toggle("is-active");
});

const navLinks = document.querySelectorAll(".l_header-nav_list");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
    });
});

//英語の単語リストを取得するAPIのURL
// const WORDS_API_URL = 'https://random-word-api.herokuapp.com/word?number=1';

// async function getRandomWord() {
//   try {
//     const response = await fetch(WORDS_API_URL);
//     const data = await response.json();
//     return data[0];
//   } catch (error) {
//     console.error('Failed to fetch random word:', error);
//     return null;
//   }
// }

const words = [
  "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
  "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vanilla",
  "watermelon", "xigua", "yam", "zucchini", "apricot", "blackberry", "cantaloupe", "dragonfruit", "elderflower", "fig",
  "grapefruit", "huckleberry", "jackfruit", "kumquat", "lime", "mulberry", "nutmeg", "olive", "peach", "plum",
  "quinoa", "radish", "spinach", "tomato", "uva", "vinegar", "walnut", "ximenia", "yambean", "zebra",
  "airplane", "bicycle", "car", "drone", "elevator", "ferry", "glider", "helicopter", "icebreaker", "jet",
  "kayak", "limousine", "motorcycle", "narrowboat", "omnibus", "paraglider", "quadbike", "rocket", "scooter", "train",
  "unicycle", "van", "wagon", "yacht", "zeppelin", "artichoke", "broccoli", "carrot", "daikon", "eggplant",
  
  "aardvark", "alligator", "alpaca", "antelope", "ape", "armadillo", "baboon", "badger", "bat", "bear",
  "beaver", "bison", "boar", "buffalo", "butterfly", "camel", "capybara", "caribou", "cat", "caterpillar",
  "cattle", "chameleon", "cheetah", "chimpanzee", "chinchilla", "chipmunk", "cougar", "coyote", "crocodile", "crow",
  "deer", "dingo", "dog", "dolphin", "donkey", "dormouse", "elephant", "elk", "emu", "falcon",
  "ferret", "fish", "fox", "frog", "gazelle", "gerbil", "giraffe", "goat", "goose", "gorilla",
  "grasshopper", "guinea pig", "hamster", "hare", "hedgehog", "hippopotamus", "horse", "hummingbird", "hyena", "ibex",
  "iguana", "jackal", "jaguar", "jellyfish", "kangaroo", "koala", "komodo dragon", "lemur", "leopard", "lion",
  "llama", "lobster", "lynx", "manatee", "marten", "meerkat", "mink", "mole", "mongoose", "monkey",
  "moose", "mouse", "mule", "narwhal", "newt", "octopus", "okapi", "opossum", "orangutan", "oryx",
  "ostrich", "otter", "owl", "ox", "panda", "panther", "parrot", "peacock", "pelican", "penguin",
  "pig", "pigeon", "polar bear", "porcupine", "possum", "puma", "quail", "rabbit", "raccoon", "rat",
  "raven", "reindeer", "rhinoceros", "salamander", "seal", "shark", "sheep", "skunk", "sloth", "snail",
  "snake", "sparrow", "spider", "squirrel", "swan", "tiger", "toad", "tortoise", "toucan", "turkey",
  "turtle", "viper", "vole", "vulture", "wallaby", "walrus", "warthog", "weasel", "whale", "wolf",
  "wombat", "woodpecker", "yak", "zebra",

  "tokyo", "delhi", "shanghai", "sao paulo", "mumbai", "mexico city", "beijing", "osaka", "cairo", "new york",
  "dhaka", "karachi", "buenos aires", "kolkata", "istanbul", "chongqing", "lagos", "manila", "rio de janeiro", "guangzhou",
  "los angeles", "moscow", "shenzhen", "lahore", "bangalore", "paris", "bogota", "jakarta", "chennai", "lima",
  "bangkok", "seoul", "nagoya", "hyderabad", "london", "tehran", "chicago", "chengdu", "nanjing", "wuhan",
  "ho chi minh city", "luanda", "ahmedabad", "kuala lumpur", "xian", "hong kong", "dongguan", "hangzhou", "fuzhou", "riyadh",
  "shijiazhuang", "santiago", "surat", "madrid", "suzhou", "pune", "harbin", "houston", "dallas", "toronto",
  "miami", "singapore", "philadelphia", "atlanta", "fukuoka", "khartoum", "barcelona", "johannesburg", "saint petersburg", "qingdao",
  "dalian", "washington", "yangon", "alexandria", "jinan", "guadalajara", "boston", "melbourne", "taipei", "chattogram",
  "kunming", "rome", "busan", "cape town", "brasília", "hanoi", "ankara", "monterrey", "recife", "kabul",

  "run", "eat", "sleep", "jump", "sing", "dance", "walk", "read", "write", "draw",
  "swim", "climb", "play", "talk", "laugh", "cry", "fly", "drive", "cook", "clean",
  "study", "work", "rest", "teach", "learn", "surf", "skip", "shout", "whisper", "chat",
  "jog", "cycle", "meditate", "paint", "sketch", "design", "photograph", "code", "build", "compose",
  "hammer", "sew", "knit", "weave", "plan", "imagine", "daydream", "create", "discover", "explore",
  "investigate", "solve", "fix", "repair", "assemble", "play", "perform", "act", "direct", "edit",
  "decorate", "plant", "grow", "harvest", "bake", "brew", "concoct", "mix", "stir", "sculpt",
  "carve", "mould", "fire", "roast", "toast", "fry", "saute", "grill", "barbecue", "steam",
  "boil", "freeze", "chill", "melt", "cool", "heat", "ignite", "extinguish", "ignite", "dance",
  "skate", "ski", "surf", "slide", "swing", "juggle", "balance", "meditate", "yoga", "exercise",

  "red", "orange", "yellow", "green", "blue", "indigo", "violet", "cyan", "magenta", "purple",
  "pink", "turquoise", "brown", "black", "white", "gray", "silver", "gold", "bronze", "beige",
  "ivory", "maroon", "teal", "navy", "olive", "lime", "peach", "coral", "salmon", "khaki",
  "azure", "lavender", "plum", "chartreuse", "mauve", "sienna", "tan", "auburn", "sepia", "cerulean",
  "crimson", "vermilion", "emerald", "ruby", "topaz", "amethyst", "sapphire", "opal", "pearl", "jade",
  "aquamarine", "peridot", "onyx", "ruby", "sunset", "sky", "seafoam", "neon", "pastel", "glitter",
  "metallic", "matte", "glossy", "shiny", "dull", "faded", "muted", "bright", "dark", "light",
  "vivid", "soft", "deep", "pale", "rich", "warm", "cool", "icy", "lush", "earthy",
  "natural", "primary", "secondary", "tertiary", "complementary", "analogous", "monochromatic", "contrast", "harmony", "gradient",

  "rain", "snow", "clouds", "sunshine", "wind", "fog", "hail", "storm", "thunder", "lightning",
  "rainbow", "tornado", "blizzard", "drizzle", "sleet", "hurricane", "typhoon", "cyclone", "monsoon", "dust storm",
  "heatwave", "coldwave", "dew", "frost", "smog", "northern lights", "solar flare", "ice storm", "heat lightning", "mudslide",
  "avalanche", "haze", "gale", "breeze", "squall", "downpour", "torrential rain", "freezing rain", "microburst", "haboob",
  "waterspout", "whiteout", "mist", "chance of showers", "sunny spells", "overcast", "clear skies", "partly cloudy", "scattered clouds", "broken clouds",
  "cumulus clouds", "cirrus clouds", "stratus clouds", "altocumulus clouds", "nimbostratus clouds", "cumulonimbus clouds", "mammatus clouds", "funnel cloud", "wall cloud", "shelf cloud",
  "virga", "mackerel sky", "contrail", "chemtrail", "streak lightning", "sheet lightning", "ball lightning", "dry thunderstorm", "wet thunderstorm", "supercell",
  "mesocyclone", "roll cloud", "willy-willy", "dust devil", "fire whirl", "vortex", "thermal", "delta breeze", "trade winds", "sea breeze",
  "polar vortex", "jet stream", "foehn wind", "katabatic wind", "land breeze", "night breeze", "anabatic wind", "lee wave", "mountain breeze", "nor'easter",

  "fennel", "garlic", "horseradish", "jicama", "kale", "lettuce", "mushroom", "onion", "pepper", "quandong",
  "rutabaga", "salsify", "turnip", "ugli", "vetch", "watercress", "xanadu", "yucca", "zucchini",
  "example", "random", "words", "typing", "game", "javascript", "coding", "keyboard", "practice", "developer",
  "programming", "html", "css", "web", "internet", "browser", "software", "hardware", "database", "application",
  "interface", "user", "experience", "design", "backend", "frontend", "server", "client", "protocol", "network",
  "security", "encryption", "decryption", "authentication", "authorization", "session", "cookie", "token", "api",
  "function", "variable", "constant", "loop", "condition", "array", "object", "string", "number", "boolean",
  "algorithm", "data", "structure", "performance", "optimization", "testing", "debugging", "deployment", "version",
  "control", "repository", "branch", "merge", "conflict", "resolve", "commit", "push", "pull", "fetch",
  "clone", "fork", "issue", "bug", "fix", "release", "update", "upgrade", "rollback", "patch",
  "feature", "enhancement", "refactor", "code", "review", "feedback", "sprint", "scrum", "kanban", "agile",
  "waterfall", "methodology", "project", "management", "team", "collaboration", "communication", "meeting", "deadline", "milestone"
];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

async function startGame() {
  
}

document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
  const wordDiv = document.getElementById("word");
  const output = document.getElementById('output');
  const resultDiv = document.getElementById("result");

  let currentWord = getRandomWord();
  wordDiv.textContent = currentWord;

  //ダブルタップズームを防ぐ
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('click', () => {
          const keyValue = key.textContent;
          if (keyValue === 'Delete') {
              output.value = output.value.slice(0, -1);
          } else if (keyValue === 'Space') {
              output.value += ' ';
          } else if (keyValue === 'Enter') {
              output.value += '\n';
          } else {
              output.value += keyValue;
          }

          const typedWord = output.value.trim();
          if (typedWord === currentWord.substring(0, typedWord.length)) {
            if (typedWord === currentWord) {
              resultDiv.textContent = "Correct!";
              resultDiv.style.color = "green";
              setTimeout(async function() {
                resultDiv.textContent = "Checking...";
                output.value = "";
                currentWord = getRandomWord();
                wordDiv.textContent = currentWord;
              }, 1000);
            } else {
              resultDiv.textContent = "Checking..."; // タイピング中はエラーメッセージをクリア
              resultDiv.style.color = "green";
            }
          } else {
            resultDiv.textContent = "Incorrect!";
            resultDiv.style.color = "red";
          }
      });
  });
});