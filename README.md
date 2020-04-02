[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# simple-textbased-game-engine

Not excactly [Zork](https://en.wikipedia.org/wiki/Zork) but a simple way to create your own interactive stories.

## Installation

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/simple-textbased-game-engine.git
```

or just download the zipfile

cd into directory and install required dependecies with npm

```sh
$ npm install
```

## Usage

To start your story just run npm start.

```sh
$ npm start
```

This module comes with a short demo story.

To create your own story just add .json files in the story folder.

The startup file must be index.json the rest is up to you.

## Filedescription

The storyfiles are structured like this:


```javascript
{
  "name": "The great beginning",
  "description": [
    "You are so alone. You are very afraid.",
    "The room is completely dark"
  ],
  "action": "continue",
  "alternativesHeader": "What to do?",
  "alternatives": [
    {
      "description": "Turn on the light.",
      "next": "01.json"
    },
    {
      "description": "Scream for help.",
      "next": "02.json"
    },
    {
      "description": "Pray for a miracle",
      "next": "03.json"
    }
  ]
}
```

**name** The page title

**description** The page story. It's an array. Each element will be separated with a line-break ```\n```

**action** ```continue``` or ```end``` End will stop the program

**alternativesHeader** This is the header fot the alternatives... doh!

**alternatives** An array with alternatives. Each element needs **description** and **next** filepath for next story page

For an end page you do not need all elements.

```javascript
{
  "name": "The cake is a lie",
  "description": [
    "You are to damn smart.",
    "You win",
    "Game over"
  ],
  "action": "end",
  "alternatives": []
}
```

Go on. Have fun :-)

## License
[MIT](LICENSE)
