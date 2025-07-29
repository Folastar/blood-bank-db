const loginSubmit =document.querySelector("#login-submit")




loginSubmit.addEventListener('submit', async(e)=>{

    e.preventDefault()
    const username=document.querySelector("#login-username").value
    const password=document.querySelector("#login-password").value
    // const targetUrl = "https://bloodbank.schlstat.com/login/login.php";
    try{
        const res= await axios.post('https://bloodbank.schlstat.com/login/login.php',{
            username,
            password
        })
        
        console.log(res.data)
        alert('login successful')
    }
    catch(error){
        console.error('erorr',error)
    }

})