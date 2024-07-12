document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('mouseover', () => {
    const lock = link.querySelector('.lock');
    if (lock) {
      lock.innerHTML = '&#128275;'; // open lock
    }
  });

  link.addEventListener('mouseout', () => {
    const lock = link.querySelector('.lock');
    if (lock) {
      lock.innerHTML = '&#128274;'; // closed lock
    }
  });
});

function showArticle(button) {
  const title = button.getAttribute('data-article-title');
  const link = button.getAttribute('data-article-link');
  
  const popup = document.getElementById('popup-article');
  const popupContent = popup.querySelector('.popup-content');
  
  popupContent.querySelector('h2').innerText = title;
  popupContent.querySelector('iframe').src = link;
  
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('popup-article');
  popup.style.display = 'none';
  popup.querySelector('iframe').src = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.location-checkbox');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      const title = event.target.closest('.location-item').querySelector('h3');
      if (event.target.checked) {
        title.classList.add('highlighted');
      } else {
        title.classList.remove('highlighted');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('.location-checkbox');
  const filterBeaches = document.getElementById('filterBeaches');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (event) => {
      const title = event.target.closest('.location-item').querySelector('h3');
      if (event.target.checked) {
        title.classList.add('highlighted');
      } else {
        title.classList.remove('highlighted');
      }
    });
  });


  // filter options for beaches
  filterBeaches.addEventListener('change', () => {
    const locationItems = document.querySelectorAll('.location-item');
    locationItems.forEach(item => {
      if (filterBeaches.checked) {
        if (item.getAttribute('data-type') !== 'beach') {
          item.style.display = 'none';
        } else {
          item.style.display = 'block';
        }
      } else {
        item.style.display = 'block';
      }
    });
  });
});

 // filter options for rivers
filterRiver.addEventListener('change', () => {
  const locationItems = document.querySelectorAll('.location-item');
  locationItems.forEach(item => {
    if (filterRiver.checked) {
      if (item.getAttribute('data-type') !== 'river') {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    } else {
      item.style.display = 'block';
    }
  });
});

// filter options for forests
filterSprings.addEventListener('change', () => {
  const locationItems = document.querySelectorAll('.location-item');
  locationItems.forEach(item => {
    if (filterSprings.checked) {
      if (item.getAttribute('data-type') !== 'springs') {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    } else {
      item.style.display = 'block';
    }
  });
});

// filter options for Wildlife
filterWildlife.addEventListener('change', () => {
  const locationItems = document.querySelectorAll('.location-item');
  locationItems.forEach(item => {
    if (filterWildlife.checked) {
      if (item.getAttribute('data-type') !== 'wildlife') {
        item.style.display = 'none';
      } else {
        item.style.display = 'block';
      }
    } else {
      item.style.display = 'block';
    }
  });
});