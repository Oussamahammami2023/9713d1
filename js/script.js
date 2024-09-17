document.addEventListener('DOMContentLoaded', function() {
      const container = document.querySelector('.group-container-1-2');
      const groups = Array.from(container.children); // تحويل العناصر إلى مصفوفة
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
      { name: "Ben Arous", link: "https://example.com/groupe4", subtitle: "+0" },
      { name: "Nabeul", link: "https://example.com/groupe5", subtitle: "+0" },
      { name: "Zaghouan", link: "https://example.com/groupe6", subtitle: "+0" },
      { name: "Sousse", link: "https://example.com/groupe7", subtitle: "+0" },
      { name: "Monastir", link: "https://example.com/groupe8", subtitle: "+0" },
      { name: "Mahdia", link: "https://example.com/groupe9", subtitle: "+0" },
      { name: "Bizerte", link: "https://example.com/groupe10", subtitle: "+0" },
      { name: "Beja", link: "https://example.com/groupe11", subtitle: "+0" },
      { name: "Le kef", link: "https://example.com/groupe12", subtitle: "+0" },
      { name: "Jendouba", link: "https://example.com/groupe13", subtitle: "+0" },
      { name: "Siliana", link: "https://example.com/groupe14", subtitle: "+0" },
      { name: "Kairouan", link: "https://example.com/groupe15", subtitle: "+0" },
      { name: "Sfax", link: "https://example.com/groupe16", subtitle: "+0" },
      { name: "Kasserine", link: "https://example.com/groupe17", subtitle: "+0" },
      { name: "Sidi Bouzid", link: "https://example.com/groupe18", subtitle: "+0" },
      { name: "Gafsa", link: "https://example.com/groupe19", subtitle: "+0" },
      { name: "Tozeur", link: "https://example.com/groupe20", subtitle: "+0" },
      { name: "Kebili", link: "https://example.com/groupe21", subtitle: "+0" },
      { name: "Gabès", link: "https://example.com/groupe22", subtitle: "+0" },
      { name: "Médenine", link: "https://example.com/groupe23", subtitle: "+0" },
      { name: "Tataouine", link: "https://example.com/groupe24", subtitle: "+0" }
   ],
     Électroniques: [
      { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
      { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
      { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
      { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
      { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
      { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
      { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
      { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
      { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
      { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
      { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
      { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
      { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
      { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
      { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
      { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
      { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
      { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
      { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
      { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
      { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
      { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
      { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
      { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
    ],
    Santé & Beauté: [
      { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
      { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
      { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
      { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
      { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
      { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
      { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
      { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
      { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
      { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
      { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
      { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
      { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
      { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
      { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
      { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
      { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
      { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
      { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
      { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
      { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
      { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
      { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
      { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
    ],
    Meuble & Décoration: [
      { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
      { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
      { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
      { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
      { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
      { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
      { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
      { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
      { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
      { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
      { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
      { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
      { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
      { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
      { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
      { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
      { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
      { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
      { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
      { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
      { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
      { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
      { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
      { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
    ],
  Cuisine & Électroménager: [
      { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
      { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
      { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
      { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
      { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
      { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
      { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
      { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
      { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
      { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
      { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
      { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
      { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
      { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
      { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
      { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
      { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
      { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
      { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
      { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
      { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
      { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
      { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
      { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
    ],
    Équipement industriel: [
      { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
      { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
      { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
      { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
      { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
      { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
      { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
      { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
      { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
      { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
      { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
      { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
      { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
      { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
      { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
      { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
      { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
      { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
      { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
      { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
      { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
      { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
      { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
      { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
    ],
Auto & Moto: [
    { "name": "Tunis", "link": "https://example.com/groupe1", "subtitle": "+0" },
    { "name": "Ariana", "link": "https://example.com/groupe2", "subtitle": "+0" },
    { "name": "Manouba", "link": "https://example.com/groupe3", "subtitle": "+0" },
    { "name": "Ben Arous", "link": "https://example.com/groupe4", "subtitle": "+0" },
    { "name": "Nabeul", "link": "https://example.com/groupe5", "subtitle": "+0" },
    { "name": "Zaghouan", "link": "https://example.com/groupe6", "subtitle": "+0" },
    { "name": "Sousse", "link": "https://example.com/groupe7", "subtitle": "+0" },
    { "name": "Monastir", "link": "https://example.com/groupe8", "subtitle": "+0" },
    { "name": "Mahdia", "link": "https://example.com/groupe9", "subtitle": "+0" },
    { "name": "Bizerte", "link": "https://example.com/groupe10", "subtitle": "+0" },
    { "name": "Beja", "link": "https://example.com/groupe11", "subtitle": "+0" },
    { "name": "Le kef", "link": "https://example.com/groupe12", "subtitle": "+0" },
    { "name": "Jendouba", "link": "https://example.com/groupe13", "subtitle": "+0" },
    { "name": "Siliana", "link": "https://example.com/groupe14", "subtitle": "+0" },
    { "name": "Kairouan", "link": "https://example.com/groupe15", "subtitle": "+0" },
    { "name": "Sfax", "link": "https://example.com/groupe16", "subtitle": "+0" },
    { "name": "Kasserine", "link": "https://example.com/groupe17", "subtitle": "+0" },
    { "name": "Sidi Bouzid", "link": "https://example.com/groupe18", "subtitle": "+0" },
    { "name": "Gafsa", "link": "https://example.com/groupe19", "subtitle": "+0" },
    { "name": "Tozeur", "link": "https://example.com/groupe20", "subtitle": "+0" },
    { "name": "Kebili", "link": "https://example.com/groupe21", "subtitle": "+0" },
    { "name": "Gabès", "link": "https://example.com/groupe22", "subtitle": "+0" },
    { "name": "Médenine", "link": "https://example.com/groupe23", "subtitle": "+0" },
    { "name": "Tataouine", "link": "https://example.com/groupe24", "subtitle": "+0" }
  ]
};
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.third-group-item').forEach(item => {
        item.addEventListener('click', () => {
          const popupId = item.getAttribute('data-popup');
          const popupTemplate = document.querySelector('#popup-template');

          if (!popupTemplate) {
            console.error('Popup template not found!');
            return;
          }

          const popup = popupTemplate.cloneNode(true);
          popup.id = `popup-${popupId}`;
          popup.style.display = 'block';

          const popupTitle = popup.querySelector('.popup-title');
          if (popupTitle) {
            popupTitle.textContent = item.querySelector('h4').textContent;
          }

          const popupGroupList = popup.querySelector('.popup-group-list');
          if (popupGroupList) {
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
          }

          document.body.appendChild(popup);
          document.body.classList.add('no-scroll');

          const closeBtn = popup.querySelector('.close-btn');
          if (closeBtn) {
            closeBtn.addEventListener('click', () => {
              popup.remove();
              document.body.classList.remove('no-scroll');
            });
          }
        });
      });
    });
