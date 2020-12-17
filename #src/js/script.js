
// Scroll menu

$(function () {
    $('#menu').on('click', 'a', function (event) {
        event.preventDefault();

        let id = $(this).attr('href');
        let top = $(id).offset().top;

        $('body, html').animate({ scrollTop: top}, 1700);
    });
    $('.arrow').on('click', function (event) {
      event.preventDefault();

      let id = $(this).attr('href');
      let top = $(id).offset().top;

      $('body, html').animate({ scrollTop: top}, 1700);
  });
});

$(document).scroll(function(){
  if ($(window).scrollTop() > 100) {
      $(".header").addClass("header_scroll");
  } else {
      $(".header").removeClass("header_scroll");
  }

  $(".need-viewed").each(function() {
    if (isScrolledIntoView($(this))) {
      $(this).addClass("viewed");
    } 
  });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// Sliders

$(document).ready(function() {
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 1,
        variableWidth: false,
        arrows: false
    });
    $('.news-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1200,
        slidesToShow: 3,
        variableWidth: false,
        appendArrows: $('.news-arrows'),
        prevArrow: '<button id="prev" type="button" class="prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
    });
});


// Map

function initMap () {
    let pos = {lat: 40.68451, lng: -73.93534}; 
    let opt = {
        center: pos,
        zoom: 14,
        styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
          ]
    }

    let markerImg = {
        url: '/img/png/marker.png',
        size: new google.maps.Size(100, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(34, 34),
        scaledSize: new google.maps.Size(50, 50)
    };

    let map = new google.maps.Map(document.getElementById('map'), opt);

    let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: markerImg,
    });


}
