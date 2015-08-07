'use strict'

function generateQuestions (page) {
  var questions = []

  page.alternatives.forEach(function (alternative) {
    questions.push({
      name: alternative.description,
      value: alternative.next
    })
  })

  return {
    type: 'list',
    name: 'next',
    message: page.alternativesHeader || ' ',
    choices: questions
  }
}


function startStory (fileName) {

  var inquirer = require('inquirer')
  var clear = require('cli-clear')
  var fs = require('fs')


  function loadPage (pageFile) {
    var page = JSON.parse(fs.readFileSync(pageFile))
    var questions = generateQuestions(page)
    clear()
    console.log(page.name)
    console.log(page.description.join('\n'))
    console.log('\n')

    if (page.action === 'end') {
      process.exit(0)
    }

    inquirer.prompt(questions, function (answers) {
      loadPage(answers.next);
    })

  }

  loadPage(fileName)

}

module.exports = startStory
