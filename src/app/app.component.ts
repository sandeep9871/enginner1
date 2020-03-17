import { Component } from '@angular/core';
import { GetserviceService } from './getservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'assignment';
  search:string="";

  tableData:any;

  created_at:string="";
  title:string="";
  url:string="";
  author:string="";


  constructor(private service : GetserviceService, private modal:NgbModal){
    debugger;
    this.service.getData().subscribe(res=>{
      debugger;
      this.tableData=res["hits"];
    })

  }

  openPopup(item:any,modals){
    this.created_at=item.created_at;
    this.title=item.title;
    this.url=item.url;
    this.author=item.author;

    this.modal.open(modals);

  }

}
