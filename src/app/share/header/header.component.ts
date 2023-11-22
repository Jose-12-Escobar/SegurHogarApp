import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scroll!: boolean;
  show:boolean = false;

  constructor( private _showHD: HeaderService, private router: Router ) {
    this._showHD.showHeader.subscribe( res => { this.scroll = res});
  }

  toggleCollapse(): void {
    this.show = !this.show
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url != "/home") {
          this._showHD.changeShowSidebar(true)
        }else{
          this._showHD.changeShowSidebar(false);
        }
      }
    })
  }
}
