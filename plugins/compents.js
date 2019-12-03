import Vue from 'vue'
import Input from '@/components/Input/Input.vue'
import InputNum from '@/components/Input/InputNum.vue'
import InputRemote from '@/components/Input/InputRemote.vue'
import Select from '@/components/Input/Select.vue'
import DateTimePicker from '@/Components/DateTime/DateTimePicker.vue'
import BasicTable from '@/components/BasicTable.vue'

Vue.component('z-input', Input)
Vue.component('z-input-num', InputNum)
Vue.component('z-input-remote', InputRemote)
Vue.component('z-select', Select)
Vue.component('z-date-picker', DateTimePicker)
Vue.component('z-basic-table', BasicTable)
