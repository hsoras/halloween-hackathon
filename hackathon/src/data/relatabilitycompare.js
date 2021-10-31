var thesaurus = require("thesaurus");
var lemmatize = require('wink-lemmatizer')
export default class RelatabilityCompare {
    static simplifyList(keywords){
        let simplifiedKeywords = [];
        for(let keyword of keywords){
            //hack but it works
            simplifiedKeywords.push(lemmatize.noun(lemmatize.adjective(lemmatize.verb(keyword))));
        }
        return simplifiedKeywords;
    }
    static getSimilarWords(keyword){
        let similar_words = [keyword];
        similar_words.concat(thesaurus.find(keyword));
        return this.simplifyList(similar_words);
    }
    static getRelatabilityOfKeywords(kws1, kws2){
        //s means simple
        let s1 = this.simplifyList(kws1);
        let s2 = this.simplifyList(kws2);
        let relate = 0;
        for (let s of s1){
            let sSynonyms = this.getSimilarWords(s);
            for (let sSynonym of sSynonyms){
                if(s2.includes(sSynonym)){
                    relate++;
                }
            }
        }
        return relate;
    }
}