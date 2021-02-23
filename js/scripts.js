$(function() {


    var dictionary = [
        { value: 'e-learning', data: { category: 'elearning' } },
        { value: 'dydaktyka', data: { category: 'elearning' } },
        { value: 'e-nauczanie', data: { category: 'elearning' } },
        { value: 'zdalna dydaktyka', data: { category: 'elearning' } },
        { value: 'zdalne nauczanie', data: { category: 'elearning' } },
        { value: 'nauczanie', data: { category: 'elearning' } },
        { value: 'kampus', data: { category: 'elearning' } },
        { value: 'humanistyka cyfrowa', data: { category: 'humanistyka cyfrowa' } },
        { value: 'projekty cyfrowe', data: { category: 'humanistyka cyfrowa' } },
        { value: 'humanistyka', data: { category: 'humanistyka cyfrowa' } },
        { value: 'projekty', data: { category: 'humanistyka cyfrowa' } },
    ];

    var answers = [
        {'id' : 1, 'category': 'elearning', 'text': 'Chcę dowiedzieć się więcej o działaniach CKC', 'uri' : 'https://dev.owd.io/ckc/dzialalnosc/co-robimy/e-learning/'},
        {'id' : 2, 'category': 'elearning', 'text': 'Chcę zalogować się na platformę', 'uri' : 'https://elearning.ckc.uw.edu.pl/'},
        {'id' : 3, 'category': 'elearning', 'text': 'Chcę poczytać artykuły na ten tema', 'uri' : 'https://dev.owd.io/ckc/?post_type=article&article_area=wokol-moodla&author_id=&article_type='},
        {'id' : 4, 'category': 'elearning', 'text': 'Chcę wziąć udział w szkoleniach', 'uri' : 'https://dev.owd.io/ckc/dzialalnosc/co-robimy/szkolenia-i-warsztaty/ '},
        {'id' : 5, 'category': 'elearning', 'text': 'Chcę dowiedzieć się więcej o działaniach CKC', 'uri' : 'https://dev.owd.io/ckc/dzialalnosc/co-robimy/humanistyka-cyfrowa/'},
        {'id' : 6, 'category': 'humanistyka cyfrowa', 'text': 'Chcę wziąć udział w warsztatach', 'uri' : 'https://dev.owd.io/ckc/dzialalnosc/co-robimy/szkolenia-i-warsztaty/'},
        {'id' : 7, 'category': 'humanistyka cyfrowa', 'text': 'Chcę poczytać artykuły na ten temat', 'uri' : 'https://dev.owd.io/ckc/?post_type=article&article_area=dziedzina-1&author_id=&article_type='},
        {'id' : 8, 'category': 'humanistyka cyfrowa', 'text': 'Chcę zobaczyć projekty zrealizowane przez CKC', 'uri' : 'https://dev.owd.io/ckc/projekty/'}
    ];

    let options = {
        'groupBy' : 'category'
    };


    $('#autocomplete').autocomplete({
        lookup: dictionary,
        onSelect: function (suggestion) {
            let response = answers.filter(x => x.category == suggestion.data.category)
            $('#response ul').empty();
            response.forEach(r => {
                r.li = '<li><a href="' + r.uri + '">' +r.text+ '</a></li>';
                $(r.li).appendTo('#response ul');
            });
        }
    });

    $('#autocomplete').autocomplete().setOptions(options)

});

