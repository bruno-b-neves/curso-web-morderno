import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {

        const url = $(e).attr('wm-include') // Varieavel const do elemento
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallbacks.forEach(
                    callback => callback(data));

                loadIncludes(e)

            } // Final da função Callback success

        }) // Final da chamada ajax

    }) // Final da Função .each 

} // Final da Função LoadIncludes

loadIncludes()

