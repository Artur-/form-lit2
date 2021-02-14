import { Router } from '@vaadin/router';
import { routes } from './routes';
import { appState } from './store/appstate';

export const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);

window.addEventListener('vaadin-router-location-changed', (e) => {
  appState.setLocation((e as CustomEvent).detail.location);
  const title = appState.currentViewTitle;
  if (title) {
    document.title = title + ' | ' + appState.applicationName;
  } else {
    document.title = appState.applicationName;
  }
});
