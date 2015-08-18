Render Common Forms in LaTeX.

```javascript
var latex = require('commonform-latex');

var form = {
  content: [
    { heading: 'IP',
      form: {
        content: ['An IP clause'] } },
    { heading: 'Survival',
      form: {
        content: [{reference: 'IP'}] } } ] };

var output = [
  '\\noindent%',
  '\\hskip 1\\parindent%',
  '1. %',
  '\\textbf{IP}. %',
  'An IP clause',
  '',
  '\\noindent%',
  '\\hskip 1\\parindent%',
  '2. %',
  '\\textbf{Survival}. %',
  'Section 1 (IP)'
].join('\n');

latex(form, {}); // => output
```
