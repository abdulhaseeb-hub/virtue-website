import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent {
  viewType: string = 'pill-first';
  selectedTabOption: any = 'pill-first';

  tabToggle(selectedTabOption:any){
    this.viewType = selectedTabOption;
    this.selectedTabOption = selectedTabOption;
  }
  tabOptions: any = [
    {
      id: 1,
      name: 'Safety and Security',
      value: 'pill-first',
    },
    {
      id: 2,
      name: 'Human well being',
      value: 'pill-second',
    },
    {
      id: 3,
      name: 'Digital UX',
      value: 'pill-third',
    }
  ];
}
