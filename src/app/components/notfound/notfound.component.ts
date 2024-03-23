import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ErrorService} from "../../shared/services/error.service";

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent implements OnInit, OnDestroy {
  errorMessage: string | null = null;
  private errorSub!: Subscription;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorSub = this.errorService.error$.subscribe(message => {
      this.errorMessage = message;
    });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
