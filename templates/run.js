var escape = require('escape-latex')
var quotes = require('../replace-quotes')

var preprocess = function(input) {
  return escape(quotes(input)) }

var blankLine = '{\\leavevmode \\vbox{\\hrule width5\\parindent}}'

module.exports = function run(element, numberStyle, conspicuous) {
  if (typeof element === 'string') {
    if (conspicuous) {
      return '\\textbf{\\textit{' + preprocess(element) + '}}' }
    else {
      return preprocess(element) } }
  else if (element.hasOwnProperty('use')) {
    return preprocess(element.use) }
  else if (element.hasOwnProperty('definition')) {
    return '\\textit{``' + element.definition + '\'\'}' }
  else if (element.hasOwnProperty('blank')) {
    if (element.blank === undefined) {
      return blankLine }
    else {
      return preprocess(element.blank) } }
  else if (element.hasOwnProperty('heading')) {
    var numbering = element.numbering
    var heading = element.heading
    if (
      element.hasOwnProperty('broken') ||
      element.hasOwnProperty('ambiguous') )
    { return (
        blankLine +
        ' (reference to ``' + preprocess(heading) + '\'\')' ) }
    else {
      if (conspicuous) {
        return (
          '\\textbf{\\textit{' +
          preprocess('Section ' + numberStyle(numbering) + ' (' +
            heading + ')') +
          '}}' ) }
      else {
        return preprocess('Section ' + numberStyle(numbering) + ' (' +
          heading + ')') } } }
  else {
    throw new Error('Invalid type: ' + JSON.stringify(element)) } }
