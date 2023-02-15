document.addEventListener("DOMContentLoaded", function() {
    var sun = document.createElement('div');
    sun.style.width = '50px';
    sun.style.height = '50px';
    sun.style.backgroundColor = 'red';
    sun.style.borderRadius = '50%';
    sun.style.position = 'absolute';
    sun.style.top = '60%';
    sun.style.left = '51.7%';
    sun.style.marginLeft = '-50px';
    sun.style.marginTop = '-50px';
    document.body.appendChild(sun);
    sun.style.zIndex = '1';
    sun.onclick = function() {
    window.location.href = 'coment.html';
    };
    sun.style.boxShadow = '0 0 15px red';
    var sunAnimation = setInterval(function() {
      sun.style.boxShadow = '0 0 ' + Math.floor(Math.random() * 50) + 'px red';
    }, 100);
    
    var circle1 = document.createElement('div');
    circle1.className = 'circle circle1';
    circle1.style.setProperty('--clr', '#1290ff');
    document.body.appendChild(circle1);

    circle1.addEventListener('click', function() {
    window.location.href = 'alert.html';
    });
    var circle2 = document.createElement('div');
    circle2.className = 'circle circle2';
    circle2.style.setProperty('--clr', '#00FA9A');
    document.body.appendChild(circle2);

    circle2.addEventListener('click', function() {
    window.location.href = 'alert.html';
    });
    var circle3 = document.createElement('div');
    circle3.className = 'circle circle3';
    circle3.style.setProperty('--clr', '#F4A460');
    document.body.appendChild(circle3);
    /* circle3 clicked move to youtube */
    circle3.addEventListener('click', function() {
    window.location.href = 'alert.html';
    });
    var circle4 = document.createElement('div');
    circle4.className = 'circle circle4';
    circle4.style.setProperty('--clr', '#f0e68c');
    document.body.appendChild(circle4);
    /* when circle4 clicked move to https://www.uwrf.edu/ */
    circle4.addEventListener('click', function() {
      window.location.href = 'alert.html';
    });
    var circle5 = document.createElement('div');
    circle5.className = 'circle circle5';
    circle5.style.setProperty('--clr', '#D77964');
    document.body.appendChild(circle5);
    /* when circle5 clicked move to https://www.cnn.com/ */
    circle5.addEventListener('click', function() {
      window.location.href = 'alert.html';
    });
    var circle6 = document.createElement('div');
    circle6.className = 'circle circle6';
    circle6.style.cssText = '--clr:#00bfff';
    document.body.appendChild(circle6);
    /* when circle6 clicked move to https://www.nytimes.com/ */
    circle6.addEventListener('click', function() {
      window.location.href = 'alert.html';
    });
    var circle7 = document.createElement('div');
    circle7.className = 'circle circle7';
    circle7.style.cssText = '--clr:#ffd700';
    document.body.appendChild(circle7);
    /* when circle7 clicked move to https://www.ratemyprofessors.com/ */
    circle7.addEventListener('click', function() {
      window.location.href = 'alert.html';
    });
    var circle8 = document.createElement('div');
    circle8.className = 'circle circle8';
    circle8.style.cssText = '--clr:#d3d3d3';
    document.body.appendChild(circle8);
    /* circle8 clicked move to https://www.google.com/maps/ */
    circle8.addEventListener('click', function() {
      window.location.href = 'alert.html';
    });
    });
