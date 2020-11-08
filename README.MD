Build instructions:
clone app to c://vue-spa
run in git bash (or other similar):
-npm build
-npm start
open web broswer to localhost:3000 or as set

Notes:
The brief stated to use a high quality modern web app. I used vs code and built the framework, rather than an out-the-box angular or similar build on visual studio, as given the small nature of the project a very small production package size can be achieved through close control of the framework and application and as a result maximize performance drematically, versus a generic build on visual studio.

Ultimately, i chose that as the selection criteria (smallest, fastest, lightest weight rather than largest but less control) when deciding on a css library, package manager, web server, module bundler for ensured cross-platform compatibility, web api, and any others.

In the end I started development on Saturday and ended on Sunday evening. With a day more I would have had the automated and lightweight testing complete, the router.js file would be properly configured so as to allow convertion into a production build using webpack.js.

Kindly see below for further project information:

Project info
NPM used for package management,
In package.json - depencies contains all while in development and production devDepedencies has all packages required while in development.
express.js used as web server as can be easily used in development and in production
start script built into ackages.json so just npm start to run server (port 1895)
this app uses modules to import and use libraries. Not all browsers support modules as per modern js, so we use a module bundler called webpack. Also good for minifying other build processes. Leads to nice small package size for use by browser

Babel used as a compiler so ecma compatible on all browsers

vue scroll behvaiours set so page restores to y axis and page upon reload

modules loaded asyncronously so that lazy loading is capable - means not a monolithic js file sent to the browswer but rather one file for each component

used axios for web api rather than native XMLHttpRequest

included eslint as linter to catch js mistakes. Turned it off for vue files as linter for ; conflicts with auto complete on vs code

When downloading app for first time kindly run npm install to find and download all dependencies into the node modules folder
