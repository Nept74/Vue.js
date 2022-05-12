let rootComponentOption = {
    data() {
        return {
            goods: [
                {
                    title: "Пианино",
                    price: 3000,
                    count: 0
                },
                {
                    title: "Гитара",
                    price: 1200,
                    count: 40
                },
                {
                    title: "Барабаны",
                    price: 2700,
                    count: 12
                },
                {
                    title: "Флейта",
                    price: 900,
                    count: 50
                },
                {
                    title: "Арфа",
                    price: 3400,
                    count: 5
                }
            ]
        }
    },
    methods: {
      getClass(obj){
          if (obj.count === 0) {
          return 'zero'
          } else if (obj.count > 0 && obj.count < 20){
              return 'not-many'
          } else {
              return 'many'
          }
      }

    },
    computed: {
        sortedArray: function() {
            function compare(a, b) {
                if (a.count < b.count)
                    return -1;
                if (a.count > b.count)
                    return 1;
                return 0;
            }

            return this.goods.sort(compare);
        }
    }


};
let app = Vue.createApp(rootComponentOption);

let vm = app.mount("#app")