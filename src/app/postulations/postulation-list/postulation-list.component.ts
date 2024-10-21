import { Component, OnInit, ViewChild } from '@angular/core';
import { PostulationDTO } from '../models/postulation.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PostulationService } from '../postulation.service';
import { SnackbarService } from 'src/app/snackbar/snackbar.service';

@Component({
  selector: 'app-postulation-list',
  templateUrl: './postulation-list.component.html',
  styleUrls: ['./postulation-list.component.css']
})
export class PostulationListComponent implements OnInit{
  postulationDisabled: { [id: number]: boolean } = {};
  postulations!:PostulationDTO[];
  dataSource=new MatTableDataSource<PostulationDTO>;
  displayedColumns:string[]=['id','date','titre','nom','status','action'];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  constructor(private postulationService:PostulationService,
              private snackbarService:SnackbarService
  ){}
  ngOnInit(): void {
    this.getListPostulation();
    
  }

  getListPostulation(){
    this.postulationService.getListPostulation().subscribe({
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

  validerPostulation(postulationId:number){
    this.postulationService.validerPostulation(postulationId).subscribe({
      next:(data)=>{
        this.snackbarService.showMessage("Postulation Accepter avec succes");
        this.getListPostulation();

        // Disable both buttons for this postulation after validation
        this.postulationDisabled[postulationId] = true;
      },error:(err)=>{
        console.log(err);
      }
    })

  }

  annulerPostulation(postulationId:number){
    this.postulationService.annulerPostulation(postulationId).subscribe({
      next:(data)=>{
        this.snackbarService.showMessage("Postulation non Accepter");
        this.getListPostulation();

        // Disable both buttons for this postulation after validation
        this.postulationDisabled[postulationId] = true;

      },error:(err)=>{
        

      }
    })

  }

}
