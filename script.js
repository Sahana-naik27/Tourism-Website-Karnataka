const places = [
  {
    name: 'Hampi',
    category: 'heritage',
    description: 'Ancient ruins, UNESCO temples, and giant boulder landscapes from the Vijayanagara Empire.',
    location: 'Bellary District',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOGpBu-LSPpvTVJOG7g-r9tIkwB8DlLkRuW4q0Rfw5Lw&s'
  },
  {
    name: 'Coorg',
    category: 'hillstation',
    description: 'Coffee estates, misty hills, waterfalls, and a peaceful hill station in Kodagu.',
    location: 'Kodagu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkdnHGsCZPh_GxLpQemmQDGXoZjIuagIhaLQ&s'
  },
  {
    name: 'Mysore Palace',
    category: 'heritage',
    description: 'Royal architecture, ornate interiors, and vibrant royal history in the city of palaces.',
    location: 'Mysuru',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxHVwz6gZTWOadudN-QWCLYgc_G83neHZtD2pSkKz1WA&s'
  },
  {
    name: 'Gokarna',
    category: 'nature',
    description: 'Quiet beaches, coastal cliffs, and a laid-back seaside town with spiritual energy.',
    location: 'Uttara Kannada',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrx6cbenW0JC3bcjqU3Y619_SAvqRw9_ueMQ&s'
  },
  {
    name: 'Chikmagalur',
    category: 'hillstation',
    description: 'Scenic coffee hills, trekking trails, and a cooler climate among the Western Ghats.',
    location: 'Chikmagalur',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-vWm6B-2mL7b4JQyrpU9YfQoCvvuwDeYWQg&s'
  },
  {
    name: 'Sringeri',
    category: 'temple',
    description: 'Ancient temple complex, spiritual riverside setting, and quiet meditation spaces.',
    location: 'Chikmagalur District',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5meE1JJlL5olGFZvPDHGEmASnqXCMxTPWN9B4eKFtuw&s'
  },
  {
    name: 'Jog Falls',
    category: 'nature',
    description: 'One of India’s highest waterfalls, surrounded by lush forests and dramatic cliffs.',
    location: 'Shimoga',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoAsyUZ9Qil76IHnPa6M952s5Br8cpuH-_Fxc3GFBkQ&s'
  },
  {
    name: 'Shravanabelagola',
    category: 'heritage',
    description: 'Giant monolithic statue of Lord Bahubali and a serene hilltop pilgrimage site.',
    location: 'Hassan District',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTgqk4Vx4or-FRP4u05j8_lsYDrDQGqeiQlw&s'
  }
];

const placesContainer = document.getElementById('places');
const filterButtons = document.querySelectorAll('.filter');
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroPrev = document.getElementById('heroPrev');
const heroNext = document.getElementById('heroNext');
const heroDots = document.getElementById('heroDots');
let currentSlide = 0;
let slideTimer;

function renderPlaces(filter = 'all') {
  const filtered = filter === 'all' ? places : places.filter(place => place.category === filter);
  
  // Fade out existing cards
  const existingCards = placesContainer.querySelectorAll('.place-card');
  existingCards.forEach(card => {
    card.style.animation = 'fadeOut 0.3s ease forwards';
  });
  
  // After fade out, render new cards with fade in animation
  setTimeout(() => {
    placesContainer.innerHTML = filtered.map(place => `
      <article class="card place-card" data-place="${encodeURIComponent(place.name)}" role="button" tabindex="0" aria-label="View details for ${place.name}">
        <img src="${place.image}" alt="${place.name}" loading="lazy" />
        <div class="card-body">
          <span class="badge ${place.category}">${place.category.replace(/\b[a-z]/g, char => char.toUpperCase())}</span>
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <div class="location">
            <span>📍 ${place.location}</span>
            <span>⭐ Popular</span>
          </div>
        </div>
      </article>
    `).join('');
    
    // Fade in new cards and attach click handlers
    const newCards = placesContainer.querySelectorAll('.place-card');
    newCards.forEach((card, index) => {
      card.style.animation = `fadeIn 0.5s ease forwards`;
      card.style.animationDelay = `${index * 0.08}s`;
      card.addEventListener('click', () => openPlaceDetails(decodeURIComponent(card.dataset.place)));
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openPlaceDetails(decodeURIComponent(card.dataset.place));
        }
      });
    });
  }, 300);
}

function openPlaceDetails(placeName) {
  window.location.href = `details.html?place=${encodeURIComponent(placeName)}`;
}

function renderHeroDots() {
  heroDots.innerHTML = heroSlides
    .map((_, index) => `<button class="hero-dot ${index === 0 ? 'active' : ''}" data-index="${index}" aria-label="Go to slide ${index + 1}"></button>`)
    .join('');
}

function setActiveSlide(index) {
  heroSlides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });

  [...heroDots.querySelectorAll('.hero-dot')].forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
  });

  currentSlide = index;
}

function nextSlide() {
  setActiveSlide((currentSlide + 1) % heroSlides.length);
}

function prevSlide() {
  setActiveSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
}

function restartAutoSlide() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, 4500);
}

heroPrev.addEventListener('click', () => {
  prevSlide();
  restartAutoSlide();
});

heroNext.addEventListener('click', () => {
  nextSlide();
  restartAutoSlide();
});

heroDots.addEventListener('click', event => {
  const dot = event.target.closest('.hero-dot');
  if (!dot) return;
  setActiveSlide(Number(dot.dataset.index));
  restartAutoSlide();
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderPlaces(button.dataset.category);
  });
});

renderPlaces();
renderHeroDots();
setActiveSlide(0);
restartAutoSlide();
