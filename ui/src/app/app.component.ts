import { Component } from '@angular/core';
import { TemplateService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template';
  transformedTemplate: any = ""
  constructor(private templateService: TemplateService) {}
  translateTemplate(template: any){
    this.templateService.postTemplate(template).subscribe(result => {
      console.log("returned result ", result)
      this.transformedTemplate = result.message
    })
  }
}
