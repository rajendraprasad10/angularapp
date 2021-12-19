import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';



@Component({
  selector: 'app-show-delete',
  templateUrl: './show-delete.component.html',
  styleUrls: ['./show-delete.component.css']
})
export class ShowDeleteComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  AtcivateAddEditEmpComp:boolean=false;
  emp:any;
  ModelTitile:any;


  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotofileName:""
    }
    this.ModelTitile="Add Employee";
    this.AtcivateAddEditEmpComp=true;
  }

  closeClick(){
    this.AtcivateAddEditEmpComp=false;
    this.refreshEmpList();
  }

  editClick(item:any){
    this.emp=item;
    this.ModelTitile="edit Employee";
    this.AtcivateAddEditEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm("Are you sure?")){
      this.service.deleteDepartment(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data; 
    });
  }

}

