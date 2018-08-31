// Construct a standard JSON from for your application and add references relative to the schema you are pulling from. 
let arxivMapping = {
  'title': {
    from: 'feed.entry.title'
  },
  'author': {
    from: 'feed.entry.author'
  },
  'abstract': {
    from: 'feed.entry.entry',
  },
  'journal': {
    from: 'feed.entry.journal'
  },
  'link': {
    from: 'feed.entry.link'
  },
  'lastUpdated': {
    from: 'feed.entry.updated'
  }
}

let arxivMapping = {
    'title': {
        from: 'titles'
    },
    'author': {
        from: 'creators'
    },
    'abstract': {
        from: 'descriptions',
    },
    'journal': {
        from: 'publisher'
    },
    'link': {
        from: 'geoLocations'
    },
    'lastUpdated': {
        from: 'dates'
    }
}


let mySchemaObject = {};

//retreave data from the API
let arxivObject = getArxivRepoFromAPI();

// Loop over and validate it based on your schema

for (key in arxivMapping) {
  let arxivKey = arxivMapping[key].from;
  mySchemaObject[key] = arxivObject[arxivKey];
}
