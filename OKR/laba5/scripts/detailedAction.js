export function pageDetailedAction(lel) {
    lel = lel.replace(/\D/g, '');
    let base = JSON.parse(sessionStorage.getItem('actionList')) || [];
    let needed = base[lel - 1];
    if(typeof base[lel - 1] === 'undefined') {
        window.location.hash = '#';
    }
    let uwu = '';
    uwu += '<div style = "display: grid; grid-template-columns: repeat(2, 1fr); grid-column-gap: 10px;"><div><img style = "max-width: 400px;" src = \'' + needed.images + '\' class=\'d-block user-select-none\' style = "margin-left: 10px; min-width: 400px;"  aria-label=\'Placeholder: Image cap\' focusable=\'false\' role=\'img\' preserveAspectRatio=\'xMidYMid slice\' viewBox=\'0 0 318 180\' style=\'font-size:1.125rem;text-anchor:middle\'></div><div><h1>' + needed.actionName + '</h1><p>' + needed.actionDescription + '</p></div></div>';
    return uwu;
}