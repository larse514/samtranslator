import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { environment } from '../../environments/environment';

@Injectable()
export class TemplateService {

  constructor(private http: HttpClient) { }
  url = "https://ganwbf248g.execute-api.us-east-1.amazonaws.com/dev/ping" 
  
  // Get all posts from the API
  postTemplate(template: any) {
    //todo-add some sort of loading animation
    return this.http.post(this.url, template)
      .map(res => res);
  }
  
}