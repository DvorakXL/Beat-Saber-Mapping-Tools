const fs = require('fs')
const INPUT = "ExpertStandard.dat"
const OUTPUT = "EasyStandard.dat"
let difficulty = JSON.parse(fs.readFileSync(INPUT))

//Bombs & Notes
const _notes = difficulty._notes
_notes.splice(0, _notes.length)

fs.writeFileSync(OUTPUT, JSON.stringify(difficulty, null, 0))