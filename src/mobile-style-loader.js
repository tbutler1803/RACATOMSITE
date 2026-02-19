// This file will import the mobile CSS only on mobile devices
if (window.innerWidth <= 1024 || ('ontouchstart' in window)) {
  import('./index.mobile.css');
}
