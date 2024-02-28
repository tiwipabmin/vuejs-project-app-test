import Badge from 'primevue/badge'
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import DataTable from 'primevue/datatable'
import DialogService from 'primevue/dialogservice'
import Dropdown from 'primevue/dropdown'
import DynamicDialog from 'primevue/dynamicdialog'
import Editor from 'primevue/editor'
import InputMask from 'primevue/inputmask'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import InputSwitch from 'primevue/inputswitch'
import Skeleton from 'primevue/skeleton';
import OverlayPanel from 'primevue/overlaypanel'
import Paginator from 'primevue/paginator'
import Password from 'primevue/password'
import PrimeVue from 'primevue/config'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Row from 'primevue/row'
import Steps from 'primevue/steps'
import TabPanel from 'primevue/tabpanel'
import TabView from 'primevue/tabview'
import Tooltip from 'primevue/tooltip'
import ToggleButton from 'primevue/togglebutton'
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

// Primevue
// import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'quill'

import Divider from 'primevue/divider'

export default (app) => {
  app.use(DialogService)
  app.use(ToastService)
  app.use(PrimeVue)
  app.component('Badge', Badge)
  app.component('Breadcrumb', Breadcrumb)
  app.component('Button', Button)
  app.component('Calendar', Calendar)
  app.component('Card', Card)
  app.component('Checkbox', Checkbox)
  app.component('Column', Column)
  app.component('ColumnGroup', ColumnGroup)
  app.component('DataTable', DataTable)
  app.component('Divider', Divider)
  app.component('Dropdown', Dropdown)
  app.component('DynamicDialog', DynamicDialog)
  app.component('Editor', Editor)
  app.component('InputMask', InputMask)
  app.component('InputNumber', InputNumber)
  app.component('InputSwitch', InputSwitch)
  app.component('InputText', InputText)
  app.component('Skeleton', Skeleton)
  app.component('OverlayPanel', OverlayPanel)
  app.component('Paginator', Paginator)
  app.component('Password', Password)
  app.component('ProgressBar', ProgressBar)
  app.component('RadioButton', RadioButton)
  app.component('Row', Row)
  app.component('Steps', Steps)
  app.component('ToggleButton', ToggleButton)
  app.component('TabPanel', TabPanel)
  app.component('TabView', TabView)
  app.component('Toast', Toast)

  app.directive('tooltip', Tooltip)
}
