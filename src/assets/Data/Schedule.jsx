

const ScheduleData = {
  "Monday": [
    {
      "name": "Digital Logic and Computer Design",
      "shortName": "DLCD",
      "Faculty": "TBA",
      "course": "ICT 205 / E110",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 211 / E110",
      "name": "Data Structures",
      "shortName": "DS",
      "Faculty": "Navin Rajpal",
      "start": "11:00 AM",
      "end": "1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "start": "1:00 PM",
      "end": "1:30 PM"
    },
    {
      "course": "ICT 209 / ETL313",
      "name": "Object Oriented Programming Using C++ Lab",
      "shortName": "OOP Lab",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 207 / ETL312",
      "name": "Database Management System Lab",
      "shortName": "DBMS Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Tuesday": [
    {
      "course": "ECO 213 / E110",
      "name": "Engineering Economics ",
      "shortName": "ECO",
      "Faculty": "TBA",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 201 / E110",
      "name": "Foundation of Computer Science",
      "shortName": "FCS",
      "Faculty": "Dr. Rinkaj Goyal",
      "start": "11:00 AM",
      "end": "1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "start": "1:00 PM",
      "end": "1:30 PM"
    },
    {
      "course": "ICT 203 / E110",
      "name": "Operating Systems",
      "shortName": "OS",
      "Faculty": "bhul gaya",
      "start": "1:30 PM",
      "end": "2:30 PM"
    },
    {
      "course": "ICT 209 / E110",
      "name": "Object Oriented Programming Using C++",
      "shortName": "OOP",
      "Faculty": "bhul gaya",
      "start": "2:30 PM",
      "end": "4:30 PM"
    }
  ],
  "Wednesday": [
    {
      "course": "BC 123 / E110",
      "name": "Bridge Course in Programming in C",
      "shortName": "C",
      "Faculty": "TBA",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 203 / E110",
      "name": "Operating Systems",
      "shortName": "OS",
      "Faculty": "bhul gaya",
      "start": "11:00 AM",
      "end": "1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "start": "1:00 PM",
      "end": "1:30 PM"
    },
    {
      "course": "ICT 205 / E110",
      "name": "Digital Logic and Computer Design",
      "shortName": "DLCD",
      "Faculty": "TBA",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 203 / E410",
      "name": "Operating Systems Lab",
      "shortName": "OS Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Thursday": [
    {
      "course": "BC 121 / E110",
      "name": "Bridge Course in Mathematics",
      "shortName": "Maths",
      "Faculty": "TBA",
      "start": "9:00 AM",
      "end": "10:00 AM"
    },
    {
      "course": "BC 123 / E110",
      "name": "Bridge Course in Programming in C",
      "shortName": "C",
      "Faculty": "TBA",
      "start": "10:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 211 / E110",
      "name": "Data Structures",
      "shortName": "DS",
      "Faculty": "Navin Rajpal",
      "start": "11:00 AM",
      "end": "1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "start": "1:00 PM",
      "end": "1:30 PM"
    },
    {
      "course": "ICT 207 / E110",
      "name": "Database Management System",
      "shortName": "DBMS",
      "Faculty": "Prof. Udayan Ghose",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 209 / E110",
      "name": "Object Oriented Programming Using C++",
      "shortName": "OOP",
      "Faculty": "bhul gaya",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Friday": [
    {
      "course": "BC 121 / E110",
      "name": "Bridge Course in Mathematics",
      "shortName": "Maths",
      "Faculty": "TBA",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 201 / E110",
      "name": "Foundation of Computer Science",
      "shortName": "FCS",
      "Faculty": "Dr. Rinkaj Goyal",
      "start": "11:00 AM",
      "end": "1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "start": "1:00 PM",
      "end": "1:30 PM"
    },
    {
      "course": "ICT 207 / E110",
      "name": "Database Management System",
      "shortName": "DBMS",
      "Faculty": "Prof. Udayan Ghose",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 211 / E219",
      "name": "Data Structures Lab",
      "shortName": "DS Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ]
};

const GetSchedule = function (day) {
  if (day == "Sunday" || day == "Saturday")
    return "";
  return ScheduleData[day];
}

function isCurrentTimeWithinRange(periodStart, periodEnd) {
  let currentTime = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
  });

  const [time, period] = currentTime.split(' ');
  let [hour, min] = time.split(':').map(Number);

  if (period === 'PM' && hour !== 12) {
      hour += 12;
  } else if (period === 'AM' && hour === 12) {
      hour = 0;
  }

  const currentMinutes = hour * 60 + min;

  const [Shour, SminPeriod] = periodStart.split(' ');
  let [startHour, startMin] = Shour.split(':').map(Number);

  if (SminPeriod === 'PM' && startHour !== 12) {
      startHour += 12;
  } else if (SminPeriod === 'AM' && startHour === 12) {
      startHour = 0;
  }

  const startMinutes = startHour * 60 + parseInt(startMin);

  const [Ehour, EminPeriod] = periodEnd.split(' ');
  let [endHour, endMin] = Ehour.split(':').map(Number);

  if (EminPeriod === 'PM' && endHour !== 12) {
      endHour += 12;
  } else if (EminPeriod === 'AM' && endHour === 12) {
      endHour = 0;
  }

  const endMinutes = endHour * 60 + parseInt(endMin);

  if (startMinutes <= endMinutes) {
      return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
  } else {
      return currentMinutes >= startMinutes || currentMinutes <= endMinutes;
  }
}

export default GetSchedule;
export { isCurrentTimeWithinRange };
