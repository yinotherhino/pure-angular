import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-observe-http',
  templateUrl: './observe-http.component.html',
  styleUrls: ['./observe-http.component.css']
})
export class ObserveHttpComponent {
  // Q3 - injecting shared service
  constructor(private data: DataService) {}
}
