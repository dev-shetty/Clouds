/* Schema
* {
*  id: <next-following-id>,
*  img: <event-image>,
*  title: <event-title>,
*  description: <event-description>
*  time: <event-timing>,
*  venue: <event-venue>,
*
?  If links and extra details is required (optional)
?  link: <link-of-any-form-or-anything>
?  linkDescription: <what-to-display-in-ui-for-that-link>
?  extra: <to-connect-to-any-other-route> 
* }, */
const events = [
  {
    id: 5,
    img: "Events/BranchEntry23.jpg",
    title: "Branch Entry 2K23",
    description:
      "Branch entry is a fun-filled event where second-year students are welcomed to the Department of Computer Science and Engineering. In doing this, we create an atmosphere where students feel like they are part of a family, which they will be with for the next three years in our college.",
    time: "13-12-2023",
    venue: "Sahyadri College of Engineering and Management",
  },
  {
    id: 4,
    img: "Events/SinchanaWinners.JPG",
    title: "Sinchana 2022 Champions - CSE",
    description:
      "Computer Science Engineering Department becomes overall Champions of Sinchana 2022.",
    time: "03-12-2022",
    venue: "Sahyadri College of Engineering and Management",
  },
  {
    id: 3,
    img: "Events/Sinchana.jpeg",
    title: "Sinchana 2022",
    description:
      "Sinchana is an inter-branch event that will consist of various competitions in which each department will compete against other branches. Each competition will consist of certain points, which will be calculated and the winner declared at the end.",
    link: "https://forms.gle/td98pw91Pj99d8zz8",
    linkDescription: "Register Here",
    extra: "Details about events in Sinchana",
    time: "02-12-2022 and 03-12-2022",
    venue: "Sahyadri College of Engineering and Management",
  },
  {
    id: 2,
    img: "Events/Variety.JPG",
    title: "Variety Show",
    description:
      "The variety show features musical performances, dance, skits, and comedy sketches. Different sections compete against each other for the prestigious trophy. The students actively participate in this event, bringing out their inner artist.",
    time: "18-11-2022",
    venue: "Nethravathi Auditorium",
  },
  {
    id: 1,
    img: "Events/CloudsInvitation.png",
    title: "Branch Entry 2K22",
    description:
      "Branch entry is a fun-filled event where second-year students are welcomed to the Department of Computer Science and Engineering. In doing this, we create an atmosphere where students feel like they are part of a family, which they will be with for the next three years in our college.",
    time: "18-11-2022",
    venue: "Sahyadri College of Engineering and Management",
  },
]

export default events
