import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit{
  etudiantId!:number;
  constructor(private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.etudiantId=this.activatedRoute.snapshot.params['etudiantId'];
  }

}
