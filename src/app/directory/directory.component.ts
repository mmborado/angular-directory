import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService]
})
export class DirectoryComponent implements OnInit {
  friends = [];
  
  constructor(private logger: LoggingService, private dataService: DataService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit() {
    //Make sure component is loaded before the service is used.
    this.dataService.fetchData().subscribe(
      (data) => this.friends = data
    )
  }

}
