// add code snippets from README

let state; 
let buttton = document.getElementById('button');

const reducer = (state = {count: 0} , action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
        default:
            return state;
    }
}

const dispatch = (action) => {
    state = reducer(state, action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({ type: '@@INIT' })

button.addEventListener('click', function(){
    dispatch({type: 'INCREASE_COUNT'})
})


