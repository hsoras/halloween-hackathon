import natural from "natural";
var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();

const search_tfidf = (query) => {
    var costumes = ["superman", "batman"]
    var documents = ["flies, hero, superhero, strong, alien", "night, hero, smart, superhero, strong"];
    for (let i = 0; i < documents.length; i++) {
        tfidf.addDocument(documents[i]);
    }
    var best_fits = [];
    tfidf.tfidfs(query, function(i, measure) {
        best_fits.push([costumes[i], measure]);
    });
    best_fits.sort(function(a, b) {
        return a[1] - b[1];
    });
    console.log(best_fits);
    return [best_fits[best_fits.length - 1][0]];
}

export default search_tfidf;