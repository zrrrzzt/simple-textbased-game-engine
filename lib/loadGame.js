'use strict'

function loadGame (gameFile) {
  var prompt = require('prompt')
  var fs = require('fs')
  var game = JSON.parse(fs.readFileSync(gameFile))
  prompt.start()
  console.log(game.name.red)
  console.log(game.description.join('\n').green)
  if (game.action === 'end') {
    process.exit(0)
  } else {
    game.alternatives.forEach(function (item, number) {
      console.log('[ ' + number + ' ]: ' + item.description.magenta)
    })

    prompt.get({
      properties: {
        choice: {
          description: 'Choose wisely'.rainbow
        }
      }
    }, function (err, result) {
      if (err) {
        throw err
      } else {
        var nextGame = game.alternatives[parseInt(result.choice, 10)]
        loadGame(nextGame.next)
      }
    })
  }
}

module.exports = loadGame
