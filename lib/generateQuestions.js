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

module.exports = generateQuestions
