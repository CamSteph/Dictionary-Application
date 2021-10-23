class DictionaryAPI{
    constructor(baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/", search_term = "hello", definition_wrap_section, phonetic_spelling_section, part_of_speech_section, word_searched_section, right_side_err){

        this.url = baseUrl.toString() + search_term.toString();
        this.word = "";
        this.phonetic = "";
        this.meanings = [];
        this.partOfSpeech = "";
        this.definitions = "";
        this.definition_wrap_section = definition_wrap_section;
        this.phonetic_spelling_section = phonetic_spelling_section;
        this.part_of_speech_section = part_of_speech_section;
        this.word_searched_section = word_searched_section;
        this.right_side_err = right_side_err;
    }

    async callDictionaryAPI(){
        try {
            const dictionary_request = await fetch(this.url);
            const dictionary_response = await dictionary_request.json();
            this.word = dictionary_response[0].word;
            this.phonetic = dictionary_response[0].phonetic;
            for(let i = 0; i < dictionary_response[0].meanings.length; i++){
                this.meanings.push(dictionary_response[0].meanings[i]);
            }
            // console.log(this.meanings);
            this.formatResponses();
        } catch (error) {
            this.handleError(error);
        }

    }

    formatResponses() {

        // format part of speech
        for(let i = 0; i < this.meanings.length; i++){
            this.partOfSpeech += `${this.meanings[i].partOfSpeech}, `;
        }
        this.partOfSpeech = this.partOfSpeech.substr(0, this.partOfSpeech.length - 2);

        // format definitions
        for(let i = 0; i < this.meanings[0].definitions.length; i++){
            console.log(this.meanings[0].definitions[i]);
            this.definitions += `<br/><b>${i + 1}.)</b> ${this.meanings[0].definitions[i].definition} <br/>
            <b>- Example:</b> ${this.meanings[0].definitions[i].example}
            <br/>
            `;
        }

        // display formatted values
        this.displayFormattedData();

    }

    displayFormattedData() {
        this.definition_wrap_section.innerHTML = this.definitions;
        this.part_of_speech_section.innerHTML = "<br/><strong>Part of Speech:</strong> " + this.partOfSpeech;
        this.phonetic_spelling_section.innerHTML = this.phonetic;
        this.word = this.word.charAt(0).toUpperCase() + this.word.slice(1, this.word.length);
        this.word_searched_section.innerText = this.word;
        this.word_searched_section.style.borderBottom = '1px solid #787878';
    }

    handleError(err){
        if(err){
            const error_msg = `<ion-icon name="sad-sharp" class="error-icon"></ion-icon> <br/> <br/> <span class="error-msg">Sorry, our database does not include the word you searched. Please try another word.</span>`;

            this.word_searched_section.innerHTML = `<ion-icon name="sad-sharp" class="error-icon"></ion-icon> <br/> <br/>`;
            this.word_searched_section.style.border = "none";
            this.definition_wrap_section.innerHTML = `<span class="error-msg">Sorry, our database does not include the word you searched. Please try another word.</span>`;
            this.definition_wrap_section.previousElementSibling.innerText = "";
            this.phonetic_spelling_section.innerText = "";
            this.part_of_speech_section.innerText = "";
        }
    }
}

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const search_btn = document.querySelector('[data-search-btn]');
let search_term = "";
const definition_wrap = document.querySelector('[data-definition-wrap]');
const phonetic_spelling = document.querySelector('[data-phonetic-spelling]');
const part_of_speech = document.querySelector('[data-part-of-speech]');
const word_searched_section = document.querySelector('[data-word]');
const right_side_err = document.querySelector('[data-right-side]');
const search_input = document.querySelector('[data-search-input]');

search_btn.addEventListener('click', () => {
    search_term = search_input.value;
    const api_call = new DictionaryAPI(url, search_term, definition_wrap, phonetic_spelling, part_of_speech, word_searched_section, right_side_err);
    api_call.callDictionaryAPI();
    search_input.value = "";
});

search_input.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        const search_input = document.querySelector('[data-search-input]');
        search_term = search_input.value;
        const api_call = new DictionaryAPI(url, search_term, definition_wrap, phonetic_spelling, part_of_speech, word_searched_section, right_side_err);
        api_call.callDictionaryAPI();
        search_input.value = "";
    }
});
