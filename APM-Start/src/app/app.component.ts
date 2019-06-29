// import { Component } from '@angular/core';

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }




import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a href="javascript:;" class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a href="javascript:;" [routerLink]="['/welcome']" class="nav-link">Home</a></li>
      <li><a href="javascript:;" [routerLink]="['/products']" class="nav-link">Product List</a></li>
    </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent{
  pageTitle: string = "This is Angular: Getting Started";
}
