window.onload = function(e) {

    var headerEle = document.querySelector('#header');
    var getHeaderImport = document.querySelector('#template-header');
    var getHeaderContent = getHeaderImport.import.querySelector('#header-content');
    headerEle.appendChild(document.importNode(getHeaderContent, true));

    var sidebarEle = document.querySelector('#sidebar');
    var getSidebarImport = document.querySelector('#template-sidebar');
    var getSidebarContent = getSidebarImport.import.querySelector('#sidebar-content');
    sidebarEle.appendChild(document.importNode(getSidebarContent, true));

    var footerEle = document.querySelector('#footer');
    var getFooterImport = document.querySelector('#template-footer');
    var getFooterContent = getFooterImport.import.querySelector('#footer-content');
    footerEle.appendChild(document.importNode(getFooterContent, true));

};