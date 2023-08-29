import { Component } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent {
  viewType: string = 'pill-first';
  selectedLevel: any;
  selectedTabOption: any = 'pill-first';

  onTabChange(value: any) {
    console.log(this.selectedTabOption);

    this.viewType = value.target.value;
  }
  tabToggle(selectedTabOption: any) {
    this.viewType = selectedTabOption;
    this.selectedTabOption = selectedTabOption;
  }
  tabOptions: any = [
    {
      id: 1,
      name: 'All',
      value: 'pill-first',
    },
    {
      id: 2,
      name: 'Business',
      value: 'pill-second',
    },
    {
      id: 3,
      name: 'Work',
      value: 'pill-third',
    },
    {
      id: 4,
      name: 'Company',
      value: 'pill-fourth',
    },
    {
      id: 5,
      name: 'Global',
      value: 'pill-fifth',
    },
    {
      id: 6,
      name: 'Technology',
      value: 'pill-sixth',
    },
  ];
}
