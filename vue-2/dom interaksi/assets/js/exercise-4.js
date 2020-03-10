new Vue({
    el: "#exercise",
    data: {
        // someClass: {
        //     highlight : false,
        //     shrink: true
        // },
        effect: undefined,
        effectClass: '',
        myStyle: {
            width: '100px',
            height: '100px',
            color: 'green'

        },
        newClass: 'red',
        isVisible: true,
        newClass_4: '',
        progressBar: {
            backgroundColor: 'purple',
            width: 0,
            height: '40px'
        }
    },
    methods: {
        startEffect: function() {
            // var vm = this;
            // setInterval(() => {
            //     this.someClass.highlight = !this.someClass.highlight
            //     this.someClass.shrink = !this.someClass.shrink
            // }, 1000);

            this.effect = window.setInterval(() => {
                this.effectClass = this.effectClass == 'shrink' ? 'highlight' : 'shrink'
            }, 1000);
        },
        stopEffect: function() {
            if(this.effect) {
                window.clearInterval(this.effect)
            } this.effectClass = '';
        },
        startProgress: function() {
            setInterval(() => {
                let width = parseInt(this.progressBar.width);

                if(width < 100) {
                    this.progressBar.width = width + 10 +'%';
                }
            }, 200);
        }
    }
})