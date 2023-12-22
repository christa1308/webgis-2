var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_Desa_Dis_1 = new ol.format.GeoJSON();
var features_Administrasi_Desa_Dis_1 = format_Administrasi_Desa_Dis_1.readFeatures(json_Administrasi_Desa_Dis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_Desa_Dis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_Desa_Dis_1.addFeatures(features_Administrasi_Desa_Dis_1);
var lyr_Administrasi_Desa_Dis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administrasi_Desa_Dis_1, 
                style: style_Administrasi_Desa_Dis_1,
                interactive: true,
                title: '<img src="styles/legend/Administrasi_Desa_Dis_1.png" /> Administrasi_Desa_Dis'
            });
var format_Sarana_Pendidikan_2 = new ol.format.GeoJSON();
var features_Sarana_Pendidikan_2 = format_Sarana_Pendidikan_2.readFeatures(json_Sarana_Pendidikan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Pendidikan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Pendidikan_2.addFeatures(features_Sarana_Pendidikan_2);
var lyr_Sarana_Pendidikan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sarana_Pendidikan_2, 
                style: style_Sarana_Pendidikan_2,
                interactive: true,
                title: '<img src="styles/legend/Sarana_Pendidikan_2.png" /> Sarana_Pendidikan'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Administrasi_Desa_Dis_1.setVisible(true);lyr_Sarana_Pendidikan_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Administrasi_Desa_Dis_1,lyr_Sarana_Pendidikan_2];
lyr_Administrasi_Desa_Dis_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sarana_Pendidikan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'Base': 'Base', 'Snippet': 'Snippet', 'LabelID': 'LabelID', 'Sarana': 'Sarana', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', });
lyr_Administrasi_Desa_Dis_1.set('fieldImages', {'OBJECTID': '', 'DESA': '', 'KECAMATAN': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Sarana_Pendidikan_2.set('fieldImages', {'OBJECTID': '', 'OID_': '', 'Name': '', 'FolderPath': '', 'Base': '', 'Snippet': '', 'LabelID': '', 'Sarana': '', 'SymbolID': '', 'AltMode': '', 'PopupInfo': '', 'HasLabel': '', });
lyr_Administrasi_Desa_Dis_1.set('fieldLabels', {'OBJECTID': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sarana_Pendidikan_2.set('fieldLabels', {'OBJECTID': 'no label', 'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'LabelID': 'no label', 'Sarana': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', });
lyr_Sarana_Pendidikan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});