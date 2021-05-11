<template>
   <div class="border">
       <Alert v-if ="alert" v-bind:message ="alert"/>
        <form class="form-signin formsign"  @submit.prevent="handleSubmit">
            <div class="text-center"><img class="mb-9" src="../assets/images/logo.png" alt="" width="150" height="">
            <h2 class="h3 mb-3 font-weight-normal">Login</h2></div>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="text" v-model="staffid" id="inputEmail" class="form-control" required autofocus><br>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password"  v-model="password" id="inputPassword" class="form-control"  required>
            <br>
            <div class="text-center"><div><button class="button1 button2" type="submit">Login</button></div></div>
            
        </form>
  
       
   </div>
</template>
<script>
import Alert from './Alert'
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            alert:'',
            staffid:'',
            password:'',            
        }
    },
    methods:{
      async handleSubmit(){
         var self = this;
            let newUser= {
            staffid:this.staffid,
            password:this.password
            };
            
            await axios.post("https://ecare-project.herokuapp.com/loginstaff",newUser)
            .then((response) =>{
                
                localStorage.setItem('token',response.data.token);
                console.log("inside");
                self.$router.push({path:"/doctors", query: {alert: 'Logged In Sucessfully'}});
            })


        
      }
    },
    components:{
        Alert
    }
}
</script>
<style>

.form-signin {
  
  max-width: 500px !important;
  padding: 15px;
  margin: 0 auto;
  box-sizing:border-box  !important;
  border-color:#fff !important;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px 150px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.button1{
    padding: 0px 50px;
    width:30%;
    border-radius: 8px;
    background-color: #227cf1;
   
    border: none;
    color: white;
    padding: 10px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
}
.button2 {
  
  background-color: #008CBA;
  color: white;
  

}

.button2:hover {
  background-color: #008CBA;
  color: white;
  background-color: white; 
  color: black; 
  border: 2px solid #008CBA;
  
}
.border{
    background-color:#fff;
}
</style>
