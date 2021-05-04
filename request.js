/*
https: //services1.arcgis.com/xeMpV7tU1t4KD3Ei/arcgis/rest/services/BC_COVID19Dashboard_Vaccine_Counts/FeatureServer/0/query
?f=json
&where=(HA_Name%3C%3E%27BC%27)%20AND%20(HA_Name%3D%27Vancouver%20Coastal%27)
&returnGeometry=false
&spatialRel=esriSpatialRelIntersects
&outFields=*
&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22New_Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22New_Doses_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22One_Dose_Admin%22%2C%22outStatisticFieldName%22%3A%22One_Dose_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Two_Dose_Admin%22%2C%22outStatisticFieldName%22%3A%22Two_Dose_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Tot_Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22Tot_Doses_Admin%22%7D%5D
&resultType=standard
&cacheHint=true


f=json
where=(HA_Name%3C%3E%27BC%27)%20AND%20(HA_Name%3D%27Vancouver%20Coastal%27)
returnGeometry=false
spatialRel=esriSpatialRelIntersects
outFields=*
outStatistics=%5B
    %7B%22statisticType%22%3A %22sum%22%2C %22onStatisticField%22%3A %22New_Doses_Admin%22%2C %22outStatisticFieldName%22%3A %22New_Doses_Admin%22%7D%2C
    %7B%22statisticType%22%3A %22sum%22%2C %22onStatisticField%22%3A %22One_Dose_Admin%22%2C  %22outStatisticFieldName%22%3A %22One_Dose_Admin%22%7D%2C
    %7B%22statisticType%22%3A %22sum%22%2C %22onStatisticField%22%3A %22Two_Dose_Admin%22%2C  %22outStatisticFieldName%22%3A %22Two_Dose_Admin%22%7D%2C
    %7B%22statisticType%22%3A %22sum%22%2C %22onStatisticField%22%3A %22Tot_Doses_Admin%22%2C %22outStatisticFieldName%22%3A %22Tot_Doses_Admin%22%7D
%5D
resultType=standard
cacheHint=true

https://services1.arcgis.com/xeMpV7tU1t4KD3Ei/arcgis/rest/services/BC_COVID19Dashboard_Vaccine_Counts/FeatureServer/0/query?f=json&where=(HA_Name%3C%3E%27BC%27)%20AND%20(HA_Name%3D%27Vancouver%20Coastal%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22New_Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22New_Doses_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22One_Dose_Admin%22%2C%22outStatisticFieldName%22%3A%22One_Dose_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Two_Dose_Admin%22%2C%22outStatisticFieldName%22%3A%22Two_Dose_Admin%22%7D%2C%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Tot_Doses_Admin%22%2C%22outStatisticFieldName%22%3A%22Tot_Doses_Admin%22%7D%5D&resultType=standard&cacheHint=true

*/

let response = {
    "objectIdFieldName": "FID",
    "uniqueIdField": {
        "name": "FID",
        "isSystemMaintained": true
    },
    "globalIdFieldName": "",
    "fields": [
        {
            "name": "New_Doses_Admin",
            "type": "esriFieldTypeDouble",
            "alias": "New_Doses_Admin",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
        },
        {
            "name": "One_Dose_Admin",
            "type": "esriFieldTypeDouble",
            "alias": "One_Dose_Admin",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
        },
        {
            "name": "Two_Dose_Admin",
            "type": "esriFieldTypeDouble",
            "alias": "Two_Dose_Admin",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
        },
        {
            "name": "Tot_Doses_Admin",
            "type": "esriFieldTypeDouble",
            "alias": "Tot_Doses_Admin",
            "sqlType": "sqlTypeFloat",
            "domain": null,
            "defaultValue": null
        }
    ],
    "features": [
        {
            "attributes": {
                "New_Doses_Admin": 20481,
                "One_Dose_Admin": 424374,
                "Two_Dose_Admin": 23493,
                "Tot_Doses_Admin": 447867
            }
        }
    ]
}
