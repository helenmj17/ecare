import Vue from 'vue'
import Router from 'vue-router'



import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Patient from './components/Patient.vue'
import Patientlist from './components/Patientlist.vue'
import Doctorlist from './components/Doctorlist.vue'
import Nurseslist from './components/Nurseslist.vue'
import Ashaworkerlist from './components/Ashaworkerlist.vue'
import Admin from './components/Admin.vue'
import Loginrequest from './components/Loginrequest.vue'
import Logindetails from './components/Logindetails.vue'
import Health from './components/Health.vue'
import Family from './components/Family.vue'
import Patientstaff from './components/Patientstaff.vue'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {path: '/',component:Home},
        {path: '/loginuser',component:Login},
        {path: '/newuser',component:Signup},
        {path:'/patientinfo/:id',component:Patient},
        {path: '/patientinfo',component:Patientlist},
        {path: '/doctors',component:Doctorlist},
        {path: '/nurses',component:Nurseslist},
        {path: '/ashaworker',component:Ashaworkerlist},
        {path: '/admin',component:Admin},
        {path: '/request',component:Loginrequest},
        {path: '/details/:id',component:Logindetails},
        {path: '/family/:id',component:Family},
        {path: '/health/:id',component:Health},
        {path: '/patientstaff/:id',component:Patientstaff},
        
        

        
    ]
})
