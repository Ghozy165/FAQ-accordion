const data = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
];

document.addEventListener('DOMContentLoaded', (event) => {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach((item, index) => {
    const questionTitle = item.querySelector('.question-title');
    const questionButton = item.querySelector('.question-button');
    const questionIconPlus = item.querySelector('.icon-plus');
    const questionIconMinus = item.querySelector('.icon-minus');
    const answer = item.querySelector('.answer-text');
    
    questionButton.addEventListener('click', () => {
        questionIconPlus.classList.toggle('isOff');
        questionIconMinus.classList.toggle('isOff');
        questionButton.blur();
        answer.classList.toggle('isOn');
    });
    
    questionTitle.textContent = data[index].question;
    answer.textContent = data[index].answer;
  });
});