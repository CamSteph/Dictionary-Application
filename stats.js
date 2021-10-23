const ARR_OF_FACTS = [
    `An infinity sign is called a "lemniscate."`,
    `The longest English word to date has nearly 190,000 letters.`,
    `The word "heroin" used to be trademarked.`,
    `A single piece of confetti is called a "confetto."`,
    `"Penguin" means "white head."`,
    `The longest word found in a major dictionary is 45 letters long.`,
    `"Adultery" and "adult" do not share an origin.`,
    `There's a word to refer to the day before yesterday.`,
    `The word "ambulance" refers to walking.`,
    `"Bogus" was once a noun.`,
];
const length = Math.floor(ARR_OF_FACTS.length / 2);

const left_side = document.querySelector('[data-left-side]');
const right_side = document.querySelector('[data-right-side]');

const handle_left_side = () => {
    let left_output = "";
    for(let i = 0; i < length; i++){
        left_output += `
        <span class="fact-wrap fs-5 lh-lg mb-4 text-secondary">${i + 1}.) <span class="fact-text">${ARR_OF_FACTS[i]}</span></span>
        `;
    }
    left_side.innerHTML = left_output;
};

const handle_right_side = () => {
    let right_output = "";
    for(let i = length; i < length * 2; i++){
        right_output += `
        <span class="fact-wrap fs-5 lh-lg mb-4 text-secondary">${i + 1}.) <span class="fact-text">${ARR_OF_FACTS[i]}</span></span>
        `;
    }
    right_side.innerHTML = right_output;
};

handle_left_side();
handle_right_side();