const cron = require('node-cron');
const shell = require('shelljs');

function runCron() {
  cron.schedule('*/20 * * * *', () => {
    // each asterisk is minutes, hours, day of month, month, day of week
    console.log('Scheduler running...');
    if (shell.exec('node pingWebsites.js').code !== 0) {
      console.log('something went wrong...');
    }
  });
}

module.exports = { runCron };
