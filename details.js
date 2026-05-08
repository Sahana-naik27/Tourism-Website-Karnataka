const placeDetails = {
  Hampi: {
    description:
      "Hampi is an open-air museum of the Vijayanagara Empire, where giant boulders, temple ruins, royal complexes, and riverside ghats create a magical historical landscape. It is ideal for architecture lovers, photographers, and slow travelers who enjoy sunrise viewpoints and heritage walks.",
    things: [
      "Explore ancient temples and ruins",
      "Take a coracle ride on Tungabhadra River",
      "Hike to Matanga Hill for sunrise",
      "Visit the Stone Chariot at Vittala Temple",
      "Bike around the boulder-strewn landscape"
    ],
    attractions: [
      "Virupaksha Temple",
      "Vittala Temple and Stone Chariot",
      "Matanga Hill Sunrise Point",
      "Hemakuta Hill Temples",
      "Tungabhadra Riverside Coracle Rides"
    ],
    tips: [
      "Start early to avoid midday heat and crowds.",
      "Rent a bicycle or scooter for easier site exploration.",
      "Carry water, sunscreen, and comfortable walking shoes.",
      "Stay near the river side for sunrise and sunset views."
    ],
    food: ["Bisi Bele Bath", "Ragi Mudde", "Maddur Vada", "South Indian Thali", "Filter Coffee"]
  },
  Coorg: {
    description:
      "Coorg, also known as Kodagu, is a misty hill destination famous for coffee plantations, rainforest trails, and serene valley viewpoints. The town offers a calm blend of nature, local culture, and plantation stays with cool weather almost all year round.",
    things: [
      "Visit coffee plantations and learn about coffee making",
      "Trek through rainforest trails",
      "Enjoy river rafting in Barapole River",
      "Explore Dubare Elephant Camp",
      "Take scenic drives through misty hills"
    ],
    attractions: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp", "Talacauvery", "Nisargadhama"],
    tips: [
      "Pack a light jacket; evenings can be cool.",
      "Visit coffee estates in the morning for best weather.",
      "Keep cash handy in remote hill areas.",
      "Avoid monsoon treks without local guidance."
    ],
    food: ["Pandi Curry", "Akki Roti", "Kadumbuttu", "Bamboo Shoot Curry", "Coorg Honey"]
  },
  "Mysore Palace": {
    description:
      "Mysore Palace is one of India's most iconic royal residences, celebrated for its Indo-Saracenic architecture, grand halls, and illuminated evening facade. The city around it offers a rich cultural atmosphere with silk, sandalwood, and traditional markets.",    things: [
      "Explore the illuminated palace at night",
      "Visit the Devaraja Market for shopping",
      "Take a guided tour of the palace interiors",
      "Visit nearby Chamundi Hills",
      "Explore the Mysore Zoo and gardens"
    ],    attractions: ["Mysore Palace", "Chamundi Hills", "St. Philomena's Church", "Devaraja Market", "Brindavan Gardens"],
    tips: [
      "Visit the palace in evening for illumination.",
      "Book tickets early during Dasara season.",
      "Dress modestly while visiting religious sites.",
      "Try a guided city tour for historical context."
    ],
    food: ["Mysore Pak", "Mysore Masala Dosa", "Idli-Vada", "Kesari Bath", "Filter Coffee"]
  },
  Gokarna: {
    description:
      "Gokarna combines spiritual charm with relaxed coastal beauty. You can visit ancient temples in the town and then head to cliffside beaches for sunsets, water activities, and peaceful evenings by the Arabian Sea.",
    things: [
      "Relax on pristine beaches like Om and Kudle",
      "Visit the ancient Mahabaleshwar Temple",
      "Go for cliffside walks and hikes",
      "Try water sports and surfing",
      "Explore the laid-back beach town vibe"
    ],
    attractions: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple", "Half Moon Beach", "Paradise Beach"],
    tips: [
      "Carry flip-flops for beach hikes and short trails.",
      "Plan cliff walks before sunset for safer return.",
      "Respect temple dress codes while in town.",
      "Use reusable bottles to reduce plastic waste."
    ],
    food: ["Neer Dosa", "Fish Curry", "Prawn Ghee Roast", "Kori Rotti", "Coconut-based Seafood Thali"]
  },
  Chikmagalur: {
    description:
      "Chikmagalur is a lush highland retreat known for mountain drives, coffee estates, and trekking trails in the Western Ghats. It is perfect for weekend getaways with cool breezes, waterfalls, and panoramic viewpoints.",
    things: [
      "Trek to Mullayanagiri Peak",
      "Visit coffee plantations and museums",
      "Explore waterfalls like Hebbe and Manikyadhara",
      "Go for nature walks in the Western Ghats",
      "Enjoy bird watching and wildlife spotting"
    ],
    attractions: ["Mullayanagiri Peak", "Baba Budangiri", "Hebbe Falls", "Hirekolale Lake", "Coffee Museum"],
    tips: [
      "Begin treks early for clear mountain views.",
      "Check road conditions during rainy periods.",
      "Hire local jeeps for difficult off-road stretches.",
      "Carry insect repellent for plantation trails."
    ],
    food: ["Malnad Chicken Curry", "Kotte Kadubu", "Pathrode", "Jackfruit Idli", "Fresh Estate Coffee"]
  },
  Sringeri: {
    description:
      "Sringeri is a serene temple town on the banks of the Tunga River, known for spiritual heritage, ancient architecture, and tranquil surroundings. It offers a deeply peaceful atmosphere for pilgrims and mindful travelers.",
    things: [
      "Visit the ancient Sharadamba Temple",
      "Take a peaceful walk along Tunga River ghats",
      "Participate in temple rituals and prayers",
      "Explore the Sringeri Math complex",
      "Enjoy the serene temple town atmosphere"
    ],
    attractions: ["Sharadamba Temple", "Vidyashankara Temple", "Tunga River Ghats", "Sringeri Math", "Nearby Sirimane Falls"],
    tips: [
      "Visit temples in the morning for peaceful darshan.",
      "Keep silence in prayer and meditation zones.",
      "Wear comfortable footwear for riverside walks.",
      "Check festival schedules for cultural experiences."
    ],
    food: ["Temple Prasadam Meals", "Lemon Rice", "Curd Rice", "Uppittu", "Sweet Pongal"]
  },
  "Jog Falls": {
    description:
      "Jog Falls is one of India's tallest segmented waterfalls, where the Sharavathi River plunges dramatically through dense green valleys. During the monsoon and post-monsoon months, the roaring water and viewpoints create a spectacular nature experience.",
    things: [
      "View the waterfalls from multiple viewpoints",
      "Take boat rides near the falls",
      "Hike to the base of the waterfalls",
      "Explore the surrounding forests",
      "Visit the nearby Linganamakki Dam"
    ],
    attractions: ["Main Viewpoint Deck", "Watkins Platform", "Raja-Salute-Roarer-Rocket Streams", "Sharavathi Valley", "Nearby Linganamakki Dam"],
    tips: [
      "Visit post-monsoon for the most powerful flow.",
      "Carry rain protection during wet months.",
      "Use non-slip shoes at viewpoint steps.",
      "Reach before noon for better visibility and photos."
    ],
    food: ["Mangalore Buns", "Banana Chips", "Kadle Manoli", "Ragi Balls with Curry", "Coastal Seafood Meals"]
  },
  Shravanabelagola: {
      
    description:
      "Shravanabelagola is an important Jain pilgrimage destination featuring the majestic monolithic statue of Bahubali atop Vindhyagiri Hill. The climb, temple architecture, and peaceful ambience make it a unique blend of history and spirituality.",
    things: [
      "Climb Vindhyagiri Hill to see the Bahubali statue",
      "Explore Jain temples and basadis",
      "Learn about Jain history and philosophy",
      "Visit Chandragiri Hill for more monuments",
      "Experience the peaceful pilgrimage atmosphere"
    ],
    attractions: ["Bahubali Monolith", "Vindhyagiri Hill", "Chandragiri Hill", "Jain Basadis", "Ancient Inscriptions"],
    tips: [
      "Start hill climb early to avoid strong sun.",
      "Carry water but travel light for steps.",
      "Follow temple rules and maintain cleanliness.",
      "Take breaks while descending steep sections."
    ],
    food: ["Vegetarian Jain Meals", "Akki Roti", "Puliogare", "Kosambari", "Holige"]
  }
};

