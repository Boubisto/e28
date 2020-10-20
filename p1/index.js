// Initialize a component that will be globally available
Vue.component('round-detail', {
    data() {
        return {
        }
    },
    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        },
        'playerscore': {
            type: Number,
            default: 0
        },
        'computerscore': {
            type: Number,
            default: 0
        }
    },
    template: '#round-detail',
});


// Initialize the root Vue instance
const app = new Vue({
    el: '#app',
    data: {
        played: false,
        choice: 'rock',
        hands: ['rock', 'paper', 'scissors'],
        rounds: [],
        round: 1,
        playerpoints: 0,
        computerpoints:0
    },
    methods: {
        play() {
            this.played = true;
            this.hand = this.hands[Math.floor(Math.random() * 3)];
            
            let winner = '';
            if ((this.choice == "rock" && this.hand == "scissors") || (this.choice == "paper" && this.hand == "rock") || (this.choice == "scissors" && this.hand == "paper")) {
                winner = 'You won! but just for this time ^^';
                this.playerpoints++;
            }

            else if ((this.choice == "rock" && this.hand == "paper") || (this.choice == "paper" && this.hand == "scissors") || (this.choice == "scissors" && this.hand == "rock")) {
                winner = 'You lost! Maybe next time';
                this.computerpoints++;
            }

            else {
                winner = 'It is a draw! Try again at your own risk';
            } 

            this.rounds.push({
                number: this.round++,
                winner: winner,
                playerpoints: this.playerpoints,
                computerpoints: this.computerpoints,
                hand: this.hand,
                choice: this.choice,
            })
        },
        deleteRound(roundNumber) {
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
        },
        reset(){
            this.rounds = []; 
            this.round = 1;
            this.playerpoints = 0;
            this.computerpoints = 0;
        }
    }
});