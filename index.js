const cron = require('node-cron');
const shell = require('shelljs');

cron.schedule('*/20 * * * *', () => {
    // each asterisk is minutes, hours, day of month, month, day of week
  console.log('Scheduler running...');
  if (shell.exec('node pingWebsite.js').code !== 0) {
    console.log('something went wrong...');
  }
});
