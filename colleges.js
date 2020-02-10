const fs = require('fs')

let colleges = [];

fs.readFile('colleges.csv', {
    encoding: 'utf-8'
}, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    let lines = data.split('\r\n');
    lines.shift();
    for (let line of lines) {
        let attributes = line.split(',');
        let college = new College(  attributes[0],  attributes[1],  attributes[2],  attributes[3],  attributes[4], 
                                    attributes[5],  attributes[6],  attributes[7],  attributes[8],  attributes[9], 
                                    attributes[10], attributes[11], attributes[12], attributes[13], attributes[14], 
                                    attributes[15], attributes[16], attributes[17], attributes[18], attributes[19], 
                                    attributes[20], attributes[21], attributes[22], attributes[23], attributes[24], 
                                    attributes[25], attributes[26], attributes[27], attributes[28], attributes[29]);
        colleges.push(college);
    }
    console.log(colleges.length);
    let cnt = colleges.reduce((tot, c) => tot + (c.state == 'UT' ? c.undergrads : 0), 0);
    console.table(cnt);

    let list = colleges.filter(c => c.state == 'UT');
    const doubled = colleges.reduce((total, c) => {
        if ( c.state == 'UT')
            total.push({name:c.institution, undergrads:c.undergrads});
        return total;
      }, []);  
        console.table(doubled);

})

// var fs = require('fs'),
//     path = require('path'),    
//     filePath = path.join(__dirname, 'start.html');

// fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
//     if (!err) {
//         console.log('received data: ' + data);
//         response.writeHead(200, {'Content-Type': 'text/html'});
//         response.write(data);
//         response.end();
//     } else {
//         console.log(err);
//     }
// });

class College {
    constructor(Id, Institution, City, State, PublicPrivate, CarnegieClassification, AdmissionRate, SATAverage, Undergrads, RaceWhite, RaceBlack, RaceHispanic, RaceAsian, RaceNativeAm, RaceHawaiian, Race2OrMore, NonResAliens, RaceUnknown, PctPartTime, NetPRicePublic, NetPRicePrivate, AvgAttendanceCost, NetTuition, DollarsPerStudent, PctFTFaculty, PctPellGrants, CompletionRate, Pct1stTime, FourYrRetention, PctFedLoad) {
        this.id = +Id;
        this.institution = Institution;
        this.city = City;
        this.state = State;
        this.publicPrivate = +PublicPrivate;
        this.carnegieClassification = +CarnegieClassification;
        this.admissionRate = +AdmissionRate;
        this.SATAverage = +SATAverage;
        this.undergrads = +Undergrads;
        this.raceWhite = +RaceWhite;
        this.raceBlack = +RaceBlack;
        this.raceHispanic = +RaceHispanic;
        this.raceAsian = +RaceAsian;
        this.raceNativeAm = +RaceNativeAm;
        this.raceHawaiian = +RaceHawaiian;
        this.race2OrMore = +Race2OrMore;
        this.nonResAliens = +NonResAliens;
        this.raceUnknown = +RaceUnknown;
        this.pctPartTime = +PctPartTime;
        this.netPRicePublic = +NetPRicePublic;
        this.netPRicePrivate = +NetPRicePrivate;
        this.avgAttendanceCost = +AvgAttendanceCost;
        this.netTuition = +NetTuition;
        this.dollarsPerStudent = +DollarsPerStudent;
        this.pctFTFaculty = +PctFTFaculty;
        this.pctPellGrants = +PctPellGrants;
        this.completionRate = +CompletionRate;
        this.pct1stTime = +Pct1stTime;
        this.fourYrRetention = +FourYrRetention;
        this.pctFedLoad = +PctFedLoad;
    }
}