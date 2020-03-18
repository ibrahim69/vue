export const fruitMixins = {
    data() {
        return {
            fruits: ['Apple', 'Mango', 'Banana', 'Melon', 'Guava'],
            filterText: '',
            text: 'Simple Text'
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            })
        },
        reverse() {
            return this.text.split('').reverse().join('')
        }
    }
}