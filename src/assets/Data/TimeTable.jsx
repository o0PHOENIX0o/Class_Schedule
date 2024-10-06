const ScheduleData = { 
  "Monday": [
    {
      "course": "ICT 201 / ---",
      "name": "Foundation of Computer Science Exam",
      "shortName": "FCS Exam",
      "Faculty": "Dr. Rinkaj Goyal",
      "start": "10:00 AM",
      "end": "11:00 AM"
    }
  ],
  "Tuesday": [
    {
      "course": "ICT 203 / ---",
      "name": "Operating Systems Exam",
      "shortName": "OS Exam",
      "Faculty": "prof. Ravindra Purwa",
      "start": "10:00 AM",
      "end": "11:00 AM"
    }
  ],
  "Wednesday": [
    {
      "name": "Digital Logic and Computer Design Exam",
      "shortName": "DLCD Exam",
      "Faculty": "TBA",
      "course": "ICT 205 / ---",
      "start": "10:00 AM",
      "end": "11:00 AM"
    }
  ],
  "Thursday": [
    {
      "course": "ICT 207 / ---",
      "name": "Database Management System Exam",
      "shortName": "DBMS Exam",
      "Faculty": "Ms. Richa",
      "start": "10:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 211 / ---",
      "name": "Data Structures Exam",
      "shortName": "DS Exam",
      "Faculty": "Prof. Navin Rajpal",
      "start": "4:00 PM",
      "end": "5:00 PM"
    }
  ],
  "Friday": [
    {
      "course": "ICT 209 / ---",
      "name": "Object Oriented Programming Using C++ Exam",
      "shortName": "OOP Exam",
      "Faculty": "Dr Priyanka Bhutani",
      "start": "10:00 AM",
      "end": "11:00 AM"
    }
  ],
};

