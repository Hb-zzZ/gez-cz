#!/usr/bin/env node
const cmd = require('commander')
const PKG = require('../package.json')

const { spawn } = require('child_process')

cmd.version(PKG.version)
cmd.name('gez-cz')

cmd.parse(process.argv)

const gitCz = () => {
  spawn('git cz', {
    shell: true,
    stdio: 'inherit'
  })
}

// the above cmd is not executed
if (process.argv.length) {
  gitCz()
}
