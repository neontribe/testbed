TestBed
=======

Nothing more than an example integration of funcunit, jasmine and testee

Requirements:

    * Node.js
    * phantomjs
        * `sudo npm install -g phantomjs`
    * bower
        * `sudo npm install -g bower`

With those in place enter the testbed directory and do:

    `npm install && bower install`

Now you can run the example test with:

    `npm test`

NB `npm test` is simply a shortcut to `./node_modules/testee/bin/testee --browser phantom runner.html`

You can avoid having to path commands to testee by installing it globally with `npm install -g testee`

See Also
--------

http://pivotal.github.io/jasmine/
http://daffl.github.io/testee.js/