document.addEventListener('DOMContentLoaded', function() {
    // Custom checkbox functionality
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            this.classList.toggle('checked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Custom switch functionality
    const switches = document.querySelectorAll('.custom-switch input');
    switches.forEach(switchInput => {
        switchInput.addEventListener('change', function() {
            // Additional functionality can be added here
        });
    });
});

const menuBtn = document.getElementById('menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('-translate-x-full');
    mobileNav.classList.toggle('translate-x-0');
  });