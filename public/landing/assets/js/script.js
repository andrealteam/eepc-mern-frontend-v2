$(".xb-mouseenter").on("mouseenter", function () {
  $(".xb-mouseenter").removeClass("active");
  $(this).addClass("active");
});
$(".xb-mouseenter2").on("mouseenter", function () {
  $(".xb-mouseenter2").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  // Set the target date (September 8, 2025, at 11:00 AM)
  var targetDate = new Date("September 21, 2025 00:00:00").getTime();

  // Update the countdown every second
  var countdownInterval = setInterval(function () {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var remainingTime = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Display the results
    $(".days").text(days);
    $(".hours").text(hours < 10 ? "0" + hours : hours);
    $(".minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $(".seconds").text(seconds < 10 ? "0" + seconds : seconds);

    // If the countdown is finished, display a message
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      $("#countdown").html("<li>Countdown Finished!</li>");
    }
  }, 1000); // Update every second
});
$(document).ready(function () {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        console.log("Observer entry:", entry);
        if (entry.isIntersecting) {
          console.log("Counter triggered!");
          $(".counter").each(function () {
            var t = $(this),
              e = t.attr("data-count");

            $({ countNum: t.text() }).animate(
              { countNum: e },
              {
                duration: 2000,
                easing: "linear",
                step: function () {
                  t.text(Math.floor(this.countNum));
                },
                complete: function () {
                  t.text(this.countNum);
                },
              }
            );
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  ); // Reduced from 0.5 to 0.1

  const impactSection = document.querySelector("#impact");
  if (impactSection) observer.observe(impactSection);
});
$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>",
  ],
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  items: 1,
  responsive: {
    0: {
      dots: true,
      nav: false,
    },
    480: {
      dots: true,
      nav: false,
    },
    768: {
      dots: true,
      nav: false,
    },
    992: {
      dots: true,
      nav: true,
    },
  },
});
$(".banner-carousel").owlCarousel({
  loop: true,
  margin: 0,
  navText: [
    "<i class='fa-solid fa-chevron-left'></i>",
    "<i class='fa-solid fa-chevron-right'></i>",
  ],
  autoplay: true,
  autoplayTimeout: 4000,
  items: 1,
});
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    window.scrollY > 50
      ? (document.getElementById("navbar_top").classList.add("fixed-top"),
        (navbar_height = document.querySelector(".navbar").offsetHeight),
        (document.body.style.paddingTop = navbar_height + "px"))
      : (document.getElementById("navbar_top").classList.remove("fixed-top"),
        (document.body.style.paddingTop = "0"));
  });
});
