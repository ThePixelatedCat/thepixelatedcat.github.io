// Store a reference to the last listened music field
const lastListened = document.querySelector("samp[id='lastlistened'")
// Store a reference to the last played steam game field
const lastPlayed = document.querySelector("samp[id='lastplayed'")
const steamFetchURL = 'https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=41DF567773130D0FBEE3ED9515CA24AD&steamid=76561198397546598&count=1'

fetch(steamFetchURL)
    .then(response => response.json())
    .then(json => json.parse())
    .then(parsedJson => lastPlayed.textContent = parsedJson.games[0].name)
    .catch(err => {console.error(err); lastPlayed.textContent = 'Failed to fetch last played game :('})