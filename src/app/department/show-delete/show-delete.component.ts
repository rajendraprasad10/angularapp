import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';




@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  constructor(private service:SharedService) { }
 
  DepartmentList:any=[];

  AtcivateAddEditDepComp:boolean=false;
  dep:any;
  ModelTitile:any;


  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmenName:""
    }
    this.ModelTitile="Add Department";
    this.AtcivateAddEditDepComp=true;
  }

  closeClick(){
    this.AtcivateAddEditDepComp=false;
    this.refreshDepList();
  }

  editClick(item:any){
    this.dep=item;
    this.ModelTitile="edit Department";
    this.AtcivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      
    });
  }

}
