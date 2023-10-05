let icon_foto = document.getElementById("favicon-link");
icon_foto.href = link_icon;

let app_name = document.getElementById("app-name");
app_name.innerHTML = nama_aplikasi;

let navLogo = document.getElementById("name-data");
navLogo.innerHTML = nama;

let home_foto = document.getElementById("home-foto");
if(home_foto) {
    home_foto.setAttribute("xlink:href", link_photo_no_bg);
}

let greetings  = document.querySelector("h1#name-data");
if(greetings) {
    let greetingsExistingText = greetings.textContent;
    greetings.textContent = greetingsExistingText + nama;    
}

let job  = document.querySelector("h3#job-data");
if(job) {
    job.innerHTML = pekerjaan;
}

let desc  = document.querySelector("p#desc-data");
if(desc) {
    desc.innerHTML = deskripsi;
}

// about
let about_foto = document.getElementById("foto-about-data");
if(about_foto) {
    about_foto.src = link_photo;
}

let about_name = document.getElementById("name-about-data");
if(about_name) {
    let about_nameExistingText = about_name.textContent;
    about_name.textContent = about_nameExistingText + nama;    
}

let about_email = document.getElementById("email-about-data");
if(about_email) {
    let email = about_email.querySelector("a");
    email.href = "mailto:" + link_email;
    email.textContent = link_email;
}

let about_github = document.getElementById("github-about-data");
if(about_github) {
    let github_link = about_github.querySelector("a");
    github_link.href = link_github;
    github_link.textContent = link_github;    
}

let about_phone = document.getElementById("phone-about-data");
if(about_phone) {
    let about_phoneExistingText = about_phone.textContent;
    about_phone.textContent = about_phoneExistingText + nomor_hp;    
}

let about_address = document.getElementById("address-about-data");
if(about_address) {
    let about_addressExistingText = about_address.textContent;
    about_address.textContent = about_addressExistingText + alamat;
}

let about_nationality = document.getElementById("nationality-about-data");
if(about_nationality) {
    let about_nationalityExistingText = about_nationality.textContent;
    about_nationality.textContent = about_nationalityExistingText + kebangsaan;    
}

let about_desc = document.getElementById("desc-about-data");
if(about_desc) {
    about_desc.textContent = tentang;    
}

let cv_download = document.getElementById("about-cv-download");
if(cv_download) {
    cv_download.href = link_download_cv;
}

// contact
let contact_name = document.getElementById("contact-name-data");
if(contact_name) {
    contact_name.textContent = nama;
}

let contact_address = document.getElementById("contact-address-data");
if(contact_address) {
    contact_address.textContent = alamat;
}

let contact_phone = document.getElementById("contact-phone-data");
if(contact_phone) {
    contact_phone.textContent = nomor_hp;
}

let contact_email = document.getElementById("contact-email-data");
if(contact_email) {
    let c_email = contact_email.querySelector("a");
    c_email.href = "mailto:" + link_email;
    c_email.textContent = link_email;    
}

// footer
let footer_name = document.querySelector("h1#footer-title");
if(footer_name) {
    footer_name.textContent = nama;
}

let footer_job = document.querySelector("span#footer-subtitle");
if(footer_job) {
    footer_job.textContent = pekerjaan;
}

let cp_name = document.getElementById("copy-name");
if(cp_name) {
    cp_name.textContent = nama;
}

const navMenu = document.getElementById('navMenu'),
navToggle = document.getElementById('navToggle'),
navClose = document.getElementById('navClose')


// validate if navToggle exists
// if exist create an event listener click
// when clicked add show-menu class to navMenu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}


// validate if navClose exists
// if exist create an event listener click
// when clicked remove show-menu class from navMenu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// remove menu mobile
// make every time we click nav-link, we remove show-menu class
// so menu will be closed
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click', () => {
    // when we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}));


var homeSocials = document.querySelector(".home-social"),
contactSocials = document.querySelector(".contact-socials"),
footerSocials = document.querySelector(".footer-socials");

// create social icon on the home and footer section
if (footerSocials != null) {
    for (s in socials) {
        if (homeSocials != null) {
            // home
            var homeSocial = document.createElement("a");
            homeSocial.className = "home-social-icon";
            homeSocial.href = socials[s]["link"];

            var homeIcon = document.createElement("i");
            homeIcon.className = socials[s]["icon"];

            homeSocial.appendChild(homeIcon);
            homeSocials.appendChild(homeSocial);


            // contact socials
            var contactSocial = document.createElement("a");
            contactSocial.className = "contact-social";
            contactSocial.href = socials[s]["link"];

            var contactIcon = document.createElement("i");
            contactIcon.className = socials[s]["icon"];

            contactSocial.appendChild(contactIcon);
            contactSocials.appendChild(contactSocial);
        }

        
        // footer
        var footerSocial = document.createElement("a");
        footerSocial.className = "footer-social";
        footerSocial.href = socials[s]["link"];

        var footerIcon = document.createElement("i");
        footerIcon.className = socials[s]["icon"];

        footerSocial.appendChild(footerIcon)
        footerSocials.appendChild(footerSocial)
    }
}


