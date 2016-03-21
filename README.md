# MagicGlass

## About
A magic mirror display that shows current weather from [OpenWeatherMap] (http://openweathermap.org/), calendars in iCal .ics format (Google Calendars) and the latest sweet tweet from a selected Twitter account.

**NOTE: Currently intended to be ran within a browser that IGNORES CORs. For the latest Chrome build, see [here](https://productforums.google.com/forum/#!msg/chrome/QW6B_aq_QxY/5GIlidHcDAAJ) For the latest Firefox build, see [here](https://github.com/spenibus/cors-everywhere-firefox-addon) (Insert the custom name preference in about:config if you want the add-on to autostart) **

**NOTE: Currently intended to be ran within a 1920x1080 monitor that is PHYSICALLY rotated 90 deg**

## Getting Started

Download and install [Node.js] (https://nodejs.org/en/)

Inside the directory, run

```
npm install
```

Install [Grunt-CLI] (https://github.com/gruntjs/grunt-cli) from npm

```
npm install -g grunt-cli
```

### Building Dev

Inside the directory, run

```
grunt dev
```

### Building Prod

```
grunt prod
```

## Personalizing the App via Config File

After building your desired environment, modify the appropriate file in your build. After modifying, rebuild the environment via Grunt
```
/conf/conf.json
```

#### Weather

You'll need an API key from [OpenWeatherMap] (http://openweathermap.org/api)
and the location via OpenWeatherMap's [accepted API params] (http://openweathermap.org/current)

### Calendar

It's suggested to use Google Calendar. To grab the iCal URL, go to the Google Caldendar's Settings > Calendars > YOUR CALENDAR > Calendar Address : iCAL

### Twitter
Insert a valid Twitter username

## License
MIT

## Author
[Kenny Inthirath] (kenny.inthirath@gmail.com)

