document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Toggle ---
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
    });
  }

  // --- Filter Category Feature (Shop Page) ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-category');

        productCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Add to Cart Click Interaction ---
  let cartCount = 0;
  const cartText = document.getElementById('cartText');
  const addButtons = document.querySelectorAll('.btn-add-cart');

  addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      if (cartText) {
        cartText.textContent = `Keranjang (${cartCount})`;
      }
    });
  });

  // --- Contact Form Submission Handler (Custom Modal Popup) ---
  const contactForm = document.getElementById('contactForm');
  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalMessage = document.getElementById('modalMessage');

  if (contactForm && contactModal) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Ambil nilai nama dari input form
      const nameInput = document.getElementById('fullName');
      const userName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Pelanggan';

      // Set isi pesan di dalam modal
      if (modalMessage) {
        modalMessage.textContent = `Terima kasih, ${userName}! Pesan Anda telah berhasil terkirim. Tim Customer Support kami akan segera menghubungi Anda.`;
      }

      // Tampilkan modal
      contactModal.classList.add('is-active');

      // Reset input form
      contactForm.reset();
    });

    // Event handler untuk menutup modal via tombol
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        contactModal.classList.remove('is-active');
      });
    }

    // Event handler untuk menutup modal saat mengklik overlay luar
    contactModal.addEventListener('click', (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove('is-active');
      }
    });

    // Event handler untuk menutup modal dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && contactModal.classList.contains('is-active')) {
        contactModal.classList.remove('is-active');
      }
    });
  }
});