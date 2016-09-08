replacements = [
    // emprendedor
    {'find': 'emprendimiento',        'replace': 'salchipaparismo'},
    {'find': 'Emprendimiento',        'replace': 'Salchipaparismo'},
    {'find': 'EMPRENDIMIENTO',        'replace': 'SALCHIPAPARISMO'},

    {'find': 'emprendedor',        'replace': 'salchipapa'},
    {'find': 'Emprendedor',        'replace': 'Salchipapa'},
    {'find': 'EMPRENDEDOR',        'replace': 'SALCHIPAPA'},

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

observeDOM(document.body ,function(node){
    replacements.forEach(function(elem, idx) {
        findAndReplaceDOMText(node, {'find': elem.find, 'replace': elem.replace});
    });
});
