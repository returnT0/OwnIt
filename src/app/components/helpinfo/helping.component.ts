import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-helpinfo', templateUrl: './helping.component.html', styleUrl: './helping.component.css'
})
export class HelpingComponent implements OnInit {
  showHelpIcon = false;
  showHoverText = false;

  ngOnInit() {
    setTimeout(() => {
      this.showHelpIcon = true;
    }, 10000);
  }

  onMouseEnter() {
    this.showHoverText = true;
  }

  onMouseLeave() {
    this.showHoverText = false;
  }
}