var aboutContainer = document.getElementById("about")
if (aboutContainer != null) {
    // count years experience base on year
    var date = new Date(),
    result = Number(date.getFullYear()) - 2022,
    yearsExperience = document.getElementById("years-experience");

    // if result less than 10, we format the number with 0 in front
    // else we return result
    if (result < 10) {
        yearsExperience.textContent = "0" + result;
    } else {
        yearsExperience.textContent = result;
    }
}

var skillsContainer = document.querySelector(".skills-container");
if (skillsContainer != null) {
    for (skill in skills) {
        var skillsContent = document.createElement("div");
        skillsContent.className = "skills-content skills-open";

        var skillsHeader = document.createElement("div");
        skillsHeader.className = "skills-header";

        var skillsIcon = document.createElement("i");
        skillsIcon.className = "skills-icon " + skills[skill]["icon"];

        var div = document.createElement("div")
        var skillsTitle = document.createElement("h1");
        skillsTitle.className = "skills-title";
        skillsTitle.textContent = skill;

        var skillsSubtitle = document.createElement("span");
        skillsSubtitle.className = "skills-subtitle";
        skillsSubtitle.textContent = skills[skill]["details"];

        var skillsArrow = document.createElement("i");
        skillsArrow.className = "bx bx-chevron-down skills-arrow";

        div.appendChild(skillsTitle)
        div.appendChild(skillsSubtitle)

        skillsHeader.appendChild(skillsIcon)
        skillsHeader.appendChild(div)
        skillsHeader.appendChild(skillsArrow)
        skillsContent.appendChild(skillsHeader)

        var skillsList = document.createElement("div");
        skillsList.className = "skills-list grid";

        var list = skills[skill]["skills"]
        for (s in list) {
            var skillsData = document.createElement("div");
            skillsData.className = "skills-data";

            var skillsTitle = document.createElement("div");
            skillsTitle.className = "skills-title";

            var skillsName = document.createElement("h3");
            skillsName.className = "skills-name";
            skillsName.textContent = s;

            var skillsNumber = document.createElement("span");
            skillsNumber.className = "skills-number";
            skillsNumber.textContent = list[s];


            var skillsBar = document.createElement("div");
            skillsBar.className = "skills-bar";

            var skillsPercentage = document.createElement("span");
            skillsPercentage.className = "skills-percentage"
            skillsPercentage.style = "width: " + list[s] + ";";

            skillsTitle.appendChild(skillsName)
            skillsTitle.appendChild(skillsNumber)
            skillsData.appendChild(skillsTitle)

            skillsBar.appendChild(skillsPercentage)
            skillsData.appendChild(skillsBar)

            skillsList.appendChild(skillsData)
        }

        skillsContent.appendChild(skillsList)
        skillsContainer.appendChild(skillsContent)
    }
}


// accordion skills
var skillsContent = document.getElementsByClassName('skills-content'),
skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }
    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


// qualification tabs
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification-active')
        })

        target.classList.add('qualification-active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification-active')
        })

        tab.classList.add('qualification-active')
    })
})

var portfolioContainer = document.querySelector(".portfolio-container")
var swiperWrapper = document.querySelector(".swiper-wrapper");

function createPortfolio(img, title, shortDescription, portfolioId) {
    var portfolioContent = document.createElement("div")
    portfolioContent.className = "portfolio-content grid swiper-slide";

    var portfolioImg = document.createElement("img");
    portfolioImg.src = img
    portfolioImg.className = "portfolio-img";

    var portfolioData = document.createElement("div");
    portfolioData.className = "portfolio-data";

    var portfolioTitle = document.createElement("h3");
    portfolioTitle.className = "portfolio-title";
    portfolioTitle.textContent = title;

    var portfolioDescription = document.createElement("p");
    portfolioDescription.className = "portfolio-description";
    portfolioDescription.textContent = shortDescription;

    var portfolioDiv = document.createElement("div");
    var portfolioButton = document.createElement("a");
    var buttonClass = "portfolio-" + portfolioId;
    portfolioButton.href = "portfolio-details.html?id=" + portfolioId
    portfolioButton.className = "button button-flex button-small portfolio-button " + buttonClass;
    portfolioButton.textContent = "Details"

    var buttonIcon = document.createElement("i");
    buttonIcon.className = "bx bxs-right-arrow-alt button-icon";

    portfolioButton.appendChild(buttonIcon)
    portfolioDiv.appendChild(portfolioButton)

    portfolioData.appendChild(portfolioTitle)
    portfolioData.appendChild(portfolioDescription)
    portfolioData.appendChild(portfolioDiv)

    portfolioContent.appendChild(portfolioImg)
    portfolioContent.appendChild(portfolioData)

    swiperWrapper.appendChild(portfolioContent)
}

