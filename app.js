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
