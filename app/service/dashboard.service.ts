import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {
  private information = '/api/dashboard_host_info';

  constructor(private http: Http) { }

  getHostInfo(){
    return this.http.get(this.information)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }    
}

