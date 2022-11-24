const data = [
  {
    id: 1,
    name: "Pallavi - Classical Vocal Solo",
    description: `Maximum Time allotted is 7+1 Minutes. 
      Maximum Number of accompanists allowed is 2. `,
    time: "9:45 am to 12:00 pm",
    venue: "1st Floor Seminar Hall",
  },
  {
    id: 2,
    name: "Anupallavi  1 - Eastern singing Solo: Indian filmy / Light music/ Folk",
    description: `Maximum Time allotted is 3+1 Minutes
      Maximum Number of accompanists allowed is 2`,
    time: "9:45 am to 12:00 pm",
    venue: "Seminar Hall Mechanical Block ",
  },
  {
    id: 3,
    name: "Anupallavi 2 - Eastern Singing Group: Filmy/Folk/Any ype Indian song",
    description: `Maximum Time allotted is 4+1 Minutes
    Maximum Number of 10 members allowed
    `,
    time: "9:45 am to 12:00 pm",
    venue: "Seminar Hall Mechanical Block ",
  },
  {
    id: 4,
    name: "Naada - 1  Western  Singing- Solo",
    description: `Maximum Time allotted is 3+1 Minutes
    Maximum Number of accompanists allowed is 2
     `,
    time: "9:45 am to 12:00 pm",
    venue: "Nethravati Auditorium",
  },
  {
    id: 5,
    name: "Nada 2 - Western Singing Group",
    description: `Maximum Time allotted is 4+1Minutes
    Maximum Number of 10 members allowed
     `,
    time: "9:45 am to 12:00 pm",
    venue: "Nethravati Auditorium",
  },
  {
    id: 6,
    name: "Laasya - Classical Dance  Solo",
    description: `Maximum Time allotted is 7+1 mins
    Maximum Number of accompanists allowed is 2
     `,
    time: "10.00 am to 11.30 am",
    venue: "Srusti Auditorium",
  },
  {
    id: 7,
    name: "Bhooshana - Traditional Attire Show",
    description: `Participation: Only 1 Team of 8 participants per Department
    The theme of the event will be of Indian culture 
    A duration  of  7minutes will be allotted purely for performance and an additional 3minutes will be allowed for setting the stage     
     `,
    time: "11.30 am to 12.00 pm ",
    venue: "Srusti Auditorium",
  },
  {
    id: 8,
    name: "Tandava - Group Dance (Eastern/Western/Folk)",
    description: `Maximum Time allotted is 3+1Minutes
    Maximum Number of 12 members allowed
     `,
    time: "12.00 pm to 1.30 pm",
    venue: "Srusti Auditorium",
  },
  {
    id: 9,
    name: "Alaap - Folk Orchestra (Instrumental Music)",
    description: `Participation: Only 1 team (up to 10 participants) per department .
    Duration: 8 minutes (including set-up and clearance time).
    The team should present only folk tunes, preferably the ones recognized as folk tunes of Karnataka.
     `,
    time: "12.00 pm to 1.00 pm",
    venue: "Nethravati Auditorium",
  },
  {
    id: 10,
    name: "Navarasa - Variety Program",
    description: `Maximum time allotted for each Department is 15+5 minutes (including stage arrangements)
    Variety program should include minimum items like group singing,  group dance & and any one form of theatre programs like mime, skit, mono act, Mimicry.
    Theme based performances are preferred.
    Participation: Only 1 team of 20 participants per department.
     `,
    time: "1:30 pm to 5.00 pm",
    venue: "Srusti Auditorium",
  },
  {
    id: 11,
    name: "Abhivyaktha - Skit (Street Play)",
    description: `Participation: Only 1 Team of 8 participants per Department
    Duration: 10 minutes (including set-up and clearance time).
    A maximum of 3 accompanists are allowed.
     `,
    time: "11.30 am to 1.00 pm",
    venue: "Food Court Open Stage ",
  },
  {
    id: 12,
    name: "Manan - Debate (Literature)",
    description: `Participation: Only 1 Team of 2 participants per department.
    Duration: 5 minutes per speaker (10 minutes per team).
    
     `,
    time: "11:00 am to 1.00 pm",
    venue: "2nd Floor Seminar Hall",
  },
  {
    id: 13,
    name: "Jnana - Quiz",
    description: `Each team must have only two participants
    There will be 5 sections, each having four questions from topics mentioned below: 
• Sports 
• Geography and history 
• Entertainment 
• Logical and brainteasers 
• Science and technology

     `,
    time: "3:00 pm to 3:30 pm",
    venue: "I & II Floor Seminar Hall, Main Block",
  },
  {
    id: 14,
    name: "Darpana- Face Painting",
    description: `Maximum time allotted is 1 hour.
    Every participant should arrange accompanist for painting by themselves.
     `,
    time: "2:45 pm to 3:45 pm",
    venue: "323 & 324 Main Block",
  },
  {
    id: 15,
    name: "Chithara-Spot Painting",
    description: `Maximum time allotted is 1 hour.
    Participants should bring all the required materials.
     `,
    time: "2:45 pm to 3:45 pm",
    venue: "325 & 326 Main Block",
  },
  {
    id: 16,
    name: "Nakash - Cartooning",
    description: `Maximum time allotted is 1 hour.
    Required materials should be brought by participant and will not be provided by organizers.
     `,
    time: "4.00pm to 5.00pm ",
    venue: "Art & Culture Room",
  },
  {
    id: 17,
    name: "Vinyasa - Flower Rangoli",
    description: `Participation: Only 3 participants per department.
    Duration: 2 hour.
    Participants shall bring their own material.
     `,
    time: "4.00pm to 5.00pm ",
    venue: "CSE Block",
  },
  {
    id: 18,
    name: "Jugad - Welath out of Waste",
    description: `Participation: Only 1 team of  3 participants per department .
    Duration: 2 hours.
     `,
    time: "4.00pm to 5.00pm ",
    venue: "Seminar Hall Mechanical block ",
  },
  {
    id: 19,
    name: "Ojas - Poster making",
    description: `Participation:  Only 3 participants per department.
    Duration: 1 hour
     `,
    time: "4.00pm to 5.00pm ",
    venue: "323 & 324 Main Block",
  },
  {
    id: 20,
    name: "Shringara - Collage",
    description: `Participation: Only 2 participants per department.
    Duration: 2 hours 30 minutes.
     `,
    time: "4.00pm to 5.00pm ",
    venue: "325 & 326 Main Block",
  },
  {
    id: 21,
    name: "Tittuka - Photography",
    description: `Participation: Only 3 participants per department.
    Duration: 4 hours.
     `,
    time: "To be submitted to the Coordinator on 3/12/2022 by 2:00 pm",
    // venue: "To be submitted to the Coordinator on 3/12/2022 by 2:00 pm",
  },
  {
    id: 22,
    name: "Rangitharnga - Short film (video making)",
    description: `The duration of the short video must be from 1minute to 15 minutes
    The short film must be original and no watermark of any kind should be on the film 
    Team limit 5 members     
     `,
    time: "To be submitted to the Coordinator on 3/12/2022 by 2:00 pm",
    // venue: "To be submitted to the Coordinator on 3/12/2022 by 2:00 pm",
  },
]

export default data