if (portfolioContainer != null) {
    for (p in portfolio) {
        createPortfolio(portfolio[p]["images"][1],
            portfolio[p]["title"],
            portfolio[p]["short_description"],
            p
            )
    }

    // count completed project by count how many portfolio content that we have
    var portfolioContent = document.querySelectorAll(".portfolio-content"),
    completedProject = document.getElementById("completed-project");
    completedProject.textContent = portfolioContent.length;
}

var detailsButton = document.querySelectorAll(".portfolio-button");
[...detailsButton].forEach(button => {
    button.addEventListener("click", () => {
        var detailsClass = button.classList
        var portfolioClass = detailsClass[detailsClass.length - 1]
        idSplit = portfolioClass.split("-")
        id = Number(idSplit[idSplit.length - 1])
        
        document.cookie = "portfolioId=" + id
    })
})


// portfolio swiper
let swiperPortfolio = new Swiper(".portfolio-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  mousewheel: true,
})


// scroll sections active link
const sectionsHome = document.getElementById("home")
if (sectionsHome != null) {
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
            }else{
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
}


// change background header
function scrollHeader() {
    const nav = document.getElementById('header');

    // when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// show scroll up
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp');

    // when the scroll is higher than 560 viewport height, add the show-scroll
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// button to change the theme
const themeButton = document.getElementById('theme-button'),
darkTheme = "dark-theme",
iconTheme = "bx-sun";

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// we validate if the user previously choose a topic
if (selectedTheme) {
    // check selected theme of user
    // if user select dark theme, then add dark-theme class on body
    // and add sun icon to turn back to light theme
    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme)
        themeButton.classList.toggle(iconTheme)
    } else {
        document.body.classList.remove(iconTheme)
    }
}

// activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark or icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var detailsContainer = document.querySelector(".details-container");
if (detailsContainer != null) {

    const params = new URLSearchParams(window.location.search).get("id");
    selectedPortfoliio = portfolio[Number(params)];

    var sectionTitle = document.querySelector(".section-title");
    sectionTitle.textContent = selectedPortfoliio["title"];

    var detailsDescription = document.querySelector(".details-description");
    detailsDescription.textContent = selectedPortfoliio["description"];

    var detailButtons = document.querySelector(".detail-buttons");

    if (selectedPortfoliio["demo"] != "") {    
        var demoButton = document.createElement("a");
        demoButton.className = "button button-flex detail-button";
        demoButton.href = selectedPortfoliio["demo"];
        demoButton.textContent = "Demo";
        demoButton.target = "_blank";

        var demoIcon = document.createElement("i");
        demoIcon.className = "bx bx-tv button-icon";

        demoButton.appendChild(demoIcon)
        detailButtons.appendChild(demoButton)
    }

    if (selectedPortfoliio["source_code"] != "") {
        var sourceCodeButton = document.createElement("a");
        sourceCodeButton.className = "button button-flex detail-button";
        sourceCodeButton.href = selectedPortfoliio["source_code"];
        sourceCodeButton.textContent = "Source Code";
        sourceCodeButton.target = "_blank";

        var sourceCodeIcon = document.createElement("i");
        sourceCodeIcon.className = "bx bx-code-alt button-icon";

        sourceCodeButton.appendChild(sourceCodeIcon)
        detailButtons.appendChild(sourceCodeButton)

    }
    var images = selectedPortfoliio["images"];
    for (img in images) {
        var imageDiv = document.createElement("div");
        imageDiv.className = "image-div grid swiper-slide";

        var newImage = document.createElement("img");
        newImage.src = images[img];
        newImage.className = "details-img";

        imageDiv.appendChild(newImage);
        swiperWrapper.appendChild(imageDiv);
    }
    var swiperDetails = new Swiper(".images-container", {
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      mousewheel: true,
  })
}