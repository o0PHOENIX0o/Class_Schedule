

let Schedule = {
    "Monday": [
      { 
        "course": "ICT210/RS/ECR110" ,
        "Time": "9:00 AM - 11:00 AM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "11:00 AM - 1:00 PM"
      },
      {
        "course": "",
        "name": "Break",
        "Time": "1:00 PM - 1:30 PM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "1:30 PM - 3:30 PM"
      },
      {
        "A": { 
          "course": "ICT256/RA/ETL503",
          "Time": "1:30 PM - 3:30 PM"
        },
        "B": { 
          "course": "ICT254/AC/ETL506",
          "Time": "1:30 PM - 3:30 PM"
        }
      },
      { 
        "course": "ICT212/MBK/ECR215",
        "Time": "3:30 PM - 5:30 PM"
      }
    ],
    "Tuesday": [
      { 
        "course": "ICT210/RS/ECR110" ,
        "Time": "9:00 AM - 11:00 AM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "11:00 AM - 1:00 PM"
      },
      {
        "course": "",
        "name": "Break",
        "Time": "1:00 PM - 1:30 PM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "1:30 PM - 3:30 PM"
      },
      {
        "A": { 
          "course": "ICT256/RA/ETL503/GRP A",
          "Time": "1:30 PM - 3:30 PM"
        },
        "B": { 
          "course": "ICT254/AC/ETL506/GRP B",
          "Time": "1:30 PM - 3:30 PM"
        }
      },
      { 
        "course": "ICT212/MBK/ECR215",
        "Time": "3:30 PM - 5:30 PM"
      }
    ],
    "Wednesday": [
    { 
      "course": "ICT210/RS/ECR110" ,
      "Time": "9:00 AM - 11:00 AM"
    },
    { 
      "course": "ICT202/RRK/ECR110" ,
      "Time": "11:00 AM - 1:00 PM"
    },
    {
      "course": "",
      "name": "Break",
      "Time": "1:00 PM - 1:30 PM"
    },
    { 
      "course": "ICT202/RRK/ECR110" ,
      "Time": "1:30 PM - 3:30 PM"
    },
    {
      "A": { 
        "course": "ICT256/RA/ETL503",
        "Time": "1:30 PM - 3:30 PM"
      },
      "B": { 
        "course": "ICT254/AC/ETL506/GRP B",
        "Time": "1:30 PM - 3:30 PM"
      }
    },
    { 
      "course": "ICT212/MBK/ECR215",
      "Time": "3:30 PM - 5:30 PM"
    }
    ],
    "Thursday": [
      { 
        "course": "ICT210/RS/ECR110" ,
        "Time": "9:00 AM - 11:00 AM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "11:00 AM - 1:00 PM"
      },
      {
        "course": "",
        "name": "Break",
        "Time": "1:00 PM - 1:30 PM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "1:30 PM - 3:30 PM"
      },
      {
        "A": { 
          "course": "ICT256/RA/ETL503/GRP A",
          "Time": "1:30 PM - 3:30 PM"
        },
        "B": { 
          "course": "ICT254/AC/ETL506/GRP B",
          "Time": "1:30 PM - 3:30 PM"
        }
      },
      { 
        "course": "ICT212/MBK/ECR215",
        "Time": "3:30 PM - 5:30 PM"
      }
    ],
    "Friday": [
      { 
        "course": "ICT210/RS/ECR110" ,
        "Time": "9:00 AM - 11:00 AM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "11:00 AM - 1:00 PM"
      },
      {
        "course": "",
        "name": "Break",
        "Time": "1:00 PM - 1:30 PM"
      },
      { 
        "course": "ICT202/RRK/ECR110" ,
        "Time": "1:30 PM - 3:30 PM"
      },
      {
        "A": { 
          "course": "ICT256/RA/ETL503/GRP A",
          "Time": "1:30 PM - 3:30 PM"
        },
        "B": { 
          "course": "ICT254/AC/ETL506/GRP B",
          "Time": "1:30 PM - 3:30 PM"
        }
      },
      { 
        "course": "ICT212/MBK/ECR215",
        "Time": "3:30 PM - 5:30 PM"
      }
    ]
  }
  
  
  let Faculty = {
    "PC": "Prof. Pravin Chandra",
    "RRK": "Prof. R. Rama Kishore",
    "MBK": "Prof. M. Balakrishna",
    "AC": "Dr. Anuradha Chug",
    "RS": "Dr. Ruchi Sehrawat",
    "RA": "Dr. Richa Aggarwal",
    "AH": "Dr. Arshi Husain",
    "GF": "Dr. Ashima Negi"
  };
  
  let courses = {
    // Theory
    "ICT202": {
      name: "Computer Graphics",
      shortName: "CG",
      credits: 3
    },
    "ICT204": {
      name: "Computational Methods",
      shortName: "CM",
      credits: 4
    },
    "ICT206": {
      name: "Design and Analysis of Algorithms",
      shortName: "DAA",
      credits: 4
    },
    "ICT208": {
      name: "Theory of Computation",
      shortName: "TOC",
      credits: 4
    },
    "ICT210": {
      name: "Software Engineering",
      shortName: "SE",
      credits: 3
    },
    "ICT212": {
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
    "ICT252": {
      name: "Computer Networks Lab",
      shortName: "CN",
      credits: 1
    },
    "ICT254": {
      name: "Design and Analysis of Algorithms Lab",
      shortName: "DAA",
      credits: 1
    },
    "ICT256": {
      name: "Computational Methods Lab",
      shortName: "CM",
      credits: 1
    },
    "ICT258": {
      name: "Computer Graphics Lab",
      shortName: "CG",
      credits: 1
    },
    "ICT260": {
      name: "Software Engineering Lab",
      shortName: "SE",
      credits: 1
    }
  };
  
  
  let data = {};
  for(const ele in Schedule){
    data[ele] = Schedule[ele].map(items =>{
      if(items.course){
        let [Time, end] = items.Time.split("-");
        let [code, prof, room] = items.course.split("/");
        return {
          course: code + " / "+ room,
          name: courses[code].name,
          shortName: courses[code].shortName,
          Faculty : Faculty[prof],
          Time: Time,
          end: end
        };
      }
      
      if(items.name == "Break"){
        let [Time, end] = items.Time.split("-");
        delete items.Time;
        return {...items, Time: Time, end:end};      
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
          Time: startA,
          end: endA
        };
        const ObjB = {
          course: codeB + " / "+ roomB,
          name: courses[codeB].name,
          shortName: courses[codeB].shortName,
          Faculty : Faculty[profB],
          Time: startB,
          end: endB
        };
  
        return {
          A: ObjA,
          B: ObjB
        };
      }
    }); 
  }