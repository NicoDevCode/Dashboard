import {Component, Input} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {SessionsService} from '../session/services/sessions.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  @Input() name;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private service: SessionsService, private breakpointObserver: BreakpointObserver) {
  }

  signOut() {
    this.service.signOut().subscribe(
      data => {
        localStorage.clear();
        window.location.reload();
      },
      error => {
        localStorage.clear();
      }
    );
  }
}
