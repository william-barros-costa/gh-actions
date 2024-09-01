// For this to run with success, locally, we will need to install @actions/core @actions/github @actions/exec. They are present in the actions/toolkit from github actions
const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

core.notice('This is the main.js file')

// Get input
const input_name = core.input('sample_input', {required: true})
core.notice(`Sample Input is: ${input_name}`)

// Run bash command
exec.exec("echo 'This is an exec command'")

// Get github action name
core.notice(github.context.action)
