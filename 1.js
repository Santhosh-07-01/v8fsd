const os = require('os');


function trackMemoryUsage() {
  const totalMemory = os.totalmem();  
  const freeMemory = os.freemem();    


  const freeMemoryPercentage = (freeMemory / totalMemory) * 100;


  console.log(`Total Memory: ${(totalMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
  console.log(`Free Memory: ${(freeMemory / (1024 * 1024 * 1024)).toFixed(2)} GB`);
  console.log(`Free Memory Percentage: ${freeMemoryPercentage.toFixed(2)}%`);
}


setInterval(trackMemoryUsage, 5000);



