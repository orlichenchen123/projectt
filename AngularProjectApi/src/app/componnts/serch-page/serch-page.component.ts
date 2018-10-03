import { Tornir } from './../../../../e2e/TornirModel';
import { Component, OnInit } from '@angular/core';
import { TornirServiesService } from '../../tornir-servies.service';

@Component({
  selector: 'app-serch-page',
  templateUrl: './serch-page.component.html',
  styleUrls: ['./serch-page.component.css']
})
export class SerchPageComponent implements OnInit {
  public tornirList:Tornir[];

public ID:number=null;
public Game_Name:string=null;
public Player1:string=null;
public Player2:string=null;
public Who_Won:string=null;

public strUrl="search?id="+this.ID+"&gameName="+this.Game_Name+"&player1="+this.Player1+
               "&player2="+this.Player2+"&whoWon="+this.Who_Won;

  constructor(private tornirServer:TornirServiesService) { }

  ngOnInit() {
    this.tornirServer.getAllGame().subscribe(games => this.tornirList = games);
  }

  onClickSearch(){
    console.log(this.ID)
    console.log(this.strUrl);

   // this.tornirServer.Search(this.strUrl).subscribe(games => this.tornirList = games);
  }

}
