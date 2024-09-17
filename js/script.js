document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.group-container-1-2');
  const groups = Array.from(container.children);
  let currentIndex = 0;

  function scrollGroups() {
    currentIndex = (currentIndex + 1) % groups.length;
    const groupWidth = groups[currentIndex].offsetWidth;
    const containerWidth = container.offsetWidth;
    const scrollPosition = groups[currentIndex].offsetLeft - (containerWidth / 2) + (groupWidth / 2);
    container.scrollLeft = scrollPosition;
  }

  function scrollToFirstGroup() {
    if (groups.length > 0) {
      const groupWidth = groups[0].offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition = groups[0].offsetLeft - (containerWidth / 2) + (groupWidth / 2);
      container.scrollLeft = scrollPosition;
    }
  }

  scrollToFirstGroup();
  setTimeout(function() {
    setInterval(scrollGroups, 5000);
  }, 1000);
});

const popupData = {
  Vêtements: [
    { name: "Tunis", link: "https://sites.google.com/view/tdm-a/%C3%A9lectricien", subtitle: "+0" },
    { name: "Ariana", link: "https://sites.google.com/view/tdm-a/%C3%A9lectricien", subtitle: "+0" },
    { name: "Manouba", link: "https://example.com/groupe3", subtitle: "+0" },
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.third-group-item').forEach(item => {
    item.addEventListener('click', () => {
      const popupId = item.getAttribute('data-popup');
      const popupTemplate = document.querySelector('#popup-template');

      const popup = popupTemplate.cloneNode(true);
      popup.id = `popup-${popupId}`;
      popup.style.display = 'block';

      const popupTitle = popup.querySelector('.popup-title');
      popupTitle.textContent = item.querySelector('h4').textContent;

      const popupGroupList = popup.querySelector('.popup-group-list');
      popupGroupList.innerHTML = '';

      popupData[popupId].forEach(group => {
        const groupItem = document.createElement('a');
        groupItem.className = 'popup-group-item';
        groupItem.href = group.link;

        const groupName = document.createElement('span');
        groupName.className = 'popup-group-name';
        groupName.textContent = group.name;

        const groupSubtitle = document.createElement('span');
        groupSubtitle.className = 'popup-group-subtitle';
        groupSubtitle.textContent = group.subtitle;

        groupItem.appendChild(groupName);
        groupItem.appendChild(groupSubtitle);
        popupGroupList.appendChild(groupItem);
      });

      document.body.appendChild(popup);
      document.body.classList.add('no-scroll');

      const closeBtn = popup.querySelector('.close-btn');
      closeBtn.addEventListener('click', () => {
        popup.remove();
        document.body.classList.remove('no-scroll');
      });
    });
  });
});
