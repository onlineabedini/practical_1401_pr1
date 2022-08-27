let number = /^([0-9]+)$/;
let persian = /^([0123456789آ ابپتثجچحخدذرزژسشصضطظعغفقکگلمنو هی]+)$/;
let english = /^([A-Za-z0-9-_]+)$/;
let name = /^([ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz آ ابپتثجچحخدذرزژسشصضطظعغفقکگلمنو هی]+)$/;

exports.isNumber=(input) => {
    
    return(number.test(input))
};

exports.isPersian=(input) => {
    return(persian.test(input))
};

exports.isEnglish=(input) => {
    return(english.test(input))
};

exports.isName=(input) => {
    return(name.test(input))
}
