const fs = require('fs')
const INPUT = "EasyStandard.dat"
const OUTPUT = "EasyStandardBombs.dat"
let difficulty = JSON.parse(fs.readFileSync(INPUT))

//Walls
const _obstacles = difficulty._obstacles

//Bombs & Notes
const _notes = difficulty._notes

_notes.splice(0, _notes.length)

for (let wall = 0; wall < _obstacles.length; wall++) {
  _notes.push(
    {
      "_time": _obstacles[wall]._time,
      "_linewall":0,
      "_lineLayer":0,
      "_type":3,
      "_cutDirection":0
    }
  )
}

_obstacles.splice(0, _obstacles.length)

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0))