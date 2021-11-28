export function removeCSSClass(ele, cls) {
    const reg = new RegExp(`(\\s|^)${ cls }(\\s|$)`);
    ele.className = ele.className.replace(reg, ' ');
}

export function addCSSClass(ele, cls) {
    ele.classList.add(cls);
}

export const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;

export const printElement = ref => {
    console.log(ref);
    console.log(document.body.innerHTML);
    console.log(ref.innerText);
    // const mywindow = window.open('', '#hidden', 'height=400,width=600');
    const content = document.body.innerHTML;
    const iframe = document.createElement('iframe');
    const pri = iframe.contentWindow;
    // mywindow.document.write('<html><head><title>Pharmacy List</title>');
    /* optional stylesheet */ // mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
    // mywindow.document.write('</head><body >');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    pri.document.open();
    pri.document.write(content);
    // mywindow.document.write('</body></html>');

    pri.document.close();
    pri.focus();
    pri.print();
    pri.print();
    pri.onafterprint = () => { document.body.removeChild(iframe); };

    // iframe.style.display = 'none';
    // document.body.appendChild(iframe);
    // pri.document.open();
    // pri.document.write(`
    // <html>
    // <head>
    //     <title> Hello </title>
    // </head>
    // <body>
    // ${content}
    // </body>
    // </html>
    // `);
    // pri.document.close();
    // pri.focus();
    // pri.print();
    // pri.onafterprint = () => { document.body.removeChild(iframe); };
};
