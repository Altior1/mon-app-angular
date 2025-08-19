// Fichier: src/app/special-themed-area/special-themed-area.component.ts
import { Component } from '@angular/core';
import { ThemedPanelComponent } from '../themed-panel/themed-panel.component';
import { THEME_CONFIG } from '../shared/theme.config';

@Component({
  selector: 'app-special-themed-area',
  standalone: true,
  imports: [ThemedPanelComponent],
  template: `
    <div style="background-color: #f5f5f5; padding: 15px;">
      <h3>Zone avec Thème Spécial</h3>
      <app-themed-panel></app-themed-panel>
    </div>
  `,
  // Fournisseur au niveau du composant qui surcharge le global !
  providers: [
    {
      provide: THEME_CONFIG,
      useValue: { primaryColor: 'red', fontSize: 20 }
    }
  ]
})
export class SpecialThemedAreaComponent { }
