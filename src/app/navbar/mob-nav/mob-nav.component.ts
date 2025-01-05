import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mob-nav',
  templateUrl: './mob-nav.component.html',
  styleUrls: ['./mob-nav.component.scss']
})
export class MobNavComponent {
  @Input() isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
