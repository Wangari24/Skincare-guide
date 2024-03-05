function validateForm(){
	 let firstName=
	 document.getElementByid('firstname').value;
	 let lastName=
	 document.getElementByid('lastname').value;
	 let email=
	 document.getElementByid('useremail').value;
	 let password=
	 document.getElementByid('Account type').value;

	 if(firstName=="" || lastName=="" || email=="" ||password==||"")
	 	alert("Field should not be blank");
	 else if(!firsTname.match(^[A-Za-z]+$/))
	 	document.getElementByid('result').innerHTML=
	    "FirstName should have alphabetic characters only:"
	    return false;
	    else if(password.length<8){
	    	document.getElementByid('result 2').innerHTML
	    	"Password should have atleast 8 characters"
	    	return false;
	    }
	    else{
	    	alert ("success");
	   


	 }
	}
}