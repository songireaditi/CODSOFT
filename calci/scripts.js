$(document).ready(function(){
    var expression = '';

    $('.clear').click(function(){
        $('.input').text('');
        expression = '';
    });

    $('.equal').click(function(){
        expression = $('.input').text();
        try {
            var result = eval(expression);
            $('.input').text(result);
        } catch (error) {
            alert('Invalid expression');
            $('.input').text('');
            expression = '';
        }
    });

    $('.multiply, .divide, .minus, .plus, .one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .zero, .decimal').click(function(){
        expression += $(this).text();
        $('.input').text(expression);
    });
});