const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    // Close other open items
    faqItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      }
    });

    // Toggle current item
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

const whyItems = document.querySelectorAll('.why-item');

whyItems.forEach(item => {
  const question = item.querySelector('.why-question');
  const answer = item.querySelector('.why-answer');

  question.addEventListener('click', () => {
    // Close other open items
    whyItems.forEach(i => {
      if (i !== item) {
        i.classList.remove('active');
        i.querySelector('.why-answer').style.maxHeight = null;
      }
    });

    // Toggle current item
    item.classList.toggle('active');
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});