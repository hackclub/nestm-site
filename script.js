const body = document.getElementsByTagName("body")[0]
const switchBtn = document.getElementById("switch")
const modeSwap = document.getElementById("color-scheme-swap")
const notion = document.getElementById("notion")

function getDateOfWeekday(refday){
    var days = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 0
    };
    if(!days.hasOwnProperty(refday))throw new Error(refday+" is not listed in "+JSON.stringify(days));
    var currDate = new Date();
    var currTimestamp = currDate.getTime();
    var triggerDay = days[refday];
    var dayMillDiff=0;
    var dayInMill = 1000*60*60*24;
    // add a day to dayMillDiff as long as the desired refday (sunday for instance) is not reached
    while(currDate.getDay()!=triggerDay){
        dayMillDiff += dayInMill;
        currDate = new Date(currDate.getTime()+dayInMill);
    }
    return new Date(currTimestamp + dayMillDiff);
}

var friday = getDateOfWeekday("friday");
friday.setHours(14,0,0); 
document.getElementById('meeting-time').innerHTML = "<h4 style=\"margin-block-end: 0em\">The next club meeting is at: </h4><strong><br><h2 style=\"margin-block-end: 0em; margin-block-start: 0em; font-weight: 800; font-family: 'Ubuntu', sans-serif;\">"+friday.toLocaleString()+"</h2></strong><br/>";

let isGradient = true
switchBtn.addEventListener('click', _ => {
    if (isGradient) {
        isGradient = false
        body.classList.remove('rainbow-gradient')
        body.classList.add('rainbow')
    } else {
        isGradient = true
        body.classList.remove('rainbow')
        body.classList.add('rainbow-gradient')
    }
    console.log(change.classList)
})

let isDark = false
modeSwap.addEventListener('click', _ => {
    if (isDark) {
        isDark = false
        body.classList.add('rainbow-gradient')
        switchBtn.style.display = ""
        notion.src = "https://logos-download.com/wp-content/uploads/2019/06/Notion_App_Logo.png"
    } else {
        isGradient = true // NOT A BUG, DO NOT REMOVE
        body.classList.remove('rainbow-gradient')
        body.classList.remove('rainbow')
        switchBtn.style.display = "none"
        notion.src = "https://cloud-m5dd4kioq.vercel.app/0image-5.png"

        isDark = true
        body.classList.add('darkmode')
    }
    console.log(change.classList)
})