// const ScheduleData = {
  // "Monday": [
  //   {
  //     "name": "Digital Logic and Computer Design",
  //     "shortName": "DLCD",
  //     "Faculty": "TBA",
  //     "course": "ICT 205 / E110",
  //     "start": "9:00 AM",
  //     "end": "11:00 AM"
  //   },
  //   {
  //     "course": "ICT 211 / E110",
  //     "name": "Data Structures",
  //     "shortName": "DS",
  //     "Faculty": "Prof. Navin Rajpal",
  //     "start": "11:00 AM",
  //     "end": "1:00 PM"
  //   },
  //   {
  //     "course": "",
  //     "name": "Break",
  //     "start": "1:00 PM",
  //     "end": "1:30 PM"
  //   },
  //   {
  //     "A": {
  //       "course": "ICT 203 / ETL312",
  //       "name": "Operating Systems lab",
  //       "shortName": "OS Lab",
  //       "Faculty": "prof. Ravindra Purwa",
  //       "start": "1:30 PM",
  //       "end": "3:30 PM"
  //     },

  //     "B": {
  //       "course": "ICT 209 / ETL313",
  //       "name": "Object Oriented Programming Using C++ Lab",
  //       "shortName": "OOP Lab",
  //       "Faculty": "Dr Priyanka Bhutani",
  //       "start": "1:30 PM",
  //       "end": "3:30 PM"
  //     }
  //   },
  //   {
  //     "A": {
  //       "course": "ICT 211 / ETL313",
  //       "name": "Data Structure Lab",
  //       "shortName": "DS Lab",
  //       "Faculty": "bhul gaya",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     },
  //     "B": {
  //       "course": "ICT 207 / ETL312",
  //       "name": "Database Management System Lab",
  //       "shortName": "DBMS Lab",
  //       "Faculty": "---",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     }
  //   }
  // ],
  // "Tuesday": [
  //   {
  //     "course": "ECO 213 / E110",
  //     "name": "Engineering Economics ",
  //     "shortName": "ECO",
  //     "Faculty": "---",
  //     "start": "9:00 AM",
  //     "end": "11:00 AM"
  //   },
  //   {
  //     "course": "ICT 201 / E110",
  //     "name": "Foundation of Computer Science",
  //     "shortName": "FCS",
  //     "Faculty": "Dr. Rinkaj Goyal",
  //     "start": "11:00 AM",
  //     "end": "1:00 PM"
  //   },
  //   {
  //     "course": "",
  //     "name": "Break",
  //     "start": "1:00 PM",
  //     "end": "1:30 PM"
  //   },
  //   {
  //     "course": "ICT 203 / E110",
  //     "name": "Operating Systems",
  //     "shortName": "OS",
  //     "Faculty": "prof. Ravindra Purwa",
  //     "start": "1:30 PM",
  //     "end": "2:30 PM"
  //   },
  //   {
  //     "course": "ICT 209 / E110",
  //     "name": "Object Oriented Programming Using C++",
  //     "shortName": "OOP",
  //     "Faculty": "Dr Priyanka Bhutani",
  //     "start": "2:30 PM",
  //     "end": "4:30 PM"
  //   }
  // ],
  // "Wednesday": [

  //   {
  //     "course": "BC 121 / E601",
  //     "name": "Bridge Course in Mathematics",
  //     "shortName": "Maths",
  //     "Faculty": "Ms. Nikhat Ali",
  //     "start": "9:00 AM",
  //     "end": "11:00 AM"
  //   },
   
  //   {
  //     "course": "ICT 203 / E110",
  //     "name": "Operating Systems",
  //     "shortName": "OS",
  //     "Faculty": "prof. Ravindra Purwa",
  //     "start": "11:00 AM",
  //     "end": "1:00 PM"
  //   },
  //   {
  //     "course": "",
  //     "name": "Break",
  //     "start": "1:00 PM",
  //     "end": "1:30 PM"
  //   },
  //   {
  //     "course": "ICT 205 / E110",
  //     "name": "Digital Logic and Computer Design",
  //     "shortName": "DLCD",
  //     "Faculty": "TBA",
  //     "start": "1:30 PM",
  //     "end": "3:30 PM"
  //   },
  //   {
  //     "A": {
  //       "course": "ICT 207 / E312",
  //       "name": "Database Management System Lab",
  //       "shortName": "DBMS Lab",
  //       "Faculty": "---",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     },
  //     "B": {
  //       "course": "ICT 203 / E410",
  //       "name": "Operating Systems Lab",
  //       "shortName": "OS Lab",
  //       "Faculty": "prof. Ravindra Purwa",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     }
  //   }
  // ],
  // "Thursday": [
  //   {
  //     "course": "BC 121 / E110",
  //     "name": "Bridge Course in Mathematics",
  //     "shortName": "Maths",
  //     "Faculty": "Nikhat Ali",
  //     "start": "9:00 AM",
  //     "end": "10:00 AM"
  //   },
  //   {
  //     "course": "BC 123 / E110",
  //     "name": "Bridge Course in Programming in C",
  //     "shortName": "C",
  //     "Faculty": "TBA",
  //     "start": "10:00 AM",
  //     "end": "11:00 AM"
  //   },
  //   {
  //     "course": "ICT 211 / E110",
  //     "name": "Data Structures",
  //     "shortName": "DS",
  //     "Faculty": "Prof. Navin Rajpal",
  //     "start": "11:00 AM",
  //     "end": "1:00 PM"
  //   },
  //   {
  //     "course": "",
  //     "name": "Break",
  //     "start": "1:00 PM",
  //     "end": "1:30 PM"
  //   },
  //   {
  //     "course": "ICT 207 / E110",
  //     "name": "Database Management System",
  //     "shortName": "DBMS",
  //     "Faculty": "Ms. Richa",
  //     "start": "1:30 PM",
  //     "end": "3:30 PM"
  //   },
  //   {
  //     "course": "ICT 209 / E110",
  //     "name": "Object Oriented Programming Using C++",
  //     "shortName": "OOP",
  //     "Faculty": "Dr Priyanka Bhutani",
  //     "start": "3:30 PM",
  //     "end": "5:30 PM"
  //   }
  // ],
  // "Friday": [
    
  //   {
  //     "course": "BC 123 / E110",
  //     "name": "Bridge Course in Programming in C",
  //     "shortName": "C",
  //     "Faculty": "---",
  //     "start": "9:00 AM",
  //     "end": "11:00 AM"
  //   },

  //   {
  //     "course": "ICT 201 / E110",
  //     "name": "Foundation of Computer Science",
  //     "shortName": "FCS",
  //     "Faculty": "Dr. Rinkaj Goyal",
  //     "start": "11:00 AM",
  //     "end": "1:00 PM"
  //   },
  //   {
  //     "course": "",
  //     "name": "Break",
  //     "start": "1:00 PM",
  //     "end": "1:30 PM"
  //   },
  //   {
  //     "course": "ICT 207 / E110",
  //     "name": "Database Management System",
  //     "shortName": "DBMS",
  //     "Faculty": "Ms. Richa",
  //     "start": "1:30 PM",
  //     "end": "3:30 PM"
  //   },
  //   {
  //     "A": {
  //       "course": "ICT 209 / E312",
  //       "name": "Object Oriented Programming Using C++ Lab",
  //       "shortName": "OOP Lab",
  //       "Faculty": "Dr Priyanka Bhutani",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     },
  //     "B": {
  //       "course": "ICT 211 / E219",
  //       "name": "Data Structures Lab",
  //       "shortName": "DS Lab",
  //       "Faculty": "bhul gaya",
  //       "start": "3:30 PM",
  //       "end": "5:30 PM"
  //     }
  //   }
  // ]
// };

const DaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const GetSchedule = function (Group, dayIndex) {
  const day = DaysArray[dayIndex];
  console.log(day);
  if (day === "Sunday" || day === "Saturday")
    return [];

  let newData = [];
  ScheduleData[day].forEach(element => {
    if (element.A || element.B) {
      let labData = element[Group];
      newData.push({
        ...labData
      });
    } else {
      newData.push(element);
    }
  });

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

export default GetSchedule;
export { isCurrentTimeWithinRange, getNextClass };
