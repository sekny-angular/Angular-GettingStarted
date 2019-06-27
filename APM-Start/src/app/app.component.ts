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
  template: `<div>
    <h2>{{pageTitle}}</h2>
    <pm-products></pm-products>
    </div>`
})

export class AppComponent{
  pageTitle: string = "This is Angular: Getting Started";
}
