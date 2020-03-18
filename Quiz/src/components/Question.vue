<template>
    <div class="panel panel-default">
        <div class="panel-heading">

            <h3 class="panel-title text-center">{{ question }}</h3>

        </div>

        <div class="panel-body">
            <div class="col-xs-12 col-sm-6 text-center">
                <button 
                    class="btn btn-primary btn-lg"
                    style="margin: 10px" 
                    @click="onAnswer(btnData[0].correct)"
                >

                    {{ btnData[0].answer }}
                    
                </button>
            </div>

            <div class="col-xs-12 col-sm-6 text-center">
                <button 
                    class="btn btn-primary btn-lg" 
                    style="margin: 10px" 
                    @click="onAnswer(btnData[1].correct)"
                >

                    {{ btnData[1].answer }}

                </button>
            </div>

            <div class="col-xs-12 col-sm-6 text-center">
                <button 
                    class="btn btn-primary btn-lg" 
                    style="margin: 10px" 
                    @click="onAnswer(btnData[2].correct)"
                >

                    {{ btnData[2].answer }}

                </button>
            </div>

            <div class="col-xs-12 col-sm-6 text-center">
                <button 
                    class="btn btn-primary btn-lg" 
                    style="margin: 10px" 
                    @click="onAnswer(btnData[3].correct)"
                >

                    {{ btnData[3].answer }}

                </button>
            </div>

        </div>
    </div>
</template>
<style>

</style>
<script>
    const MODE_ADDITION = 1;
    const MODE_SUBTRACTION = 2;
    export default{
        data() {
            return {
                question: 'Oops, an error ocurred :/',
                btnData: [
                    {correct: true, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0},
                    {correct: false, answer: 0}
                ],
            };
        },
        methods: {
            generateQuestion() {

                const firstNumber = this.generateRandomNumber(1, 100); // for generate number between 1-100
                const secondNumber = this.generateRandomNumber(1, 100); // for generate number between 1-100
                const modeNumber = this.generateRandomNumber(1, 2); // for generate type question
                console.log(modeNumber + ' Mode Number')

                let correctAnswer = 0;

                // switch (modeNumber) {
                //     case MODE_ADDITION:
                //         correctAnswer = firstNumber + secondNumber;
                //         this.question = `What's ${firstNumber} + ${secondNumber}?`;
                //         break;
                //     case MODE_SUBTRACTION:
                //         correctAnswer = firstNumber - secondNumber;
                //         this.question = `What's ${firstNumber} - ${secondNumber}?`;
                //         break;
                //     default:
                //         correctAnswer = 0;
                //         this.question = 'Oops, an Error occurred :/';
                // }

                // function untuk buat tipe soal penambahan atau pengurangan dan juga jawaban

                if (modeNumber == 1) {
                    correctAnswer = firstNumber + secondNumber;
                    this.question = `What's ${firstNumber} + ${secondNumber}?`;
                } else if (modeNumber == 2) {
                    correctAnswer = firstNumber - secondNumber;
                    this.question = `What's ${firstNumber} - ${secondNumber}?`;
                } else {
                    correctAnswer = 0;
                    this.question = 'Oops, an Error occurred :/';
                }

                console.log(correctAnswer + ' Correct Answer')

                let btn0 = this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                // console.log(btn0 + ' btn 0')
                this.btnData[0].correct = false;

                let btn1 = this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                // console.log(btn1 + ' btn 1')
                this.btnData[1].correct = false;

                let btn2 = this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                // console.log(btn2 + ' btn 2')
                this.btnData[2].correct = false;

                let btn3 = this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
                // console.log(btn3 + ' btn 3')
                this.btnData[3].correct = false;

                const correctButton = this.generateRandomNumber(0, 3);

                // console.log(correctButton + ' Correct Button')

                this.btnData[correctButton].correct = true;
                // console.log(btn + ' top')
                let btn = this.btnData[correctButton].answer = correctAnswer;
                console.log(btn + ' bottom')

                
            },
            generateRandomNumber(min, max, except) {
                const rndNumber = Math.round(Math.random() * (max - min)) + min;
                console.log( min, max, rndNumber + ' Random Number');
                if (rndNumber == except) {
                    return this.generateRandomNumber(min, max, except);
                }
                return rndNumber;
            },
            onAnswer(isCorrect) {
                this.$emit('answered', isCorrect);
            }
        },
        created() {
            this.generateQuestion();
        }
    }
</script>
