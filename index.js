const shoppingList = new Vue ({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Shopping list app',
        newItem: '',
        items: [
            {
                label: 'carrots',
                purchased: false,
                highPriority: false
            },
            {
                label: 'onion',
                purchased: false,
                highPriority: false
            },
            {
                label: 'potatos',
                purchased: false,
                highPriority: true
            }
        ]
    },
    methods: {
        saveItem () {
            this.items.push({
                label: this.newItem,
                purchased: false
            })
            this.newItem = ''
        },
        changeStateBtn (newState) {
            this.state = newState
            this.newItem = ''  
            this.items= []
        },
        togglePurchased (item) {
            item.purchased = !item.purchased
        }
    },
    computed: {
        reversedItems() {
            return this.items.slice(0).reverse()
        }
    }
})
