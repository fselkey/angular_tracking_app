import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'tracking-animation';

  receivedIcon: string = 'pending_actions';
  testedIcon: string = 'pending_actions';
  shippedIcon: string = 'pending_actions';

  received: boolean;
  tested: boolean;
  shipped: boolean;

  order = {
    _id: '1',
    so_num: '82759',
    po_num: '55555'
  }
  track = {

    _id: '1',
    order_id: '1',
    received: false,
    tested: false,
    shipped: false
  }
  sliderValue = 1;

  constructor() {
  
    this.received = this.track.received;
    this.tested = this.track.tested;
    this.shipped = this.track.shipped;

  }

  ngOnInit() {
    
    if (this.received) {

      this.sliderValue += 1;
      this.receivedIcon = 'inventory'
    }
    if (this.track && this.track.tested) {

      this.sliderValue += 1;
      this.testedIcon = 'task'

    }
    if (this.track && this.track.shipped) {
      this.sliderValue += 1;
      this.shippedIcon = 'local_shipping';
    }
  }


  updateReceiveStatus(isChecked: boolean) {

    if(isChecked) {
      this.sliderValue += 1;
      this.receivedIcon = 'inventory';
    }
    else {
      this.sliderValue -= 1;
      this.receivedIcon = 'pending_actions';
    } 
  }
  updateTestStatus(isChecked: boolean) {
    if(isChecked) {
      this.sliderValue += 1;
      this.testedIcon = 'task'
    } 
    else {
      this.sliderValue -= 1;
      this.testedIcon = 'pending_actions';
    }
  }
  updateShipStatus(isChecked: boolean) {
    if(isChecked) {
      this.sliderValue += 1;
      this.shippedIcon = 'local_shipping';
    }
    else {
      this.sliderValue -= 1;
      this.shippedIcon = 'pending_actions';
    } 
  }

}
