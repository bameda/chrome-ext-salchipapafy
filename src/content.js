replacements = [
    // emprendedor / emprendedora
    {'find': 'emprendimiento',        'replace': 'salchipaparismo'},
    {'find': 'Emprendimiento',        'replace': 'Salchipaparismo'},
    {'find': 'EMPRENDIMIENTO',        'replace': 'SALCHIPAPARISMO'},

    {'find': 'emprendedores',        'replace': 'salchipaperos'},
    {'find': 'Emprendedores',        'replace': 'Salchipaperos'},
    {'find': 'EMPRENDEDORES',        'replace': 'SALCHIPAPEROS'},

    {'find': 'emprendedor',        'replace': 'salchipapero'},
    {'find': 'Emprendedor',        'replace': 'Salchipapero'},
    {'find': 'EMPRENDEDOR',        'replace': 'SALCHIPAPERO'},

    {'find': 'emprendedoras',        'replace': 'salchipaperas'},
    {'find': 'Emprendedoras',        'replace': 'Salchipaperas'},
    {'find': 'EMPRENDEDORAS',        'replace': 'SALCHIPAPERAS'},

    {'find': 'emprendedora',        'replace': 'salchipapera'},
    {'find': 'Emprendedora',        'replace': 'Salchipapera'},
    {'find': 'EMPRENDEDORA',        'replace': 'SALCHIPAPERA'},

    // ROI
    {'find': 'roi',        'replace': 'salchipapa'},
    {'find': 'Roi',        'replace': 'Salchipapa'},
    {'find': 'ROI',        'replace': 'SALCHIPAPA'},

    // startup
    {'find': 'startup',        'replace': 'salchipapa'},
    {'find': 'Startup',        'replace': 'Salchipapa'},
    {'find': 'STARTUP',        'replace': 'SALCHIPAPA'},
    {'find': 'StartUp',        'replace': 'SalchiPapa'},

    // éxito
    {'find': 'éxito',        'replace': 'salchipapa'},
    {'find': 'Éxito',        'replace': 'Salchipapa'},
    {'find': 'ÉXITO',        'replace': 'SALCHIPAPA'},

    {'find': 'exito',        'replace': 'salchipapa'},
    {'find': 'Exito',        'replace': 'Salchipapa'},
    {'find': 'EXITO',        'replace': 'SALCHIPAPA'},
];


var observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;

    return function(obj, callback){
        if(MutationObserver){
            var obs = new MutationObserver(function(mutations, observer){
				mutations[0].addedNodes.forEach(function(node, idx) {
                    callback(node);
				})
            });
            obs.observe(obj, {childList:true, subtree:true});
        }
        else if(eventListenerSupported){
            obj.addEventListener('DOMNodeInserted', callback, false);
        }
    }
})();

// replace after the page is load
replacements.forEach(function(elem, idx) {
    findAndReplaceDOMText(document.body, {'find': elem.find, 'replace': elem.replace});
});

// replace at every change
observeDOM(document.body ,function(node){
    replacements.forEach(function(elem, idx) {
        findAndReplaceDOMText(node, {'find': elem.find, 'replace': elem.replace});
    });
});

