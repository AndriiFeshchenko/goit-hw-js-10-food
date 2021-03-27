import storage from './storage.js';
const _ = require('lodash');

class Theme {
    #key = 'theme';
    static LIGHT = 'light-theme';
    static DARK = 'dark-theme';
    #refs
    constructor() {
        this.#refs = this.getReference();
        this.#refs.switcher.addEventListener('change', _.throttle(this.switchThemeHandler.bind(this), 250));
        window.addEventListener('DOMContentLoaded', this.loadThemeHandler.bind(this));
    }
    getReference() {
        const switcher = document.querySelector('#theme-switch-toggle')
        return { switcher }
    }
    change(theme) {
        const style = document.body.classList;
        switch (theme) {
            case Theme.DARK:
                style.remove(Theme.LIGHT);
                style.add(Theme.DARK);
                break;
            case Theme.LIGHT:
                style.remove(Theme.DARK);
                style.add(Theme.LIGHT);
                break;
        }
    }
    switchThemeHandler(event) {
        const theme = this.#refs.switcher.checked ? Theme.DARK : Theme.LIGHT;
        storage.save(this.key, theme);
        this.change(theme);
    }

    loadThemeHandler(event) {
        const theme = storage.load(Theme.key);
        this.change(theme);
        this.#refs.switcher.checked = theme === Theme.DARK ? true : false;
    }
};

export default new Theme();