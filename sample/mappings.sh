curl -XPUT 'http://localhost:9200/eleicoes2014' -d '{
   "mappings": {
      "dep_federal": {
         "properties": {
            "partido": {
               "type": "string",
               "index": "not_analyzed"
            },
            "coligacao": {
               "type": "string",
               "index": "not_analyzed"
            },
            "numero": {
               "type": "integer"
            }
         }
      },
      "dep_estadual": {
         "properties": {
            "partido": {
               "type": "string",
               "index": "not_analyzed"
            },
            "coligacao": {
               "type": "string",
               "index": "not_analyzed"
            },
            "numero": {
               "type": "integer"
            }
         }
      }
   }
}'