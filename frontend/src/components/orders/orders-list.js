import {HttpUtils} from "../../utils/http-utils";
import config from "../../config/config";
import {CommonUtils} from "../../utils/common-utils";

export class OrdersList{
    constructor(openNewRoute){
        this.openNewRoute = openNewRoute

        this.getOrders().then()
    }
    async getOrders(){
        const result = await HttpUtils.request('/orders')
        if (result.redirect){
            return this.openNewRoute(result.redirect)
        }

        if (result.error || !result.response || (result.response && (result.response.error || !result.response.orders))) {
            return alert('Ошибка загрузки списка заказов')
        }
        this.showRecords(result.response.orders)

    }
    showRecords(orders){
        const recordsElement = document.getElementById('records')
        for (let i = 0; i < orders.length; i++) {
            const trElement = document.createElement('tr')
            trElement.insertCell(0).innerText = orders[i].number
            trElement.insertCell(1).innerHTML = orders[i].owner.name + ' ' + orders[i].owner.lastName
            trElement.insertCell(2).innerHTML = '<a href="/freelancers/view?id=' + orders[i].freelancer.id + '">' + orders[i].freelancer.name + ' ' + orders[i].freelancer.lastName + '</a>'
            trElement.insertCell(3).innerText = (new Date(orders[i].scheduledDate)).toLocaleString('ru-RU')
            trElement.insertCell(4).innerHTML  = (new Date(orders[i].deadlineDate)).toLocaleString('ru-RU')
            trElement.insertCell(5).innerHTML = CommonUtils.getStatusInfo(orders[i].status)

            console.log(orders[i].status)
            if (orders[i].status === 'canceled') {
                trElement.insertCell(6).innerText = ''
            } else if (orders[i].status === 'new') {
                trElement.insertCell(6).innerText = (new Date()).toLocaleString('ru-RU')
            }
            else {
                trElement.insertCell(6).innerText = (new Date(orders[i].completeDate)).toLocaleString('ru-RU')
            }


            trElement.insertCell(7).innerHTML = '<div class="order-tools">' +
                '<a href="/orders/view?id=' + orders[i].id + '" class="fas fa-eye"></a>' +
                '<a href="/orders/edit?id=' + orders[i].id + '" class="fas fa-edit"></a>' +
                '<a href="/orders/delete?id=' + orders[i].id + '" class="fas fa-trash"></a>' +
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