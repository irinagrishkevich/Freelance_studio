import {HttpUtils} from "../../utils/http-utils";
import {FileUtils} from "../../utils/file-utils";

export class OrdersCreate {
    constructor(openNewRoute) {
        this.freelancerSelectElement = document.getElementById('freelancerSelect')
        this.amountInputElement = document.getElementById('amountInput')
        this.descriptionInputElement = document.getElementById('descriptionInput')
        this.scheduledCardElement = document.getElementById('schedule-card')
        this.completeCardElement = document.getElementById('complete-card')
        this.deadlineCardElement = document.getElementById('deadline-card')
        this.statusSelectElement = document.getElementById('statusSelect')

        this.openNewRoute = openNewRoute
        document.getElementById('saveButton').addEventListener('click', this.saveOrder.bind(this))

        const calendarScheduled = $('#calendar-scheduled')
        const calendarDeadline = $('#calendar-deadline')
        const calendarComplete = $('#calendar-complete')
        this.scheduledDate = null
        this.deadlineDate = null
        this.completeDate = null

        calendarScheduled.datetimepicker({
            inline: true,
            locale: 'ru',
            icons: {
                time: 'far fa-clock',
            },
            useCurrent: false,
        })
        calendarScheduled.on("change.datetimepicker", (e) => {
             this.scheduledDate = e.date;
        });
        calendarComplete.datetimepicker({
            inline: true,
            locale: 'ru',
            icons: {
                time: 'far fa-clock',
            },
            useCurrent: false,
            buttons: {
                showClear: true,
            },

        })
        calendarComplete.on("change.datetimepicker", (e)=> {
             this.completeDate = e.date;
        });

        calendarDeadline.datetimepicker({
            inline: true,
            locale: 'ru',
            icons: {
                time: 'far fa-clock',
            },
            useCurrent: false,
        })

        calendarDeadline.on("change.datetimepicker", (e)=> {
            this.deadlineDate = e.date;
        });

        this.getFreelancers().then()

    }

    async getFreelancers() {
        const result = await HttpUtils.request('/freelancers')
        if (result.redirect) {
            return this.openNewRoute(result.redirect)
        }

        if (result.error || !result.response || (result.response && (result.response.error || !result.response.freelancers))) {
            return alert('Ошибка загрузки списка фрилансеров')
        }
        const freelancers = result.response.freelancers
        for (let i = 0; i < freelancers.length; i++) {
            const option = document.createElement('option')
            option.value = freelancers[i].id
            option.innerText = freelancers[i].name + ' ' + freelancers[i].lastName
            this.freelancerSelectElement.appendChild(option)
        }
        $(this.freelancerSelectElement).select2({
            theme: 'bootstrap4'
        })
    }

    validateForm() {
        let isValid = true

        let textInputArray = [this.amountInputElement, this.descriptionInputElement]


        for (let i = 0; i < textInputArray.length; i++) {
            if (textInputArray[i].value) {
                textInputArray[i].classList.remove('is-invalid')
            } else {
                textInputArray[i].classList.add('is-invalid')
                isValid = false
            }
        }
        console.log(this.scheduledDate)
        if (this.scheduledDate){

            this.scheduledCardElement.classList.remove('is-invalid')
        } else {
            this.scheduledCardElement.classList.add('is-invalid')
            isValid = false
        }

        if (this.deadlineDate){
            this.deadlineCardElement.classList.remove('is-invalid')
        } else {
            this.deadlineCardElement.classList.add('is-invalid')
            isValid = false
        }




        return isValid
    }

    async saveOrder(e) {
        e.preventDefault()

        if (this.validateForm()) {
            const createData = {
                description: this.descriptionInputElement.value,
                deadlineDate: this.deadlineDate.toISOString(),
                scheduledDate: this.scheduledDate.toISOString(),
                freelancer: this.freelancerSelectElement.value,
                status: this.statusSelectElement.value,

                amount: parseInt(this.amountInputElement.value),
            }
            if(this.completeDate){
                createData.completeDate = this.completeDate.toISOString()
            }
            
            const result = await HttpUtils.request('/orders', 'POST', true, createData)

            if (result.redirect) {
                return this.openNewRoute(result.redirect)
            }

            if (result.error || !result.response || (result.response && result.response.error)) {
                console.log(result.response.error)
                return alert('Ошибка при отправке заказа')
            }
            return this.openNewRoute('/orders/view?id=' + result.response.id)
        }


    }
}


















