module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':"url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
        'hero-img': "url('https://img.freepik.com/free-vector/female-student-studying-with-laptop_74855-2396.jpg?t=st=1714360193~exp=1714363793~hmac=8a8bdd8cee89e5a3a2d05931db3c775a9365a4e5c7bbf95f5d675b88b1e7f932&w=996')" ,
        'hero-calender' : "url('https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_23-2149170411.jpg?t=st=1717005561~exp=1717009161~hmac=a0a6faa2fcfd11d24e72576acaa76e669dcffec5c8a3e16f2480922c9dfb329f&w=1380')",
        'hero-taskboard' : "url('https://img.freepik.com/free-vector/flat-scrum-task-board-with-color-stick-paper-notes_88138-931.jpg?w=2000&t=st=1717005427~exp=1717006027~hmac=c86ded4b3118cf09c7e2c24ce1c7cecb98a60ab8d4fb1948e6871eb3cc1d338f')",
        'hero-timer' : "url('https://www.sumopayroll.com/wp-content/uploads/2023/12/Timeclock-Biomatric01.jpg')",
      },
    },
  },
  plugins: [],
};
