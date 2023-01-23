import { toast } from 'react-toastify';

function copyFunction(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand('Copy');
    toast.success('Copied!');
}

export default copyFunction;
