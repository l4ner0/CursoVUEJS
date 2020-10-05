/* const goalText = document.getElementById('goalInput')
const btnAddGoal = document.getElementById('btnAdd')
const listGoal = document.getElementById('listGoal')

function addGoal() {
    const addElement = document.createElement('li')
    addElement.textContent = goalText.value
    listGoal.appendChild(addElement)
    goalText.value = ''
}

btnAddGoal.addEventListener('click', addGoal) */

var app = new Vue({
    el: '#app',
    data() {
        return {
            arrayGoals: [],
            goal: ''
        }
    },
    methods: {
        addGoal() {
            if (this.goal !== '') {
                this.arrayGoals.push(this.goal)
                this.goal = ''
            }
        }
    }
})