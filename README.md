# MagicGlass

#### About
A magic mirror display that shows current weather from [OpenWeatherMap] (http://openweathermap.org/), calendars in iCal .ics format (Google Calendars) and the latest sweet tweet from a selected Twitter account.

**NOTE: Currently intended to be ran within a browser that IGNORES CORs.**
**NOTE: Currently intended to be ran within a 1920x1080 monitor that is PHYSICALLY rotated 90 deg**

#### Getting Started

Download and install [nodejs] (https://nodejs.org/en/)

Inside the directory, run

```
npm install
```

Install [Grunt-CLI] (https://github.com/gruntjs/grunt-cli) from npm

```
npm install -g grunt-cli
```

#### Building Dev

Inside the directory, run

```
grunt dev
```

#### Building Prod

```
grunt prod
```

#### Personalizing the App via Config File

After building your desired environment, modify the appropiate file in your build's
```
/conf/conf.json
```

For the weather, you'll need 

an API key from [OpenWeatherMap] (http://openweathermap.org/api)
and
the location via OpenWeatherMap's [accepted inputs] (http://openweathermap.org/current)

For the calendar, it's suggested to use Google Calendar. To grab the iCal URL, go to the Google Caldendar's Settings > Calendars > YOUR CALENDAR > Calendar Address : iCAL

For Twitter, insert a valid Twitter username


### License
MIT

### Author
[Kenny Inthirath]

