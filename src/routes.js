import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const DashboardLight = React.lazy(() => import('./views/dashboard/light/DashboardLight'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

export const routeName = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/dashboard',
  dashboardLight: '/dashboard-light',
  theme: '/theme',
  themeColors: '/theme/colors',
  themeTypography: '/theme/typography',
  base: '/base',
  baseAccordion: '/base/accordion',
  baseBreadcrumbs: '/base/breadcrumbs',
  baseCards: '/base/cards',
  baseCarousels: '/base/carousels',
  baseCollapses: '/base/collapses',
  baseListGroups: '/base/list-groups',
  baseNavs: '/base/navs',
  basePaginations: '/base/paginations',
  basePlaceholders: '/base/placeholders',
  basePopovers: '/base/popovers',
  baseProgress: '/base/progress',
  baseSpinners: '/base/spinners',
  baseTabs: '/base/tabs',
  baseTables: '/base/tables',
  baseTooltips: '/base/tooltips',
  buttons: '/buttons',
  buttonsButtons: '/buttons/buttons',
  buttonsDropdowns: '/buttons/dropdowns',
  buttonsGroups: '/buttons/button-groups',
  charts: '/charts',
  forms: '/forms',
  formControl: '/forms/form-control',
  formSelect: '/forms/select',
  formChecksRadios: '/forms/checks-radios',
  formRange: '/forms/range',
  formInputGroup: '/forms/input-group',
  formFloatingLabels: '/forms/floating-labels',
  formLayout: '/forms/layout',
  formValidation: '/forms/validation',
  icons: '/icons',
  iconsCoreUI: '/icons/coreui-icons',
  iconsFlags: '/icons/flags',
  iconsBrands: '/icons/brands',
  notifications: '/notifications',
  notificationsAlerts: '/notifications/alerts',
  notificationsBadges: '/notifications/badges',
  notificationsModals: '/notifications/modals',
  notificationsToasts: '/notifications/toasts',
  widgets: '/widgets',
}

const routes = [
  { path: routeName.home, exact: true, name: 'Home' },
  { path: routeName.dashboard, name: 'Dashboard', element: Dashboard },
  {
    path: routeName.dashboardLight,
    name: 'Dashboard-Light',
    element: DashboardLight,
  },
  { path: routeName.theme, name: 'Theme', element: Colors, exact: true },
  { path: routeName.themeColors, name: 'Colors', element: Colors },
  { path: routeName.themeTypography, name: 'Typography', element: Typography },
  { path: routeName.base, name: 'Base', element: Cards, exact: true },
  { path: routeName.baseAccordion, name: 'Accordion', element: Accordion },
  { path: routeName.baseBreadcrumbs, name: 'Breadcrumbs', element: Breadcrumbs },
  { path: routeName.baseCards, name: 'Cards', element: Cards },
  { path: routeName.baseCarousels, name: 'Carousel', element: Carousels },
  { path: routeName.baseCollapses, name: 'Collapse', element: Collapses },
  { path: routeName.baseListGroups, name: 'List Groups', element: ListGroups },
  { path: routeName.baseNavs, name: 'Navs', element: Navs },
  { path: routeName.basePaginations, name: 'Paginations', element: Paginations },
  { path: routeName.basePlaceholders, name: 'Placeholders', element: Placeholders },
  { path: routeName.basePopovers, name: 'Popovers', element: Popovers },
  { path: routeName.baseProgress, name: 'Progress', element: Progress },
  { path: routeName.baseSpinners, name: 'Spinners', element: Spinners },
  { path: routeName.baseTabs, name: 'Tabs', element: Tabs },
  { path: routeName.baseTables, name: 'Tables', element: Tables },
  { path: routeName.baseTooltips, name: 'Tooltips', element: Tooltips },
  { path: routeName.buttons, name: 'Buttons', element: Buttons, exact: true },
  { path: routeName.buttonsButtons, name: 'Buttons', element: Buttons },
  { path: routeName.buttonsDropdowns, name: 'Dropdowns', element: Dropdowns },
  { path: routeName.buttonsGroups, name: 'Button Groups', element: ButtonGroups },
  { path: routeName.charts, name: 'Charts', element: Charts },
  { path: routeName.forms, name: 'Forms', element: FormControl, exact: true },
  { path: routeName.formControl, name: 'Form Control', element: FormControl },
  { path: routeName.formSelect, name: 'Select', element: Select },
  { path: routeName.formChecksRadios, name: 'Checks & Radios', element: ChecksRadios },
  { path: routeName.formRange, name: 'Range', element: Range },
  { path: routeName.formInputGroup, name: 'Input Group', element: InputGroup },
  { path: routeName.formFloatingLabels, name: 'Floating Labels', element: FloatingLabels },
  { path: routeName.formLayout, name: 'Layout', element: Layout },
  { path: routeName.formValidation, name: 'Validation', element: Validation },
  { path: routeName.icons, exact: true, name: 'Icons', element: CoreUIIcons },
  { path: routeName.iconsCoreUI, name: 'CoreUI Icons', element: CoreUIIcons },
  { path: routeName.iconsFlags, name: 'Flags', element: Flags },
  { path: routeName.iconsBrands, name: 'Brands', element: Brands },
  { path: routeName.notifications, name: 'Notifications', element: Alerts, exact: true },
  { path: routeName.notificationsAlerts, name: 'Alerts', element: Alerts },
  { path: routeName.notificationsBadges, name: 'Badges', element: Badges },
  { path: routeName.notificationsModals, name: 'Modals', element: Modals },
  { path: routeName.notificationsToasts, name: 'Toasts', element: Toasts },
  { path: routeName.widgets, name: 'Widgets', element: Widgets },
]

export default routes
