<template>
<div class="content">
  <div>
    Build instructions:

      clone app to c://vue-spa
      run in git bash (or other similar):
      -npm build
      -npm start
      open web broswer to localhost:3000 or as set

    Notes:
      The brief stated to create a high quality modern web app. I used vs code and built the framework, rather than an out-the-box angular or similar build on visual studio, as given the small nature of the project a very small production package size can be achieved through close control of the framework and application and as a result maximize performance dramatically, versus a generic build on visual studio. Also there was no need for backend so I presumed achieving brilliant performance and a very small package size was possible.

      Ultimately, i chose that as the selection criteria (smallest, fastest, lightest weight rather than largest but less control) when deciding on a css library, package manager, web server, module bundler for ensured cross-platform compatibility, web api, and any others.

      In the end I started development on Saturday and ended on Sunday evening. With a day more I would have had the automated and lightweight testing complete, the router.js file would be properly configured so as to allow convertion into a production build using webpack.js.

      Kindly see below for further project information:

      Project info
      NPM used for package management:
      In package.json - depencies contains all dependencies/packages required while in development and in production, devDepedencies contains all packages required while in development.
      express.js was chosen and used as a web server as it can be easily used in development and in production, also extremely light weight.

      An 'npm start' script has been built into packages.json so only has to use the command npm start to run server (set to port 3000 in server.js at line 35)

      This app uses modules to import and use libraries. Not all browsers support modules as per modern js, so we use a module bundler called webpack. Also good for minifying other build processes. Leads to nice small package size for use by browser

      Babel has been used as a compiler as i used ecma script javascript, this shall be compiled down to be compatible on all browsers.

      Vue scroll behvaiours has been set so page restores to y axis and page upon reload - happens often with Vue - this means the page reload is imperceptible.

      Modules are loaded asyncronously so that lazy loading is capable - means not a monolithic js file sent to the browswer but rather one file for each component - has made it extremely fast.

      I used axios for web api consumption rather than a native XMLHttpRequest, axios uses a promise for it's async api calls.

      I included eslint as a linter to catch js mistakes. Turned it off for vue files as linter for ; conflicts with auto complete on vs code in the \*.vue files.

      I took a risk and used Bulma for my css rather than Bootstrap (I usually use 3 for the col structuring. I did not notice a big performance or indeed difference and would likely revert to using Bootstrap3 or 4 for future developments).

      Lastly please note I have been using vue for a week, this build was an attempt to demostrate my ability to compose my own framework and use a modern JS library as we discussed in the interview. All my above choice were entirely performance based with special consideration for it being lightweight - and in the case of a web api to make async api calls.

    Requires finishing: Infrastructure exists however requires refactoring to allow for deployment - currently have an azure app service set up: https://mark-hailwood-geodesys.azurewebsites.net/. Using native javascript in a custom built framework makes for a challening build deploy - I have simply run out of time.

  </div>
</div>
</template>
