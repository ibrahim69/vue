<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <hr>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br>
                <br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some Info</div>
                </transition>

                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="show">This is animated when page loaded</div>
                </transition>

                <transition
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="show">This is use Animated CDN CSS </div>
                </transition>

                <br>
                <br>
                <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
                </transition>

                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br>
                <br>
                <transition
                    @before-enter='beforeEnter'
                    @enter='enter'
                    @after-enter='afterEnter'
                    @enter-cancelled='enterCancelled'

                    @before-leave='beforeLeave'
                    @leave='leave'
                    @after-leave='afterLeave'
                    @leave-cancelled='leaveCancelled'
                >
                    <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>

                <hr>
                <button 
                    class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert' "
                    >
                    Toggle Component
                </button>
                <br>
                <br>
                <transition name="fade" mode="in-out">
                    <component :is="selectedComponent"></component>
                </transition>

                <hr>
                <br><br>

                <button class="btn btn-primary" @click="addItem"> Add New Item</button>
                <br>
                <br>

                
                <ul class="list-group">
                    <transition-group name="slide" mode="out-in">
                        <li class="list-group-item" 
                            v-for="(number, index) in numbers " 
                            :key="number"
                            @click="removeItem(index)"
                            style="cursor: pointer">
                            {{ number }}
                        </li>
                    </transition-group>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './components/DangerAlert'
    import SuccessAlert from './components/SuccessAlert'

    export default {
        data() {
            return {
                show : false,
                alertAnimation: 'fade',
                load: true,
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5],
                lastNumber: 6
            }
        },
        methods: {
            // ------------
            // Ketika Masuk
            // ------------

            beforeEnter(el) {
                console.log('Before Enter')
                this.elementWidth = 100
                el.style.width = this.elementWidth + 'px'
                console.log(this.elementWidth)
            },
            enter(el, done) {
                console.log('Enter');

                let count = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + count * 10) + 'px';
                    count++;

                    if(count > 20) {
                        clearInterval(interval)
                        done()
                    }
                }, 20);
            },
            afterEnter(el) {
                console.log('After Enter')
            },
            enterCancelled(el) {
                console.log('Enter Cancelled')
            },

            // -------------
            // Ketika Keluar
            // -------------

            beforeLeave(el) {
                console.log('Before Leave')
                this.elementWidth = 300
                el.style.width = this.elementWidth + 'px'
            },
            leave(el, done) {
                console.log('Leave')
                let count = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - count * 10) + 'px';
                    count++

                    if(count > 20) {
                        clearInterval(interval)
                        done()
                    }
                }, 20);
            },
            afterLeave(el) {
                console.log('After Leave')
            },
            leaveCancelled(el) {
                console.log('Leave Cancelled')
            },
            addItem() {
                let pos = Math.floor(Math.random() * this.numbers.length)
                console.log(pos + ' ' + this.numbers.length)
                // this.numbers.push(this.numbers.length + 1)
                this.numbers.splice(pos, 0, this.numbers.length + 1)
                console.log(this.numbers)
            },
            removeItem(index) {
                this.numbers.splice(index, 1)
                console.log(this.numbers)
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /* opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-in-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {
        /* opacity: 1; */
    }

    .slide-leave-active {
        animation: slide-out 1s ease-in-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px)
        } 
        to {
            transform: translateY(0)
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0)
        } 
        to {
            transform: translateY(20px)
        }
    }

</style>