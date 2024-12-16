import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.syncManualItems();
  }

  syncManualItems(): void {
    const manualSidebar = document.getElementById('manualSidebar');
    const mobileMenu = document.getElementById('mobileMenu');

    if (manualSidebar && mobileMenu) {
      mobileMenu.innerHTML = ''; // Clear existing links

      Array.from(manualSidebar.children).forEach((child: Element) => {
        const href = child.getAttribute('href') || '#';
        const text = child.textContent || '';

        // Create individual link items for mobile
        const link = document.createElement('a');
        link.href = href;
        link.textContent = text;
        link.className = 'w-100 text-start'; // Add styles for spacing
        mobileMenu.appendChild(link);
      });
    }
  }
}
