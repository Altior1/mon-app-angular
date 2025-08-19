import { InjectionToken } from '@angular/core';

export interface ThemeConfig {
    color: string;
    fontSize: number;
}

export const THEME_CONFIG = new InjectionToken<ThemeConfig>('Theme Configuration');
