import { Component, OnInit, ViewChild } from '@angular/core';
import { EtudiantDTO } from '../models/etudiant.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  etudiants!:EtudiantDTO[];
  dataSource=new MatTableDataSource<EtudiantDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','nom','prenom','email','codePermanent','niveau','action'];
  constructor(private userService:UserService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListEtudiants();
    
  }
  getListEtudiants(){
    this.userService.getListEtudiant().subscribe({
      next:(data)=>{
        this.etudiants=data;
        this.dataSource=new MatTableDataSource<EtudiantDTO>(this.etudiants);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }
    })

  }
  goToAddStudent(){
    this.router.navigateByUrl("/navbar/add-etudiant");
  }

}
