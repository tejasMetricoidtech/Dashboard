import { DrawerItem } from '../ts';
import { ROUTES } from './routes';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import GridOnIcon from '@material-ui/icons/GridOn';

export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: DashboardIcon,
  },
  {
    route: ROUTES.Performance,
    literal: 'Performance',
    Icon: AssessmentIcon,
  },
  {
    route: ROUTES.EmployeeContact,
    literal: 'EmployeeContact',
    Icon: PermContactCalendarIcon,
  },
  {
    route: ROUTES.Man,
    literal: 'Man',
    Icon: PermContactCalendarIcon,
  },
  {
    route: ROUTES.Material_table,
    literal: 'Material_table',
    Icon: GridOnIcon,
  },
]; 
 