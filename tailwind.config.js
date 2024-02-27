/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    borderColor:{
      "custom":'#ffc7b1',
      'purple':'#8E7AB5',
      'purple1':'B784B7',
      'purple2':'E493B3'

    },
    backgroundColor:{
      "bg":"#d0a15e",
      'purple':'#8E7AB5',
      'pink':'#B784B7',
      'ligthpink':'#E493B3',
      'mild':'#F3D7CA',
      'mild1':'#F5EEE6',
      'mild2':'#FFF8E3',
      'bule':'#9290C3',
      'bule1':'#040429',
      'yellowgreen':'#bfe423',
      'newback':'#070F2B',
      'ligthgrey':'#04293A',
      'ligthergrey':'#9290C3',
      'newblue':'#424769',
      'skyblue':'#40A2D8',
      'back':'#164B60',
      'back1':'#1B6B93'

    },
    textColor:{
      "custom":"#d0a15e",
    },
    backgroundImage: {
      'satellite_banner': "url('/src/Images/BXNA.gif')",
      'aboutus': "url('/src/Images/Banner/aboutusbanner.jpg')",
      'history':"url('/src/Images/Banner/historybanner.jpg')",
      'partnership':"url('/src/Images/Banner/partnershipbanner.jpg')",
    }
  },
};

export const plugins = [];

