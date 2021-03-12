const saveChecks = function() {
    localStorage.setItem('stimulusChecks', JSON.stringify(stimulusChecks))
}

const getSavedChecks = function() {
    const checksJSON = localStorage.getItem('stimulusChecks')

    if(checksJSON !== null) {
        return JSON.parse(checksJSON)
    } else {
        return []
    }
}

const validateForm = function(status, income) {
    const message = []
    
    const error = document.getElementById('error')
    error.textContent = ''
    
    
    if(status === '') {
        message.push('Please select your filing status.')
    }
    if(income === '' || isNaN(income)) {
        message.push('Please enter a valid income.')
    }
    
    if(message.length > 0) {
        const errorList = document.createElement('ul')
        message.forEach(function(item) {
            let errorItem = document.createElement('li')
            errorItem.textContent = item
            errorList.appendChild(errorItem)
        })
        error.appendChild(errorList)
        error.classList.add('error')
        return false
    } else {
        error.classList.remove('error')
        return true
    }
}

const calculateStimulus = function(status, income, dependants) {
    let amount = 0
    if (status === 'married') {
        if (income <= 150000) {
            amount = 1200 + 600 * dependants
        } else if (income > 150000 && income < 174000) {
            amount = Math.round(1200 - (income - 150000)/1000 * 50) + 600 * dependants
        } else {
            amount = 600 * dependants
        }
    } else if (status === 'hoh') {
        if (income <= 112500) {
            amount = 600 + 600 * dependants
        } else if (income > 112500 && income < 124500) {
            amount = Math.round(600 - (income - 112500)/1000 * 50) + 600 * dependants
        } else {
            amount = 600 * dependants
        }
    } else {
        if (income <= 75000) {
            amount = 600
        } else if (income > 75000 && income < 87000) {
            amount = Math.round(600 - (income - 75000)/1000 * 50)
        } else {
            amount = 0
        }
    }
    stimulusChecks.push({
        id: uuidv4(),
        amount: amount,
        status: status,
        dependants: dependants,
        income: income
    })
    saveChecks()
    displayOutput(`Your expected stimulus is $${amount}.`)
}

const displayOutput = function(message) {
    const output = document.querySelector('#output')
    output.innerHTML = ''
    const checkEl = document.createElement('p')
    checkEl.textContent = message
    output.appendChild(checkEl)
}

const renderChecks = function(checks) {
    const checkOutput = document.querySelector('#checks')
    checkOutput.innerHTML = ''
    let status = ''
    checks.forEach(function(check) {
        const checkEl = document.createElement('p')
        if(check.status === 'single') {
            status = 'Single'
        } else if(check.status === 'married') {
            status = 'Married'
        } else {
            status = 'Head of House'
        }
        checkEl.textContent = `Tax Status: ${status} | Income: $${check.income} | Dependants: ${check.dependants} | Amount: $${check.amount}`
        checkOutput.appendChild(checkEl)
    })
}