const params = new URLSearchParams(window.location.search);
const selectedPlace = params.get("place");
const placeTitle = document.getElementById("placeTitle");
const pageHeader = document.getElementById("pageHeader");
const heroBg = document.getElementById("heroBg");
const heroSubtitle = document.getElementById("heroSubtitle");
const descriptionText = document.getElementById("descriptionText");
const attractionsList = document.getElementById("attractionsList");
const tipsList = document.getElementById("tipsList");
const foodList = document.getElementById("foodList");
const thingsList = document.getElementById("thingsList");
const gallery = document.getElementById("gallery");
const gallerySection = document.querySelector(".gallery-section");
const directionsButton = document.getElementById("directionsButton");

const placeholderTravelImage = 'https://source.unsplash.com/900x600/?travel,landscape&sig=placeholder';
const galleryPlaceholderImage = document.querySelector(".placeholder-card img");
if (galleryPlaceholderImage) {
  galleryPlaceholderImage.src = placeholderTravelImage;
}

const heroImages = {
  Hampi: 'https://www.stayvista.com/blog/wp-content/uploads/2024/09/Hampi_karnataka.jpg',
  Coorg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZw_62eBzR9ZIygO0Y6SDsF2ZdGCgB8lv3w&s',
  'Mysore Palace': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRErTsy_bKYY8Pdzdv7YDOtHmai5XPy6YKQ&s',
  Gokarna: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80',
  Chikmagalur: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=80',
  Sringeri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3e10_opQiY0OMGx-qZyhMdBMfboCs26hxlg&s',
  'Jog Falls': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREm5IJefG3U9Noi80wyAiWqSKpNq7Hc_qpcg&s',
  Shravanabelagola: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzhRB6A2vABQ4SL6Z3vWlXBfcvfX-9X0LRA&s'
};
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

