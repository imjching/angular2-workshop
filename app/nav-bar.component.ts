import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Reddit Clone</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavBarComponent { }
