import axios from 'axios'

axios.defaults.baseURL='https://ecare-project.herokuapp.com/';
axios.defaults.headers.common['Authorization']='Bearer' + localStorage.getItem('token');