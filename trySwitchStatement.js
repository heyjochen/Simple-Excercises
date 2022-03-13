// Practice some switch statements
const beer = prompt('What beer do you like?')
switch (beer) {
    case 'Miller':
        console.log('High Life')
        break;
    case 'Lagunitas':
        console.log('Top Choice')
        break;
    case 'Budweiser':
        alert('Are you sure about that?')
        break;
    default: alert('You don\'t like any beer?')
}