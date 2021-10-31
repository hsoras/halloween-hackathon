const keyword_extractor = require("keyword-extractor");
import data from "../data/data.json";
import RelatabilityCompare from "./relatabilitycompare";

export default class KeywordSearch{
    static kws_data = this.extractKeywords();
    static getKeywords(text){
        return keyword_extractor.extract(text,{
            language:"english",
            remove_digits: true,
            return_changed_case:true,
            remove_duplicates: false
        });
    }
    static extractKeywords () {
        let kwsdict = {};
        for (let i = 0; i < data.length; i++) {
            kwsdict[data[i].costume] = this.getKeywords(data[i].description);
        }
        return kwsdict;
    }
    static searchKeyword (query) {
        let kws = this.getKeywords(query);
        let costumeRelatability = {};
        Object.entries(this.kws_data).forEach(function([costume, kws_costume]){
            console.log(kws)
            console.log(costume)
            costumeRelatability[costume] = RelatabilityCompare.getRelatabilityOfKeywords(kws, kws_costume);
        });
        let costumeRankings = [];
        for(let costume in costumeRelatability) {
            costumeRankings.push([costumeRelatability[costume], costume]);
        }
        let posRankings = []
        for(let ranking of costumeRankings){
            if(ranking[0] > 0){
                posRankings.push(ranking);
            }
        }
        let finalRankings = [];
        for(let ranking of posRankings){
            finalRankings.push(ranking[1]);
        }
        return finalRankings;
    }
}


