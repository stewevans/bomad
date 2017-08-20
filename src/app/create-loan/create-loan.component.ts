import {Component} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent {
  title = 'app';

  screen = 1;

  frequencies = [
    {value: 'weekly-0', viewValue: 'Weekly'},
    {value: 'fortnightly-1', viewValue: 'Fortnightly'},
    {value: 'monthly-2', viewValue: 'Monthly'}
  ];

  value = 50;
  bufferValue = 75;

  constructor(private router: Router) {
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          // you can use DomAdapter
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }
      }
    });
  }
}
