Ruby Javascript (rjs)
=
The javascript methodes you always wished you could have.
about
-
We all love ruby. The main reason we love ruby is that it's so easy to write code at.
This project aims to bring the joy of Ruby into Javascript language. How? <br>
Imagin doing that:<br>
`var msg = "hellow world";`<br>
`msg.titlize // => "Hello World"` <br>
`msg.reverse // =>"dlrow wolleh"` <br>

Now imaging that:<br>
`1..day.fromNow // => return a date object contains the next day` <br>
`3.5.hours.ago // => return a date object of 3.5 hours ago`

- No more extra `()` 
- Clean and simple
- Isn't it cool?<br>

Installing
-
- Include jQuery in your project first: <br>
`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>`

- in order to install just download the `rjs.js` file (or the minified version) and add it to your file:
`<script type="text/javascript" src="path/to/rjs.js"></script>`

- make sure you add this file <b>before</b> calling to any of it's methodes. 

Methodes
-
###extendObject
In order to add your own methode you can call `extendObject(obj, funcName, func, attr)`. This function gets sevral params:

- `obj` - The class you wish to extends (`Number`/ `String`...)
- `funcName` - The name of your new function.
- `attr` - (optional) //TODO add some explanation 

For example:<br>
`extendObject(String, 'sayHello',function(){ return "Hello " + this + "!"; });`

After you define this new methode you can call it from anywhare in your code:<br>
`"John".sayHello // => "Hello John!"`
###aliasFunc
You can also define an alias to your methodes using `aliasFunc(obj, func, alias)`:

- `obj` - The class you wish to use (`Number`/ `String`...)
- `func` - The existing function you wish to alias.
- `alias` - The alias you want.

For example you can do something like that `aliasFunc(String, 'sayHello', 'greeting')` and then:<br>
`"John".greeting // => "Hello John"`

Make Your Life Easy Functions
-
###string
- `titlize` - returns a title string (uppercase letters).
- `reverse` - reverse string.
- `chars` - returns string's char array. 
- `downcase` - returns downcase string.
- `upcase` - returns uppercase string.
- `isEmpty` - returns true if string has any char, false otherwise.

###number
you can use any of the following after a number:<br>
`seconds`, `minutes`, `hours`, `days`, `weeks`,`years`<br>
You can choose both plural and singular worlds. After choosing the right time you can use: `ago` or `from now`.<br>
<b>Important</b> - f you specify a round number (integer) make sure you use double dots `..` after the number.<br>
Examples:

- `1..day.from_now`
- `2.3.weeks.ago`



MIT License
-
Copyright (C) 2012 by Sagiv Ofek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. 