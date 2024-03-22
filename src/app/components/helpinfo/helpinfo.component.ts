import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-helpinfo',
  templateUrl: './helpinfo.component.html',
  styleUrl: './helpinfo.component.css'
})
export class HelpinfoComponent implements OnInit {
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
