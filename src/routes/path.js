import {Suspense, lazy } from "react";
import {useRoutes} from 'react-router-dom'

const DetailsComponent=(Component)=>(props) => (
    <Suspense fallback={<p>Loading</p>}>
        <Component {...props} />
    </Suspense>
  )
  

export default function Router(){
    return useRoutes([
        {
            path:'home',
            element:<MainDashboard />,
        },
        {
            path:'movies',
            element:<MoviePreview />,
        },
        {
            path:'booking',
            element:<Booking />,
        },
        {
            path:'payment',
            element:<Payment />,
        }
    ])
}
const MainDashboard  = DetailsComponent(lazy(()=> import ('../pages/DashboardModule/MainDashboard')));
const MoviePreview  = DetailsComponent(lazy(()=> import ('../pages/MoviePreviewModule/MoviePreview')));
const Booking = DetailsComponent(lazy(()=> import ('../pages/BookingModule/bookingCenter')));
const Payment  = DetailsComponent(lazy(()=> import ('../pages/PaymentGateWayModule/Paymentpage')));
