document.addEventListener('DOMContentLoaded', function () {
    const profileElement = document.querySelector('.navbar-profile');
    const notificationIcon = document.getElementById('notificationIcon');
    
    const dropdownElement = document.querySelector('.navbar-profile-dropdown');
    const notificationAlert = document.getElementById('notificationAlert');

    // Profile Dropdown Click
    profileElement.addEventListener('click', () => {
        dropdownElement.classList.toggle('active-dropdown');
        notificationAlert.classList.remove('active');
    });

    // Notification Alert click
    notificationIcon.addEventListener('click', function() {
        notificationAlert.classList.toggle('active');
        dropdownElement.classList.remove('active-dropdown');
    });
});

    // Setup Guide Click
document.addEventListener('DOMContentLoaded', function () {
    const setupTitle = document.querySelector('.setup-title');
    const customizes = document.querySelector('.customizes');
    const angleIcon = document.querySelector('.setup-title i');

    setupTitle.addEventListener('click', function () {
        customizes.style.display = customizes.style.display === 'none' ? 'flex' : 'none'; 
        angleIcon.style.transform = customizes.style.display === 'none' ? 'rotate(0deg)' : 'rotate(180deg)';
    });

    const customizeHeads = document.querySelectorAll('.customize-head');

    customizeHeads.forEach(function (customizeHead) {
        customizeHead.addEventListener('click', function () {
            const customizeTheme = this.nextElementSibling;
            const otherThemes = document.querySelectorAll('.customize-theme');

            otherThemes.forEach(function (otherTheme) {
                if (otherTheme !== customizeTheme) {
                    otherTheme.style.display = 'none';
                }
            });
            
            customizeTheme.style.display = customizeTheme.style.display === 'none' ? 'flex' : 'none'; 
        });
    });
});
