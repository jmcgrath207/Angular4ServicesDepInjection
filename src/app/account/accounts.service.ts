import { Injectable } from '@angular/core';
import {LoggingService} from '../logging/logging.service';


// Data service

@Injectable() // injectable needs to be on the recieved injected service
export class AccountsService {

  constructor(private loggingService: LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);

  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);

  }

}
