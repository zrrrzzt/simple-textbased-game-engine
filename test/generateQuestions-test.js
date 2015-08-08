'use strict'

var fs = require('fs')
var tap = require('tap')
var generateQuestions = require('../lib/generateQuestions')
var page = JSON.parse(fs.readFileSync('test/data/index.json'))
var questions = generateQuestions(page)

tap.equal(questions.type, 'list', 'questions type should be list')

tap.equal(questions.name, 'next', 'questions name should be next')
