// 1. BACK TO TOP BUTTON
const topBtn = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. PAGE TRANSITIONS
function smoothNavigate(url) {
    const layer = document.getElementById('transitionLayer');
    if (layer) {
        layer.classList.add('active');
        setTimeout(() => { window.location.href = url; }, 500);
    }
}

// 3. GALLERY FILTER (FIXED)
function showMedia(type, btn) {
    const items = document.querySelectorAll(".gallery-item");
    const buttons = document.querySelectorAll(".tab-btn");

    // Update active button styling
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter items based on class
    items.forEach(item => {
        if (item.classList.contains(type)) {
            item.classList.remove("hidden");
            item.style.display = "block"; // Ensure it shows in the grid
        } else {
            item.classList.add("hidden");
            item.style.display = "none"; // Ensure it hides
        }
    });
}

// 4. LIGHTBOX LOGIC
function openFull(el) {
    const box = document.getElementById("lightBox");
    const content = document.getElementById("contentBox");
    if (!box || !content) return;

    content.innerHTML = "";
    const source = el.querySelector("img, video");
    const clone = source.cloneNode(true);

    if (clone.tagName === "VIDEO") {
        clone.setAttribute("controls", "true");
        clone.play();
    }

    content.appendChild(clone);
    box.classList.add("active");
}

// 5. ANIMATIONS ON SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll("section, .card, .service-box, .testimonial-card").forEach(el => {
    observer.observe(el);
});
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  // If scrolled more than 50px, add the 'scrolled' class
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
// Function to handle the navbar behavior on scroll
const initNavbar = () => {
    const header = document.getElementById('mainHeader'); // Make sure your header has id="mainHeader"

    window.addEventListener('scroll', () => {
        // Change color and shrink after scrolling 60 pixels
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Initialize the function
initNavbar();
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  if (loader) {
    loader.style.display = "none";
  }
});
function switchGallery(type) {
    const photoGrid = document.getElementById('photo-grid');
    const videoGrid = document.getElementById('video-grid');
    const buttons = document.querySelectorAll('.tab-btn');

    // 1. Handle Button Color Shift
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (type === 'photo') {
        buttons[0].classList.add('active'); // Shift gold to Photo
        photoGrid.style.display = 'grid';
        videoGrid.style.display = 'none';
    } else {
        buttons[1].classList.add('active'); // Shift gold to Video
        photoGrid.style.display = 'none';
        videoGrid.style.display = 'grid';
    }

    // 2. Play/Pause Videos to save memory
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(v => v.pause());
}
function smoothNavigate(url) {
    const layer = document.getElementById('transitionLayer');
    if (layer) {
        layer.style.visibility = "visible"; // Show it
        layer.classList.add('active'); // Slide it in
        
        setTimeout(() => { 
            window.location.href = url; 
        }, 600); // Wait for the orange to cover the screen
    }
}
