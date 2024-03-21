import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-helpinfo',
  templateUrl: './helpinfo.component.html',
  styleUrl: './helpinfo.component.css'
})
export class HelpinfoComponent implements OnInit {
  showInput = false;
  showHelpIcon = false;
  showHoverText = false;

  ngOnInit() {
    setTimeout(() => {
      if (!this.showInput) {
        this.showHelpIcon = true;
      }
    }, 10000);
  }

  onMouseEnter() {
    this.showHoverText = true;
  }

  onMouseLeave() {
    this.showHoverText = false;
  }
}
