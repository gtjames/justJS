"use strict";
let fs = require('fs');

module.exports = {
    readJobs: function () {
        let jobApps = [];                                   //  Array of jobs
        let data = fs.readFileSync('jobs.csv').toString();  //  read the jobs.csv file, convert to string
        let lines = data.split("\r\n");                     //  Convert to array of individual lines by splitting on CR LF

        let firstLine = true;                               //  we want to ignore the header line

        for (let line of lines) {
            if (firstLine) {                                //  if this is just the first line we want to skip it
                firstLine = false;                          //  we are now past line 1
                continue;                                   //  skip to next line
            }
            let fields = line.split(",");                   //  split the line into the individual job fields
            let job = new Job(fields);                      //  create a new Job record
            jobApps.push(job);                              //  save to the array of jobs
        }
        return jobApps;                                     //  return the list of jobs back to the calling app
    }
};

function Job(fields) {
    //  Job Search,Company,Salary,Application Date,City,Title,Category
    this.id         = fields[0];
    this.company    = fields[1];
    this.salary     = fields[2]*1;
    this.appliedOn  = fields[3];
    this.city       = fields[4];
    this.title      = fields[5];
    this.category   = fields[6];
}
