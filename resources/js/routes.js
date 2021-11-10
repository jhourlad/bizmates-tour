import HomeComponent from '~/components/Home/HomeComponent'
import VenueComponent from '~/components/Venue/VenueComponent'

export const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/city/:city',
    component: VenueComponent,
    props: true
  }
]
