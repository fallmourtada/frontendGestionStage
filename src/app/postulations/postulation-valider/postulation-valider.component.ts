import { Component, OnInit, ViewChild } from '@angular/core';
import { PostulationDTO } from '../models/postulation.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostulationService } from '../postulation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postulation-valider',
  templateUrl: './postulation-valider.component.html',
  styleUrls: ['./postulation-valider.component.css']
})
export class PostulationValiderComponent implements OnInit{
  postulations!:PostulationDTO[];
  dataSource=new MatTableDataSource<PostulationDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','date','titre','nom','status','action'];
  constructor(private postulationService:PostulationService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListPostulationsValider();
    
  }


  getListPostulationsValider(){
    this.postulationService.postulationValider().subscribe({
      next:(data)=>{
        this.postulations=data;
        this.dataSource=new MatTableDataSource<PostulationDTO>(this.postulations);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }
    })
  }

  goToMessage(id:number){
    this.router.navigateByUrl(`/navbar/message/${id}`);
  }

}
