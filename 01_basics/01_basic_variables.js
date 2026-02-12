console.log("Variables");//output on screen
const account_Id=12345//fixed once defined
let acccount_email="djghuergh@gmail.com"
var accountpassword="45675"
accountcity="Jaipur" // not safe to use but can be done
console.table([account_Id,acccount_email,accountpassword,accountcity])
// account_Id="21424"
acccount_email="adaf@gmail";
accountpassword="abcdf"
accountcity="Delhi"
// let allows modification 
//var allows modification but not preferred because of issue in block scope and functional scope
let accountstate;
console.log(accountstate);//undefined
console.table([account_Id,acccount_email,accountpassword,accountcity])