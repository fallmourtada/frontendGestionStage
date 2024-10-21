import { Component, OnInit, ViewChild } from '@angular/core';
import { RapportDTO } from '../../model/rapport.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RapportService } from '../../services/rapport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit{
  rapports!:RapportDTO[];
  dataSource=new MatTableDataSource<RapportDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','titre','contenu','nomStage','date','action'];

  constructor(private rapportService:RapportService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListRapport();
    
  }
  
  getListRapport(){
    this.rapportService.getListRapport().subscribe({
      next:(data)=>{
        this.rapports=data;
        this.dataSource=new MatTableDataSource<RapportDTO>(this.rapports);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  goToAddRapport(){
    this.router.navigateByUrl("/navbar/add-rapport");
  }

  goToEvaluation(rapportId:number){
    this.router.navigateByUrl(`/navbar/add-evaluation/${rapportId}`);

  }

}
