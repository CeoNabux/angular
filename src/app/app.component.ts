import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  image="../estaticos/bootstrap-logo.svg"
  datos = [
  {
    especialidad: "Estructura",
    tecnologia: "HTML",
    enlace: {
      href: "https://developer.mozilla.org/es/docs/Web/HTML",
      clases: "small",
      texto: "MDN",
    },
  },
  {
    especialidad: "Estilo",
    tecnologia: "CSS",
    enlace: {
      href: "https://desarrolloweb.com/home/css",
      clases: "small text-secondary",
      texto: "Desarrollo Web",
    },
  },
  {
    especialidad: "Comportamiento",
    tecnologia: "Javascript",
    enlace: {
      href: "https://javascript.info/intro",
      clases: "small text-success",
      texto: "Javascript.info",
    },
  },
];
}
