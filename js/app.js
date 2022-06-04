$('.nav-trigger').click(function() {
    $('.site-content-wrapper').toggleClass('scaled');
})


$('.testi.owl-carousel').owlCarousel({
    items: 2,
    margin: 10,
    lazyLoad: true,
    dots: true,
    autoPlay: true,
    autoPlayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 2,
        }
    }
});




filterSelection("japan")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "others") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show_brands");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show_brands");
    }
}


// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Get the container element
var btnContainer = document.getElementById("brand_nav_container");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active_nav class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active_nav");
        current[0].className = current[0].className.replace("active_nav", " ");
        this.className += " active_nav";
    });
}


function openTabContentOurServices(evt, containerToDisplay, className, that, tabGroup) {
    //console.log(that);
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName(tabGroup);
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(containerToDisplay).style.display = "block";

    $(that).parents(".tab-link-container, .tab_links_wrapper").children().find("." + className).removeClass(" active ");
    $(that).addClass(" active ");
}
document.getElementById("defaultOpen").click();
$(".compare_prices").click(function() {
    $('#compareModal').modal('toggle');
})

$(document).ready(function() {
    var owl = $('.owl-1');
    owl.owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    var carousel_nav_a = $('.carousel-nav a');

    carousel_nav_a.each(function(slide_index) {
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl.trigger('to.owl.carousel', [slide_index, 1500]);
            e.preventDefault();
        })
    })

    owl.on('changed.owl.carousel', function(event) {
        carousel_nav_a.removeClass('active');
        $(".carousel-nav a[data-num=" + event.item.index + "]").addClass('active');
    })


});