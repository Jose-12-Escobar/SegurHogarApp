import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';
<<<<<<< HEAD
=======
import { SidebarService } from 'src/app/Services/sidebar.service';
>>>>>>> main

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  scroll!: boolean;
  show:boolean = false;
<<<<<<< HEAD

  constructor( private _showHD: HeaderService, private router: Router ) {
=======
  inAdmin : boolean = false;

  constructor( private _showHD: HeaderService, private _router: Router, public _showSB: SidebarService) {
>>>>>>> main
    this._showHD.showHeader.subscribe( res => { this.scroll = res});
  }

  toggleCollapse(): void {
    this.show = !this.show
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url != "/home") {
          this._showHD.changeShowSidebar(true)
        }else{
          this._showHD.changeShowSidebar(false);
        }
      }
    })
=======
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const splitPath = this._router.url.split('/');
        if (splitPath[1] != "home") {
          this._showHD.changeShowHeader(true)
          if (splitPath[1] === "admin") {
            this.inAdmin = true;
          }else{
            this.inAdmin = false;
          }
        }else{
          this._showHD.changeShowHeader(false);
          this.inAdmin = false;
        }
      }
    });
  }

  hiddenSidebar() {
    this._showSB.changeShowSidebar(!this._showSB.showSidebar.value);
>>>>>>> main
  }
}
