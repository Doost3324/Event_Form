console.log("KYS Doof BUT test js");

document.addEventListener("click", function(event) {

    const dropdowns =
        document.querySelectorAll(".social-dropdown");

    dropdowns.forEach(dropdown => {

        if (!dropdown.contains(event.target)) {

            dropdown.removeAttribute("open");
        }
    });
});

document.querySelectorAll(".social-dropdown")
.forEach(dropdown => {

    dropdown.addEventListener("toggle", () => {

        if (dropdown.open) {

            document.querySelectorAll(".social-dropdown")
            .forEach(other => {

                if (other !== dropdown) {

                    other.removeAttribute("open");
                }
            });
        }
    });
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.05
});

document
.querySelectorAll("section")
.forEach(section => {

    section.classList.add("fade-in");

    observer.observe(section);
});

// const sections =
//     document.querySelectorAll("section");

// const navLinks =
//     document.querySelectorAll("nav a");

// window.addEventListener("scroll", () => {

//     let current = "";

//     sections.forEach(section => {

//         const top = section.offsetTop - 200;

//         if (scrollY >= top) {

//             current = section.id;
//         }
//     });

//     navLinks.forEach(link => {

//         link.classList.remove("active");

//         if (
//             link.getAttribute("href")
//             === "#" + current
//         ) {

//             link.classList.add("active");
//         }
//     });
// });