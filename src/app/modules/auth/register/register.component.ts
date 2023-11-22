import { Component, Input } from '@angular/core';
import { SidebarService } from 'src/app/Services/sidebar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor( public _show: SidebarService){
    _show.changeShowSidebar(false)
  }
}
