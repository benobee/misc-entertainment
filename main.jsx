import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery-slim';
import Modal from './imports/components/Modal.jsx';

// const css = require("./main.less");

class App_Build {
    constructor() {
        this.events();
    }
    events(){
        $('.collection-bio .item').on("click", (e) => {

            const data = {
              body   : $(e.currentTarget).data("content"),
              image  : $(e.currentTarget).data('imageurl'),
              title  : $(e.currentTarget).data("title"),
              name   : $(e.currentTarget).data("name")
            };

            ReactDOM.render(<Modal item={data} />, document.querySelectorAll('.app-module.modal')[0]);
        });
    }
};

const App = new App_Build();

window.onload = window._App = App;  



