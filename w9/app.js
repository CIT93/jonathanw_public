const stimulusChecks = getSavedChecks()

renderChecks(stimulusChecks)

const stimulusForm = document.querySelector('#calc-stimulus')

stimulusForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const status = e.target.stimStatus.value
    let dependants = e.target.stimDepend.value
    const income = e.target.stimIncome.value
    const formValid = validateForm(status, income)
    if(dependants === '') {
        dependants = 0
    }

    if(formValid) {
        calculateStimulus(status, income, dependants)
        renderChecks(stimulusChecks)
    }
    // Calculate Stimulus(status, amount, children) and display on page
    // stimulus.firstStimulus('single', 78000, 0)
    // stimulus.secondStimulus('single', 78000, 0)
    // stimulus.totalStimulus()
})