import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/Auth/authentication-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
@Output() IsOpenConfigEm : EventEmitter<any> = new EventEmitter() ;
@Output() upadteAllWidget :EventEmitter<any> = new EventEmitter();
@Input() hiddenBarConfig =false ; 

constructor(       private router: Router,
  public authenticationService: AuthenticationService) { }
  ngOnInit() { }
  isOpenConfig(){
    this.IsOpenConfigEm.emit();
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  registre() {
    this.router.navigate(['/signup']);
}
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/sigin']);
}
updateWidgetAll(){
  this.upadteAllWidget.emit();


}
}
