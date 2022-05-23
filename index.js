// Adding Title
let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

// Adding Image
let content1 = document.querySelector('.js-generated.content')
let division1 =  document.createElement('div')
division1.setAttribute('class', 'dog-content')
let header1 =  document.createElement('img')
header1.setAttribute('class', 'dog-image')
header1.src  = './assets/rizzo.jpg'
division1.append(header1)
content1.append(division1)

// Adding Text 'Description'
let content2 = document.querySelector('.js-generated.content')
let division2 =  document.createElement('div')
division2.setAttribute('class', 'dog-details')
let header2 = document.createElement('h3')
header2.append('Description:')
division2.append(header2)
division1.append(division2)

// Adding Description Paragraph
let content3 = document.querySelector('.js-generated.content')
let header3= document.createElement('p')
header3.append(' This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her,and dislikes other animals.')
division2.append(header3)

// Adding Text 'Feeding Times'
let content4 = document.querySelector('.js-generated.content')
let header4 = document.createElement('h3')
header4.append('Feeding Times:')
division2.append(header4)

// Adding the 
let content5 = document.querySelector('.js-generated.content')
let list = document.createElement('ul')
division2.append(list);
let Tests = ['9:00 am','12:00 pm','5:00 pm']
for (i = 0; i < Tests.length; i++){
   let lists = document.createElement('li');
   lists.append(Tests[i]);
   list.append(lists);
}






