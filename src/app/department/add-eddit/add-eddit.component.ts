import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-eddit',
  templateUrl: './add-eddit.component.html',
  styleUrls: ['./add-eddit.component.css']
})
export class AddEdditComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() dep:any;
  DepartmentId:any;
  DepartmentName:any;

  
  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmenName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
              DepartmentName:this.DepartmentName};

    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};

    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
      });
  }

}
