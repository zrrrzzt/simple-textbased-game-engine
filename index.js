const inquirer = require('inquirer')
const clear = require('cli-clear')
const { readFileSync } = require('fs')
const generateQuestions = require('./lib/generateQuestions')

function startStory (fileName) {
  function loadPage (pageFile) {
    const page = JSON.parse(readFileSync(pageFile))
    const questions = generateQuestions(page)
    clear()
    console.log(page.name)
    console.log(page.description.join('\n'))
    console.log('\n')

    if (page.action === 'end') {
      process.exit(0)
    }

    inquirer.prompt(questions).then(answers => {
      loadPage(answers.next)
    })
  }

  loadPage(fileName)
}

module.exports = startStory
