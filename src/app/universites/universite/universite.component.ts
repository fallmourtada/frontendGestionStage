import { Component, OnInit ,ViewChild} from '@angular/core';
import { UniversiteService } from '../universite.service';
import { UniversiteDTO } from '../models/universite.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit{
  universites!:UniversiteDTO[];
  dataSource=new MatTableDataSource<UniversiteDTO>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  displayedColumns:string[]=['id','name','addresse','telephone','email','action'];
  constructor(private universiteService:UniversiteService,
              private router:Router
  ){}
  ngOnInit(): void {
    this.getListUniversite();
  }

  getListUniversite(){
    this.universiteService.getListUniversite().subscribe({
      next:(data)=>{
        this.universites=data;
        this.dataSource=new MatTableDataSource<UniversiteDTO>(this.universites);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;

      },error:(err)=>{
        console.log(err);
      }
    })
  }

  goToAddUniversite(){
    this.router.navigateByUrl("/navbar/add-universite");
  }

}
