import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300 // Função const com o efeito de duração

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {

        const isTarget = $(this).attr('wm-city') === city || city === null  // variavel istarget fazendo comparação

        // Ínico da condição if/else
        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
        // final da condição if/else

    }) // Final da função callback

} // Final da função filterByCity

$.fn.cityButtons = function () {
    const cities = new Set // variavel constante cities

    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    }) // final da função callback

    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => {
            filterByCity(city)
        })

        return btn
    })


    const btnAll = $('<button>').addClass('btn btn-info active').html('Todas')
        
    btnAll.click(function(e){
        filterByCity(null)
    })
    btns.push(btnAll)

    const btnGroup = $('<div>').addClass('btn-group')
    btnGroup.append(btns)

    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons]').cityButtons() // função const de city buttons, será os botões selecionaveis
})

