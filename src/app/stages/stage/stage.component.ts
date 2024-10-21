import { Component, OnInit, ViewChild } from '@angular/core';
import { StageService } from '../services/stage.service';
import { StageDTO } from '../models/stage.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit{
  stages!:StageDTO[];
  dataSource=new MatTableDataSource<StageDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','titre','description','dateDebut','dateFin','nom','action'];
  constructor(private stageService:StageService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListStage();
    
  }
  getListStage(){
    this.stageService.getListStage().subscribe({
      next:(data)=>{
        this.stages=data;
        this.dataSource=new MatTableDataSource<StageDTO>(this.stages);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }

    })
  }

  goPostulation(stageId:number){
    this.router.navigateByUrl(`/navbar/postulations/${stageId}`);
  }

  goToAddStage(){
    this.router.navigateByUrl("/navbar/add-stage");
  }
}
