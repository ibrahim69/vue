export const myReverse = {
    data() {
        return {
            text: 'Hello Computed'
        };
    },
    computed: {
        textLength() {
            return this.text + ' (' + this.text.length + ') '
        }
    }
}