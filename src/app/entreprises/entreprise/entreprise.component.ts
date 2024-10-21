import { Component, OnInit, ViewChild } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { EntrepriseDTO } from '../models/entreprise.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent implements OnInit{
  entreprises!:EntrepriseDTO[];
  dataSource=new MatTableDataSource<EntrepriseDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','name','adresse','telephone','email','action'];
  constructor(private entrepriseService:EntrepriseService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListEntreprise();
    
  }
  getListEntreprise(){
    this.entrepriseService.getListEntreprise().subscribe({
      next:(data)=>{
        this.entreprises=data;
        this.dataSource=new MatTableDataSource<EntrepriseDTO>(this.entreprises);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  goToAddEntreprise(){
    this.router.navigateByUrl("/navbar/add-entreprise");

  }

}
