import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Dashboard from 'src/pages/admin/Dashboard.vue'
import UserProfile from 'src/pages/admin/UserProfile.vue'
import Playlists from 'src/pages/admin/Playlists.vue'
import Playlist from 'src/pages/admin/Playlist.vue'
import Maps from 'src/pages/admin/Maps.vue'

import route from './routes';

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: `/admin/${route.admin.dashboard.route}`
  },
  {
    path: route.admin.container.route,
    name: route.admin.container.name,
    component: DashboardLayout,
    redirect: `/admin/${route.admin.dashboard.route}`,
    children: [
      {
        path: route.admin.dashboard.route,
        name: route.admin.dashboard.name,
        component: Dashboard
      },
      {
        path: route.admin.userProfile.route,
        name: route.admin.userProfile.name,
        component: UserProfile
      },
      {
        path: route.admin.playlists.route,
        name: route.admin.playlists.name,
        component: Playlists
      },
      {
        path: `${route.admin.playlist.route}/:id`,
        name: route.admin.playlist.name,
        component: Playlist
      },
      {
        path: route.admin.map.route,
        name: route.admin.map.name,
        component: Maps
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
