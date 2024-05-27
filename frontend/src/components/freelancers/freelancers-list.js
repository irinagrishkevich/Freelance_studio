import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";

export class FreelancersList{
    constructor(openNewRoute){
        this.openNewRoute = openNewRoute

        this.getFreelancers().then()
    }

    async getFreelancers(){
        const result = await HttpUtils.request('/freelancers')
        if (result.redirect){
            return this.openNewRoute(result.redirect)
        }

        if (result.error || !result.response || (result.response && (result.response.error || !result.response.freelancers))) {
            return alert('Ошибка загрузки списка фрилансеров')
        }
        this.showRecords(result.response.freelancers)

    }
    showRecords(freelancers){
        const recordsElement = document.getElementById('records')
        for (let i = 0; i < freelancers.length; i++) {
            const trElement = document.createElement('tr')
            trElement.insertCell(0).innerText = i + 1
            trElement.insertCell(1).innerHTML = freelancers[i].avatar ? '<img class="freelancer-avatar" src="' + config.host + freelancers[i].avatar + '" alt="User Image" ">' : ''
            trElement.insertCell(2).innerText = freelancers[i].name + ' ' + freelancers[i].lastName
            trElement.insertCell(3).innerText = freelancers[i].email
            let levelHtml = null
            switch (freelancers[i].level) {
                case config.freelancerLevels.junior:
                    levelHtml = '<span class="badge badge-info">Junior</span>'
                    break
                case config.freelancerLevels.middle:
                    levelHtml = '<span class="badge badge-warning">Middle</span>'
                    break
                case config.freelancerLevels.senior:
                    levelHtml = '<span class="badge badge-success">Senior</span>'
                    break
                default:
                    levelHtml = '<span class="badge badge-secondary">Unknown</span>'
            }
            trElement.insertCell(4).innerHTML = levelHtml
            trElement.insertCell(5).innerText = freelancers[i].education
            trElement.insertCell(6).innerText = freelancers[i].location
            trElement.insertCell(7).innerText = freelancers[i].skills
            trElement.insertCell(8).innerHTML = '<div class="freelancer-tools"">' +
                '<a href="/freelancers/view?id="' + freelancers[i].id + ' class="fas fa-eye"></a>' +
                '<a href="/freelancers/edit?id="' + freelancers[i].id + ' class="fas fa-edit"></a>' +
                '<a href="/freelancers/delete?id="' + freelancers[i].id + ' class="fas fa-trash"></a>' +
                '</div>'
            recordsElement.appendChild(trElement)
        }

        new DataTable('#data-table',{
            language: {
                "lengthMenu": 'Показывать _MENU_ записей на странице',
                "search": 'Фильтр: ',
                "info": 'Страница _PAGE_ из _PAGES_',
                "paginate":{
                    "next": 'Вперед',
                    "previous": 'Назад',
                }
            }})
    }
}









