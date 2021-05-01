function transform_degree(degree){
    const celcius_exists = degree.includes('C')
    const fahrenheit_exists = degree.includes('F')

    let updated_degree = Number(degree.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degree_sign = 'C'

    if(celcius_exists){
        updated_degree = Number(degree.toUpperCase().replace('C', ''));
        formula = celcius => celcius * 9/5 + 32
        degree_sign = 'F'
    }

    return formula(updated_degree) + degree_sign
}
    console.log(transform_degree('50F'))