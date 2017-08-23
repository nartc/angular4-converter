import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public particleStyle: Object = {};
  public particleParams: Object = {};


  constructor() { }

  ngOnInit() {
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background': '#1b3543'
    };

    this.particleParams = {
      particles: {
        number: {
          value: 135,
          density: {
            enable: true,
            value_area: 961.4383117143238
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 1,
            color: "#000000"
          },
          polygon: {
            "nb_sides": 10
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
           random : false,
           straight : false,
           out_mode :  "out" ,
           bounce : false,
           attract : {
             enable : false,
             rotateX : 600,
             rotateY : 1200
          }
        }
      },
       interactivity : {
         detect_on : "canvas",
         events : {
           onhover : {
             enable : true,
             mode : "grab"
          },
           onclick : {
             enable : true,
             mode : "repulse"
          },
           resize : true
        },
         modes : {
           grab : {
             distance : 143.85614385614386,
             line_linked : {
               opacity : 1
            }
          },
           bubble : {
             distance : 400,
             size : 40,
             duration : 2,
             opacity : 8,
             speed : 3
          },
           repulse : {
             distance : 200,
             duration : 0.4
          },
           push : {
             particles_nb : 4
          },
           remove : {
             particles_nb : 2
          }
        }
      },
       retina_detect : true
    }
  }

}
