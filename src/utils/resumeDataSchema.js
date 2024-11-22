const ResumeData = {
  state: {
    isClear: false,
    sections: {
      added: [
        "personal",
        "links",
        "skills",
        "work",
        "projects",
        "education",
        "certInt",
      ],
      available: [],
    },
    personal: {
      name: "John Doe",
      title: "",
      email: "johndoe@protonmail.com",
      phone: "",
      address: "",
      summary: "",
    },
    isSimpleSkills: false,
    skills: {
      lang: [
        {
          id: "m08x3jpf",
          text: "JavaScript",
        },
        {
          id: "m08x3jpg",
          text: "Go",
        },
        {
          id: "m08x3jph",
          text: "HTML",
        },
        {
          id: "m08x3jpi",
          text: "CSS",
        },
      ],
      frame: [
        {
          id: "m08x3jpj",
          text: "React",
        },
        {
          id: "m08x3jpk",
          text: "Redux",
        },
        {
          id: "m08x3jpl",
          text: "NestJS",
        },
        {
          id: "m08x3jpm",
          text: "PostgreSQL",
        },
        {
          id: "m08x3jpn",
          text: "CockroachDB",
        },
      ],
      tools: [
        {
          id: "m08x3jpo",
          text: "Git",
        },
        {
          id: "m08x3jpp",
          text: "SVN",
        },
        {
          id: "m08x3jpq",
          text: "AWS",
        },
        {
          id: "m08x3jpr",
          text: "Postman",
        },
      ],
    },
    nextSimpleSkillId: 7,
    simpleSkills: [
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "Go",
      },
      {
        id: 3,
        name: "HTML",
      },
      {
        id: 4,
        name: "CSS",
      },
      {
        id: 5,
        name: "PostgreSQL",
      },
      {
        id: 6,
        name: "AWS",
      },
    ],
    links: {
      web: {
        text: "johndoe.com",
        link: "https://www.johndoe.com",
      },
      linkedin: {
        text: "john-doe-123",
        link: "https://www.linkedin.com/john-doe-123",
      },
      github: {
        text: "johndoe",
        link: "https://www.github.com/johndoe",
      },
    },
    work: [
      {
        name: "Boogle",
        title: "Principal Software Engineer",
        duration: "Oct 2017 - Present",
        address: "LK-99 Valley, PA",
        bullets: [
          {
            id: "m08x3jps",
            text: "Led a team of 10 developers in the successful design, development, and delivery of a scalable and high-performance SaaS platform, resulting in a 30% increase in user engagement and a 20% reduction in response time.",
          },
          {
            id: "m08x3jpt",
            text: "Architected and implemented a microservices-based architecture using Node.js and Docker, resulting in a more flexible and maintainable system and enabling seamless integration with third-party services.",
          },
          {
            id: "m08x3jpu",
            text: "Core responsibility #3. Pretend this is where they stop reading. First 3 things should be most impressive",
          },
          {
            id: "m08x3jpv",
            text: "Core responsibility #4.",
          },
        ],
      },
      {
        name: "Nahoo",
        title: "SDE - III",
        duration: "Jan 2015 - Sep 2017",
        address: "LK-99 Valley, PA",
        bullets: [
          {
            id: "m08x3jpw",
            text: "Core responsibility #1.",
          },
          {
            id: "m08x3jpx",
            text: "Core responsibility #2.",
          },
          {
            id: "m08x3jpy",
            text: "Core responsibility #3.",
          },
          {
            id: "m08x3jpz",
            text: "Core responsibility #4.",
          },
        ],
      },
      {
        name: "Tooter",
        title: "SDE - I",
        duration: "Nov 2013 - Nov 2014",
        address: "LK-99 Valley, PA",
        bullets: [
          {
            id: "m08x3jq0",
            text: "Core responsibility #1.",
          },
          {
            id: "m08x3jq1",
            text: "Core responsibility #2.",
          },
          {
            id: "m08x3jq2",
            text: "Core responsibility #3.",
          },
        ],
      },
    ],
    projects: [
      {
        name: "TravelPlanner",
        tech: "HTML, CSS, React, TypeScript, Redux, Bootstrap, Express.js, PostgreSQL",
        code: {
          text: "Github Repo",
          link: "https://www.github.com/johndoe/TravelPlanner",
        },
        demo: {
          text: "Live Preview",
          link: "https://john-doe-travel-planner.herokuapp.com",
        },
        bullets: [
          {
            id: "m08x3jq3",
            text: "Developed a user-friendly web application for travel planning, allowing users to create and manage their itineraries.",
          },
          {
            id: "m08x3jq4",
            text: "Utilized Redux for state management, enabling efficient data flow and improved application performance.",
          },
          {
            id: "m08x3jq5",
            text: "Designed RESTful APIs using Node.js and Express.js, facilitating data retrieval and storage from the PostgreSQL database.",
          },
          {
            id: "m08x3jq6",
            text: "Implemented JWT-based authentication to ensure secure user registration and login processes.",
          },
        ],
      },
      {
        name: "Project No. 2",
        tech: "Example Tech Stack",
        code: {
          text: "Codeberg Repo",
          link: "https://www.codeberg.com/johndoe/Project2",
        },
        demo: {
          text: "Live Preview",
          link: "https://john-doe-project-two.herokuapp.com",
        },
        bullets: [
          {
            id: "m08x3jq7",
            text: "Bullet point #1.",
          },
          {
            id: "m08x3jq8",
            text: "Bullet point #2.",
          },
          {
            id: "m08x3jq9",
            text: "Bullet point #3.",
          },
          {
            id: "m08x3jqa",
            text: "Bullet point #4.",
          },
        ],
      },
    ],
    education: [
      {
        name: "Pistaschio Institute of Technology",
        degree: "MS, Computer Science",
        grad: "August 2013",
        address: "Goodwell, Motherland",
        bullets: [
          {
            id: "m08x3jqb",
            text: "Developed a user-friendly web application for travel planning, allowing users to create and manage their itineraries.",
          },
          {
            id: "m08x3jqc",
            text: "Utilized Redux for state management, enabling efficient data flow and improved application performance.",
          },
          {
            id: "m08x3jqd",
            text: "Designed RESTful APIs using Node.js and Express.js, facilitating data retrieval and storage from the PostgreSQL database.",
          },
          {
            id: "m08x3jqe",
            text: "Implemented JWT-based authentication to ensure secure user registration and login processes.",
          },
        ],
      },
      {
        name: "XYZ University",
        degree: "BS, Computer Science",
        grad: "August 2011",
        address: "City, Country",
        bullets: [
          {
            id: "m08x3jqf",
            text: "Bullet point #1.",
          },
          {
            id: "m08x3jqg",
            text: "Bullet point #2.",
          },
          {
            id: "m08x3jqh",
            text: "Bullet point #3.",
          },
        ],
      },
    ],
    certInt: {
      certification: "If you have any relevant ones; otherwise leave blank",
      skills: "Strategic Planning, Problem Solving, Leadership, Teamwork, etc",
      interests:
        "Reading, sleeping, yoga, fishing, traveling, Reddit, Bear, Football",
    },
  },
  version: 0,
};
