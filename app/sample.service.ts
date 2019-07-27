import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }
  getMessage(): string{
    return 'Value returned by service';
  }
}
