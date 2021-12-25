const index = document.querySelector('.index');

if (index) {
  tippy('.contacts__tool', {
    content: "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
    interactive: true,
    trigger: 'mouseenter focus click',
  });
}
