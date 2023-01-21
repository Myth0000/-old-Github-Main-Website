// This file contains functions that deals with the DOM

export function getElement(elementName, index=0) {
    return document.querySelectorAll(elementName)[index];
}