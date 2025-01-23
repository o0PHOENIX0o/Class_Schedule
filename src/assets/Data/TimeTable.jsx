const Schedule = {
  "Monday": [
    { 
      "course": "ICT 210/RS/ECR110" ,
      "Time": "9:00 AM - 11:00 AM"
    },
    { 
      "course": "ICT 202/RRK/ECR110" ,
      "Time": "11:00 AM - 1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    {
      "A": { 
        "course": "ICT 256/RA/ETL503",
        "Time": "1:30 PM - 3:30 PM"
      },
      "B": { 
        "course": "ICT 254/AC/ETL506",
        "Time": "1:30 PM - 3:30 PM"
      }
    },
    { 
      "course": "ICT 212/MBK/ECR215",
      "Time": "3:30 PM - 5:30 PM"
    }
  ],
  "Tuesday": [
    { 
      "course": "ICT 210/RS/ECR110" ,
      "Time": "11:00 AM - 12:00 PM"
    },
    { 
      "course": "ICT 202/RRK/ECR110" ,
      "Time": "12:00 PM - 1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    {
      "A": { 
        "course": "ICT 252/MBK/ETL503",
        "Time": "1:30 PM - 3:30 PM"
      },
      "B": { 
        "course": "ICT 260/RS/ETL219",
        "Time": "1:30 PM - 3:30 PM"
      }
    },
    {
      "A": { 
        "course": "ICT 260/RS/ETL219",
        "Time": "3:30 PM - 5:30 PM"
      },
      "B": { 
        "course": "ICT 252/MBK/ETL503",
        "Time": "3:30 PM - 5:30 PM"
      }
    }
  ],
  "Wednesday": [
    {
      "A": { 
        "course": "ICT 258/RRK/ETL410",
        "Time": "11:00 AM - 1:00 PM"
      },
      "B": { 
        "course": "ICT 254/RS/ETL506",
        "Time": "11:00 AM - 1:00 PM"
      }
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    { 
      "course": "MS214/AN/ECR215" ,
      "Time": "1:30 PM - 3:30 PM"
    },
    {
      "course": "ICT 208/AH/ECR215",
      "Time": "3:30 PM - 5:30 PM"
    },
  ],
  "Thursday": [
    { 
      "course": "ICT 208/AH/ECR110" ,
      "Time": "9:00 AM - 11:00 AM"
    },
    { 
      "course": "ICT 204/PC/ECR110" ,
      "Time": "11:00 AM - 1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    { 
      "course": "ICT 206/AC/ECR215" ,
      "Time": "1:30 PM - 3:30 PM"
    },
    { 
      "course": "ICT 212/MBK/ECR215",
      "Time": "3:30 PM - 5:30 PM"
    }
  ],
  "Friday": [

    {
      "A": { 
        "course": "ICT 256/PC/ETL503",
        "Time": "11:00 AM - 1:00 PM"
      },
      "B": { 
        "course": "ICT 258/RRK/ETL410",
        "Time": "11:00 AM - 1:00 PM"
      }
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    { 
      "course": "ICT 206/AC/ECR215" ,
      "Time": "1:30 PM - 3:30 PM"
    },
    { 
      "course": "ICT 204/PC/ECR215",
      "Time": "3:30 PM - 5:30 PM"
    }
  ]
}


const Faculty = {
  "PC": "Prof. Pravin Chandra",
  "RRK": "Prof. R. Rama Kishore",
  "MBK": "Prof. M. Balakrishna",
  "AC": "Dr. Anuradha Chug",
  "RS": "Dr. Ruchi Sehrawat",
  "RA": "Dr. Richa Aggarwal",
  "AH": "Dr. Arshi Husain",
  "AN": "Dr. Ashima Negi"
};

const courses = {
  // Theory
  "ICT 202": {
    name: "Computer Graphics",
    shortName: "CG",
    credits: 3
  },
  "ICT 204": {
    name: "Computational Methods",
    shortName: "CM",
    credits: 4
  },
  "ICT 206": {
    name: "Design and Analysis of Algorithms",
    shortName: "DAA",
    credits: 4
  },
  "ICT 208": {
    name: "Theory of Computation",
    shortName: "TOC",
    credits: 4
  },
  "ICT 210": {
    name: "Software Engineering",
    shortName: "SE",
    credits: 3
  },
  "ICT 212": {
    name: "Computer Networks",
    shortName: "CN",
    credits: 4
  },
  "MS214": {
    name: "Accountancy for Engineers",
    shortName: "AE",
    credits: 2
  },
  


  // Practical
  "ICT 252": {
    name: "Computer Networks Lab",
    shortName: "CN",
    credits: 1
  },
  "ICT 254": {
    name: "Design and Analysis of Algorithms Lab",
    shortName: "DAA",
    credits: 1
  },
  "ICT 256": {
    name: "Computational Methods Lab",
    shortName: "CM",
    credits: 1
  },
  "ICT 258": {
    name: "Computer Graphics Lab",
    shortName: "CG",
    credits: 1
  },
  "ICT 260": {
    name: "Software Engineering Lab",
    shortName: "SE",
    credits: 1
  }
};


let ScheduleData = {};
for(const ele in Schedule){
  ScheduleData[ele] = Schedule[ele].map(items =>{
    if(items.course){
      let [Time, end] = items.Time.split("-");
      let [code, prof, room] = items.course.split("/");
      return {
        course: code + " / "+ room,
        name: courses[code].name,
        shortName: courses[code].shortName,
        Faculty : Faculty[prof],
        start: Time,
        end: end
      };
    }
    
    if(items.name == "Break"){
      let [Time, end] = items.Time.split("-");
      delete items.Time;
      return {...items, start: Time, end:end};      
    }

    if(items.A && items.B){

      let [startA, endA] = items.A.Time.split("-");
      let [startB, endB] = items.A.Time.split("-");
      let [codeA, profA, roomA] = items.A.course.split("/");
      let [codeB, profB, roomB] = items.B.course.split("/");

      const ObjA = {
        course: codeA + " / "+ roomA,
        name: courses[codeA].name,
        shortName: courses[codeA].shortName,
        Faculty : Faculty[profA],
        start: startA,
        end: endA
      };
      const ObjB = {
        course: codeB + " / "+ roomB,
        name: courses[codeB].name,
        shortName: courses[codeB].shortName,
        Faculty : Faculty[profB],
        start: startB,
        end: endB
      };

      return {
        A: ObjA,
        B: ObjB
      };
    }
  }); 
};

const DaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const GetSchedule = function (Group, dayIndex) {
  const day = DaysArray[dayIndex];
  // console.log(day);
  if (day === "Sunday" || day === "Saturday")
    return [];

  let newData = [];
  // console.log("day schedule: ", ScheduleData[day]);
  ScheduleData[day].forEach(element => {
    if (element.A || element.B) {
      let labData = element[Group];
      // console.log("labData : ", labData);
      newData.push({
        ...labData
      });
    } else {
      newData.push(element);
    }
  });

  // console.log("---> " ,newData);

  return newData || [];
}

const getNextClass = function (Group, current, dayIndex) {
  let hour = new Date().getHours();
  let day = DaysArray[dayIndex];

  if (hour > 18 || hour === 0) {
    if (day === "Friday") {
      day = "Monday";
    } else {
      day = DaysArray[(dayIndex + 1) % 7];
      if (day === "Saturday") day = "Monday";
      if (day === "Sunday") day = "Monday";
    }
    return GetSchedule(Group, DaysArray.indexOf(day))[0] || { };
  } else {
    day = DaysArray[dayIndex];
    let schedule = GetSchedule(Group, dayIndex);

    if (current === -1) {
      return schedule[0] || { };
    }

    return schedule[current] || { };
  }
}



function isCurrentTimeWithinRange(type, periodStart, periodEnd) {
  // console.log("isCurrentTimeWithinRange: ", type, periodStart, periodEnd);
  let [hour, min] = [new Date().getHours(), new Date().getMinutes()];
  // let [hour, min] = [8,30];
  const currentMinutes = hour * 60 + min;

  const [Shour, SminPeriod] = periodStart.split(' ');
  let [startHour, startMin] = Shour.split(':').map(Number);
  if (SminPeriod === 'PM' && startHour !== 12) startHour += 12;
  if (SminPeriod === 'AM' && startHour === 12) startHour = 0;

  const startMinutes = startHour * 60 + startMin;

  const [Ehour, EminPeriod] = periodEnd.split(' ');
  let [endHour, endMin] = Ehour.split(':').map(Number);
  if (EminPeriod === 'PM' && endHour !== 12) endHour += 12;
  if (EminPeriod === 'AM' && endHour === 12) endHour = 0;

  const endMinutes = endHour * 60 + endMin - 1;

  
  if(type==='isClassDone') {
    return (currentMinutes <= startMinutes );
  }

  if (startMinutes <= endMinutes) {
    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  } else{
    return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }
}
GetSchedule("B", 2);

export default GetSchedule;
export { isCurrentTimeWithinRange, getNextClass, courses };
