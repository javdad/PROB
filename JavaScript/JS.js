
// SECTION-4 -- ACCORDION__HEADER открывающийся контент при нажатии на стрелку(accordion)

const accordionItems = document.querySelectorAll('.accordion__item');

// variant - 1

// for (let i=0 ;i<accordionItems.length; i++) {
//     accordionItems[i].addEventListener('click', () => {
//         accordionItems[i].classList.toggle('active')
//     })
// }

// variant - 2

// for (let accordionItem of accordionItems) {
//         accordionItem.addEventListener('click', () => {
//             accordionItem.classList.toggle('active')
//         })
// }

// variant - 3 

// accordionItems.forEach( (accordionItem) => accordionItem.addEventListener('click', () => accordionItem.classList.toggle(statusActive)))

// variant - 4

    
    for (let accordionItemName of accordionItems) crateAccordion(accordionItemName, 'active')

    
    function crateAccordion (accordionItemName, accordionToggleClassName) {
        accordionItemName.addEventListener('click', () => accordionItemName.classList.toggle(accordionToggleClassName))
    }











