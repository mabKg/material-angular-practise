import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinnet-progress',
  templateUrl: './spinnet-progress.component.html',
  styleUrls: ['./spinnet-progress.component.css']
})
export class SpinnetProgressComponent implements OnInit {

  showSpinner = false;
  constructor() { }

  ngOnInit() {
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
