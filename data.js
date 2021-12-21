export { Data }

class Data {

    loadData = async function () {
        const url = "https://api.sampleapis.com/recipes/recipes";
        let data
        try {
            const respons = await fetch(url);
            data = await respons.json();
        } catch (e) {
            throw new Error(e);
        }
        return data;
    }

}



