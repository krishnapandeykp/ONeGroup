import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mentor, coreGroup, alumni } from './../../../data-entries/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {
  type: string = '';
  data: any = null;
  currentData: { [key: string]: { name: string; designation: string; specialRemarks: string; imgSrc: string; }[] } | null = null;
  orderedKeys: string[] = [];
  mentorData = mentor[0];
  coreGroupData = coreGroup;
  alumniData = alumni;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.type = <string>this.router.url.split('/').pop();

    switch (this.type) {
      case 'mentor':
        this.data = this.mentorData;
        this.currentData = null;
        break;
      case 'coregroup':
        this.currentData = this.coreGroupData;
        this.orderedKeys = Object.keys(this.coreGroupData);
        break;
      case 'alumni':
        this.currentData = this.alumniData;
        this.orderedKeys = Object.keys(this.alumniData);
        break;
      default:
        this.data = null;
        this.currentData = null;
        break;
    }
  }
}
