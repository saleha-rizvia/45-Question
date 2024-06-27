"use strict";
let guest_list = ['Imran Khan', 'Nawaz Sharif', 'zardari'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!');
}
let absent_Guest = 'Imran khan';
let new_guest = 'kamran tessori';
guest_list[0] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr.' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\n Thank you!');
}
console.log(`Mr. ${absent_Guest} is not coming to the party`);
