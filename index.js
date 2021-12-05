var CronJob = require("cron").CronJob;
var { update } = require("./update.js");

var job = new CronJob(
  "00 00 00 * * 0-6", // Chạy Jobs vào 23h30 hằng đêm,
  function () {
    console.log(new Date());
    update();
  },
  null /* This function is executed when the job stops */,
  true /* Start the job right now */,
  "Asia/Ho_Chi_Minh"
);

job.start();
