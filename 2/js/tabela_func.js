new Vue({
    el: '#tabela_func',
    data: {
        funcionarios: [],
        areas: []
    },

    mounted: function () {
        axios.get('json/funcionarios.json')
            .then(response => {
                this.funcionarios = response.data.funcionarios;
                this.areas = response.data.areas;
            })
    }
})