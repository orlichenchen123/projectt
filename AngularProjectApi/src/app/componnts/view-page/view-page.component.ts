import { Routes, Router } from '@angular/router';
import { Tornir } from './../../../../e2e/TornirModel';
import { Component, OnInit, Input } from '@angular/core';
import { TornirServiesService } from '../../tornir-servies.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
public tornirList :Tornir[];
public dataTornir:Tornir;
public ID:number=undefined;
public Game_Name:string="";
public Player1:string="";
public Player2:string="";
public Who_Won:string="";

public subscription: Subscription;
public massege: Response;



  constructor(
    private tornirServer:TornirServiesService ,private router: Router  ) { }


  ngOnInit() {
     this.tornirServer.getAllGame().subscribe(games => this.tornirList = games);
  }

  onClickRow(dataTornir: Tornir, event) {
     this.ID=dataTornir.ID;
     this.Game_Name=dataTornir.Game_Name;
     this.Player1=dataTornir.Player1;
     this.Player2=dataTornir.Player2;
     this.Who_Won=dataTornir.Who_Won;
    console.log(dataTornir);
  }

  onClickUpdate():void{
     this.dataTornir=new Tornir();
     this.dataTornir.ID=this.ID;
     this.dataTornir.Game_Name=this.Game_Name;
     this.dataTornir.Player1=this.Player1;
     this.dataTornir.Player2=this.Player2;
     this.dataTornir.Who_Won=this.Who_Won;
    console.log(this.dataTornir);
    this.tornirServer.put(this.ID,this.dataTornir).subscribe();  }

  onClickDelete():void{
      this.dataTornir=new Tornir();
      this.dataTornir.ID=this.ID;
      this.dataTornir.Game_Name=this.Game_Name;
      this.dataTornir.Player1=this.Player1;
      this.dataTornir.Player2=this.Player2;
      this.dataTornir.Who_Won=this.Who_Won;
     console.log(this.dataTornir);
     this.tornirServer.delet(this.ID).subscribe(res => this.massege = res);  
  }

  onClickNew(){
    this.router.navigateByUrl('/create-new')
    
  }

  onReafrech(){
    this.tornirServer.getAllGame().subscribe(games => this.tornirList = games);
  }
}
