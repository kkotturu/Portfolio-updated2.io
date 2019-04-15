//Set the firebase configuration
var config = {
    apiKey: "AIzaSyDY6T8gX4nF1mwWN9z9JVdcFTTMg3bsAik",
    authDomain: "portfolio-updated2.firebaseapp.com",
    databaseURL: "https://portfolio-updated2.firebaseio.com",
    projectId: "portfolio-updated2",
    storageBucket: "portfolio-updated2.appspot.com",
    messagingSenderId: "865233139681"
};
firebase.initializeApp(config);

$(document).ready(function () {

    //functions for materialize
    $(".dropdown-trigger").dropdown({
        alignment: 'left',
        coverTrigger: false,
        inDuration: 200,
        outDuration: 200
    });
    //populating content
    function populateIntro() {
        var introTitle = $("<p id='intro-headText'>Front End Developer</p>");
        var introContent = $("<p id='intro-text'>Designer</p>");
        var introDiv = $("<div class='content'></div>");
        introDiv.attr("value", 1);
        introDiv.append(introTitle).append(introContent);
        return introDiv;
    }

    function populateAbout() {
        var aboutTitle = $("<p id='about-headText'>About Me</p>");
        var aboutContent = $(`<p id='about-text'>An enthusiastic web-developer with a solid technical experience as a Sr.QA Test Engineer 
        in Insurance and Banking industries with a profound knowledge of software development life cycle. I desire to grow with the attained skill set in 
        HTML, CSS and JavaScript who has currently to build best in class and user centric web applications.</p>`)

        var aboutDiv = $("<div class='content'></div>");
        aboutDiv.attr("value", 2);
        aboutDiv.append(aboutTitle).append(aboutContent);
        return aboutDiv;
    }

    function populatePortfolio() {
        var portfolioTitle = $("<p id='portfolio-headText'>Portfolio</p>");
        //make cards from materialize card
        var projcard1 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'> <img src='assets/images/burger.jpg'>Eat-Da-Burger</div>
        <div class='card-content'><p class='card-textcontent'>This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and Bootsrap. The backend implemented with Node.js and Express. </p></div>
        <a href='https://eatdaburger0319.herokuapp.com/index' target='_blank'>View Project</a>
        <p><a class='black-text' href='https://github.com/kkotturu/Eat-Da-Burger' target='_blank'>GitHub</a></p></div></div>`);

        var projcard2 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/survey.jpg'>Place Finder</div>
        <div class='card-content'><p class='card-textcontent'>Place Finder is an app that helps find your most friendly place to visit. This is an exercise which helps to learn how to set up an Express server and handling routing. </p></div>
        <a href='https://kkotturu.github.io/TriviaGame.io/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/FriendFinder' target='_blank'>GitHub</a></p></div></div>`);

        var projcard3 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Gifhy.jpg'>GifTastic</div>
        <div class='card-content'><p class='card-textcontent'>A web page using the GIPHY API to generate categories of buttons to generate gifs</p></div>
        <a href='https://friendfinder59.herokuapp.com/home.html' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/GifTastic' target='_blank'>GitHub</a></p></div></div>`);

        var projcard4 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Train.jpg'>Train</div>
        <div class='card-content'><p class='card-textcontent'>An activity created to know the arrival of next scheduled train using momemtjs</p></div>
        <a href='https://kkotturu.github.io/Train-Activity.io/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/Train-Activity' target='_blank'>GitHub</a></p></div></div>`);

        var projcard5 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/Krave.jpg'>Krave</div>
        <div class='card-content'><p class='card-textcontent'>App allows user to make decisions about whether to cook at home or to find food options outside the home.
        The app is created using APIs, CSS, jQuery, JavaScript.</p></div>
        <a href='https://krave-project1.firebaseapp.com/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/Krave-Project1' target='_blank'>GitHub</a></p></div></div>`);

        var projcard6 = $(`<div class='col s12 m6 l4'><div class='card medium'><div class='card-image'><img src='assets/images/smallTalk.jpg'>smallTalk</div>
        <div class='card-content'><p class='card-textcontent'>The idea behind smalltalk is to help arm yourself with a simple tool to help combat awkward or stressful conversations with new people. The app is created using HTML, CSS, Express, Sequelize</p></div>
        <a href='https://smalltalk-tryagain.herokuapp.com/' target='_blank'>View Project</a><p><a class='black-text' href='https://github.com/kkotturu/smallTalk' target='_blank'>GitHub</a></p></div></div>`);

        var cardrow = $("<div class='row'></div>");
        cardrow.append(projcard6).append(projcard5).append(projcard1);
        var cardrow2 = $("<div class='row'></div>");
        cardrow2.append(projcard4).append(projcard2).append(projcard3);
        var portfolioDiv = $("<div class='content'></div>");
        portfolioDiv.attr("value", 3);
        portfolioDiv.append(portfolioTitle).append(cardrow);
        portfolioDiv.append(cardrow2);
        return portfolioDiv;
    }


    function populateContact() {
        var contactTitle = $("<p id='contact-headText'>Contact</p>");
        var contactContent1 = $("<p class='contact-text'>Social Media: </p>");
        var contactContent2 = $("<p class='contact-text'>Email: <br><a href='mailto:kkotturu@gmail.com'>kkotturu@gmail.com</a></p>")
        var contactContent3 = $("<p class='contact-text'>Resume<br><a href='https://drive.google.com/file/d/1chWxe4PMO0v8nyujk9qe2VsCvXOZUIuY/view?usp=sharing' target=' _blank'></a></p>")

        var imgrow = $("<div class='row'></div>");
        var githubImgDiv = $(`<div class='col s6'><a href='https://github.com/kkotturu' target='_blank'><img class='responsive-img iconImage' src='assets/images/githublogo.jpg'></a></div>`);
        var linkedinImgDiv = $(`<div class='col s6'><a href='https://www.linkedin.com/in/kiranmai-kotturu-11525836' target='_blank'><img class='responsive-img iconImage' src='assets/images/linkedinlogo.jpg'></a></div>`);
        imgrow.append(githubImgDiv).append(linkedinImgDiv);
        var contactDiv = $("<div class='content'></div>");
        contactDiv.attr("value", 4);
        contactDiv.append(contactTitle).append(contactContent1).append(imgrow).append(contactContent2).append(contactContent3);
        return contactDiv;
    }



    function changeDiv(cValue, valueNew, newDiv) {
        if (cValue != valueNew) {
            $("div[value=" + cValue + "]").fadeOut(1000, function () {
                newDiv.fadeIn(400);
            });
        }
    }

    var currentValue = 1;
    var intro = populateIntro();
    var about = populateAbout();
    var portfolio = populatePortfolio();
    var contact = populateContact();
    $("#attachDiv").append(intro).append(about).append(portfolio).append(contact);

    //when user first loads page, only show portfolio
    intro.hide();
    about.hide();
    portfolio.show();
    contact.hide();

    // click functions
    $("#homePage").click(function () {
        changeDiv(currentValue, 1, intro);
        currentValue = 1;
        portfolio.hide();
        about.hide();
        intro.show();
    })
    $("#topTitle").click(function () {
        $("#homePage").trigger('click');
    })
    $("#aboutPage").click(function () {
        changeDiv(currentValue, 2, about);
        currentValue = 2;
        portfolio.hide();
    })
    $("#portfolioPage").click(function () {
        changeDiv(currentValue, 3, portfolio);
        currentValue = 3;
    })
    $("#contactPage").click(function () {
        changeDiv(currentValue, 4, contact);
        currentValue = 4;
        intro.hide();
        about.hide();
        portfolio.hide();

    })

})