/**
 * portfolioData
 * ---------------------------------------------------------------
 * Single source of truth for all content on the site.
 * Every field here is drawn directly from one of the two uploaded
 * resumes (Hardware Resume / Software Resume). Nothing invented.
 * ---------------------------------------------------------------
 */

const portfolioData = {
  common: {
    name: "Vignesh K P",
    phone: "9600691011",
    email: "vikivignesh1704@gmail.com",
    linkedin: "https://www.linkedin.com/in/vigneshkp1704",
    linkedinLabel: "linkedin.com/in/vigneshkp1704",
    github: "https://github.com/vikivignesh-1704",
    githubLabel: "github.com/vikivignesh-1704",
    education: [
      {
        institution: "Sethu Institute of Technology, Virudhunagar",
        degree: "B.E. in Electronics and Communication Engineering",
        duration: "2023 — Present",
        detail: "CGPA: 8.671",
      },
      {
        institution: "Nadar Higher Secondary School, Madurai",
        degree: "Higher Secondary Education",
        duration: "2023",
        detail: "72.5%",
      },
    ],
    certifications: [
      { name: "Python", issuer: "Guvi" },
      { name: "Introduction to MS Excel", issuer: "Coursera" },
      { name: "Introduction to Internet of Things", issuer: "NPTEL (Elite)" },
      { name: "Cloud Computing", issuer: "NPTEL" },
      { name: "Programming in C", issuer: "CodeChef" },
    ],
  },

  hardware: {
    modeLabel: "Hardware",
    tagline: "VLSI design and IoT engineering",
    objective:
      "To secure a challenging position in a forward-thinking organization where I can effectively apply my knowledge in VLSI design and IoT to develop smart, reliable, and energy-efficient systems — integrating hardware and software solutions, and continuously learning emerging technologies.",
    heroKeywords: ["VLSI Design", "IoT", "Embedded Systems", "Semiconductor Devices"],
    focusAreas: [
      "VLSI Design",
      "IoT",
      "Embedded Systems",
      "Semiconductor / Device Design",
      "Hardware Research",
    ],
    skills: [
      {
        category: "Languages",
        items: ["Python", "C", "Java", "HTML", "Verilog HDL"],
      },
      {
        category: "Skills",
        items: ["Web Development"],
      },
      {
        category: "Frameworks",
        items: ["Arduino"],
      },
      {
        category: "Databases",
        items: ["MySQL"],
      },
      {
        category: "Visualization / Simulation",
        items: ["Blynk", "ThingSpeak", "Fritzing", "Cadence Virtuoso", "Silvaco ATLAS (TCAD)"],
      },
      {
        category: "Professional",
        items: ["Team Collaboration", "Problem Solving"],
      },
    ],
    experience: [
      {
        role: "Embedded System Programming Intern",
        org: "Abhijith Electronic Solutions",
        duration: "May 2026 – Jun 2026",
        points: [
          "Developed and simulated basic STM32 applications using STM32CubeMX, STM32CubeIDE, and Proteus.",
          "Configured STM32 microcontroller peripherals and generated initialization code using STM32CubeMX.",
          "Simulated and tested applications including running LED, keypad interfacing, and other basic GPIO-based circuits.",
          "Gained hands-on experience with the STM32 development workflow, peripheral configuration, simulation, and debugging.",
        ],
      },
    ],
    projects: [
      {
        id: "hemt",
        name: "Design of HEMT For High Frequency Applications",
        shortName: "AlGaN/GaN HEMT",
        date: "Mar 2026",
        domain: "Semiconductor Device Design",
        summary:
          "Designed and simulated an AlGaN/GaN High Electron Mobility Transistor (HEMT) using Silvaco ATLAS (TCAD) for high-frequency RF and microwave applications.",
        tech: ["Silvaco ATLAS", "TCAD"],
        points: [
          "Designed and simulated an AlGaN/GaN High Electron Mobility Transistor (HEMT) using Silvaco ATLAS (TCAD) for high-frequency RF and microwave applications.",
          "Analyzed key device characteristics including Id-Vd, Id-Vg, transconductance (gm), threshold voltage, gate capacitances (Cgs, Cgd), and cutoff frequency (fT) through TCAD simulations.",
          "Utilized polarization engineering to achieve high-density 2DEG (Two-Dimensional Electron Gas) formation, improving electron mobility and current conduction.",
          "Evaluated the device for high-frequency communication applications, demonstrating its suitability for 5G, radar, and satellite communication systems.",
        ],
        tags: ["HEMT", "GaN", "RF/Microwave", "TCAD", "2DEG"],
      },
      {
        id: "sram",
        name: "Design and Comparative Study of 6T and 9T SRAM Cells using 90nm CMOS Technology in Cadence Virtuoso",
        shortName: "6T vs 9T SRAM Cells",
        date: "Jan 2026",
        domain: "VLSI / Digital IC Design",
        summary:
          "Designed and simulated 6T and 9T SRAM cells using 90 nm CMOS technology in Cadence Virtuoso to evaluate memory performance and reliability.",
        tech: ["Cadence Virtuoso", "90nm CMOS"],
        points: [
          "Designed and simulated 6T and 9T SRAM cells using 90 nm CMOS technology in Cadence Virtuoso to evaluate memory performance and reliability.",
          "Performed comparative analysis of power consumption, read/write delay, leakage power, and read stability between conventional 6T and proposed 9T SRAM architectures.",
          "Implemented a dedicated read port in the 9T SRAM cell to eliminate read disturbance and improve Static Noise Margin (SNM).",
          "Validated the designs using Cadence Virtuoso, DC, and power simulations under identical operating conditions.",
        ],
        tags: ["SRAM", "CMOS", "Memory Design", "Cadence Virtuoso"],
      },
      {
        id: "alu",
        name: "Design of a Low-Power 4-Bit Arithmetic Logic Unit (ALU) Using Cadence Virtuoso (90 nm CMOS)",
        shortName: "4-Bit Low-Power ALU",
        date: "Nov 2025",
        domain: "VLSI / Digital IC Design",
        summary:
          "Designed and implemented a low-power 4-bit Arithmetic Logic Unit (ALU) at the transistor level using 90 nm CMOS technology in the Cadence Virtuoso platform.",
        tech: ["Cadence Virtuoso", "90nm CMOS"],
        points: [
          "Designed and implemented a low-power 4-bit Arithmetic Logic Unit (ALU) at the transistor level using 90 nm CMOS technology in the Cadence Virtuoso platform.",
          "Developed and integrated CMOS-based NAND, NOR, XOR, XNOR, Full Adder, Binary-to-Gray Code Converter, 2×1 MUX, and 4×1 MUX to build a hierarchical ALU architecture.",
          "Implemented 8 arithmetic and logical operations — Addition, 1's Complement, XOR, NOR, XNOR, NAND, OR, and Binary-to-Gray Code Conversion — using a multiplexer-based control architecture.",
          "Verified functionality through Cadence Virtuoso simulations and evaluated power, propagation delay, and silicon area.",
        ],
        tags: ["ALU", "CMOS", "Transistor-Level Design", "Cadence Virtuoso"],
      },
    ],
    publications: [
      {
        id: "pub1",
        title: "Performance Analysis of 6T and 9T SRAM Cells in 90 nm CMOS Technology",
        status: "Accepted for Presentation",
        conference:
          "International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (IC(SEC)² 2026)",
        venue: "PSG Institute of Technology and Applied Research, Coimbatore, India",
        dates: "Aug 28–29, 2026",
      },
      {
        id: "pub2",
        title:
          "Design and Optimization of Low Power 4-Bit ALU Using CMOS Technology in Cadence Virtuoso Platform",
        status: "Accepted for Presentation",
        conference:
          "International Conference on Smart Systems for Electrical, Electronics, Communication and Computer Engineering (IC(SEC)² 2026)",
        venue: "PSG Institute of Technology and Applied Research, Coimbatore, India",
        dates: "Aug 28–29, 2026",
      },
    ],
    resumeFile: "assets/resumes/Vignesh_KP_Hardware_Resume.pdf",
  },

  software: {
    modeLabel: "Software",
    tagline: "Software development and frontend engineering",
    objective:
      "Dedicated and detail-oriented Software Developer with a passion for building efficient, scalable, and user-centric applications — with a strong foundation in programming, web development, and problem-solving, and a continuous learning mindset toward emerging technologies.",
    heroKeywords: ["Web Development", "React.js", "Frontend Engineering", "Problem Solving"],
    focusAreas: [
      "Software Development",
      "Web Development",
      "Frontend Development",
      "Programming",
      "AI-Assisted Development",
    ],
    skills: [
      {
        category: "Languages",
        items: ["Python", "C", "Java", "JavaScript"],
      },
      {
        category: "Frontend Technologies",
        items: ["HTML", "CSS", "React.js"],
      },
      {
        category: "Skills",
        items: ["Web Development", "Responsive Web Design"],
      },
      {
        category: "Databases",
        items: ["SQL", "MySQL", "Firebase (Beginner)"],
      },
      {
        category: "Tools and Platforms",
        items: ["Git", "GitHub", "VS Code"],
      },
      {
        category: "Professional",
        items: ["Team Collaboration", "Problem Solving"],
      },
    ],
    experience: [
      {
        role: "Frontend AI Engineering Intern",
        org: "FlyrankAI (Virtual)",
        duration: "Jul 2026 – Present",
        points: [
          "Learning to develop responsive web applications using modern frontend technologies and AI-assisted development tools.",
          "Building and improving user interface components with a focus on responsiveness, usability, and performance.",
          "Utilizing AI tools to accelerate frontend development, code generation, debugging, and optimization.",
          "Gaining practical experience in frontend application development by implementing modern web development practices.",
          "Collaborating in a virtual work environment while enhancing problem-solving and software development skills.",
        ],
      },
    ],
    projects: [
      {
        id: "survey",
        name: "Survey Application",
        shortName: "Survey Application",
        date: null,
        domain: "Web Application",
        summary:
          "A responsive Survey Application for collecting user feedback through an interactive interface.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/vikivignesh-1704/survey-app",
        points: [
          "Developed a responsive Survey Application for collecting user feedback through an interactive interface.",
          "Designed user-friendly forms with input validation to ensure accurate data collection.",
          "Implemented a clean and responsive UI for seamless access across different devices.",
          "Enhanced user experience through simple navigation and organized form layout.",
          "Applied modern frontend development practices to build a maintainable web application.",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Forms & Validation"],
      },
      {
        id: "translator",
        name: "Language Translator Website",
        shortName: "Language Translator",
        date: null,
        domain: "Web Application",
        summary:
          "A Language Translator Website built with React.js featuring a simple, responsive interface for translating text between multiple languages.",
        tech: ["React.js", "JavaScript"],
        github: "https://github.com/vikivignesh-1704/Translator",
        points: [
          "Developed a Language Translator Website using React.js with a simple and responsive user interface.",
          "Enabled users to translate text between multiple languages through an intuitive interface.",
          "Built reusable React components to improve code organization and maintainability.",
          "Focused on responsive design to provide a consistent experience across devices.",
          "Improved frontend development skills by implementing a real-world React application.",
        ],
        tags: ["React.js", "JavaScript", "Reusable Components"],
      },
    ],
    resumeFile: "assets/resumes/Vignesh_KP_Software_Resume.pdf",
  },
};

// Expose for non-module usage
window.portfolioData = portfolioData;
