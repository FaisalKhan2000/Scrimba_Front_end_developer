const continueBtn = document.getElementById('continue-btn')
const acceptTerms = document.getElementById('accept-terms')
const acceptMail = document.getElementById('accept-mail')

continueBtn.addEventListener('click', function(){
    
/*
Challenge:
1. Add a second checkbox to see if a user
   wants to be added to the mailing list.
2. If they do, log out "mail accepted" when 
   the continue button is clicked. If they
   don't, log out "mail not accapted."
*/
    if (acceptTerms.checked){
        console.log("Terms accepted!")    
    }
    else{
        console.log("Terms refused!")         
    }
    
    if (acceptMail.checked){
        console.log("Mail accepted")
    }
    else{
        console.log("Mail refused")
    }
    
})