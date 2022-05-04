// silence
const select = document.querySelector(".filter1")

select.addEventListener("change", function (e) {
    const chosen_cpi1 = e.target.value;
    const currently_visible = document.querySelectorAll(".item.active");
    const make_visible = document.querySelectorAll(`.item.${chosen_cpi1}`)
    
    currently_visible.forEach(function (CPI) {
        CPI.classList.remove("active");
    });

    make_visible.forEach(function (CPI1) {
        CPI1.classList.add("active");
    });
});

const dots = document.querySelectorAll(".dot")

dots.forEach(function (dot) {
    dot.addEventListener("click", function (e){
        e.preventDefault();
        const clicked_dot = e.target;
        clicked_dot.classList.add("active")
    });
});

const close_buttons = document.querySelectorAll(".close")

close_buttons.forEach( function (close_button) {
    close_button.addEventListener("click", function (e){
    e.preventDefault();

        const clicked_close_button = e.target
        const clicked_dot = clicked_close_button.closest(".dot")

        clicked_dot.classList.remove("active")
    });
});
