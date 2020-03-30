import { Routes, Route } from '@angular/router';

import { ShellComponent } from './shell.component';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component
   * @param routes The routes to add.
   * @param title section title
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes, title?: string): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      // Reuse ShellComponent instance when navigating between child views
      data: { title, reuse: true },
    };
  }
}
