import { Component, OnInit } from '@angular/core';
import {
  BalHeadingModule,
  BalSpinnerModule,
} from '@baloise/design-system-components-angular';
import { Observable } from 'rxjs';
import { GreetingComponent } from 'src/app/shared/components/greeting/greeting.component';
import {
  GreetingResponse,
  GreetingService,
} from 'src/app/shared/greeting.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  standalone: true,
  imports: [BalHeadingModule, BalSpinnerModule, GreetingComponent],
})
export class SecondPageComponent implements OnInit {
  getRandomGreeting$!: Observable<GreetingResponse>;

  constructor(private greeting: GreetingService) {}

  ngOnInit(): void {
    this.getRandomGreeting$ = this.greeting.fetchRandom();
  }
}
