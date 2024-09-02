

const TimeTableData = {
  "Monday": [
    {
      "course": "ICT 205 / E110",
      "name": "Digital Logic and Computer Design (DLCD)",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 211 / E110",
      "name": "Data Structures (DS)",
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
      "name": "Object Oriented Programming Using C++ (OOP) Lab",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 207 / ETL312",
      "name": "Database Management System (DBMS) Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Tuesday": [
    {
      "course": "ECO 213 / E110",
      "name": "Engineering Economics (ECO)",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 201 / E110",
      "name": "Foundation of Computer Science (FCS)",
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
      "name": "Operating Systems (OS)",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 209 / E110",
      "name": "Object Oriented Programming Using C++ (OOP)",
      "start": "3:30 PM",
      "end": "4:30 PM"
    }
  ],
  "Wednesday": [
    {
      "course": "BC 123 / E110",
      "name": "Bridge Course in Programming in C (C)",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 203 / E110",
      "name": "Operating Systems (OS)",
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
      "name": "Digital Logic and Computer Design (DLCD)",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 203 / E410",
      "name": "Operating Systems (OS) Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Thursday": [
    {
      "course": "BC 121 / E110",
      "name": "Bridge Course in Mathematics (Maths)",
      "start": "9:00 AM",
      "end": "10:00 AM"
    },
    {
      "course": "BC 123 / E110",
      "name": "Bridge Course in Programming in C (C)",
      "start": "10:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 211 / E110",
      "name": "Data Structures (DS)",
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
      "name": "Database Management System (DBMS)",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 209 / E110",
      "name": "Object Oriented Programming Using C++ (OOP)",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ],
  "Friday": [
    {
      "course": "BC 121 / E110",
      "name": "Bridge Course in Mathematics (Maths)",
      "start": "9:00 AM",
      "end": "11:00 AM"
    },
    {
      "course": "ICT 201 / E110",
      "name": "Foundation of Computer Science (FCS)",
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
      "name": "Database Management System (DBMS)",
      "start": "1:30 PM",
      "end": "3:30 PM"
    },
    {
      "course": "ICT 211 / E219",
      "name": "Data Structures (DS) Lab",
      "start": "3:30 PM",
      "end": "5:30 PM"
    }
  ]
};

const GetTimeTable = function(day){
    if(day == "Sunday" || day == "Saturday")
        return "";
    return TimeTableData[day];
}

export default GetTimeTable;