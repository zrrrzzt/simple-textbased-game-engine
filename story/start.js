'use strict'

process.chdir(__dirname)
var storyFile = 'index.json'
var loadStory = require('../index')

loadStory(storyFile)
