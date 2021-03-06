function generate_uri_from_element(element)
{
    var uri = '';
    node = element;
    while (node) 
    {
        uri += '<' + node.tagName.toLowerCase() + '>';
        uri += node.id;
        uri += ','
        uri += node.className;

        node = node.parentElement;
    }
    
    return JSON.stringify({ 'uri' : uri });
}

function get_url_hostname()
{
    var l = document.createElement("a");
    l.href = document.URL;
    return JSON.stringify({'url' : l.hostname});
}

function get_url_pathname()
{
    var l = document.createElement("a");
    l.href = document.URL;
    return JSON.stringify({'url' : l.pathname}); 
}