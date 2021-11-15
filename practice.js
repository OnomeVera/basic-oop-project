class BankAccount {
    constructor(name, age, accType, image, balance) {
        this.name = name;
        this.age = age;
        this.accType = accType;
        this.avatar = image;
        this.balance = balance;
    }

    withdraw (amount){
        if (amount > this.balance) {
           console.log('Insufficient Funds');
        } else{
            this.balance -= amount
           console.log(`Your account has been debited with the sum of ${amount}. Your Account balance is nnow ${this.balance}`);
        }
    }

    deposit (amount) {
        if (amount > 5e6 && this.accType === 'saving') {
            console.log(`you cannot deposit this amount into this savings account.you might need an upgrade`);
        }else{
            this.balance += amount
            console.log(`Your account has been credited with the sum of ${amount}. Your Account balance is now ${this.balance}`);
        }
    }
    checkBalance () {
        console.log(`Your balance at ${new Date()} is $${this.balance}`);
    }
}

const accounts = []
const cardList = document.querySelector('#card-list')

function generateCards () {
    let cards = accounts.map(acc => {
        return `
            <div class = "card">
                <figure>
                    <img src= "${acc.avatar}">
                </figure>
                <h1>${acc.name}</h1>
                <p>${acc.accType}</p>
                <h4>${acc.balance}</h4>
            </div>  
        `
    })
    return cards.join('')
}
document.createAccForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    let username = document.createAccForm.username.value
    let age = document.createAccForm.age.value
    let accType = document.createAccForm.accType.value
    let balance = document.createAccForm.balance.value
    let avatar = document.createAccForm.avatar
    let avatarData = '';

    //working on avatar
    let file = new FileReader()
    //reading a file
    file.readAsDataURL(avatar.files[0])
    file.onload = function(data) {
        avatarData = data.target.result
        let account = new BankAccount(username, age, accType, avatarData, parseFloat(balance))
        accounts.push(account)
        cardList.innerHTML = generateCards()
        create.classList.add('hide')
        // for the assignment
        // let img = document.createElement('img')
        // img.src = data.target.result
        // document.body.append(img)
        // create.style.display = 'block';
        // createBtn.style.display = 'none';
    }
    
})
const createBtn = document.querySelector('#create-btn')
createBtn.addEventListener('click',function () {
        create.classList.remove('hide')
})