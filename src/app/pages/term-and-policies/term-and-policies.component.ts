import { Component } from '@angular/core';

@Component({
  selector: 'app-term-and-policies',
  templateUrl: './term-and-policies.component.html',
  styleUrls: ['./term-and-policies.component.scss']
})
export class TermAndPoliciesComponent {
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
