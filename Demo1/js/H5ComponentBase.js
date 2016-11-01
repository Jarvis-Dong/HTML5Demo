/**
 * Created by jarvis-dong on 16/10/31.
 */

var H5ConponentBase = function (name, cfg ){
    var cfg =cfg || {};
    var id = ('h5_C_'+Math.random()).replace('.','_');

    //把当前的组件类型添加到样式中进行标记
    var cls ='h5_component_name_'+name+' h5_component_'+cfg.type
    var component = $('<div class="h5_component '+cls+'" id="'+id+'">')

    if(cfg.text){
        component.text(cfg.text);
    }
    cfg.width  && component.width(cfg.width/2);
    cfg.height && component.height(cfg.height/2);
    cfg.css && component.css(cfg.css);
    cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');
    if(cfg.center === true ){
        component.css({
            marginLeft : ( cfg.width/4 *-1)+'px',
            left : '50%'
        })
    }

    component.on('onLoad', function () {
        component.removeClass(cls+'_leave')
        component.addClass(cls+'_load')

        cfg.animateIn && component.animate(cfg.animateIn);

        return false;
    });
    component.on('onLeave', function () {
        component.removeClass(cls+'_load')
        component.addClass(cls+'_leave')

        cfg.animateOut && component.animate(cfg.animateOut);

        return false;
    });

    //cfg.text && component.text(cfg.text);

    return component

}