const os = require('os');

function logUptime() {
  const uptimeInSeconds = os.uptime();  

  const days = Math.floor(uptimeInSeconds / (24 * 3600));
  const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);


  console.log(`System Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
}

logUptime();