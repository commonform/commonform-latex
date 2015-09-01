Render Common Forms in LaTeX.

```javascript
var latex = require('commonform-latex')
var assert = require('assert')

var form = {
  content: [
    { heading: 'IP',
      form: {
        content: [ 'An IP clause' ] } },
    { heading: 'Survival',
      form: {
        content: [ { reference: 'IP' } ] } } ] }

var output = [
  '\\noindent%',
  '\\hspace{1\\parindent}%',
  '1.\\ %',
  '\\textbf{IP}. %',
  'An IP clause',
  '',
  '\\noindent%',
  '\\hspace{1\\parindent}%',
  '2.\\ %',
  '\\textbf{Survival}. %',
  'Section 1 (IP)' ]
.join('\n')

assert.deepEqual(latex(form, {}), output)
```
