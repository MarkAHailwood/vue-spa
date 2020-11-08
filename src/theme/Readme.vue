<template>
<div class="content">
<div>
  <div><strong>Project info</strong></div>

<p>
  NPM used for package management,
  In package.json - depencies contains all while in development and production devDepedencies has all packages required while in development.
  express.js used as web server as can be easily used in development and in production
  start script built into ackages.json so just npm start to run server (port 3000)
</p>

<p>
  This app uses modules to import and use libraries. Not all browsers support modules as per modern js, so we use a module bundler called webpack. Also good for minifying other build processes. Leads to nice small package size for use by browser
</p>

<p>
  Babel used as a compiler so ecma compatible on all browsers
</p>

<p>
  Vue scroll behvaiours set so page restores to y axis and page upon reload
</p>

<p>
  Modules loaded asyncronously so that lazy loading is capable - means not a monolithic js file sent to the browswer but rather one file for each component
</p>

<p>
  Used axios for web api rather than native XMLHttpRequest
</p>

<p>
  Included eslint as linter to catch js mistakes. Turned it off for vue files as linter for ; conflicts with auto complete on vs code

<p>
  When downloading app for first time kindly run npm install to find and download all dependencies into the node modules folder
</p>

<p>
  Karma was used as my test runner - it opens browser specified, tests, sends back results. Used a headless broswer (PhantomJS as lightwieght and very fast). Used mocha as the testing framework. Chai used as asertion library to compare test to expected results. Sinon used for mocks. Could also have used Jasmine and Jest which conain the full package.
  run npm test in git bash to test - note this needs tuning, not receiving the object correctly so tests are failing. Infrastructure exists however functionality needs improvement.
</p>
</div>
</div>
</template>
