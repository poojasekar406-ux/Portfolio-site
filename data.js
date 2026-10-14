/* ============================================================
   EDIT ONLY THIS FILE for normal updates.
   Text, projects, skills, links and certificates all live here.
   ============================================================ */
const PORTFOLIO = {
  name: "POOJA.S",
  title: "Data Analyst",
  location: "Trichy, Tamil Nadu",
  photo: null, // later: put photo.jpg in assets/ and write "assets/photo.jpg"

  intro: "I clean messy data, look for the patterns in it, and turn them into dashboards and charts that people can read without a guide.",
  about: [
    "I'm a final-year B.Tech student in Artificial Intelligence and Data Science (CGPA 8.76) at Dhanalakshmi Srinivasan University.",
    "I've completed two data analyst internships, working on data cleaning, sales analysis and customer segmentation. I work mostly with Excel, SQL, Power BI and Python, and I'm looking for an entry-level Data Analyst or IT role."
  ],

  links: {
    email: "poojasekar406@gmail.com",
    github: "https://github.com/poojasekar406-ux",
    linkedin: "https://www.linkedin.com/in/pooja-s-3a839b2a5"
  },

  skills: {
    "Data analytics": ["Data cleaning", "Data analysis", "Customer segmentation", "Data visualization", "Dashboard development", "Data modeling"],
    "Tools": ["Microsoft Excel", "SQL (fundamentals)", "Power BI", "Git", "GitHub"],
    "Programming": ["Python", "Pandas", "Matplotlib", "Seaborn"],
    "Working style": ["Analytical thinking", "Problem solving", "Communication", "Leadership", "Team collaboration"]
  },

  experience: [
    {
      role: "Data Analyst Intern", org: "Thiranex", period: "Aug 2026 – Sep 2026",
      points: ["Worked on data analytics projects covering data analysis and customer segmentation.", "Completed the internship and received a certificate."]
    },
    {
      role: "Data Analyst Intern", org: "Alvonix", period: "Sep 2026",
      points: [
        "Practiced data cleaning and Excel fundamentals, and wrote SQL queries for practice tasks such as customer lookup.",
        "Analysed sales data and did customer segmentation.",
        "Attended Power BI sessions on data modeling, visualization and dashboard development."
      ]
    },
    {
      role: "President, Idea Club", org: "Dhanalakshmi Srinivasan University", period: "Feb 2026 – Present",
      points: ["Lead and mentor a team of student innovators, coordinating technical workshops, events and hackathons."]
    }
  ],

  // To add a project, copy one block, paste it after the last one, and edit.
  // "link" is optional: use "" to hide the button.
  projects: [
    {
      title: "Fake Review Detection for E-Commerce",
      stack: "Python, NLP, Machine Learning, Streamlit",
      points: [
        "Built and deployed an NLP classifier that flags deceptive product reviews with 94%+ confidence scoring.",
        "Wrote the text preprocessing and feature-extraction pipeline that separates genuine from fake reviews.",
        "Designed a Streamlit app with live review classification, a confidence gauge and a model analytics dashboard."
      ],
      link: "https://github.com/poojasekar406-ux/Fake-Review-Detection-for-E-commerce"
    },
    {
      title: "Campus Ambassador Growth Dashboard",
      stack: "Data analytics, Dashboard design, Data documentation",
      points: [
        "Documented a dataset of 50 campus ambassadors and 77 events (Jan – Mar 2024) to support a growth dashboard.",
        "Consolidated sign-up tracking covering 15,000+ sign-ups.",
        "Reached 80% tracking efficiency through structured documentation and clearly defined metrics."
      ],
      link: ""
    },
    {
      title: "Student Performance Dashboard",
      stack: "Python, Pandas, Matplotlib, Seaborn",
      points: [
        "Analysed the academic performance of 10 students across multiple subjects.",
        "Cleaned structured CSV data with Pandas.",
        "Made 3 visualizations (bar charts, heatmaps) showing subject-wise trends."
      ],
      link: "https://github.com/poojasekar406-ux/student-performance-dashboard"
    },
    {
      title: "Todo Full-Stack Web App",
      stack: "React.js, Node.js, Express.js, MongoDB, REST API",
      points: ["Built a CRUD app with a 3-endpoint REST API (GET, POST, DELETE) backed by MongoDB, deployed for public access."],
      link: "https://github.com/poojasekar406-ux/todo-fullstack"
    },
    {
      title: "MedTechResQ",
      stack: "IoT, Embedded systems, Arduino",
      points: ["Built an IoT healthcare system that streams real-time patient data to help spot health conditions early."],
      link: ""
    }
  ],

  achievement: "Presented the paper \"AI-Based Fake Review Detection in E-Commerce\" at the UCONTRPDSS-26 International Conference, United Institute of Technology (May 2026).",

  // Certificates: add the image to assets/certificates/ and set "image".
  // Leave image as "" until you have it; the card shows without a popup.
  // Optional "verify" adds a Verify button in the popup.
  certificates: [
    { title: "Introduction to Data Analytics", issuer: "Simplilearn", year: "", image: "", verify: "" },
    { title: "Core Java Programming", issuer: "", year: "", image: "", verify: "" },
    { title: "OOPs in Java Programming", issuer: "Simplilearn", year: "", image: "", verify: "" },
    { title: "GitHub Copilot Fundamentals", issuer: "Simplilearn", year: "", image: "", verify: "" },
    { title: "Boot Camp in Artificial Intelligence", issuer: "", year: "", image: "", verify: "" },
    { title: "AI Fundamentals", issuer: "", year: "", image: "", verify: "" },
    { title: "Zoho Creator Certification", issuer: "", year: "", image: "", verify: "" }
  ],
  workshops: ["Data Analytics", "Power BI", "Zoho Creator"]
};
