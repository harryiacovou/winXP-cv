// Single source of truth for all CV content.
// Every CV app (AboutMe, Resume, Skills, Projects, Contact) imports from here,
// so the data lives in exactly one place. Lifted from the original index.html.

export const profile = {
  name: 'Harry Michael-Iacovou',
  title: 'Software Engineer',
  // photo.webp / hmi.svg are served from /public so a missing file never breaks
  // the build. Drop your image in there and it appears automatically.
  photo: `${process.env.PUBLIC_URL}/photo.webp`,
};

export const about = [
  'I am a first-class Computer Science graduate from Lancaster University and software engineer with nearly two years of experience building enterprise solutions in the global compensation space.',
  'At Aethersys, I contribute to the development of VialtoComp, Vialto Partners’ global compensation management platform. My work focuses on the equity domain, where I design and implement features for importing and managing complex award compensation data from major share plan administrators, including stock vesting, option exercises, and cash awards.',
  "I'm particularly interested in full-stack development and building reliable systems that solve real-world problems. I enjoy working in collaborative teams, learning quickly in complex domains, and delivering high-quality software that creates value for users.",
];

export const contact = {
  email: 'harry@harrymi.co.uk',
  location: 'London, UK',
  linkedin: {
    label: 'harry-iacovou',
    url: 'https://www.linkedin.com/in/harry-iacovou/',
  },
  github: {
    label: 'harryiacovou',
    url: 'https://github.com/harryiacovou',
  },
};

export const experience = [
  {
    role: 'Software Analyst (A2)',
    org: 'Aethersys, London, UK',
    period: 'Aug 2024 - Present',
    detail:
      'Contribute to the development of VialtoComp, Vialto Partners’ global compensation management platform, used by multinational organisations to manage complex payroll and equity compensation processes. Promoted to A2 level in January 2026.',
  },
  {
    role: 'Undergraduate Teaching Assistant',
    org: 'Lancaster University, UK',
    period: 'Oct 2022 - Apr 2024',
    detail:
      'Supported 1st and 2nd-year Computer Science students in practical sessions covering fundamentals, data structures, and software development.',
  },
  {
    role: 'Work Experience / C# and React Development',
    org: 'Aethersys, London, UK',
    period: 'Jul 2023 - Sep 2023',
    detail:
      'Gained experience in creating financial software using React, C#, and JavaScript. Worked on version control, testing, and database management.',
  },
  {
    role: 'IT Operations Assistant',
    org: 'Lancaster University, UK',
    period: 'Apr 2022 - Jun 2022',
    detail:
      'Ensured smooth running of IT services, tested equipment in teaching spaces, and managed workshop tasks like software updates.',
  },
];

export const education = [
  {
    qualification: 'BSc (Hons) Computer Science',
    org: 'Lancaster University',
    period: 'Oct 2021 - Jul 2024',
    detail:
      'Achieved First-Class Honours. Dissertation on using AI to classify network traffic. Also took a minor in Accounting & Finance.',
  },
  {
    qualification: 'A-Levels',
    org: 'Langley Park School for Boys',
    period: '2018 - 2021',
    detail: 'Computer Science (A), Media Studies (B), Politics (C)',
  },
];

// Categorised skills (text groupings from the original CV).
export const skillGroups = [
  {
    category: 'Frontend',
    items: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS',
  },
  {
    category: 'Backend',
    items: 'C#, Java, Python, C, SQL (SQLite, SQL Server, PostgreSQL)',
  },
  { category: 'Languages', items: 'English (Native), Greek (Basic)' },
];

// Proficiency levels, used by the Skills app for the progress-bar /
// defragmenter visualisations.
export const proficiency = [
  { name: 'C#', level: 90 },
  { name: 'React/TS', level: 80 },
  { name: 'SQL', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'Python', level: 70 },
  { name: 'C', level: 50 },
];

export const interests = ['Traveling', 'Cycling', 'Film', 'Music', 'Fishing'];

export const projects = [
  {
    name: 'This CV (Windows XP edition)',
    detail: 'The site you are looking at — a React recreation of Windows XP.',
    url: 'https://github.com/harryiacovou/winXP-cv',
  },
  {
    name: 'wordguess-cli',
    detail: 'A command-line word-guessing game.',
    url: 'https://github.com/harryiacovou/wordguess-cli',
  },
  {
    name: 'HOI4 Music Manager',
    detail: 'A custom music mod manager for Hearts of Iron IV.',
    url: 'https://github.com/harryiacovou/HOI4-Music-Manager',
  },
  {
    name: 'SelfAssess',
    detail: 'A tool to simplify submitting your UK self assessment.',
    url: 'https://github.com/harryiacovou/SelfAssess',
  },
  {
    name: 'WhatDidIDo',
    detail: 'GitHub commit summaries for effortless timesheets.',
    url: 'https://github.com/harryiacovou/WhatDidIDo',
  },
  {
    name: 'GitHub',
    detail: 'All my personal projects and experiments.',
    url: 'https://github.com/harryiacovou',
  },
];
