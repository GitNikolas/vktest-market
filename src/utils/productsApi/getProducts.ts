const baseUrl = 'https://fakestoreapi.com/products';

export async function getProducts() {
    try{
        let response = await fetch(baseUrl , {
            method:'GET',
        })
        if(response.ok) {
            let data = await response.json();
            return { data };
        } else {
            throw new Error('Упс, что-то пошло не так')
        }
    } catch(err) {
        console.error(err);
    }
}