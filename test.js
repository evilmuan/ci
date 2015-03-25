var fs          = require('fs')
var data        = JSON.parse(fs.read('emoji.json'))
var buildFailed = false
var passed      = function() { console.log("\x1B[92mPASSED\x1B[0m\n") }
var failed      = function() {
  console.log("\x1B[91mFAILED\x1B[0m\n")
  buildFailed = true
}

var mdfiles = fs.list('.').filter(function(filename) { return filename.match(/\.md$/) && filename !== 'README.md' })

mdfiles.forEach(function(filename) {
  var content = fs.read(filename).replace(/\s|<br>/gi, '')

  console.log("\nTEST: " + filename + "\n")
  var emoji = content.match(/\:\w+\:/g)

  //
  console.log("- Contains emoji codes & line breaks only")
  if( emoji.join('').length == content.length ) {
    passed()
  } else {
    failed()
  }

  //
  console.log("- Emoji codes are valid")
  var invalidemoji = emoji.filter(function(code){ return data.indexOf(code) < 0 })
  if( invalidemoji.length == 0 ) {
    passed()
  } else {
    console.log("  Invalid - " + invalidemoji.join(", "))
    failed()
  }
})

if(buildFailed) {
  console.log(":cry: \x1B[91mNo good, something failed.\x1B[0m :boom:\n")
  phantom.exit(buildFailed)
} else {
  console.log(":sparkles: \x1B[96mWho's awesome? You're awesome!\x1B[0m :+1:\n")
  phantom.exit()
}
