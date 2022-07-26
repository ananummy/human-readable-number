module.exports = function toReadable (number) {
    const a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen, sixteen', 'sventeen', 'eighteen', 'nineteen']
    const b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    const c = ' hundred'

    if (number === 0) return 'zero'

    let num = number.toString().split("")

    if (num.length == 1) {
        return (a[+num[0]]).trim()
    } else if((num.length == 2) & ((num[0] + num[1]) < 20)) {
        return (a[+(num[0] + num[1])]).trim()
    } else if((num.length == 2) & ((num[0] + num[1]) >= 20)) {
        return  (b[+num[0]] + ' ' + a[+num[1]]).trim();
    } else if((num.length == 3) & ((num[1] + num[2]) < 20)) {
        return (a[+num[0]] + c + a[+(num[1]+num[2])]).trim();
    } else if((num.length == 3) & ((num[1] + num[2]) >= 20)) {
        return (a[+num[0]] + c + b[+num[1]] + ' ' + a[+num[2]]).trim();
    }
}
