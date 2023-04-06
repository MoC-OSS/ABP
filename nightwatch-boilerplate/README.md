
# nightwatch-boilerplate
### boilerplate for nightwatch.js with browsers

## Install Nightwatch Boilerplate

First you need to install Node.js with NVM (https://nodejs.org/en/)

install NVM https://github.com/nvm-sh/nvm#installing-and-updating

After install NVM needs to install Node.js
```
nvm i 16
```
Then...


```
$ git clone 
$ cd nightwatch-boilerplate
$ npm install
```
## Run Tests
Run test file with specific browser
```
npx nightwatch tests/sample.js --env chrome
```

Run all tests with specific browser
```
npm run test-chrome
or
npx nightwatch tests --env chrome   
```

Run all tests with several browsers
```
npm run test
or
npx nightwatch tests --env chrome,safari   
```

### If You need to install browser drivers:

https://nightwatchjs.org/guide/overview/what-is-webdriver.html
https://nightwatchjs.org/v09/gettingstarted/#browser-drivers-setup


## Reports
Reports will be created after first run test.
```
nightwatch-boilerplate/tests_output/nightwatch-html-report/index.html
```

# Configuration
```
./nightwatch.conf.js
```
