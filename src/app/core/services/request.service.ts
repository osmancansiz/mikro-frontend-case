import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor() {}

  initializeParse() {
    (Parse as any).serverURL = environment.SERVER_URL;
    Parse.initialize(environment.APP_ID, environment.JS_KEY);
  }

  async logIn(username: string, password: string) {
    try {
      return await Parse.User.logIn(username, password);
    } catch (error) {
      throw error;
    }
  }


  async resetPassword(email: string) {
    try {
      return await Parse.User.requestPasswordReset(email);
    } catch (e) {
      throw e;
    }
  }
}
