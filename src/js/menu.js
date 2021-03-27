'use strict'
import template from "../templates/menu-item.hbs";
import content from "../data/menu.json";

const container = document.querySelector(".js-menu");
container.innerHTML = template(content);