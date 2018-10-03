import { Tornir } from './../../../e2e/TornirModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TornirServiesService } from '../tornir-servies.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

  game:Tornir=new Tornir();

  constructor(private tornirServer:TornirServiesService ,private router: Router) { }

  ngOnInit() {
  }

  onSave(){
   this.tornirServer.post(this.game).subscribe();
   alert("new game was add!!");
   this.router.navigateByUrl("/view");
  }
}
