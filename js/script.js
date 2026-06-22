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