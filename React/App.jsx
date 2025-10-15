const parent = document.querySelector('.parent'); 
// console.log(parent);

const root = ReactDOM.createRoot(parent);
const h2 = React.createElement('h1', {id: 'heading'}, 'Hello World from React');
const li1 = React.createElement('li', {id: 'list1'}, 'Java');
const li2 = React.createElement('li', {id: 'list2'}, 'JavaScript');
const li3 = React.createElement('li', {id: 'list3'}, 'Python');

const ul= React.createElement('ul', {style:{backgroundColor:'cyan'}}, [li1, li2, li3]);
const img = React.createElement('img', {src: 'https://picsum.photos/200/300', alt: 'Random Image',style:{borderRadius:"100%"}});
const namee = React.createElement('h2', {id: 'name'}, 'Siddhant Rastogi');
const pfp=React.createElement('div',{style:{display:"flex",gap:"50px",alignItems:"center"}},img,namee)
const wrapper = React.createElement('div', {id: 'wrapper'}, [h2, pfp, ul]);
root.render(wrapper);


//jsx