const fallbackPlace = "Hampi";
const currentPlace = placeDetails[selectedPlace] ? selectedPlace : fallbackPlace;
const currentData = placeDetails[currentPlace];

document.title = `${currentPlace} - Travel Details`;
placeTitle.textContent = currentPlace;
if (descriptionText) {
  descriptionText.textContent = currentData.description;
}
const directionsLabel = `Get Directions to ${currentPlace}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${currentPlace}, Karnataka`)}&travelmode=driving`;
if (directionsButton) {
  directionsButton.href = directionsUrl;
  directionsButton.target = '_blank';
  directionsButton.innerHTML = `
    <span class="directions-icon">📍</span>
    <span>${directionsLabel}</span>
  `;
  directionsButton.setAttribute('aria-label', directionsLabel + ' on Google Maps');
  directionsButton.addEventListener('click', event => {
    event.preventDefault();
    window.open(directionsUrl, '_blank', 'noopener,noreferrer');
  });
}

pageHeader.classList.add("place-hero");
heroBg.style.backgroundImage = `url('${heroImages[currentPlace] || heroImages['Hampi']}')`;
heroSubtitle.textContent = `Discover the highlights of ${currentPlace}`;

function renderList(listElement, items) {
  listElement.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function renderGallery(placeName) {
  const hampiGallery = [
    { caption: "Virupaksha Temple", keyword: "Virupaksha Temple Hampi" },
    { caption: "Vittala Temple and Stone Chariot", keyword: "Vittala Temple Stone Chariot Hampi" },
    { caption: "Matanga Hill Sunrise Point", keyword: "Matanga Hill Sunrise Hampi" },
    { caption: "Hemakuta Hill Temples", keyword: "Hemakuta Hill Temples Hampi" },
    { caption: "Tungabhadra River Coracle Ride", keyword: "Coracle Ride Tungabhadra River Hampi" }
  ];
  const coorgGallery = [
    { caption: "Abbey Falls", keyword: "Abbey Falls Coorg" },
    { caption: "Raja's Seat", keyword: "Raja's Seat Coorg" },
    { caption: "Dubare Elephant Camp", keyword: "Dubare Elephant Camp Coorg" },
    { caption: "Talacauvery", keyword: "Talacauvery Coorg" },
    { caption: "Coffee Plantations", keyword: "Coffee Plantations Coorg" }
  ];
  const mysoreGallery = [
    { caption: "Mysore Palace", keyword: "Mysore Palace" },
    { caption: "Chamundi Hills", keyword: "Chamundi Hills Mysore" },
    { caption: "St. Philomena's Church", keyword: "St Philomena's Church Mysore" },
    { caption: "Devaraja Market", keyword: "Devaraja Market Mysore" },
    { caption: "Brindavan Gardens", keyword: "Brindavan Gardens Mysore" }
  ];
  const gokarnaGallery = [
    { caption: "Om Beach", keyword: "Om Beach Gokarna" },
    { caption: "Kudle Beach", keyword: "Kudle Beach Gokarna" },
    { caption: "Mahabaleshwar Temple", keyword: "Mahabaleshwar Temple Gokarna" },
    { caption: "Half Moon Beach", keyword: "Half Moon Beach Gokarna" },
    { caption: "Paradise Beach", keyword: "Paradise Beach Gokarna" }
  ];
  const chikmagalurGallery = [
    { caption: "Mullayanagiri Peak", keyword: "Mullayanagiri Peak Chikmagalur" },
    { caption: "Baba Budangiri", keyword: "Baba Budangiri Chikmagalur" },
    { caption: "Hebbe Falls", keyword: "Hebbe Falls Chikmagalur" },
    { caption: "Hirekolale Lake", keyword: "Hirekolale Lake Chikmagalur" },
    { caption: "Coffee Museum", keyword: "Coffee Museum Chikmagalur" }
  ];
  const sringeriGallery = [
    { caption: "Sharadamba Temple", keyword: "Sharadamba Temple Sringeri" },
    { caption: "Vidyashankara Temple", keyword: "Vidyashankara Temple Sringeri" },
    { caption: "Tunga River Ghats", keyword: "Tunga River Ghats Sringeri" },
    { caption: "Sringeri Math", keyword: "Sringeri Math" },
    { caption: "Sirimane Falls", keyword: "Sirimane Falls Sringeri" }
  ];
  const jogFallsGallery = [
    { caption: "Main Viewpoint Deck", keyword: "Jog Falls Main Viewpoint Deck" },
    { caption: "Watkins Platform", keyword: "Jog Falls Watkins Platform" },
    { caption: "Raja-Salute-Roarer-Rocket Streams", keyword: "Jog Falls Raja Salute Roarer Rocket" },
    { caption: "Sharavathi Valley", keyword: "Sharavathi Valley Jog Falls" },
    { caption: "Linganamakki Dam", keyword: "Linganamakki Dam Jog Falls" }
  ];
  const shravanabelagolaGallery = [
    { caption: "Bahubali Monolith", keyword: "Bahubali Monolith Shravanabelagola" },
    { caption: "Vindhyagiri Hill", keyword: "Vindhyagiri Hill Shravanabelagola" },
    { caption: "Chandragiri Hill", keyword: "Chandragiri Hill Shravanabelagola" },
    { caption: "Jain Basadis", keyword: "Jain Basadis Shravanabelagola" },
    { caption: "Ancient Inscriptions", keyword: "Ancient Inscriptions Shravanabelagola" }
  ];

  const fallbackGallery = [1, 2, 3, 4, 5].map(index => ({
    caption: `${placeName} View ${index}`,
    keyword: `${placeName} Karnataka travel`
  }));

  let galleryItems = fallbackGallery;
  if (placeName === "Hampi") galleryItems = hampiGallery;
  if (placeName === "Coorg") galleryItems = coorgGallery;
  if (placeName === "Mysore Palace") galleryItems = mysoreGallery;
  if (placeName === "Gokarna") galleryItems = gokarnaGallery;
  if (placeName === "Chikmagalur") galleryItems = chikmagalurGallery;
  if (placeName === "Sringeri") galleryItems = sringeriGallery;
  if (placeName === "Jog Falls") galleryItems = jogFallsGallery;
  if (placeName === "Shravanabelagola") galleryItems = shravanabelagolaGallery;

  gallerySection.classList.toggle("heritage-gallery", placeName === "Hampi");
  gallerySection.classList.toggle("nature-gallery", placeName === "Coorg");
  gallerySection.classList.toggle("royal-gallery", placeName === "Mysore Palace");
  gallerySection.classList.toggle("beach-gallery", placeName === "Gokarna");
  gallerySection.classList.toggle("coffee-gallery", placeName === "Chikmagalur");
  gallerySection.classList.toggle("temple-gallery", placeName === "Sringeri");
  gallerySection.classList.toggle("waterfall-gallery", placeName === "Jog Falls");
  gallerySection.classList.toggle("spiritual-gallery", placeName === "Shravanabelagola");

  const imageItems = galleryItems.map((item, index) => `
    <figure class="gallery-card">
      <img
        src="https://source.unsplash.com/900x600/?${encodeURIComponent(item.keyword)}&sig=${index + 1}"
        alt="${item.caption}"
        loading="lazy"
        data-index="${index}"
      />
      <figcaption>${item.caption}</figcaption>
    </figure>
  `);
  gallery.innerHTML = imageItems.join("");
}

function openLightbox(index) {
  lightboxImage.src = imageSources[index];
  lightboxImage.alt = imageAlts[index];
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  currentImageIndex = index;
}

function closeModal() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

function changeImage(step) {
  currentImageIndex = (currentImageIndex + step + imageSources.length) % imageSources.length;
  lightboxImage.src = imageSources[currentImageIndex];
  lightboxImage.alt = imageAlts[currentImageIndex];
}

let imageSources = [];
let imageAlts = [];
let currentImageIndex = 0;

renderList(attractionsList, currentData.attractions);
renderList(tipsList, currentData.tips);
renderList(foodList, currentData.food);
renderList(thingsList, currentData.things);
renderGallery(currentPlace);

const galleryImages = [...gallery.querySelectorAll("img")];
imageSources = galleryImages.map(img => img.src);
imageAlts = galleryImages.map(img => img.alt);

gallery.addEventListener("click", event => {
  const clickedImage = event.target.closest("img");
  if (!clickedImage) return;
  openLightbox(Number(clickedImage.dataset.index));
});

closeLightbox.addEventListener("click", closeModal);
prevImage.addEventListener("click", () => changeImage(-1));
nextImage.addEventListener("click", () => changeImage(1));

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeModal();
});

document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowLeft") changeImage(-1);
  if (event.key === "ArrowRight") changeImage(1);
});

window.addEventListener("scroll", () => {
  if (!pageHeader.classList.contains("hampi-hero")) return;
  const scrollY = window.scrollY;
  const yShift = Math.min(scrollY * 0.28, 120);
  const scale = 1.03 + Math.min(scrollY * 0.00025, 0.08);
  heroBg.style.transform = `translateY(${yShift}px) scale(${scale})`;
});
