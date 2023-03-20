let grabSelector=document.querySelector("#range2")

grabSelector.addEventListener("mousemove",setValue)
grabSelector.addEventListener("ontouchmove",setValue)

function setValue()
{
    let grabSelector1=document.querySelector("#range2")
    let updateValue=document.querySelector("#num1")
    updateValue.focus()
    updateValue.value=grabSelector1.value
}

function generate()
{
    partialClear()
    let values=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v'
                ,'w','x','y','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*',
                '+','/','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let password=""
    let updateValue=document.querySelector("#num1")
    for(let i=0;i<updateValue.value;i++)
    {
        password+=values[Math.floor(Math.random()*values.length)]
    }
    let assignValue=document.querySelector("#write")
    assignValue.value=password
    check()
}


function check()
{
    let checkPasswordStrength=document.querySelector("#check")
    checkPasswordStrength.focus()
    let assignValue=document.querySelector("#write").value
    let write=document.querySelector(".display")
    checkPasswordStrength.value=assignValue
    let REGEX=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/gi
    if(checkPasswordStrength.value == "")
    {
        console.log("nothing")
        write.innerText=" "
    }
    else if(REGEX.test(assignValue))
    {
        write.innerText="Password Is Strong"
        write.style.fontWeight="700"
        write.style.color="green"
    }
    else
    {
        console.log("likho")
        write.innerText="Password Is Weak"
        write.style.fontWeight="700"
        write.style.color="red"
    }
}

function clearAll()
{
    let updateValue=document.querySelector("#num1")
    let assignValue=document.querySelector("#write")
    let checkPasswordStrength=document.querySelector("#check")
    let write=document.querySelector(".display")
    updateValue.value=""
    assignValue.value=""
    checkPasswordStrength.value=""
    write.innerText=""
}

function partialClear()
{
    let checkPasswordStrength=document.querySelector("#check")
    checkPasswordStrength.value=""
    let write=document.querySelector(".display")
    write.innerText=""
}
