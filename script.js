    import {accusationList, iconList, rightAnswer} from './data.js';
    //import * from './data.js';
    
    let lastSavedState = [];


    //************* filling game table at start *****************///
    function fillTable(event) {
        const innerTableList = document.querySelectorAll('.inner-table');
        //filling internal game tables
        innerTableList.forEach((table) => {
            for (let i=1; i<10; i++){
                const divEl = document.createElement('div');
                divEl.classList.add('game-cell')
                //divEl.innerText = '';
                table.appendChild(divEl);
            }
        })

        //filling additional info
        const columnOrder = ['suspect', 'motive', 'location'];
        const rowOrder = ['weapon', 'location', 'motive'];

        //fill columns headers
        let captionInfo = document.querySelectorAll('.info-table');
        let counter = 0;
        captionInfo.forEach((caption)=> {
            caption.innerHTML += `<div class="info-text">${(columnOrder[counter]+'s').toUpperCase()}</div>`;
            iconList.forEach(element => {
                if (element.type === columnOrder[counter]) {
                    caption.innerHTML +=  `<div class="emoji" title="${element.name}">${element.icon}</div>`
                }
            });
            counter++;
        }) 
        
        //fill row headers
        captionInfo = document.querySelectorAll('.info-row');
        counter = 0;
        captionInfo.forEach((caption)=> {
            let iconsHTML = '';
            iconList.forEach(element => {
                if (element.type === rowOrder[counter]) {
                    iconsHTML +=  `<div class="emoji" title="${element.name}">${element.icon}</div>`
                }
            });
            caption.innerHTML += `<div class="info-row-caption">${(rowOrder[counter]+'s').toUpperCase()}</div><div class="info-row-icons">${iconsHTML}</div>`;
            counter++;
        })
        
        // fill accusation form
        const accusationForm = document.querySelector('#accusation-list');
        accusationList.forEach((accusation)=>{
            
            let optionsList = '';
            iconList.forEach((icon)=>{
                if (accusation.type === icon.type) {
                    optionsList += `<option value="${icon.name}">${icon.name}</option>`;
                }
            });
            
            const select = `
            <label for="${accusation.type}">${accusation.question}:</label>
            <select name="${accusation.type}" id="${accusation.type}" required>
                <option value="none" selected disabled></option>
                ${optionsList}
            </select>`;

            accusationForm.innerHTML += select;

        });
    }

    
    //****************reset layout*******************//
    function clearTable() {
        if (confirm('Reset layout?')) {
            const gameCellList = document.querySelectorAll('.game-cell');
            gameCellList.forEach((cell) => {
                cell.innerText = '';
            })
        }  
    }

    //change cell status to next state or start again
    function changeCellStatus(target) {
        const statusList = ["","❌","✅","❓"];
        let nextIndex = statusList.indexOf(target.innerText) + 1;
        if (nextIndex >= statusList.length) {
        nextIndex = 0;
        }
        target.innerText = statusList[nextIndex];
    }

    //change emoji color to mono
    function colorEmojiToggle() {
        const emojiList = document.querySelectorAll('.emoji');
        emojiList.forEach((emoji) => {
            emoji.classList.toggle('emoji-color-off');
        })
    }

    //save current layout
    function saveCurrentState() {
        if (confirm('Save current layout?')) {
            const gameCellList = document.querySelectorAll('.game-cell');
            lastSavedState = [];
            gameCellList.forEach((cell) => {
                lastSavedState.push(cell.textContent);
            })
        }
    }

    //load saved layout
    function loadCurrentState() {
        if (lastSavedState.length === 0) {
            alert ('You not have saving layout.');
            return;
        }
        if (confirm('Return to saved layout?')) {
            const gameCellList = document.querySelectorAll('.game-cell');
            let cellIndex = 0;
            gameCellList.forEach((cell) => {
                cell.textContent = lastSavedState[cellIndex];
                cellIndex++;
            })
        }
    }

    //show icons description
    function showModalLayout(target) {

        //const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, temporibus hic vitae neque exercitationem fugit eius commodi modi sit ea molestiae animi ut culpa reiciendis autem, nobis asperiores, consectetur libero.';

        iconList.forEach((element)=>{
            if (target.textContent === element.icon) {
                const modalContent = document.querySelector('.modal-content');
                
                modalContent.innerHTML = 
                `
                <div class='icon-modal'>${element.icon}</div>
                <H2>${element.name.toUpperCase()}</H2>
                <p>${element.modalText}</p>`;

                document.querySelector('.info-modal').showModal();

                return;
            }
        });
    }

    // show clues modal window
    function showModalClues(){
        document.querySelector('.clues-modal').showModal();
    }

    // show accusation modal window
    function showModalAccusation(){
        document.querySelector('.accusation-modal').showModal();
    }

    //show answer in accusation modal
    function showAnswer() {
        //check selected options
        const accusationSelects = document.querySelectorAll('#accusation-list select');
        let userAnswer = {};
        accusationSelects.forEach((select)=>{
            if (select.value !=='none') {
                const selectedName = select.name;
                const selectedValue = select.value;
                //userAnswer[selectedName] = selectedValue;
                userAnswer[select.name] = select.value;
            }
        });

        if (Object.keys(userAnswer).length < Object.keys(rightAnswer).length) {
            return false;
        }

        //check solution
        let trueCount = 0;
        let answerHTML = '';
        for(let key in userAnswer) {
            if (userAnswer[key] === rightAnswer[key]) trueCount++;
            answerHTML += `<div>${key}: </div><div>${rightAnswer[key]}</div><div class="mark">${userAnswer[key] === rightAnswer[key] ? '✔️' : '❌' }</div>`;
            //console.log (userAnswer[key], rightAnswer[key], userAnswer[key] === rightAnswer[key]);
        }

        const score =  trueCount * 100 / Object.keys(userAnswer).length;
        answerHTML = `<div class="score-header">You right at <span>${score}%</span></div>` + `<div class="answer-grid">` + answerHTML + `</div>`;

        //replace form content
        const accusationList = document.querySelector('.accusation-modal form');
        //const answerContent = document.querySelector('#answer');
        accusationList.innerHTML = answerHTML;
        accusationList.style.textAlign = 'left';

    }

    function tableHandler(event) {
        //change game cell status
        if (event.target.classList.contains('game-cell')) {
            changeCellStatus(event.target);
        }
        //clear table
        if (event.target.id === 'clear-table') {
            clearTable();
        }
        //icons color toggle
        if (event.target.id === 'color-toggle') {
            colorEmojiToggle();
        }
        //save current state
        if (event.target.id === 'save-state') {
            saveCurrentState();
        }
        //load current state
        if (event.target.id === 'load-state') {
            loadCurrentState();
        }
        //show modal for caption icons
        if (event.target.classList.contains('emoji') && !event.target.id) {
            showModalLayout(event.target);
        }
        //show clues and evidence list
        if (event.target.classList.contains('clues-cell') || event.target.parentElement.classList.contains('clues-cell')){
            showModalClues();
        }
        //show accusation
        if (event.target.classList.contains('accusation-cell') || event.target.parentElement.classList.contains('accusation-cell')){
            showModalAccusation();
        }
    }


    //create inner tables
    document.addEventListener('DOMContentLoaded', fillTable);
    //general table handler
    document.querySelector('#table').addEventListener('click', tableHandler);
    //meme modal window
    document.querySelector('#modal-meme').addEventListener('click',(event)=>{
        event.preventDefault();
        document.querySelector('dialog.meme').showModal();
    });
    //show answer
    document.querySelector('#check-accusation').addEventListener('click', showAnswer)


    //************ close modal windows *********** */

    document.querySelector('.close-modal-info').addEventListener('click',()=>{
        document.querySelector('.info-modal').close();
    })

    document.querySelector('.close-modal-meme').addEventListener('click',()=>{
        document.querySelector('.meme').close();
    })

    document.querySelector('.close-modal-clues').addEventListener('click',()=>{
        document.querySelector('.clues-modal').close();
    })

    document.querySelector('.close-modal-accusation').addEventListener('click',()=>{
        document.querySelector('.accusation-modal').close();
    })



