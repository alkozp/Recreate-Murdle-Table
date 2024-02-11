export {accusationList, iconList, rightAnswer};

const accusationList = [
    {
        type: 'suspect',
        question: 'Choose suspect (WHO?)',
    },
    {
        type: 'weapon',
        question: 'Choose weapon (HOW?)',
    },
    {
        type: 'location',
        question: 'Choose location (WHERE?)',
    },
    {
        type: 'motive',
        question: 'Choose motive (WHY?)',
    }
];

const iconList = [
    //*** SUSPECTS */
    {
        name: 'Captain Blackbeard',
        type: 'suspect',
        icon: '🤠',
        modalText: 'information about 1 suspect: bla bla bla'
    },
    {
        name: 'Captain Hook',
        type: 'suspect',
        icon: '👨‍🦱',
        modalText: 'information about 2 suspect: bla bla bla' 
    },
    {
        name: 'Captain Jack Sparrow',
        type: 'suspect',
        icon: '👮‍♀️',
        modalText: 'information about 3 suspect: bla bla bla' 
    },
    //*** MOTIVES */
    {
        name: 'doesn`t like git',
        type: 'motive',
        icon: '🗽',
        modalText: 'information about 1 motive: bla bla bla'
    },
    {
        name: 'little time',
        type: 'motive',
        icon: '🔞',
        modalText: 'information about 2 motive: bla bla bla' 
    },
    {
        name: 'own project',
        type: 'motive',
        icon: '💲',
        modalText: 'information about 3 motive: bla bla bla' 
    },
    //*** LOCATIONS */
    {
        name: 'GitHub',
        type: 'location',
        icon: '🎁',
        modalText: 'information about 1 location: bla bla bla'
    },
    {
        name: 'JS script',
        type: 'location',
        icon: '⛩️',
        modalText: `JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.` 
    },
    {
        name: 'CSS style',
        type: 'location',
        icon: '🚻',
        modalText: `<ul>
        <li>CSS stands for Cascading Style Sheets<li>
        <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
        <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
        <li>External stylesheets are stored in CSS files</li>
        </ul>` 
    },
    //*** WEAPONS */
    {
        name: 'git merge',
        type: 'weapon',
        icon: '🔫',
        modalText: 'information about 1 weapon: bla bla bla'
    },
    {
        name: 'while (true)',
        type: 'weapon',
        icon: '🔨',
        modalText: 'information about 2 weapon: bla bla bla' 
    },
    {
        name: 'visibility: hidden',
        type: 'weapon',
        icon: '🔪',
        modalText: 'information about 3 weapon: bla bla bla' 
    },
];

const rightAnswer = {suspect: 'Captain Hook', weapon: 'git merge', location: 'GitHub', motive: 'own project'};