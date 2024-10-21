import { Component, OnInit, ViewChild } from '@angular/core';
import { TuteurDTO } from '../models/tuteur.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuteur',
  templateUrl: './tuteur.component.html',
  styleUrls: ['./tuteur.component.css']
})
export class TuteurComponent implements OnInit{
  tuteurs!:TuteurDTO[];
  dataSource=new MatTableDataSource<TuteurDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','nom','prenom','email','specialite','action']
  constructor(private userService:UserService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getListTuteurs();
    
  }

  getListTuteurs(){
    this.userService.getListTuteurs().subscribe({
      next:(data)=>{
        this.tuteurs=data;
        this.dataSource=new MatTableDataSource<TuteurDTO>(this.tuteurs);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }
    })
  }

  goToAddTuteur(){
    this.router.navigateByUrl("/navbar/add-tuteur")

  }

}
