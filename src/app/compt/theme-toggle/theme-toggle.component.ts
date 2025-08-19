// Fichier: src/app/themed-panel/themed-panel.component.ts
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeConfig, THEME_CONFIG } from '../shared/theme.config';

@Component({
  selector: 'app-themed-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngStyle]="{
      'color': config.primaryColor,
      'font-size.px': config.fontSize,
      'border': '1px solid ' + config.primaryColor,
      'padding': '10px'
    }">
      Ce panneau est stylé par la configuration injectée !
    </div>
  `
})
export class ThemedPanelComponent {
  constructor(@Inject(THEME_CONFIG) public config: ThemeConfig) { }
}
