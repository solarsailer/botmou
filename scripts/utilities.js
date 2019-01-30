// Description:
//   Utility commands.

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const PROCESS_EXIT_ANSWERS = [
  'Goodbye, cruel world.',
  'Sayonara!',
  'Adios',
  'Au revoir.',
  'Bye',
  ':cry:',
  ':confounded:'
]

// --------------------------------------------------------------
// Exports.
// --------------------------------------------------------------

module.exports = robot => {
  robot.respond(/ping$/i, res => {
    res.reply('pong')
  })

  robot.respond(/echo (.*)$/i, res => {
    res.send(res.match[1])
  })

  robot.respond(/say (.*)$/i, res => {
    res.send(res.match[1])
  })

  robot.respond(/room$/i, res => {
    res.reply(res.message.room)
  })

  robot.respond(/channel$/i, res => {
    res.reply(res.match[1])
  })

  robot.respond(/(die|stop|kill)$/i, res => {
    res.send(res.random(PROCESS_EXIT_ANSWERS))
    setTimeout(() => process.exit(0), 1000)
  })
}
