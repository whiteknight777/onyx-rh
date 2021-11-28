HTMLElement.prototype.printMe = printMe;
function printMe(query) {
    const myframe = document.createElement('IFRAME');
    myframe.domain = document.domain;
    myframe.style.position = 'absolute';
    myframe.style.top = '-10000px';
    document.body.appendChild(myframe);
    myframe.contentDocument.write(this.innerHTML);
    setTimeout(() => {
        myframe.focus();
        myframe.contentWindow.print();
        myframe.parentNode.removeChild(myframe);// remove frame
    }, 3000); // wait for images to load inside iframe
    window.focus();
}
