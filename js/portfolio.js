var app = angular.module('Portfolio', ['ngSanitize']);

app.controller('main', function ($scope) {
    $scope.name = "Rodrigo Diaz";
    $scope.profession = "Developer";
    $scope.email = "contact@rodrigos.work";
    $scope.twitter = "rodrigod89";
    $scope.facebook = "rdiazbe";
    $scope.telephone = "+49 1573 0613141";
    $scope.intro = "I'm a creator by nature, I love to work with teams to make really interesting and unique games for people to play.";
    $scope.about = "I've been a developer for more than 8 years doing a variety of projects ranging from a full stack budget management system to video games. Currently I'm focusing on interactive applications using mostly Unity3D. I am attracted to a balance of quality and efficiency making me goal oriented and happy when things get done. I would say the thing that I enjoy the most is to transform an idea to a final product and figuring out how to get there.";
    $scope.links = [
        {
            icon: "facebook-square",
            url: "https://www.facebook.com/rdiazbe"
        },
        {
            icon: "linkedin-square",
            url: "https://www.linkedin.com/in/rdiazb"
        },
        {
            icon: "twitter-square",
            url: "https://twitter.com/EmeralDigEnt"
        }
    ];
    $scope.techSkills = [
        "Unity | C#",
        "HTML | Javascript | Angular",
        "PHP | Mysql",
        "Java"
    ];
    $scope.personalSkills = [
        "Small Team Project management",
        "Agile Methodologies",
        "Lean start-up",
        "Self-motivated"
    ];
    $scope.porfolio = [
        {
            name: "Bump Bump Bump",
            description: "<b>BUMP BUMP BUMP</b> is a minimalist puzzle game about bumping into stuff! An original concept which is currently in development by Golden Frog, a small team of game developers from Colombia. The game coming to Android, iOS and Steam.",
            role: "Project Lead",
            teamsize: 5,
            teaser_image: "img/portfolio/bumpbumpbump.png",
            source_images: "img/portfolio/BBB/",
            imgs: [
                "bbb_01.jpg",
                "bbb_02.jpg",
                "bbb_03.jpg"
            ],
            links: [
                {
                    name: "Landing Page",
                    icon: "external-link",
                    url: "http://www.goldenfrogstudios.com/bbb"
                }
            ]
        },
        {
            name: "Yuvine VR",
            description: "<b>Yuvine VR</b> is a start-up that focuses on visual brilliance in 3D through virtual experiences. The main focus is to create intuitive and outstanding experiences from product presentations to virtual training for web, desktop and mobile platforms.",
            role: "Developer",
            teamsize: 3,
            teaser_image: "img/portfolio/yuvine.png",
            source_images: "img/portfolio/yuvine/",
            imgs: [
                "yuvine_01.jpg",
                "yuvine_02.jpg",
                "yuvine_03.jpg",
                "yuvine_04.jpg",
                "yuvine_05.jpg"
            ],
            links: [
                {
                    name: "Website",
                    icon: "external-link",
                    url: "http://www.yuvine.de/"
                },
                {
                    name: "Example",
                    icon: "youtube-play",
                    url: "https://youtu.be/w5TvjyBYQRM"
                },
                {
                    name: "Demo",
                    icon: "android",
                    url: "https://play.google.com/store/apps/details?id=com.yuvinevr.watchdemo"
                }
            ]
        },
        {
            name: "Meteorz",
            description: "<b>Meteorz</b> is a space shooter game that combines elements from arcade and casual gaming to bring a unique gaming experience. This was my first fully featured game that was published in both the Apple and Google Play stores.",
            role: "Project Lead",
            teamsize: 6,
            teaser_image: "img/portfolio/meteorz.png",
            source_images: "img/portfolio/meteorz/",
            imgs: [
                "meteorz-play0.png",
                "meteorz-play1.png",
                "meteorz-play2.png",
                "meteorz-play3.png",
                "meteorz-play4.png"
            ],
            links: [
                {
                    name: "Landing Page",
                    icon: "external-link",
                    url: "http://www.emerald-digital.com/meteorz/"
                },
                {
                    name: "Trailer",
                    icon: "youtube-play",
                    url: "https://youtu.be/3bN_wOYm9ck"
                },
                {
                    name: "Google Play",
                    icon: "android",
                    url: "https://play.google.com/store/apps/details?id=com.ede.meteorz"
                },
                {
                    name: "Game teaser in HTML",
                    icon: "gamepad",
                    url: "http://www.emerald-digital.com/teaser/meteorz/"
                }
            ]
        },
        {
            name: "Gamestrap",
            description: "<b>Gamestrap UI</b> is a Unity pack currently being sold in the Unity Asset Store that helps game developers design user interfaces by providing them with the resources and tools to make something professional in less time.",
            role: "Creator",
            teamsize: 2,
            teaser_image: "img/portfolio/gamestrap.png",
            source_images: "img/portfolio/gamestrap/",
            links: [
                {
                    name: "Asset Page",
                    icon: "external-link",
                    url: "https://www.assetstore.unity3d.com/en/#!/content/28599"
                }
            ]
        },
        {
            name: "Bustard",
            description: "<b>Bustard</b> was developed in three days for an indie developer's game jam with the theme 'Fun to play, fun to watch'. The goal is to drive as crazy as possible to get rid of all of the passengers that are in the bus.",
            role: "Project Lead",
            teamsize: 4,
            teaser_image: "img/portfolio/bustard.png",
            source_images: "img/portfolio/bustard/",
            imgs: [
                "frelance_01.png",
                "frelance_02.png",
                "frelance_03.png",
                "frelance_04.png",
                "frelance_05.png",
                "frelance_06.jpg"
            ],
            links: [
                {
                    name: "Youtuber",
                    icon: "youtube-play",
                    url: "https://youtu.be/vy_TlQwyqQQ"
                }
            ]
        },
        {
            name: "Freelance",
            description: "I've worked as a <b>freelancer</b> doing mostly gameplay programing, implementing UI and architecture setup. Mostly the work was for 2D games but I also worked on training simulations apps and user interfaces.",
            role: "Developer",
            teamsize: 1,
            teaser_image: "img/portfolio/freelance.png",
            source_images: "img/portfolio/freelance/",
            imgs: [
                "freelance_01.png",
                "freelance_02.png",
                "freelance_03.png",
                "freelance_04.png",
                "freelance_05.png",
                "freelance_06.jpg"
            ],
            links: [
                {
                    name: "Willy Punch",
                    icon: "youtube-play",
                    url: "https://youtu.be/JGK3mc0WuZ0"
                },
                {
                    name: "Vortek",
                    icon: "youtube-play",
                    url: "https://youtu.be/SRjHFvaZPqU"
                }
            ]
        }
    ];
    
    $scope.showProject = function (project) {

        var images = new Array();
        project.imgs.forEach(function (e) {
            images.push({'source': project.source_images + e, 'type': 'image'});
        });

        var lightbox = UIkit.lightbox.create(images);
        lightbox.show();
    };
    $scope.getIframeSrc = function (src) {
        return 'https://www.youtube.com/embed/' + src;
    };
    $scope.getNumber = function (num) {
        return new Array(num);
    };
});
