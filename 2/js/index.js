Vue.component('side-menu', {
    template: "#menu"
});

Vue.component('my-header', {
    template: "#header"
});

Vue.component('page-content', {
    template: "#content",
    data() {
        return {
            funcionarios: [],
            areas: [],
        };
    },
    created(){
        axios.get('json/funcionarios.json')
            .then(response => {
                this.funcionarios = response.data.funcionarios;
                this.areas = response.data.areas;
            })
    },
});

var app = new Vue({
    el: '.container'
});