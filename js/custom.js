// Fetch the header HTML and insert it into the DOM
fetch('./includes/header.html')
    .then(function (response) {
        return response.text();
    })
    .then(function (body) {
        document.getElementById('header').innerHTML = body;

        // Rebind the event listeners to the newly added mobile nav elements
        bindMobileNavEvents();
    });

fetch('./includes/footer.html')
    .then(function (response) {
        return response.text();
    })
    .then(function (body) {
        document.getElementById('footer').innerHTML = body;
    })

// Function to bind mobile menu toggle events after the HTML is loaded
function bindMobileNavEvents() {
    $(".mobile_nav").click(function () {
        var mm = $(".mobile_menu"),
            mn = $(".mobile_nav"),
            a = "active";

        if (mm.hasClass(a) && mn.hasClass(a)) {
            mm.removeClass(a).fadeOut(200);
            mn.removeClass(a);
            $('.mobile_menu li').each(function () {
                $(this).removeClass('slide');
            });
        } else {
            mm.addClass(a).fadeIn(200);
            mn.addClass(a);
            $('.mobile_menu li').each(function (i) {
                var t = $(this);
                setTimeout(function () {
                    t.addClass('slide');
                }, (i + 1) * 100);
            });
        }
    });
}



$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $("#header").addClass('stickyNav')
    } else {
        $("#header").removeClass('stickyNav')
    }
})



function increasePeople() {
    let peopleInput = document.getElementById('people');
    let currentValue = parseInt(peopleInput.value);
    if (currentValue < 8) {
        peopleInput.value = currentValue + 1;
    }
}

function decreasePeople() {
    let peopleInput = document.getElementById('people');
    let currentValue = parseInt(peopleInput.value);
    if (currentValue > 1) {
        peopleInput.value = currentValue - 1;
    }
}


var elem = document.querySelector('.slider_container');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
    // pageDots: false
});



const counters = document.querySelectorAll(".counters");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200000; // adjust this if needed for fine-tuning
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 10);  // increased delay to slow down the counter
        } else counter.innerText = target;
    };
    updateCounter();
});



function runAnimation() {
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml3 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 100,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}

// Function to check when to start animation based on scroll
function checkScroll() {
    var element = document.querySelector('.ml3');
    if (!element) return; // Ensure the element exists

    var elementPosition = element.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    // Check if the element is in the viewport
    if (elementPosition < screenPosition && elementPosition > 0) {
        runAnimation();  // Trigger the animation when the element is in the viewport
        window.removeEventListener('scroll', checkScroll); // Remove event listener after animation runs
    }
}

// Listen to scroll event
window.addEventListener('scroll', checkScroll);



// Wrap every letter in a span
var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml4 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml5');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml5 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml8');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml8 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml8',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml7 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml10 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml10',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml9 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 100,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });