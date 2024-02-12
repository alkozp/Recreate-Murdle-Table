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
        modalText: `<p>This happens during a traumatic experience of getting acquainted with git. For example, when untested code was merged into the main branch.</p>
        <p>* Why did the developer always carry a map with them? To avoid getting lost in the Git labyrinth!</p>
        <p>* Why did the developer have trouble making friends? They couldn't "git merge" with others!</p>`
    },
    {
        name: 'little time',
        type: 'motive',
        icon: '🔞',
        modalText: `<p>a resource that is always missing to get the perfect result</p>
        <p>* A poorly planned project will take three times longer than expected, but a well planned project will take only twice as long as expected.</p>
        <p>* The first 90% of the project takes 90% of the time. The last 10% takes up the remaining 90%</p>` 
    },
    {
        name: 'own project',
        type: 'motive',
        icon: '💲',
        modalText: `<p>something that is easy to start and difficult to finish</p>
        <p>* Why was the project manager happy at the zoo?  He finally found stakeholders who couldn't change the scope!</p>
        <p>* Why don't project managers run marathons?  They're always sprinting!</p>` 
    },
    //*** LOCATIONS */
    {
        name: 'GitHub',
        type: 'location',
        icon: '🎁',
        modalText: `<p>that's what they call something that should make life easier, but sometimes only makes it more difficult.</p>
        <p>* Why do developers make terrible comedians?
        - Their jokes always need a "git pull" before they're funny! 
        </p>
        `
    },
    {
        name: 'JavaScript',
        type: 'location',
        icon: '⛩️',
        modalText: `<p>a powerful language with many strange paradigms and solutions. It has something to surprise even an experienced developer.</p>
        <p>* JavaScript developer: "I finally understand the difference between null and undefined!". JavaScript: "Hold my beer." </p>
        <p>* Why did the JavaScript variable throw a surprise party? Because it was hoisted.</p>
        ` 
    },
    {
        name: 'CSS style',
        type: 'location',
        icon: '🚻',
        modalText: `<p>allows you to make something more beautiful than it was. Sometimes it's impossible to stop doing something better and better.</p>
        <p>* Why did the CSS developer never find love? Because they couldn't find the right selector.<p>` 
    },
    //*** WEAPONS */
    {
        name: 'git merge',
        type: 'weapon',
        icon: '🔫',
        modalText: `<p>a very necessary thing that can sometimes create a big problem.</p>
        <p>* Knock knock. Who's there? Git. Git-who? Sorry, 'who' is not a git command - did you mean 'show'?</p>
        <p>* The problem with Git jokes? well, everyone has their own version :)</p>`
    },
    {
        name: 'while (true)',
        type: 'weapon',
        icon: '🔨',
        modalText: `<p>a thing that is easy to enter but difficult to find a way out.</p>
        <p>* I would have told an infinite loop joke... But you'd never hear the end of it</p>`
    },
    {
        name: 'display: none',
        type: 'weapon',
        icon: '🔪',
        modalText: `<p>will always help to hide everything without leaving evidence.</p>
 ***       
<pre>
.schrödinger .box:focus .cat {
    display: none;
    display: block;
    display: none;
    display: block;
}
</pre>
        ` 
    },
];

const rightAnswer = {suspect: 'Captain Hook', weapon: 'git merge', location: 'GitHub', motive: 'own project'};