import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isNavClassActive: boolean = false;
  isSolutionDrodpownActive: boolean = false;
  isResearchDrodpownActive: boolean = false;
  isTermsDrodpownActive: boolean = false;
  isBottom!: boolean;
  toggleNavClass() {
    this.isNavClassActive = !this.isNavClassActive;
  }

  toggledropDown(id: any) {
    if (id == 1) {
      this.isSolutionDrodpownActive = !this.isSolutionDrodpownActive;
      this.isResearchDrodpownActive = false;
      this.isTermsDrodpownActive = false;
    }
    if (id == 2) {
      this.isResearchDrodpownActive = !this.isResearchDrodpownActive;
      this.isSolutionDrodpownActive = false;
      this.isTermsDrodpownActive = false;
    }
    if (id == 3) {
      this.isTermsDrodpownActive = !this.isTermsDrodpownActive;
      this.isResearchDrodpownActive = false;
      this.isSolutionDrodpownActive = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.isBottom = true;
    } else if (window.scrollY) {
      this.isBottom = true;
    } else {
      this.isBottom = false;
    }
  }
}
