import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  friends = [
    {name: 'Michael', belt: 'black'},
    {name: 'Salim', belt: 'red'},
    {name: 'raul', belt: 'brown'},
  ];
  
  constructor(private logger: LoggingService) { 
  }

  logIt() {
    this.logger.log();
  }
  ngOnInit() {
  }

}
