import {Component} from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

export class Account {
  bsb: number;
  accountNumber: number;
  accountName: string;
  balance: number;
}

@Component({
  selector: 'create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})


export class CreateLoanComponent {
  title = 'app';

  frequencies = [
    {value: 'weekly-0', viewValue: 'Weekly'},
    {value: 'fortnightly-1', viewValue: 'Fortnightly'},
    {value: 'monthly-2', viewValue: 'Monthly'}
  ];

  accounts = [

    {bsb:814282, accountNumber:50005343, accountName:'Everyday', balance:10802.30},
    {bsb:814282, accountNumber:50005345, accountName:'Fresh Start Access P&amp;I', balance:201792.36},
    {bsb:814282, accountNumber:50005356, accountName:'Everyday', balance:1110.35},
    {bsb:814282, accountNumber:50005350, accountName:'Prime Access', balance:0.00}

  ]

  selectedAccount:Account = this.accounts[0];

  onSelect(account: Account): void {
    this.selectedAccount = account;
  }

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
