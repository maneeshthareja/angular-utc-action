module.exports = function(config) {
    config.set({
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
  
      browsers: ['ChromeHeadless'],
  
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--headless',
            '--disable-gpu',
            '--no-sandbox',
            '--remote-debugging-port=9222'
          ]
        }
      },
  
      // Other Karma configuration settings...
    });
  };
  