let con=document.querySelectorAll(".con");
let computer=document.querySelectorAll(".computer");
let user = document.querySelector(".user")
let machine = document.querySelector(".machine")
let winModal = document.querySelector(".win-modal");
let winner = document.querySelector(".winner")
let play = document.querySelector(".play")
let random = Math.floor(Math.random()*3);
let score = JSON.parse(localStorage.getItem("sc"))
let scoreElem = document.getElementById("score")
let user_score = JSON.parse(localStorage.getItem("ussc"))
let user_scoreElem = document.getElementById("user-score")
let ruleBtn = document.querySelector(".btn-rule")
let rulemodal = document.querySelector(".rule-modal")
let nextBtn = document.querySelector(".btn-next")
if(score){
    scoreElem.innerText = score
}
if(user_score){
    user_scoreElem.innerText = user_score
}
let user_count = 0
let count = 0
let userSelected = null;
con.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        user.style.opacity ="1"
        con.forEach(item => {
            item.style.display = "none"
        });
        element.style.display = "block"
        element.classList.add("show")
        setTimeout(() => {
            machine.style.opacity = "1"
            setTimeout(() => {
                computer[random].style.display = "block"
                computer[random].classList.add("right")
            }, 1000);
        },500);
        setTimeout(() => {
            if(random==index){
                winModal.style.display ="grid"
                winner.innerText = "TIE UP"
            }else if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1) {
                winModal.style.display = "grid"
                winner.innerText = "YOU WIN"
                element.classList.add("highlighted");
                userSelected = element; 
                nextBtn.style.display = "block"
                window.location.href = 'winnerPage.html'
                user_count = user_score
                user_count++
                user_scoreElem.innerText = user_count
                localStorage.setItem("ussc", JSON.stringify(user_count))
            }else{
                winModal.style.display = "grid"
                winner.innerText = "YOU LOSE" 
                computer[random].classList.add("highlight-computer");
                count = score
                count++
                scoreElem.innerText = count
                localStorage.setItem("sc", JSON.stringify(count))
            }
        }, 1500);
    })
});
play.addEventListener("click", ()=> {
    computer.forEach(item => {
        item.classList.remove("highlight-computer");
    });
    window.location.reload()
})
ruleBtn.addEventListener("click", ()=> {
    rulemodal.style.display = "flex"
})
let close = document.querySelector(".close")
close.addEventListener("click", ()=> {
    rulemodal.style.display = "none"
})