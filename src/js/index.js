$(document).ready(Core);

function Core()
{
    InitScrollbar();
    SetTabSwitcher();
    SetSwitcher();
}

function SetTabSwitcher()
{
    $('.btn__tab__switch').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn__tab__switch').removeClass('active');
        $(this).addClass('active');

        let targetTab = $(this).attr('target');

        SwitchTab(targetTab)
    })
}

function SwitchTab(target)
{
    
    $('.tab.active').animate({
        opacity: 0
    }, 500, function() {
        $('.tab.active').removeClass('active');

        $(`[tab-name="${target}"]`).css('opacity', 0);
        $(`[tab-name="${target}"]`).addClass('active');
        
        let tabHeight = $(`[tab-name="${target}"]`)[0].clientHeight;
        $(`[tab-name="${target}"]`).closest('.tab__viewer').css('height', `${tabHeight}px`)

        $(`[tab-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    })
}

function InitScrollbar()
{
    $('.scrollbar-inner').scrollbar();
}

function SetSwitcher()
{
    $('.select-wrapper select').on('change', function () {
        $('.row .col').removeClass('active');
        $('section.main').removeClass('bg-1');
        $('section.main').removeClass('bg-2');
        if ($(this).val() == 1)
        {
            $('#tab-1').addClass('active');
            $('section.main').addClass('bg-1')
        }
        if ($(this).val() == 2)
        {
            $('#tab-2').addClass('active');
            $('section.main').addClass('bg-2')
        }
    })
}