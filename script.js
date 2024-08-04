const images = [
  {
    src:"/images/Nature/avenue-815297_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src:"/images/Nature/bridge-8800485_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src:"/images/Nature/field-6574455_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src:"/images/Nature/flowers-8763039_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/animal/bear-8845470_1280.jpg",
    keywords: "animal,  wildlife, bear",
    category: "animal",
  },
  {
    src: "images/city/alley-89197_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/animal/bengal-tiger-8013012_1280.jpg",
    keywords: "animal, lion, wildlife, tiger",
    category: "animal",
  },
  {
    src:"/images/Nature/img2.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/city/bridge-7108432_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/city/bridge-7108432_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src:"/images/Nature/img4.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/animal/bird-8918121_1280.jpg",
    keywords: "animal, , wildlife, bird",
    category: "animal",
  },
  {
    src:"/images/Nature/img5.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/animal/cat-8282097_1280.jpg",
    keywords: "animal,  wildlife, cat",
    category: "animal",
  },
  {
    src:"/images/Nature/img6.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/animal/cat-8361048_1280.jpg",
    keywords: "animal,  wildlife, cat",
    category: "animal",
  },
  {
    src:"/images/Nature/mountain-8110139_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/animal/costa-rica-8606850_1280.jpg",
    keywords: "animal,  wildlife, costa",
    category: "animal",
  },
  {
    src:"/images/Nature/sunset-8627419_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/city/city-4924252_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src:"/images/Nature/pier-8091934_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/city/city-7458934_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src:"/images/Nature/quad-7708760_1280.jpg",
    keywords:"nature, beauty, mountains. greenrey, beautifull",
    category:'nature'
  },
  {
    src: "images/city/munich-3216809_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
 
  {
    src: "images/animal/dog-8448345_1280.jpg",
    keywords: "animal,  wildlife, dog, dogs",
    category: "animal",
  },
  {
    src: "images/animal/wolf-8089783_1280.jpg",
    keywords: "animal, wildlife, wolf",
    category: "animal",
  },
  {
    src: "images/animal/dog-1742295_1280.jpg",
    keywords: "animal,  wildlife, dog, dogs",
    category: "animal",
  },
  {
    src: "images/animal/pets-3715733_1280.jpg",
    keywords: "animal,  wildlife, dog, dogs",
    category: "animal",
  },
  {
    src: "images/animal/puppy-1047521_1280.jpg",
    keywords: "animal,  wildlife, dog, dogs",
    category: "animal",
  },
  {
    src: "images/city/sea-8846477_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/city/skyscrapers-3184798_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/city/sunset-8170058_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/animal/shepherd-dog-4357790_1280.jpg",
    keywords: "animal,  wildlife, dog, dogs",
    category: "animal",
  },
  {
    src: "images/animal/dog-8439530_1280.jpg",
    keywords: "animal,  wildlife, dog",
    category: "animal",
  },
  
  
//   
  
  {
    src: "images/city/bridge-7779222_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  {
    src: "images/city/bridge-7826205_1280.jpg",
    keywords: "city, beauty",
    category: "city",
  },
  
  

  // Add more images as needed
];

const itemsPerPage = 16;
let currentPage = 1;
let currentQuery = "";
let currentCategory = "all";
let filteredImages = images;

document.getElementById("search").addEventListener("input", function (e) {
  currentQuery = e.target.value.toLowerCase();
  currentPage = 1;
  filterImages();
  displayImages();
});

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", function () {
    currentCategory = this.getAttribute("data-category");
    currentPage = 1;
    filterImages();
    displayImages();
  });
});

document.getElementById("prev-page").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    displayImages();
  }
});

document.getElementById("next-page").addEventListener("click", function () {
  if (currentPage < Math.ceil(filteredImages.length / itemsPerPage)) {
    currentPage++;
    displayImages();
  }
});

function filterImages() {
  filteredImages = images.filter((image) => {
    const matchesCategory =
      currentCategory === "all" || image.category === currentCategory;
    const matchesQuery = image.keywords.toLowerCase().includes(currentQuery);
    return matchesCategory && matchesQuery;
  });
}

function displayImages() {
  const gallery = document.getElementById("image-gallery");
  gallery.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const imagesToShow = filteredImages.slice(start, end);

  imagesToShow.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    gallery.appendChild(imgElement);
  });

  document.getElementById("page-number").innerText = currentPage;
}

// Initial display
displayImages();
