import {Component, OnInit} from '@angular/core';
import {AccountsService} from './account/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService] // the provider creates a new instances
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[]= [];
  // makes sure there is a instances of accountService
  constructor(private accountService: AccountsService) {
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

}
