import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  public titleParent: string = 'Parent Component';

  public titleChild: string = 'Child Component';

  constructor() {}
}
