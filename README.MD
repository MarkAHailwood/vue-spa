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
