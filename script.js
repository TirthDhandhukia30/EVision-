var map_602d2ae9106385cef775bb7c39ffe6df = L.map(
  "map_602d2ae9106385cef775bb7c39ffe6df",
  {
    center: [19.08717377935065, 72.90772898642857],
    crs: L.CRS.EPSG3857,
    ...{
      zoom: 12,
      zoomControl: true,
      preferCanvas: false,
    },
  }
);

var tile_layer_193840a604202afb62b9b640e6c24e88 = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    minZoom: 0,
    maxZoom: 19,
    maxNativeZoom: 19,
    noWrap: false,
    // "attribution": "\u0026copy; \u003ca href=\"https://www.openstreetmap.org/copyright\"\u003eOpenStreetMap\u003c/a\u003e contributors",
    subdomains: "abc",
    detectRetina: false,
    tms: false,
    opacity: 1,
  }
);

tile_layer_193840a604202afb62b9b640e6c24e88.addTo(
  map_602d2ae9106385cef775bb7c39ffe6df
);

var marker_2ce4f9d7b0c64e777316fb905dc6f82c = L.marker(
  [19.0618, 72.833],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_38cb41486f68fb97ebe0a91d7227e5fb = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5b34cd3582b7c97ad49694665a60d80e = L.popup({
  maxWidth: "100%",
});

var html_d475ab0e0098b63eecd2e1a2fdc87e88 = $(
  `<div id="html_d475ab0e0098b63eecd2e1a2fdc87e88" style="width: 100.0%; height: 100.0%;">Ather Grid - Bandra West<br>Suitability: 0.32</div>`
)[0];
popup_5b34cd3582b7c97ad49694665a60d80e.setContent(
  html_d475ab0e0098b63eecd2e1a2fdc87e88
);

marker_2ce4f9d7b0c64e777316fb905dc6f82c.bindPopup(
  popup_5b34cd3582b7c97ad49694665a60d80e
);

marker_2ce4f9d7b0c64e777316fb905dc6f82c.setIcon(
  icon_38cb41486f68fb97ebe0a91d7227e5fb
);

var marker_2f1b9a3098810d0913f6fbb2077d019d = L.marker(
  [19.1206, 72.9188],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7f54224bf4fbbe80bedf68ce0476979b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_28e24911edd05f4ec01c33f9b1b0d6ce = L.popup({
  maxWidth: "100%",
});

var html_dfa948951460ebc275258f7986cc51e7 = $(
  `<div id="html_dfa948951460ebc275258f7986cc51e7" style="width: 100.0%; height: 100.0%;">Ather Grid - Hiranandani<br>Suitability: 0.43</div>`
)[0];
popup_28e24911edd05f4ec01c33f9b1b0d6ce.setContent(
  html_dfa948951460ebc275258f7986cc51e7
);

marker_2f1b9a3098810d0913f6fbb2077d019d.bindPopup(
  popup_28e24911edd05f4ec01c33f9b1b0d6ce
);

marker_2f1b9a3098810d0913f6fbb2077d019d.setIcon(
  icon_7f54224bf4fbbe80bedf68ce0476979b
);

var marker_ce405d6877c597a91c759b27919971a0 = L.marker(
  [18.9959, 72.8532],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2c3b42820d4b25220f24e77f2a115849 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2129503618296e56cb5d120a44b62a79 = L.popup({
  maxWidth: "100%",
});

var html_a42c4be8030a03cffb1caa0b4c0896d4 = $(
  `<div id="html_a42c4be8030a03cffb1caa0b4c0896d4" style="width: 100.0%; height: 100.0%;">Ather Grid - Sewri<br>Suitability: 0.25</div>`
)[0];
popup_2129503618296e56cb5d120a44b62a79.setContent(
  html_a42c4be8030a03cffb1caa0b4c0896d4
);

marker_ce405d6877c597a91c759b27919971a0.bindPopup(
  popup_2129503618296e56cb5d120a44b62a79
);

marker_ce405d6877c597a91c759b27919971a0.setIcon(
  icon_2c3b42820d4b25220f24e77f2a115849
);

var marker_e434867da0ff2104b56fae48e93f9baf = L.marker(
  [19.2298, 72.8606],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b3e2275460f525083e6bbf1215595d62 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8795537fead66f43eb3b1ad67b5e418f = L.popup({
  maxWidth: "100%",
});

var html_4840ae2cda829d0a3bfc626d26ad1ee9 = $(
  `<div id="html_4840ae2cda829d0a3bfc626d26ad1ee9" style="width: 100.0%; height: 100.0%;">ATUM Charge - Borivali<br>Suitability: 0.34</div>`
)[0];
popup_8795537fead66f43eb3b1ad67b5e418f.setContent(
  html_4840ae2cda829d0a3bfc626d26ad1ee9
);

marker_e434867da0ff2104b56fae48e93f9baf.bindPopup(
  popup_8795537fead66f43eb3b1ad67b5e418f
);

marker_e434867da0ff2104b56fae48e93f9baf.setIcon(
  icon_b3e2275460f525083e6bbf1215595d62
);

var marker_51a06464a3c69b6b4b6019f9c3ea815b = L.marker(
  [19.0852, 72.9114],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_06bd673d6bd38ad614f3ed0f9c977820 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c4811bc1cbe15d6372269a453a376544 = L.popup({
  maxWidth: "100%",
});

var html_5d4d39c7af8edda620c6cf17c77e664b = $(
  `<div id="html_5d4d39c7af8edda620c6cf17c77e664b" style="width: 100.0%; height: 100.0%;">ATUM Charge - Ghatkopar<br>Suitability: 0.32</div>`
)[0];
popup_c4811bc1cbe15d6372269a453a376544.setContent(
  html_5d4d39c7af8edda620c6cf17c77e664b
);

marker_51a06464a3c69b6b4b6019f9c3ea815b.bindPopup(
  popup_c4811bc1cbe15d6372269a453a376544
);

marker_51a06464a3c69b6b4b6019f9c3ea815b.setIcon(
  icon_06bd673d6bd38ad614f3ed0f9c977820
);

var marker_49e36a6d54f18672fe9502fdfad7ccb3 = L.marker(
  [19.1876, 72.8436],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_5c08ff6d392eb1c618299e0116526ec1 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9fcff7c744d0bfbaac0744fc95ed5449 = L.popup({
  maxWidth: "100%",
});

var html_70c1250f4c3f4e4f58919cec22e38838 = $(
  `<div id="html_70c1250f4c3f4e4f58919cec22e38838" style="width: 100.0%; height: 100.0%;">ATUM Charge (Malad)<br>Suitability: 0.29</div>`
)[0];
popup_9fcff7c744d0bfbaac0744fc95ed5449.setContent(
  html_70c1250f4c3f4e4f58919cec22e38838
);

marker_49e36a6d54f18672fe9502fdfad7ccb3.bindPopup(
  popup_9fcff7c744d0bfbaac0744fc95ed5449
);

marker_49e36a6d54f18672fe9502fdfad7ccb3.setIcon(
  icon_5c08ff6d392eb1c618299e0116526ec1
);

var marker_68867ab46ec344e4586855afff99e4de = L.marker(
  [19.1721, 72.9568],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8c4efb4a8cba7045ed46b3a0c4cc321b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6d20bc014bd903a394ed2e5ba2ef867c = L.popup({
  maxWidth: "100%",
});

var html_9bff1d1d89f7760e3d49087aba895270 = $(
  `<div id="html_9bff1d1d89f7760e3d49087aba895270" style="width: 100.0%; height: 100.0%;">ATUM Charge - Mulund<br>Suitability: 0.36</div>`
)[0];
popup_6d20bc014bd903a394ed2e5ba2ef867c.setContent(
  html_9bff1d1d89f7760e3d49087aba895270
);

marker_68867ab46ec344e4586855afff99e4de.bindPopup(
  popup_6d20bc014bd903a394ed2e5ba2ef867c
);

marker_68867ab46ec344e4586855afff99e4de.setIcon(
  icon_8c4efb4a8cba7045ed46b3a0c4cc321b
);

var marker_3603a0e214dca527043304d56e6c3593 = L.marker(
  [18.9897, 73.1145],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8972dcce8363febbe37405f49500868b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_32c1a0cd822061c7bb502467687113d8 = L.popup({
  maxWidth: "100%",
});

var html_3ba9b628a88ca32805559f45015bae7a = $(
  `<div id="html_3ba9b628a88ca32805559f45015bae7a" style="width: 100.0%; height: 100.0%;">ATUM Charge - Panvel<br>Suitability: 0.31</div>`
)[0];
popup_32c1a0cd822061c7bb502467687113d8.setContent(
  html_3ba9b628a88ca32805559f45015bae7a
);

marker_3603a0e214dca527043304d56e6c3593.bindPopup(
  popup_32c1a0cd822061c7bb502467687113d8
);

marker_3603a0e214dca527043304d56e6c3593.setIcon(
  icon_8972dcce8363febbe37405f49500868b
);

var marker_3cae50a341b288222f909e24b754a4d2 = L.marker(
  [19.0815, 72.8367],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_28333635e44839495b5bf29a0523947a = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_74d77d7bc314e3d103f255d4dcc7ac99 = L.popup({
  maxWidth: "100%",
});

var html_0a0f04173c0bbc3e651bff34a58c3ab7 = $(
  `<div id="html_0a0f04173c0bbc3e651bff34a58c3ab7" style="width: 100.0%; height: 100.0%;">ATUM Charge - Santacruz<br>Suitability: 0.41</div>`
)[0];
popup_74d77d7bc314e3d103f255d4dcc7ac99.setContent(
  html_0a0f04173c0bbc3e651bff34a58c3ab7
);

marker_3cae50a341b288222f909e24b754a4d2.bindPopup(
  popup_74d77d7bc314e3d103f255d4dcc7ac99
);

marker_3cae50a341b288222f909e24b754a4d2.setIcon(
  icon_28333635e44839495b5bf29a0523947a
);

var marker_350e30634a6ac19b6c2fdfe5ac5feefd = L.marker(
  [18.989356, 72.825234],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8ee59fcddb4a70d5827e47f32cfe4740 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9c4bd7b41559f8e527b9323b5f73f651 = L.popup({
  maxWidth: "100%",
});

var html_641524b5763c1e9fcb520a8f1be46f2b = $(
  `<div id="html_641524b5763c1e9fcb520a8f1be46f2b" style="width: 100.0%; height: 100.0%;">Blue Tokai Coffee<br>Suitability: 0.33</div>`
)[0];
popup_9c4bd7b41559f8e527b9323b5f73f651.setContent(
  html_641524b5763c1e9fcb520a8f1be46f2b
);

marker_350e30634a6ac19b6c2fdfe5ac5feefd.bindPopup(
  popup_9c4bd7b41559f8e527b9323b5f73f651
);

marker_350e30634a6ac19b6c2fdfe5ac5feefd.setIcon(
  icon_8ee59fcddb4a70d5827e47f32cfe4740
);

var marker_8602733f3636e1311b2edb68a2e829f5 = L.marker(
  [19.1593952, 72.945112],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_338c26c1117bd8d99731fa827a32d1ec = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_10d97855d247a912778ba982915111bd = L.popup({
  maxWidth: "100%",
});

var html_cbec4b6214d58353ff65601dcd1e58f7 = $(
  `<div id="html_cbec4b6214d58353ff65601dcd1e58f7" style="width: 100.0%; height: 100.0%;">BMC Parking Runwal Greens<br>Suitability: 0.3</div>`
)[0];
popup_10d97855d247a912778ba982915111bd.setContent(
  html_cbec4b6214d58353ff65601dcd1e58f7
);

marker_8602733f3636e1311b2edb68a2e829f5.bindPopup(
  popup_10d97855d247a912778ba982915111bd
);

marker_8602733f3636e1311b2edb68a2e829f5.setIcon(
  icon_338c26c1117bd8d99731fa827a32d1ec
);

var marker_d7e9c5d00124141db22ecb9006cfcd7f = L.marker(
  [19.11637, 72.91086],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ecfbdb2b45da792e16acceedf2d56d30 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_97788645e53227ded1abe831fda566c8 = L.popup({
  maxWidth: "100%",
});

var html_12e00dc6b2e06fcc6d4582763e6e93b1 = $(
  `<div id="html_12e00dc6b2e06fcc6d4582763e6e93b1" style="width: 100.0%; height: 100.0%;">Brookfield, Powai<br>Suitability: 0.39</div>`
)[0];
popup_97788645e53227ded1abe831fda566c8.setContent(
  html_12e00dc6b2e06fcc6d4582763e6e93b1
);

marker_d7e9c5d00124141db22ecb9006cfcd7f.bindPopup(
  popup_97788645e53227ded1abe831fda566c8
);

marker_d7e9c5d00124141db22ecb9006cfcd7f.setIcon(
  icon_ecfbdb2b45da792e16acceedf2d56d30
);

var marker_89401d28beab1d05d828019d61b7f47a = L.marker(
  [19.0313299, 72.8809653],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_799cf58398c227b4142547d06a02039e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_17243e0ccf034d8c0c9d1f4df2fb72bb = L.popup({
  maxWidth: "100%",
});

var html_2ad53504a06b763fd842e269000efbfc = $(
  `<div id="html_2ad53504a06b763fd842e269000efbfc" style="width: 100.0%; height: 100.0%;">Carnival Cinemas Imax<br>Suitability: 0.37</div>`
)[0];
popup_17243e0ccf034d8c0c9d1f4df2fb72bb.setContent(
  html_2ad53504a06b763fd842e269000efbfc
);

marker_89401d28beab1d05d828019d61b7f47a.bindPopup(
  popup_17243e0ccf034d8c0c9d1f4df2fb72bb
);

marker_89401d28beab1d05d828019d61b7f47a.setIcon(
  icon_799cf58398c227b4142547d06a02039e
);

var marker_708ba95fa9521c1044b28fffd54a19cb = L.marker(
  [19.133659, 72.900817],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_55b2d742e7dfe53143fe48c5d9876ad0 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6ec81a1a7e57a26e8faecb9e255428ba = L.popup({
  maxWidth: "100%",
});

var html_d74c1ae77354dac3afdec33fe8979fac = $(
  `<div id="html_d74c1ae77354dac3afdec33fe8979fac" style="width: 100.0%; height: 100.0%;">Charge Zone<br>Suitability: 0.44</div>`
)[0];
popup_6ec81a1a7e57a26e8faecb9e255428ba.setContent(
  html_d74c1ae77354dac3afdec33fe8979fac
);

marker_708ba95fa9521c1044b28fffd54a19cb.bindPopup(
  popup_6ec81a1a7e57a26e8faecb9e255428ba
);

marker_708ba95fa9521c1044b28fffd54a19cb.setIcon(
  icon_55b2d742e7dfe53143fe48c5d9876ad0
);

var marker_e7235b8b314a0d97d0a1ffccfdb7a200 = L.marker(
  [19.0977, 72.8271],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_644a98fd83298ec6cc79bc71255dd735 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_87bf36976a741153422752c628da3b70 = L.popup({
  maxWidth: "100%",
});

var html_69429a55f11f4a4f9b494aa08d86d34f = $(
  `<div id="html_69429a55f11f4a4f9b494aa08d86d34f" style="width: 100.0%; height: 100.0%;">ChargeAndDrive - Juhu<br>Suitability: 0.38</div>`
)[0];
popup_87bf36976a741153422752c628da3b70.setContent(
  html_69429a55f11f4a4f9b494aa08d86d34f
);

marker_e7235b8b314a0d97d0a1ffccfdb7a200.bindPopup(
  popup_87bf36976a741153422752c628da3b70
);

marker_e7235b8b314a0d97d0a1ffccfdb7a200.setIcon(
  icon_644a98fd83298ec6cc79bc71255dd735
);

var marker_492a8358c4ab5f39256e96de662370dc = L.marker(
  [19.186, 73.1891],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f3a7a113a092c294b3e90f3b167d68dc = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d945e4da013ed4363191f9e002b53c70 = L.popup({
  maxWidth: "100%",
});

var html_5390835df01b4b51d98be87ab7f02d34 = $(
  `<div id="html_5390835df01b4b51d98be87ab7f02d34" style="width: 100.0%; height: 100.0%;">ChargeZone - Ambernath<br>Suitability: 0.3</div>`
)[0];
popup_d945e4da013ed4363191f9e002b53c70.setContent(
  html_5390835df01b4b51d98be87ab7f02d34
);

marker_492a8358c4ab5f39256e96de662370dc.bindPopup(
  popup_d945e4da013ed4363191f9e002b53c70
);

marker_492a8358c4ab5f39256e96de662370dc.setIcon(
  icon_f3a7a113a092c294b3e90f3b167d68dc
);

var marker_166458c8b36e00d229c89d090a46abca = L.marker(
  [19.0549, 72.9038],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_dd41a5e82099e6bbac23817da0f28626 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d1ac37582c7347ed41c61b91b23d6726 = L.popup({
  maxWidth: "100%",
});

var html_949a808830b8181659f4b700c1e5bc0b = $(
  `<div id="html_949a808830b8181659f4b700c1e5bc0b" style="width: 100.0%; height: 100.0%;">ChargeZone - Chembur<br>Suitability: 0.32</div>`
)[0];
popup_d1ac37582c7347ed41c61b91b23d6726.setContent(
  html_949a808830b8181659f4b700c1e5bc0b
);

marker_166458c8b36e00d229c89d090a46abca.bindPopup(
  popup_d1ac37582c7347ed41c61b91b23d6726
);

marker_166458c8b36e00d229c89d090a46abca.setIcon(
  icon_dd41a5e82099e6bbac23817da0f28626
);

var marker_507b4ee484c9655581309bf59e3e7250 = L.marker(
  [19.2505, 72.8591],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b136feb5e5a65b39181cb887be3c8f9f = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_eb6b771d495142f0239f2639b105bfc5 = L.popup({
  maxWidth: "100%",
});

var html_46bf726235e19ece4efe6b2cc92c9bec = $(
  `<div id="html_46bf726235e19ece4efe6b2cc92c9bec" style="width: 100.0%; height: 100.0%;">ChargeZone - Dahisar<br>Suitability: 0.34</div>`
)[0];
popup_eb6b771d495142f0239f2639b105bfc5.setContent(
  html_46bf726235e19ece4efe6b2cc92c9bec
);

marker_507b4ee484c9655581309bf59e3e7250.bindPopup(
  popup_eb6b771d495142f0239f2639b105bfc5
);

marker_507b4ee484c9655581309bf59e3e7250.setIcon(
  icon_b136feb5e5a65b39181cb887be3c8f9f
);

var marker_6838a6e727484a311d2e933bd9f96882 = L.marker(
  [19.1726, 72.9532],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8f76d46d56f9125482d12938ef62f462 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b623bba26ceb7ed1c2414f86579f9e17 = L.popup({
  maxWidth: "100%",
});

var html_91721df05f18266f29b31ef0eb8026d0 = $(
  `<div id="html_91721df05f18266f29b31ef0eb8026d0" style="width: 100.0%; height: 100.0%;">ChargeZone - Mulund<br>Suitability: 0.35</div>`
)[0];
popup_b623bba26ceb7ed1c2414f86579f9e17.setContent(
  html_91721df05f18266f29b31ef0eb8026d0
);

marker_6838a6e727484a311d2e933bd9f96882.bindPopup(
  popup_b623bba26ceb7ed1c2414f86579f9e17
);

marker_6838a6e727484a311d2e933bd9f96882.setIcon(
  icon_8f76d46d56f9125482d12938ef62f462
);

var marker_b606c318cb73513364d74621f95630d5 = L.marker(
  [19.0708, 72.9991],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2612d2f2919f4350e51c52049ff80c46 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2173b2e3446c41e1525aeda353941882 = L.popup({
  maxWidth: "100%",
});

var html_c7fc106ab18acb01cf90bab2db54cb7b = $(
  `<div id="html_c7fc106ab18acb01cf90bab2db54cb7b" style="width: 100.0%; height: 100.0%;">ChargeZone - Vashi<br>Suitability: 0.29</div>`
)[0];
popup_2173b2e3446c41e1525aeda353941882.setContent(
  html_c7fc106ab18acb01cf90bab2db54cb7b
);

marker_b606c318cb73513364d74621f95630d5.bindPopup(
  popup_2173b2e3446c41e1525aeda353941882
);

marker_b606c318cb73513364d74621f95630d5.setIcon(
  icon_2612d2f2919f4350e51c52049ff80c46
);

var marker_6afcb171527c7a12f8491c98252bf8c7 = L.marker(
  [19.137, 72.8261],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ebe51dbfe2559099a14d695a22fe12b4 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a78c184edfec2421a62dde6f5c8c2952 = L.popup({
  maxWidth: "100%",
});

var html_22d728fd91288ae9474a4e6461956700 = $(
  `<div id="html_22d728fd91288ae9474a4e6461956700" style="width: 100.0%; height: 100.0%;">ChargeZone - Versova<br>Suitability: 0.33</div>`
)[0];
popup_a78c184edfec2421a62dde6f5c8c2952.setContent(
  html_22d728fd91288ae9474a4e6461956700
);

marker_6afcb171527c7a12f8491c98252bf8c7.bindPopup(
  popup_a78c184edfec2421a62dde6f5c8c2952
);

marker_6afcb171527c7a12f8491c98252bf8c7.setIcon(
  icon_ebe51dbfe2559099a14d695a22fe12b4
);

var marker_a357ca8b18d3126978d6ae1defbd61d4 = L.marker(
  [19.1787, 72.8446],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_1a0ca85571893279e0c26dfae7c21ee5 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5e5d151dcf428bbe265bf91a4b11ab7f = L.popup({
  maxWidth: "100%",
});

var html_760521dd6bfdd0547a8ad3d2189234d5 = $(
  `<div id="html_760521dd6bfdd0547a8ad3d2189234d5" style="width: 100.0%; height: 100.0%;">EV Dock - Malad<br>Suitability: 0.39</div>`
)[0];
popup_5e5d151dcf428bbe265bf91a4b11ab7f.setContent(
  html_760521dd6bfdd0547a8ad3d2189234d5
);

marker_a357ca8b18d3126978d6ae1defbd61d4.bindPopup(
  popup_5e5d151dcf428bbe265bf91a4b11ab7f
);

marker_a357ca8b18d3126978d6ae1defbd61d4.setIcon(
  icon_1a0ca85571893279e0c26dfae7c21ee5
);

var marker_da23030e87ac45236453b3f2bcf38a18 = L.marker(
  [19.291, 72.8511],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c75de0f0e02c3dc516b83d8b80843175 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_07c6fce7caf004872b8fffd39aecddfd = L.popup({
  maxWidth: "100%",
});

var html_b003582d08511ed25851aa09f7024a33 = $(
  `<div id="html_b003582d08511ed25851aa09f7024a33" style="width: 100.0%; height: 100.0%;">EV Dock - Mira Road<br>Suitability: 0.35</div>`
)[0];
popup_07c6fce7caf004872b8fffd39aecddfd.setContent(
  html_b003582d08511ed25851aa09f7024a33
);

marker_da23030e87ac45236453b3f2bcf38a18.bindPopup(
  popup_07c6fce7caf004872b8fffd39aecddfd
);

marker_da23030e87ac45236453b3f2bcf38a18.setIcon(
  icon_c75de0f0e02c3dc516b83d8b80843175
);

var marker_fd7cb616477881459855ae1072590602 = L.marker(
  [19.1798, 72.8361],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_0966989f3e29c6563179eece4d9adcc4 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_331ac1c4dd3199e79eda17efd92fdbde = L.popup({
  maxWidth: "100%",
});

var html_80997de789403af11340b7a53a6ee7b1 = $(
  `<div id="html_80997de789403af11340b7a53a6ee7b1" style="width: 100.0%; height: 100.0%;">Evershine Mall Charging Station<br>Suitability: 0.35</div>`
)[0];
popup_331ac1c4dd3199e79eda17efd92fdbde.setContent(
  html_80997de789403af11340b7a53a6ee7b1
);

marker_fd7cb616477881459855ae1072590602.bindPopup(
  popup_331ac1c4dd3199e79eda17efd92fdbde
);

marker_fd7cb616477881459855ae1072590602.setIcon(
  icon_0966989f3e29c6563179eece4d9adcc4
);

var marker_f313c21b9514f83af9c49af9d96c8fcf = L.marker(
  [19.2365, 72.8552],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7446b919d2d3c5d82cf430a9d7b7eb6c = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b62f37b5f5a04429cafab04f59f86ce2 = L.popup({
  maxWidth: "100%",
});

var html_9b03b0642fc9603c44f61b5b6040c5a2 = $(
  `<div id="html_9b03b0642fc9603c44f61b5b6040c5a2" style="width: 100.0%; height: 100.0%;">EVteQ - Borivali<br>Suitability: 0.23</div>`
)[0];
popup_b62f37b5f5a04429cafab04f59f86ce2.setContent(
  html_9b03b0642fc9603c44f61b5b6040c5a2
);

marker_f313c21b9514f83af9c49af9d96c8fcf.bindPopup(
  popup_b62f37b5f5a04429cafab04f59f86ce2
);

marker_f313c21b9514f83af9c49af9d96c8fcf.setIcon(
  icon_7446b919d2d3c5d82cf430a9d7b7eb6c
);

var marker_b6ce7ccae99779bf974820865debb4a5 = L.marker(
  [19.2104, 72.8572],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_759c94b7b01bdcab41cf6a6fbc21d88d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e7cde27eca11e8dfacebc5ec07b50848 = L.popup({
  maxWidth: "100%",
});

var html_069663d4ceb8f303545edc0c22935be5 = $(
  `<div id="html_069663d4ceb8f303545edc0c22935be5" style="width: 100.0%; height: 100.0%;">EVteQ - Kandivali<br>Suitability: 0.42</div>`
)[0];
popup_e7cde27eca11e8dfacebc5ec07b50848.setContent(
  html_069663d4ceb8f303545edc0c22935be5
);

marker_b6ce7ccae99779bf974820865debb4a5.bindPopup(
  popup_e7cde27eca11e8dfacebc5ec07b50848
);

marker_b6ce7ccae99779bf974820865debb4a5.setIcon(
  icon_759c94b7b01bdcab41cf6a6fbc21d88d
);

var marker_9029318c945b88e7e69b9686e7a0a065 = L.marker(
  [19.1851, 72.8388],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b2e1dcc2867c74e5c025e43777e46ea2 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_107e2b8a3e0feeb792003aa4d091b4a2 = L.popup({
  maxWidth: "100%",
});

var html_f072d12c7ddcd67dd14936b38f4cb07c = $(
  `<div id="html_f072d12c7ddcd67dd14936b38f4cb07c" style="width: 100.0%; height: 100.0%;">EVteQ - Malad<br>Suitability: 0.44</div>`
)[0];
popup_107e2b8a3e0feeb792003aa4d091b4a2.setContent(
  html_f072d12c7ddcd67dd14936b38f4cb07c
);

marker_9029318c945b88e7e69b9686e7a0a065.bindPopup(
  popup_107e2b8a3e0feeb792003aa4d091b4a2
);

marker_9029318c945b88e7e69b9686e7a0a065.setIcon(
  icon_b2e1dcc2867c74e5c025e43777e46ea2
);

var marker_46b6c48f873a0709f1b3a738b5edb3c2 = L.marker(
  [19.102, 72.8872],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_e58a87df422a3ab6c323c0f1136a7ca5 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6f02c0e9b6de1020c03bfd3946be3edb = L.popup({
  maxWidth: "100%",
});

var html_6a42768649196627dd16034a5e0a70ec = $(
  `<div id="html_6a42768649196627dd16034a5e0a70ec" style="width: 100.0%; height: 100.0%;">EVteQ - Sakinaka<br>Suitability: 0.4</div>`
)[0];
popup_6f02c0e9b6de1020c03bfd3946be3edb.setContent(
  html_6a42768649196627dd16034a5e0a70ec
);

marker_46b6c48f873a0709f1b3a738b5edb3c2.bindPopup(
  popup_6f02c0e9b6de1020c03bfd3946be3edb
);

marker_46b6c48f873a0709f1b3a738b5edb3c2.setIcon(
  icon_e58a87df422a3ab6c323c0f1136a7ca5
);

var marker_75803436cbee09049ae04c7c84c441b1 = L.marker(
  [19.0984, 72.9262],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_01ea88577073545da803ac3aa87e057e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7ffd5d2e3fb562584895189c09310765 = L.popup({
  maxWidth: "100%",
});

var html_3e0026fe55ccb318c0b05eb4430ab5d7 = $(
  `<div id="html_3e0026fe55ccb318c0b05eb4430ab5d7" style="width: 100.0%; height: 100.0%;">EVteQ - Vikhroli<br>Suitability: 0.26</div>`
)[0];
popup_7ffd5d2e3fb562584895189c09310765.setContent(
  html_3e0026fe55ccb318c0b05eb4430ab5d7
);

marker_75803436cbee09049ae04c7c84c441b1.bindPopup(
  popup_7ffd5d2e3fb562584895189c09310765
);

marker_75803436cbee09049ae04c7c84c441b1.setIcon(
  icon_01ea88577073545da803ac3aa87e057e
);

var marker_a09d3d61e003d949924ccbe777f292d7 = L.marker(
  [19.0012, 72.8281],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_e23c2f80389bc390e6511d056e2c42d2 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_46c14c050a145a8f8ff6896c0e96ac26 = L.popup({
  maxWidth: "100%",
});

var html_5f2b4efcffddea3acba85af372179358 = $(
  `<div id="html_5f2b4efcffddea3acba85af372179358" style="width: 100.0%; height: 100.0%;">Fortum - Lower Parel<br>Suitability: 0.22</div>`
)[0];
popup_46c14c050a145a8f8ff6896c0e96ac26.setContent(
  html_5f2b4efcffddea3acba85af372179358
);

marker_a09d3d61e003d949924ccbe777f292d7.bindPopup(
  popup_46c14c050a145a8f8ff6896c0e96ac26
);

marker_a09d3d61e003d949924ccbe777f292d7.setIcon(
  icon_e23c2f80389bc390e6511d056e2c42d2
);

var marker_08a93e210adc5ebf3eed478c5c473e8f = L.marker(
  [19.1182, 72.9053],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2e8a62997e3b6a79c8e87c9c9215be63 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_eb5a1c8a09f1f52af02addd29aa6cf67 = L.popup({
  maxWidth: "100%",
});

var html_792df475b0f9674662de470b412d8e00 = $(
  `<div id="html_792df475b0f9674662de470b412d8e00" style="width: 100.0%; height: 100.0%;">Fortum - Powai Plaza<br>Suitability: 0.27</div>`
)[0];
popup_eb5a1c8a09f1f52af02addd29aa6cf67.setContent(
  html_792df475b0f9674662de470b412d8e00
);

marker_08a93e210adc5ebf3eed478c5c473e8f.bindPopup(
  popup_eb5a1c8a09f1f52af02addd29aa6cf67
);

marker_08a93e210adc5ebf3eed478c5c473e8f.setIcon(
  icon_2e8a62997e3b6a79c8e87c9c9215be63
);

var marker_e2fd57373034ab498ce1cd05d8892c44 = L.marker(
  [19.11599, 72.85018],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_5ac7d084174ead987e2d4a996c7564f2 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7fd71084b5751feef26400f1cdfe243f = L.popup({
  maxWidth: "100%",
});

var html_f4f699acf78a1d493c4f4a1707e83079 = $(
  `<div id="html_f4f699acf78a1d493c4f4a1707e83079" style="width: 100.0%; height: 100.0%;">Ginger Mumbai, Andheri East<br>Suitability: 0.27</div>`
)[0];
popup_7fd71084b5751feef26400f1cdfe243f.setContent(
  html_f4f699acf78a1d493c4f4a1707e83079
);

marker_e2fd57373034ab498ce1cd05d8892c44.bindPopup(
  popup_7fd71084b5751feef26400f1cdfe243f
);

marker_e2fd57373034ab498ce1cd05d8892c44.setIcon(
  icon_5ac7d084174ead987e2d4a996c7564f2
);

var marker_ed9a8258c6537962cf0419c4fa6b22a3 = L.marker(
  [19.0925655, 72.9223514],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_755126c89ef9ea6eb0bc9576b7f52103 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_de5b9f6c125386f450ee6784d89c0734 = L.popup({
  maxWidth: "100%",
});

var html_45d69fa30b3dd024aa6ea4d42b3306c0 = $(
  `<div id="html_45d69fa30b3dd024aa6ea4d42b3306c0" style="width: 100.0%; height: 100.0%;">Godrej One, Vikhroli<br>Suitability: 0.27</div>`
)[0];
popup_de5b9f6c125386f450ee6784d89c0734.setContent(
  html_45d69fa30b3dd024aa6ea4d42b3306c0
);

marker_ed9a8258c6537962cf0419c4fa6b22a3.bindPopup(
  popup_de5b9f6c125386f450ee6784d89c0734
);

marker_ed9a8258c6537962cf0419c4fa6b22a3.setIcon(
  icon_755126c89ef9ea6eb0bc9576b7f52103
);

var marker_775e07580b12a856d3f1324c0e51bb40 = L.marker(
  [19.163979, 72.938751],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_5cdc96fc80ab4b59d0692e0418dabd54 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6c4374b06e294581abe284674954680e = L.popup({
  maxWidth: "100%",
});

var html_ce7d0bfe176d4f9ff36cc545f5d9a080 = $(
  `<div id="html_ce7d0bfe176d4f9ff36cc545f5d9a080" style="width: 100.0%; height: 100.0%;">Hare Krishna Mahindra, Mulund West<br>Suitability: 0.35</div>`
)[0];
popup_6c4374b06e294581abe284674954680e.setContent(
  html_ce7d0bfe176d4f9ff36cc545f5d9a080
);

marker_775e07580b12a856d3f1324c0e51bb40.bindPopup(
  popup_6c4374b06e294581abe284674954680e
);

marker_775e07580b12a856d3f1324c0e51bb40.setIcon(
  icon_5cdc96fc80ab4b59d0692e0418dabd54
);

var marker_f0b3491e92301273820e29bf9cda55e8 = L.marker(
  [18.99453515, 73.11513242],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_e799b0012f5b76ed97a75860d3a29c4e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_aa59d339e55e5bdc3b70600a92006b6f = L.popup({
  maxWidth: "100%",
});

var html_cf931359192486c9cd33a4487a18a109 = $(
  `<div id="html_cf931359192486c9cd33a4487a18a109" style="width: 100.0%; height: 100.0%;">HOTEL REDWINGS CASTLE<br>Suitability: 0.3</div>`
)[0];
popup_aa59d339e55e5bdc3b70600a92006b6f.setContent(
  html_cf931359192486c9cd33a4487a18a109
);

marker_f0b3491e92301273820e29bf9cda55e8.bindPopup(
  popup_aa59d339e55e5bdc3b70600a92006b6f
);

marker_f0b3491e92301273820e29bf9cda55e8.setIcon(
  icon_e799b0012f5b76ed97a75860d3a29c4e
);

var marker_3dabafe64a508cc043588e0a694c8ef6 = L.marker(
  [19.1142415, 72.8518766],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_27f450af14cd7a5c36456c5ac4c1f145 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_656fa1708e1c942d547053951d8876bf = L.popup({
  maxWidth: "100%",
});

var html_9858787bacabb4b8d4cb46ac6cf8bc93 = $(
  `<div id="html_9858787bacabb4b8d4cb46ac6cf8bc93" style="width: 100.0%; height: 100.0%;">Hotel Suba Galaxy, Andheri East<br>Suitability: 0.36</div>`
)[0];
popup_656fa1708e1c942d547053951d8876bf.setContent(
  html_9858787bacabb4b8d4cb46ac6cf8bc93
);

marker_3dabafe64a508cc043588e0a694c8ef6.bindPopup(
  popup_656fa1708e1c942d547053951d8876bf
);

marker_3dabafe64a508cc043588e0a694c8ef6.setIcon(
  icon_27f450af14cd7a5c36456c5ac4c1f145
);

var marker_d779fe3fa2bfd8c5fd819ed7a14d84ce = L.marker(
  [19.0640261, 73.01971543],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f2b4d9380757818c9a0d55dc06cb1db0 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3270bcd9e35e3b5b7ac1f45e522cb234 = L.popup({
  maxWidth: "100%",
});

var html_8fc86ae706d2b6fae597419789545776 = $(
  `<div id="html_8fc86ae706d2b6fae597419789545776" style="width: 100.0%; height: 100.0%;">Hotel Yogi Midtown<br>Suitability: 0.33</div>`
)[0];
popup_3270bcd9e35e3b5b7ac1f45e522cb234.setContent(
  html_8fc86ae706d2b6fae597419789545776
);

marker_d779fe3fa2bfd8c5fd819ed7a14d84ce.bindPopup(
  popup_3270bcd9e35e3b5b7ac1f45e522cb234
);

marker_d779fe3fa2bfd8c5fd819ed7a14d84ce.setIcon(
  icon_f2b4d9380757818c9a0d55dc06cb1db0
);

var marker_c3da15ecafeb1b70a040c125db85207d = L.marker(
  [18.9285, 72.8255],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_3f2efbabf99eacbcfa9c932557be8c90 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0ea111b151acf432bf7a66a41f46fe37 = L.popup({
  maxWidth: "100%",
});

var html_74fd9225208980110ac2d36257aeaae6 = $(
  `<div id="html_74fd9225208980110ac2d36257aeaae6" style="width: 100.0%; height: 100.0%;">HP Super Service DC Charging Station<br>Suitability: 0.36</div>`
)[0];
popup_0ea111b151acf432bf7a66a41f46fe37.setContent(
  html_74fd9225208980110ac2d36257aeaae6
);

marker_c3da15ecafeb1b70a040c125db85207d.bindPopup(
  popup_0ea111b151acf432bf7a66a41f46fe37
);

marker_c3da15ecafeb1b70a040c125db85207d.setIcon(
  icon_3f2efbabf99eacbcfa9c932557be8c90
);

var marker_80567c6449538f92462ef10dcd6f15c6 = L.marker(
  [19.14207, 72.83241],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_9ae23638eb1ba8e1a847daeb72a5f731 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_88d37be92d94698613d2a218e1fc633d = L.popup({
  maxWidth: "100%",
});

var html_df3441d56bde15d8888c5ca2dbe5defe = $(
  `<div id="html_df3441d56bde15d8888c5ca2dbe5defe" style="width: 100.0%; height: 100.0%;">Inderjit Cars, Andheri West<br>Suitability: 0.37</div>`
)[0];
popup_88d37be92d94698613d2a218e1fc633d.setContent(
  html_df3441d56bde15d8888c5ca2dbe5defe
);

marker_80567c6449538f92462ef10dcd6f15c6.bindPopup(
  popup_88d37be92d94698613d2a218e1fc633d
);

marker_80567c6449538f92462ef10dcd6f15c6.setIcon(
  icon_9ae23638eb1ba8e1a847daeb72a5f731
);

var marker_e8e802b3502300ea536fe7bef8142c53 = L.marker(
  [19.018857, 72.831076],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c530dad976b6882593e93135a337f02b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_430d7b399367e7c87c3b9a2881858268 = L.popup({
  maxWidth: "100%",
});

var html_9b1ccbd1399ead38b4ec27f5d330b8a1 = $(
  `<div id="html_9b1ccbd1399ead38b4ec27f5d330b8a1" style="width: 100.0%; height: 100.0%;">IOCL - COCO, Prabhadevi<br>Suitability: 0.11</div>`
)[0];
popup_430d7b399367e7c87c3b9a2881858268.setContent(
  html_9b1ccbd1399ead38b4ec27f5d330b8a1
);

marker_e8e802b3502300ea536fe7bef8142c53.bindPopup(
  popup_430d7b399367e7c87c3b9a2881858268
);

marker_e8e802b3502300ea536fe7bef8142c53.setIcon(
  icon_c530dad976b6882593e93135a337f02b
);

var marker_f8da61dd323c80e30e870eb3610f9e82 = L.marker(
  [19.051601, 72.838011],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8d2ab15099c772b2595cf4fd0dc78841 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e1a93945e8cf0b27ee115d7f9b165664 = L.popup({
  maxWidth: "100%",
});

var html_24b8e0989a0c3c4ae1b35e2fc723fb56 = $(
  `<div id="html_24b8e0989a0c3c4ae1b35e2fc723fb56" style="width: 100.0%; height: 100.0%;">IOCL Kini Causway, Bandra<br>Suitability: 0.38</div>`
)[0];
popup_e1a93945e8cf0b27ee115d7f9b165664.setContent(
  html_24b8e0989a0c3c4ae1b35e2fc723fb56
);

marker_f8da61dd323c80e30e870eb3610f9e82.bindPopup(
  popup_e1a93945e8cf0b27ee115d7f9b165664
);

marker_f8da61dd323c80e30e870eb3610f9e82.setIcon(
  icon_8d2ab15099c772b2595cf4fd0dc78841
);

var marker_99605def43cc3f5a6f3dd960fdde2036 = L.marker(
  [19.1485, 72.9358],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f6b3c12bc38794aae3fd7b9e092da19b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a10afbf7504ce71a53f4548844ca50f2 = L.popup({
  maxWidth: "100%",
});

var html_def0046589469caec5d27523fdb6f719 = $(
  `<div id="html_def0046589469caec5d27523fdb6f719" style="width: 100.0%; height: 100.0%;">Jio-bp Pulse - Bhandup<br>Suitability: 0.21</div>`
)[0];
popup_a10afbf7504ce71a53f4548844ca50f2.setContent(
  html_def0046589469caec5d27523fdb6f719
);

marker_99605def43cc3f5a6f3dd960fdde2036.bindPopup(
  popup_a10afbf7504ce71a53f4548844ca50f2
);

marker_99605def43cc3f5a6f3dd960fdde2036.setIcon(
  icon_f6b3c12bc38794aae3fd7b9e092da19b
);

var marker_75260c1a079133a2877421ba3610ae0a = L.marker(
  [19.1643, 72.8346],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ca5c52f1e0bb2efb6f279017b1e0b962 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_14e958cbf3907cffdf310b2680029029 = L.popup({
  maxWidth: "100%",
});

var html_6850dc7e7d4b5a729dd519247cc62858 = $(
  `<div id="html_6850dc7e7d4b5a729dd519247cc62858" style="width: 100.0%; height: 100.0%;">Jio-bp Pulse - Goregaon West<br>Suitability: 0.24</div>`
)[0];
popup_14e958cbf3907cffdf310b2680029029.setContent(
  html_6850dc7e7d4b5a729dd519247cc62858
);

marker_75260c1a079133a2877421ba3610ae0a.bindPopup(
  popup_14e958cbf3907cffdf310b2680029029
);

marker_75260c1a079133a2877421ba3610ae0a.setIcon(
  icon_ca5c52f1e0bb2efb6f279017b1e0b962
);

var marker_fe0947df2eb8748d2741eeaba28730a3 = L.marker(
  [19.2587, 72.9773],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_307e375a1f5083992bb640028ab1a702 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ce2c69aefaf8d89dc3f742af13ee3e38 = L.popup({
  maxWidth: "100%",
});

var html_efca10ac528220439359a73641b354b9 = $(
  `<div id="html_efca10ac528220439359a73641b354b9" style="width: 100.0%; height: 100.0%;">Jio-bp Pulse - Kolshet<br>Suitability: 0.29</div>`
)[0];
popup_ce2c69aefaf8d89dc3f742af13ee3e38.setContent(
  html_efca10ac528220439359a73641b354b9
);

marker_fe0947df2eb8748d2741eeaba28730a3.bindPopup(
  popup_ce2c69aefaf8d89dc3f742af13ee3e38
);

marker_fe0947df2eb8748d2741eeaba28730a3.setIcon(
  icon_307e375a1f5083992bb640028ab1a702
);

var marker_c6ec8bcc1c7c59f4407ad1e12fe75cd0 = L.marker(
  [18.9636, 72.8019],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_548c75a9cc007f6a8e42b1986e16c15f = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d348469e871e4a9265c719dbcf9a0092 = L.popup({
  maxWidth: "100%",
});

var html_69676a649a573d41cb22b9e6241df0c2 = $(
  `<div id="html_69676a649a573d41cb22b9e6241df0c2" style="width: 100.0%; height: 100.0%;">Jio-bp Pulse - Napean Sea Road<br>Suitability: 0.34</div>`
)[0];
popup_d348469e871e4a9265c719dbcf9a0092.setContent(
  html_69676a649a573d41cb22b9e6241df0c2
);

marker_c6ec8bcc1c7c59f4407ad1e12fe75cd0.bindPopup(
  popup_d348469e871e4a9265c719dbcf9a0092
);

marker_c6ec8bcc1c7c59f4407ad1e12fe75cd0.setIcon(
  icon_548c75a9cc007f6a8e42b1986e16c15f
);

var marker_ab5e100096ae65ea5bd820bc93d9d345 = L.marker(
  [19.05231631, 72.90163581],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_35921f17ef52cf5d02997524204dc2ed = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1b802eef6d812cd81f27e0adc0f5d958 = L.popup({
  maxWidth: "100%",
});

var html_c11b1efb50ac7d9daea16c5ce9d92721 = $(
  `<div id="html_c11b1efb50ac7d9daea16c5ce9d92721" style="width: 100.0%; height: 100.0%;">K Star Chembur<br>Suitability: 0.39</div>`
)[0];
popup_1b802eef6d812cd81f27e0adc0f5d958.setContent(
  html_c11b1efb50ac7d9daea16c5ce9d92721
);

marker_ab5e100096ae65ea5bd820bc93d9d345.bindPopup(
  popup_1b802eef6d812cd81f27e0adc0f5d958
);

marker_ab5e100096ae65ea5bd820bc93d9d345.setIcon(
  icon_35921f17ef52cf5d02997524204dc2ed
);

var marker_03c7ef39290cb89b06d344cb2d291d84 = L.marker(
  [19.13030121, 72.82229723],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_87996974fe164a0f9c79cc3a6ea31e1f = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_73952be428c55753c2839206e9e45825 = L.popup({
  maxWidth: "100%",
});

var html_7d0b0719bf8a2538faf15d7c890ae48b = $(
  `<div id="html_7d0b0719bf8a2538faf15d7c890ae48b" style="width: 100.0%; height: 100.0%;">Kabra Metro One<br>Suitability: 0.32</div>`
)[0];
popup_73952be428c55753c2839206e9e45825.setContent(
  html_7d0b0719bf8a2538faf15d7c890ae48b
);

marker_03c7ef39290cb89b06d344cb2d291d84.bindPopup(
  popup_73952be428c55753c2839206e9e45825
);

marker_03c7ef39290cb89b06d344cb2d291d84.setIcon(
  icon_87996974fe164a0f9c79cc3a6ea31e1f
);

var marker_756ae0d39924103b48f21a4a8e9d7900 = L.marker(
  [19.1372, 72.8276],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_5491323d470ff23cc1edc51449efac39 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4a1bcac2802d7f25d5a0c8374bb0b189 = L.popup({
  maxWidth: "100%",
});

var html_0b6d47f04a63e069698b60b851d21495 = $(
  `<div id="html_0b6d47f04a63e069698b60b851d21495" style="width: 100.0%; height: 100.0%;">Kazam - Andheri West<br>Suitability: 0.33</div>`
)[0];
popup_4a1bcac2802d7f25d5a0c8374bb0b189.setContent(
  html_0b6d47f04a63e069698b60b851d21495
);

marker_756ae0d39924103b48f21a4a8e9d7900.bindPopup(
  popup_4a1bcac2802d7f25d5a0c8374bb0b189
);

marker_756ae0d39924103b48f21a4a8e9d7900.setIcon(
  icon_5491323d470ff23cc1edc51449efac39
);

var marker_16fb492edf979c82789664a64492fefa = L.marker(
  [19.0533, 73.0571],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_52bc29e0215251665a2411b13ea092a4 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_80629e386065896d6a0148c9f8f6cd1f = L.popup({
  maxWidth: "100%",
});

var html_fd6717ba4b7f4bc92d716dcfa6485fc5 = $(
  `<div id="html_fd6717ba4b7f4bc92d716dcfa6485fc5" style="width: 100.0%; height: 100.0%;">Kazam - Kharghar<br>Suitability: 0.32</div>`
)[0];
popup_80629e386065896d6a0148c9f8f6cd1f.setContent(
  html_fd6717ba4b7f4bc92d716dcfa6485fc5
);

marker_16fb492edf979c82789664a64492fefa.bindPopup(
  popup_80629e386065896d6a0148c9f8f6cd1f
);

marker_16fb492edf979c82789664a64492fefa.setIcon(
  icon_52bc29e0215251665a2411b13ea092a4
);

var marker_4ca5c8a5a86310a8425f283134c085a7 = L.marker(
  [19.0731, 72.8828],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_a04087c6dc163e59553d70903f5a607d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9acf1397e512475b2307cb5d61df507d = L.popup({
  maxWidth: "100%",
});

var html_8e2c7014a89a4b05351c44b106fc1b05 = $(
  `<div id="html_8e2c7014a89a4b05351c44b106fc1b05" style="width: 100.0%; height: 100.0%;">Kazam - Kurla<br>Suitability: 0.43</div>`
)[0];
popup_9acf1397e512475b2307cb5d61df507d.setContent(
  html_8e2c7014a89a4b05351c44b106fc1b05
);

marker_4ca5c8a5a86310a8425f283134c085a7.bindPopup(
  popup_9acf1397e512475b2307cb5d61df507d
);

marker_4ca5c8a5a86310a8425f283134c085a7.setIcon(
  icon_a04087c6dc163e59553d70903f5a607d
);

var marker_b57c1ae029fce4346dd141785bfa2ad5 = L.marker(
  [19.0094, 72.8394],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c1aa3e9f072119ba0724acdb44aaa678 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_09b611e41afb17a7a8e49fc8fc0f6375 = L.popup({
  maxWidth: "100%",
});

var html_b36e626e07951aa0797ebe34da7e968e = $(
  `<div id="html_b36e626e07951aa0797ebe34da7e968e" style="width: 100.0%; height: 100.0%;">Kazam - Parel<br>Suitability: 0.23</div>`
)[0];
popup_09b611e41afb17a7a8e49fc8fc0f6375.setContent(
  html_b36e626e07951aa0797ebe34da7e968e
);

marker_b57c1ae029fce4346dd141785bfa2ad5.bindPopup(
  popup_09b611e41afb17a7a8e49fc8fc0f6375
);

marker_b57c1ae029fce4346dd141785bfa2ad5.setIcon(
  icon_c1aa3e9f072119ba0724acdb44aaa678
);

var marker_e74514d3b38ac95c0783861cd0f90fa5 = L.marker(
  [19.1866, 72.9728],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_410a69cbda28778c0809fda4ec0b3329 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_94fcb89b3b85e818a06cb687f7bc81a2 = L.popup({
  maxWidth: "100%",
});

var html_6e43deae3cb9eeab7b73b0353338fbb9 = $(
  `<div id="html_6e43deae3cb9eeab7b73b0353338fbb9" style="width: 100.0%; height: 100.0%;">Kazam - Thane<br>Suitability: 0.4</div>`
)[0];
popup_94fcb89b3b85e818a06cb687f7bc81a2.setContent(
  html_6e43deae3cb9eeab7b73b0353338fbb9
);

marker_e74514d3b38ac95c0783861cd0f90fa5.bindPopup(
  popup_94fcb89b3b85e818a06cb687f7bc81a2
);

marker_e74514d3b38ac95c0783861cd0f90fa5.setIcon(
  icon_410a69cbda28778c0809fda4ec0b3329
);

var marker_578e704740387a031d25e3dcc2e16092 = L.marker(
  [19.3919, 72.833],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_084ce561526cde1c70f53d44c06fa372 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c68773740a7797501f08528615b15379 = L.popup({
  maxWidth: "100%",
});

var html_7b2f2daba582f8212ebfaa645d46e425 = $(
  `<div id="html_7b2f2daba582f8212ebfaa645d46e425" style="width: 100.0%; height: 100.0%;">Kazam - Vasai<br>Suitability: 0.28</div>`
)[0];
popup_c68773740a7797501f08528615b15379.setContent(
  html_7b2f2daba582f8212ebfaa645d46e425
);

marker_578e704740387a031d25e3dcc2e16092.bindPopup(
  popup_c68773740a7797501f08528615b15379
);

marker_578e704740387a031d25e3dcc2e16092.setIcon(
  icon_084ce561526cde1c70f53d44c06fa372
);

var marker_8acebd54d8e8ac38bbfb1f6145d0ecbc = L.marker(
  [19.0246, 72.8402],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_251cce8fab3f2981036b98a1fd8641cb = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b2634912562f9eabf860025cab8bc458 = L.popup({
  maxWidth: "100%",
});

var html_a1520eff2f198d7bd406fe09a3ea9cdb = $(
  `<div id="html_a1520eff2f198d7bd406fe09a3ea9cdb" style="width: 100.0%; height: 100.0%;">Kohinoor Altissimo Residential Tower<br>Suitability: 0.26</div>`
)[0];
popup_b2634912562f9eabf860025cab8bc458.setContent(
  html_a1520eff2f198d7bd406fe09a3ea9cdb
);

marker_8acebd54d8e8ac38bbfb1f6145d0ecbc.bindPopup(
  popup_b2634912562f9eabf860025cab8bc458
);

marker_8acebd54d8e8ac38bbfb1f6145d0ecbc.setIcon(
  icon_251cce8fab3f2981036b98a1fd8641cb
);

var marker_c9f3ead5cea526e4deff793a4b55e007 = L.marker(
  [19.02460889, 72.84282021],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2f33002224dc1c5f6441be3fce485b37 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a6b83b886177b311490c54ee8e91c9a1 = L.popup({
  maxWidth: "100%",
});

var html_733fe1331149b8f41f046e343d3a2676 = $(
  `<div id="html_733fe1331149b8f41f046e343d3a2676" style="width: 100.0%; height: 100.0%;">Kohinoor MCGM parking<br>Suitability: 0.26</div>`
)[0];
popup_a6b83b886177b311490c54ee8e91c9a1.setContent(
  html_733fe1331149b8f41f046e343d3a2676
);

marker_c9f3ead5cea526e4deff793a4b55e007.bindPopup(
  popup_a6b83b886177b311490c54ee8e91c9a1
);

marker_c9f3ead5cea526e4deff793a4b55e007.setIcon(
  icon_2f33002224dc1c5f6441be3fce485b37
);

var marker_beef598a2435ceb6d7699ae5371b39af = L.marker(
  [19.06895357, 73.02251015],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_4c4a5102863296cff555a5c2984b5524 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8c66b393a8e8dd21e430d54f08240dbc = L.popup({
  maxWidth: "100%",
});

var html_7252911a1955fdd088a086231c67cce3 = $(
  `<div id="html_7252911a1955fdd088a086231c67cce3" style="width: 100.0%; height: 100.0%;">L₹eon Industries<br>Suitability: 0.3</div>`
)[0];
popup_8c66b393a8e8dd21e430d54f08240dbc.setContent(
  html_7252911a1955fdd088a086231c67cce3
);

marker_beef598a2435ceb6d7699ae5371b39af.bindPopup(
  popup_8c66b393a8e8dd21e430d54f08240dbc
);

marker_beef598a2435ceb6d7699ae5371b39af.setIcon(
  icon_4c4a5102863296cff555a5c2984b5524
);

var marker_fcdfb725fe55044b170990147d036356 = L.marker(
  [19.15381142, 72.85579572],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7ef19e68247fcffbd57dd71495d33d4f = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_267477417c1cf7b0e00a47372efedf20 = L.popup({
  maxWidth: "100%",
});

var html_307f0df2c5226cefae526907cf26ffeb = $(
  `<div id="html_307f0df2c5226cefae526907cf26ffeb" style="width: 100.0%; height: 100.0%;">Lodha Florenza<br>Suitability: 0.32</div>`
)[0];
popup_267477417c1cf7b0e00a47372efedf20.setContent(
  html_307f0df2c5226cefae526907cf26ffeb
);

marker_fcdfb725fe55044b170990147d036356.bindPopup(
  popup_267477417c1cf7b0e00a47372efedf20
);

marker_fcdfb725fe55044b170990147d036356.setIcon(
  icon_7ef19e68247fcffbd57dd71495d33d4f
);

var marker_9dd9fa833142a7e2e6d4da8455984d59 = L.marker(
  [18.9917205, 72.841513],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_02d796ea03b646d3251b0126b226b397 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_af6f59994fb06cc7e1453f8a87ab6641 = L.popup({
  maxWidth: "100%",
});

var html_902a780d78ad47003d72e6143f037f90 = $(
  `<div id="html_902a780d78ad47003d72e6143f037f90" style="width: 100.0%; height: 100.0%;">Lodha Venezia CPL<br>Suitability: 0.22</div>`
)[0];
popup_af6f59994fb06cc7e1453f8a87ab6641.setContent(
  html_902a780d78ad47003d72e6143f037f90
);

marker_9dd9fa833142a7e2e6d4da8455984d59.bindPopup(
  popup_af6f59994fb06cc7e1453f8a87ab6641
);

marker_9dd9fa833142a7e2e6d4da8455984d59.setIcon(
  icon_02d796ea03b646d3251b0126b226b397
);

var marker_5423af0fdbcd2d20691df3ebf29890f4 = L.marker(
  [19.058, 72.8675],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2fccf2bd862227def2acc30d9c783e51 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c41f2387a08a82595987589a182c8090 = L.popup({
  maxWidth: "100%",
});

var html_cbd2a30c13e4a3c893ab877d62b65327 = $(
  `<div id="html_cbd2a30c13e4a3c893ab877d62b65327" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Bandra Kurla Complex 2<br>Suitability: 0.35</div>`
)[0];
popup_c41f2387a08a82595987589a182c8090.setContent(
  html_cbd2a30c13e4a3c893ab877d62b65327
);

marker_5423af0fdbcd2d20691df3ebf29890f4.bindPopup(
  popup_c41f2387a08a82595987589a182c8090
);

marker_5423af0fdbcd2d20691df3ebf29890f4.setIcon(
  icon_2fccf2bd862227def2acc30d9c783e51
);

var marker_142a97cc2fd81f841c740261bc0e8996 = L.marker(
  [19.1547, 72.9346],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_4d86f22a1c921623224d1ec9f6697ccd = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6e294a404ba1512f17a9b803aba9cd8d = L.popup({
  maxWidth: "100%",
});

var html_b96d7ce498a4e98e44b6b10f726419ee = $(
  `<div id="html_b96d7ce498a4e98e44b6b10f726419ee" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Bhandup<br>Suitability: 0.33</div>`
)[0];
popup_6e294a404ba1512f17a9b803aba9cd8d.setContent(
  html_b96d7ce498a4e98e44b6b10f726419ee
);

marker_142a97cc2fd81f841c740261bc0e8996.bindPopup(
  popup_6e294a404ba1512f17a9b803aba9cd8d
);

marker_142a97cc2fd81f841c740261bc0e8996.setIcon(
  icon_4d86f22a1c921623224d1ec9f6697ccd
);

var marker_103ec60fed8834bd1d1fbc16bafab7f6 = L.marker(
  [19.3134, 72.8476],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2b9d21ea3bcc3658ee54dcdf74624d3b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_115d5a93e8c010041c83829e6352c0b9 = L.popup({
  maxWidth: "100%",
});

var html_4f6051db66d46ad4a3577d12974b73d2 = $(
  `<div id="html_4f6051db66d46ad4a3577d12974b73d2" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Bhayandar<br>Suitability: 0.32</div>`
)[0];
popup_115d5a93e8c010041c83829e6352c0b9.setContent(
  html_4f6051db66d46ad4a3577d12974b73d2
);

marker_103ec60fed8834bd1d1fbc16bafab7f6.bindPopup(
  popup_115d5a93e8c010041c83829e6352c0b9
);

marker_103ec60fed8834bd1d1fbc16bafab7f6.setIcon(
  icon_2b9d21ea3bcc3658ee54dcdf74624d3b
);

var marker_b06927d162c4cf9a3543a5c51d9df9cc = L.marker(
  [18.9677, 72.8055],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_69d437bd8c20b38ca37e47b45a392296 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4f2f35f3a0cf9d88cb3c843d518f8990 = L.popup({
  maxWidth: "100%",
});

var html_30b7aac87133030714e602bd5fad6a1d = $(
  `<div id="html_30b7aac87133030714e602bd5fad6a1d" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Breach Candy<br>Suitability: 0.32</div>`
)[0];
popup_4f2f35f3a0cf9d88cb3c843d518f8990.setContent(
  html_30b7aac87133030714e602bd5fad6a1d
);

marker_b06927d162c4cf9a3543a5c51d9df9cc.bindPopup(
  popup_4f2f35f3a0cf9d88cb3c843d518f8990
);

marker_b06927d162c4cf9a3543a5c51d9df9cc.setIcon(
  icon_69d437bd8c20b38ca37e47b45a392296
);

var marker_06808293623e8add1cc51c0c5a98fdea = L.marker(
  [19.0546, 72.9047],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_84cbd3b78b6f948316e57b6578dc596a = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0492edc0f7e8e90a53acb9cc454e2b39 = L.popup({
  maxWidth: "100%",
});

var html_bb446b4fffb5426e64c3332960673fa4 = $(
  `<div id="html_bb446b4fffb5426e64c3332960673fa4" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Chembur<br>Suitability: 0.14</div>`
)[0];
popup_0492edc0f7e8e90a53acb9cc454e2b39.setContent(
  html_bb446b4fffb5426e64c3332960673fa4
);

marker_06808293623e8add1cc51c0c5a98fdea.bindPopup(
  popup_0492edc0f7e8e90a53acb9cc454e2b39
);

marker_06808293623e8add1cc51c0c5a98fdea.setIcon(
  icon_84cbd3b78b6f948316e57b6578dc596a
);

var marker_10b0924ffe99989bad30e342386263c7 = L.marker(
  [19.0458, 72.8991],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c45212f72d1addf6a77799474d0faee9 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ffb46ad4bb8e4bb5ac6c05a6f47d663d = L.popup({
  maxWidth: "100%",
});

var html_55aead54c9027d1ccf36e0385739bfcc = $(
  `<div id="html_55aead54c9027d1ccf36e0385739bfcc" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Chembur Diamond Garden<br>Suitability: 0.37</div>`
)[0];
popup_ffb46ad4bb8e4bb5ac6c05a6f47d663d.setContent(
  html_55aead54c9027d1ccf36e0385739bfcc
);

marker_10b0924ffe99989bad30e342386263c7.bindPopup(
  popup_ffb46ad4bb8e4bb5ac6c05a6f47d663d
);

marker_10b0924ffe99989bad30e342386263c7.setIcon(
  icon_c45212f72d1addf6a77799474d0faee9
);

var marker_91facee0b2b45722562d147592a529af = L.marker(
  [18.9398, 72.8354],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_e77184634d2238aa970292deb33aa81a = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_455a52380b6f7c7a00a79d0c1801120f = L.popup({
  maxWidth: "100%",
});

var html_8dca8fd729c15dad9cd41fcd7db0c70c = $(
  `<div id="html_8dca8fd729c15dad9cd41fcd7db0c70c" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - CST<br>Suitability: 0.26</div>`
)[0];
popup_455a52380b6f7c7a00a79d0c1801120f.setContent(
  html_8dca8fd729c15dad9cd41fcd7db0c70c
);

marker_91facee0b2b45722562d147592a529af.bindPopup(
  popup_455a52380b6f7c7a00a79d0c1801120f
);

marker_91facee0b2b45722562d147592a529af.setIcon(
  icon_e77184634d2238aa970292deb33aa81a
);

var marker_cbc09e1511ee59eac8c6510e43a24aac = L.marker(
  [19.0864, 72.9085],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_0a66e12e526d9868ba8fd12f1381149e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c0a4c88ea93a3e487a27926d67704f72 = L.popup({
  maxWidth: "100%",
});

var html_8cc157f581f6dd473c884f768d8fab6f = $(
  `<div id="html_8cc157f581f6dd473c884f768d8fab6f" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Ghatkopar<br>Suitability: 0.27</div>`
)[0];
popup_c0a4c88ea93a3e487a27926d67704f72.setContent(
  html_8cc157f581f6dd473c884f768d8fab6f
);

marker_cbc09e1511ee59eac8c6510e43a24aac.bindPopup(
  popup_c0a4c88ea93a3e487a27926d67704f72
);

marker_cbc09e1511ee59eac8c6510e43a24aac.setIcon(
  icon_0a66e12e526d9868ba8fd12f1381149e
);

var marker_2e02e8303147e4f678895a9ea004dc3f = L.marker(
  [19.2403, 73.1258],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ef232f63331f627bddb735435986bf4d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a94abc30a098dce855685ce6f5244be7 = L.popup({
  maxWidth: "100%",
});

var html_920fb47152f5d3bfde9cd793d62c4284 = $(
  `<div id="html_920fb47152f5d3bfde9cd793d62c4284" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Kalyan<br>Suitability: 0.35</div>`
)[0];
popup_a94abc30a098dce855685ce6f5244be7.setContent(
  html_920fb47152f5d3bfde9cd793d62c4284
);

marker_2e02e8303147e4f678895a9ea004dc3f.bindPopup(
  popup_a94abc30a098dce855685ce6f5244be7
);

marker_2e02e8303147e4f678895a9ea004dc3f.setIcon(
  icon_ef232f63331f627bddb735435986bf4d
);

var marker_c24296428169c77e6ea2b1b60f09e1cc = L.marker(
  [19.2402, 73.1362],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7832d087a747d1e284f6cfc1cc275bf6 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_25f17dba17e37837f07367a5c36e4e3b = L.popup({
  maxWidth: "100%",
});

var html_b5091f0bbd21b6c6378b35458a35d22c = $(
  `<div id="html_b5091f0bbd21b6c6378b35458a35d22c" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Kalyan East<br>Suitability: 0.38</div>`
)[0];
popup_25f17dba17e37837f07367a5c36e4e3b.setContent(
  html_b5091f0bbd21b6c6378b35458a35d22c
);

marker_c24296428169c77e6ea2b1b60f09e1cc.bindPopup(
  popup_25f17dba17e37837f07367a5c36e4e3b
);

marker_c24296428169c77e6ea2b1b60f09e1cc.setIcon(
  icon_7832d087a747d1e284f6cfc1cc275bf6
);

var marker_b878dc5964d766c2b66f069b03007e4b = L.marker(
  [19.016, 73.0949],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_dc5219da5f324bf7d7adef0d2fd366a6 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0fa6a9c216dc86a92e515d6038833f69 = L.popup({
  maxWidth: "100%",
});

var html_9b145dfb20037d5145dbd7cb7328d88f = $(
  `<div id="html_9b145dfb20037d5145dbd7cb7328d88f" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Kamothe<br>Suitability: 0.39</div>`
)[0];
popup_0fa6a9c216dc86a92e515d6038833f69.setContent(
  html_9b145dfb20037d5145dbd7cb7328d88f
);

marker_b878dc5964d766c2b66f069b03007e4b.bindPopup(
  popup_0fa6a9c216dc86a92e515d6038833f69
);

marker_b878dc5964d766c2b66f069b03007e4b.setIcon(
  icon_dc5219da5f324bf7d7adef0d2fd366a6
);

var marker_920d381de0946ea85bd96c16540eb7e0 = L.marker(
  [18.9938, 72.8237],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_388e6aaa31c4cc0e82f080a42eb8aebe = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_722a2060b86a6ce6e855a7d07091a220 = L.popup({
  maxWidth: "100%",
});

var html_fb9f0c02ee3fed7622d8baf3f1b2a61a = $(
  `<div id="html_fb9f0c02ee3fed7622d8baf3f1b2a61a" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Mahalaxmi<br>Suitability: 0.22</div>`
)[0];
popup_722a2060b86a6ce6e855a7d07091a220.setContent(
  html_fb9f0c02ee3fed7622d8baf3f1b2a61a
);

marker_920d381de0946ea85bd96c16540eb7e0.bindPopup(
  popup_722a2060b86a6ce6e855a7d07091a220
);

marker_920d381de0946ea85bd96c16540eb7e0.setIcon(
  icon_388e6aaa31c4cc0e82f080a42eb8aebe
);

var marker_354d407e627043105e43652614c7f2dd = L.marker(
  [19.1736, 72.8352],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8c810f7df40a2db3787e6436c380f119 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_da5eb4f8836a396f1820197dd92d4f0b = L.popup({
  maxWidth: "100%",
});

var html_f8fbc7d93a95ef9b89c0e984f3bf5891 = $(
  `<div id="html_f8fbc7d93a95ef9b89c0e984f3bf5891" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Malad<br>Suitability: 0.3</div>`
)[0];
popup_da5eb4f8836a396f1820197dd92d4f0b.setContent(
  html_f8fbc7d93a95ef9b89c0e984f3bf5891
);

marker_354d407e627043105e43652614c7f2dd.bindPopup(
  popup_da5eb4f8836a396f1820197dd92d4f0b
);

marker_354d407e627043105e43652614c7f2dd.setIcon(
  icon_8c810f7df40a2db3787e6436c380f119
);

var marker_1a4e7f98c694dc255bb147aeb408748c = L.marker(
  [19.0121, 73.055],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_9995411ab43506e8e5d32b06b97862ab = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cd90529508f32c7c9b2ce4f49252a440 = L.popup({
  maxWidth: "100%",
});

var html_4cb9f30b7292447929f02c36893378a8 = $(
  `<div id="html_4cb9f30b7292447929f02c36893378a8" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Mansarovar<br>Suitability: 0.22</div>`
)[0];
popup_cd90529508f32c7c9b2ce4f49252a440.setContent(
  html_4cb9f30b7292447929f02c36893378a8
);

marker_1a4e7f98c694dc255bb147aeb408748c.bindPopup(
  popup_cd90529508f32c7c9b2ce4f49252a440
);

marker_1a4e7f98c694dc255bb147aeb408748c.setIcon(
  icon_9995411ab43506e8e5d32b06b97862ab
);

var marker_d2333d1b2def3c680de663b0349254bd = L.marker(
  [19.1808, 72.9836],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b2f7c2747757dcc9af159bc59e866315 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4c37fc0032133a2ea5b9ac856b37c633 = L.popup({
  maxWidth: "100%",
});

var html_68251bdc31cffe30d0bc055f0658d288 = $(
  `<div id="html_68251bdc31cffe30d0bc055f0658d288" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Mumbra<br>Suitability: 0.33</div>`
)[0];
popup_4c37fc0032133a2ea5b9ac856b37c633.setContent(
  html_68251bdc31cffe30d0bc055f0658d288
);

marker_d2333d1b2def3c680de663b0349254bd.bindPopup(
  popup_4c37fc0032133a2ea5b9ac856b37c633
);

marker_d2333d1b2def3c680de663b0349254bd.setIcon(
  icon_b2f7c2747757dcc9af159bc59e866315
);

var marker_466e2e81cf780327f7cc8b758133c60a = L.marker(
  [19.1441, 72.8366],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b869a6709b49bf0715ae2dbd04f04e71 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2eece7d0049aa5ceeaf070c5e6cfe147 = L.popup({
  maxWidth: "100%",
});

var html_19b17eb3a45c0918a3e55d587770af15 = $(
  `<div id="html_19b17eb3a45c0918a3e55d587770af15" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Oshiwara<br>Suitability: 0.23</div>`
)[0];
popup_2eece7d0049aa5ceeaf070c5e6cfe147.setContent(
  html_19b17eb3a45c0918a3e55d587770af15
);

marker_466e2e81cf780327f7cc8b758133c60a.bindPopup(
  popup_2eece7d0049aa5ceeaf070c5e6cfe147
);

marker_466e2e81cf780327f7cc8b758133c60a.setIcon(
  icon_b869a6709b49bf0715ae2dbd04f04e71
);

var marker_91483150d80f6c23a5c3fd822353ccf3 = L.marker(
  [19.0155, 72.8275],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_30bc50c43e01d8568630b62448fe1409 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_903db7d403d7e6fc23fe4c5831fe56f3 = L.popup({
  maxWidth: "100%",
});

var html_22dda156bf2312ed6daa1c4680d32e5f = $(
  `<div id="html_22dda156bf2312ed6daa1c4680d32e5f" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Prabhadevi<br>Suitability: 0.13</div>`
)[0];
popup_903db7d403d7e6fc23fe4c5831fe56f3.setContent(
  html_22dda156bf2312ed6daa1c4680d32e5f
);

marker_91483150d80f6c23a5c3fd822353ccf3.bindPopup(
  popup_903db7d403d7e6fc23fe4c5831fe56f3
);

marker_91483150d80f6c23a5c3fd822353ccf3.setIcon(
  icon_30bc50c43e01d8568630b62448fe1409
);

var marker_483fa7363547b7790bddbc6ada67d3f9 = L.marker(
  [19.0378, 73.1318],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_efc6c0ffc4c4a6871311318bb0ad66d3 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d3febd539d90be7554663ca43d98a6d9 = L.popup({
  maxWidth: "100%",
});

var html_49fd054eeec40f5a7603971455989a98 = $(
  `<div id="html_49fd054eeec40f5a7603971455989a98" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Taloja<br>Suitability: 0.29</div>`
)[0];
popup_d3febd539d90be7554663ca43d98a6d9.setContent(
  html_49fd054eeec40f5a7603971455989a98
);

marker_483fa7363547b7790bddbc6ada67d3f9.bindPopup(
  popup_d3febd539d90be7554663ca43d98a6d9
);

marker_483fa7363547b7790bddbc6ada67d3f9.setIcon(
  icon_efc6c0ffc4c4a6871311318bb0ad66d3
);

var marker_4633ddad87edcd68f0c70136ccb0d5ef = L.marker(
  [19.037, 72.9235],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b1f220cb00c41d5ce9b3ea00f7212833 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_41a874002a2f8e85d35ffafbcdf478e2 = L.popup({
  maxWidth: "100%",
});

var html_d57278a65075159cb3161428ba7fa69d = $(
  `<div id="html_d57278a65075159cb3161428ba7fa69d" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Trombay<br>Suitability: 0.38</div>`
)[0];
popup_41a874002a2f8e85d35ffafbcdf478e2.setContent(
  html_d57278a65075159cb3161428ba7fa69d
);

marker_4633ddad87edcd68f0c70136ccb0d5ef.bindPopup(
  popup_41a874002a2f8e85d35ffafbcdf478e2
);

marker_4633ddad87edcd68f0c70136ccb0d5ef.setIcon(
  icon_b1f220cb00c41d5ce9b3ea00f7212833
);

var marker_15b9832db616112329feaa9762a7d8fa = L.marker(
  [19.0188, 72.8571],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7c6cb189c05d5cdc6ab7f4d3d46aad30 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e3dfa04515cff455cb6b8fbfd34140a4 = L.popup({
  maxWidth: "100%",
});

var html_433bca90171fd895329dc5b23cb75793 = $(
  `<div id="html_433bca90171fd895329dc5b23cb75793" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Wadala<br>Suitability: 0.24</div>`
)[0];
popup_e3dfa04515cff455cb6b8fbfd34140a4.setContent(
  html_433bca90171fd895329dc5b23cb75793
);

marker_15b9832db616112329feaa9762a7d8fa.bindPopup(
  popup_e3dfa04515cff455cb6b8fbfd34140a4
);

marker_15b9832db616112329feaa9762a7d8fa.setIcon(
  icon_7c6cb189c05d5cdc6ab7f4d3d46aad30
);

var marker_ad3bc1366632449454186273d66710a8 = L.marker(
  [19.0085, 72.8153],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ef28a9ce39d05cefb1ee1850ff5838b3 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9e5c6ba10bbdbcc55d237273ae9851d9 = L.popup({
  maxWidth: "100%",
});

var html_b3d5ee604f9099ebd3beea31df37cd0f = $(
  `<div id="html_b3d5ee604f9099ebd3beea31df37cd0f" style="width: 100.0%; height: 100.0%;">Magenta ChargeGrid - Worli<br>Suitability: 0.36</div>`
)[0];
popup_9e5c6ba10bbdbcc55d237273ae9851d9.setContent(
  html_b3d5ee604f9099ebd3beea31df37cd0f
);

marker_ad3bc1366632449454186273d66710a8.bindPopup(
  popup_9e5c6ba10bbdbcc55d237273ae9851d9
);

marker_ad3bc1366632449454186273d66710a8.setIcon(
  icon_ef28a9ce39d05cefb1ee1850ff5838b3
);

var marker_85c4398fef0a53ef9bfa2b6486a8642a = L.marker(
  [19.06870454, 73.02298692],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_d0b950c75c265891b3626b4dfbea5ce6 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6aeb1288a3dcf8cdffb5412f2ef19368 = L.popup({
  maxWidth: "100%",
});

var html_29c7adde2a0a10d975a47f51fbbd7386 = $(
  `<div id="html_29c7adde2a0a10d975a47f51fbbd7386" style="width: 100.0%; height: 100.0%;">Magenta House - Mumbai<br>Suitability: 0.42</div>`
)[0];
popup_6aeb1288a3dcf8cdffb5412f2ef19368.setContent(
  html_29c7adde2a0a10d975a47f51fbbd7386
);

marker_85c4398fef0a53ef9bfa2b6486a8642a.bindPopup(
  popup_6aeb1288a3dcf8cdffb5412f2ef19368
);

marker_85c4398fef0a53ef9bfa2b6486a8642a.setIcon(
  icon_d0b950c75c265891b3626b4dfbea5ce6
);

var marker_d774f75562740213c662d6931b1abfcd = L.marker(
  [19.0079, 72.8425],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_64707916e5a8fa5c789fef05ebefb1d8 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_bcb831935388c1806edf9b038e923bac = L.popup({
  maxWidth: "100%",
});

var html_7d24bf3c11e72034574f1a67577c3579 = $(
  `<div id="html_7d24bf3c11e72034574f1a67577c3579" style="width: 100.0%; height: 100.0%;">Magenta Charging Station (Parel)<br>Suitability: 0.21</div>`
)[0];
popup_bcb831935388c1806edf9b038e923bac.setContent(
  html_7d24bf3c11e72034574f1a67577c3579
);

marker_d774f75562740213c662d6931b1abfcd.bindPopup(
  popup_bcb831935388c1806edf9b038e923bac
);

marker_d774f75562740213c662d6931b1abfcd.setIcon(
  icon_64707916e5a8fa5c789fef05ebefb1d8
);

var marker_dace8a2395ade6686fa679a44c5e6ca6 = L.marker(
  [19.0685788, 73.022744],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_a9f108af4e99282998b019c0fda3ae93 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_370cddbd1be089fb4015f0845eb68606 = L.popup({
  maxWidth: "100%",
});

var html_204ede34f708a8c891c22a1338cf6491 = $(
  `<div id="html_204ede34f708a8c891c22a1338cf6491" style="width: 100.0%; height: 100.0%;">Magenta TTC, Turbhe<br>Suitability: 0.28</div>`
)[0];
popup_370cddbd1be089fb4015f0845eb68606.setContent(
  html_204ede34f708a8c891c22a1338cf6491
);

marker_dace8a2395ade6686fa679a44c5e6ca6.bindPopup(
  popup_370cddbd1be089fb4015f0845eb68606
);

marker_dace8a2395ade6686fa679a44c5e6ca6.setIcon(
  icon_a9f108af4e99282998b019c0fda3ae93
);

var marker_eb033fad7f862b8dcf418b0d0823234a = L.marker(
  [19.0472567, 72.8783829],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c3f7b78e9159e37a9f701bb202efcac8 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_66f23be64e13f7a71a7f71bef82f7435 = L.popup({
  maxWidth: "100%",
});

var html_5eaba99eb1806e39aa91942ca78ea513 = $(
  `<div id="html_5eaba99eb1806e39aa91942ca78ea513" style="width: 100.0%; height: 100.0%;">Mahanagar Gas Limited, Wadala<br>Suitability: 0.28</div>`
)[0];
popup_66f23be64e13f7a71a7f71bef82f7435.setContent(
  html_5eaba99eb1806e39aa91942ca78ea513
);

marker_eb033fad7f862b8dcf418b0d0823234a.bindPopup(
  popup_66f23be64e13f7a71a7f71bef82f7435
);

marker_eb033fad7f862b8dcf418b0d0823234a.setIcon(
  icon_c3f7b78e9159e37a9f701bb202efcac8
);

var marker_60854cccbfd822ddea9c6e4d2334c1fe = L.marker(
  [19.17674569, 72.94574801],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_bca4ae8c02e5879a6f6b5547a92e58f1 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9ad3b19425419a57fdf2904ea94a5fdf = L.popup({
  maxWidth: "100%",
});

var html_ebe440da793013d4d0fb285bd85a7d8f = $(
  `<div id="html_ebe440da793013d4d0fb285bd85a7d8f" style="width: 100.0%; height: 100.0%;">Masstech controls Pvt ltd<br>Suitability: 0.32</div>`
)[0];
popup_9ad3b19425419a57fdf2904ea94a5fdf.setContent(
  html_ebe440da793013d4d0fb285bd85a7d8f
);

marker_60854cccbfd822ddea9c6e4d2334c1fe.bindPopup(
  popup_9ad3b19425419a57fdf2904ea94a5fdf
);

marker_60854cccbfd822ddea9c6e4d2334c1fe.setIcon(
  icon_bca4ae8c02e5879a6f6b5547a92e58f1
);

var marker_2e4ee9488b913341a390bdc616787abf = L.marker(
  [19.2402364, 72.8481819],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_d6b2db2fea7f8aaf2652de3f891223d6 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_31747ec5186e9696d82bc4258cbf1643 = L.popup({
  maxWidth: "100%",
});

var html_fbd2157df3889362bacb9ccb9522adaa = $(
  `<div id="html_fbd2157df3889362bacb9ccb9522adaa" style="width: 100.0%; height: 100.0%;">MCGM Parking || Club Aquaria<br>Suitability: 0.38</div>`
)[0];
popup_31747ec5186e9696d82bc4258cbf1643.setContent(
  html_fbd2157df3889362bacb9ccb9522adaa
);

marker_2e4ee9488b913341a390bdc616787abf.bindPopup(
  popup_31747ec5186e9696d82bc4258cbf1643
);

marker_2e4ee9488b913341a390bdc616787abf.setIcon(
  icon_d6b2db2fea7f8aaf2652de3f891223d6
);

var marker_146a94c6c3939568596a6b88b0cc3359 = L.marker(
  [19.18066617, 72.94684724],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8b9fd93fa2a6e39d1a45cc78b0882bbc = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ae82dbe408918bdef49cf5e2c7740c74 = L.popup({
  maxWidth: "100%",
});

var html_f5d7e124d4232fe6ef4180dce8cf75d9 = $(
  `<div id="html_f5d7e124d4232fe6ef4180dce8cf75d9" style="width: 100.0%; height: 100.0%;">MCGM Parking || Runwal Anthurium<br>Suitability: 0.35</div>`
)[0];
popup_ae82dbe408918bdef49cf5e2c7740c74.setContent(
  html_f5d7e124d4232fe6ef4180dce8cf75d9
);

marker_146a94c6c3939568596a6b88b0cc3359.bindPopup(
  popup_ae82dbe408918bdef49cf5e2c7740c74
);

marker_146a94c6c3939568596a6b88b0cc3359.setIcon(
  icon_8b9fd93fa2a6e39d1a45cc78b0882bbc
);

var marker_e16f24ebd7fdd6e4db9981e37f7a294b = L.marker(
  [19.11999443, 72.9141036],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b1c713acd3f31ab1fd9db1f2891f0324 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_10e2cd3c20eb6c7b573a7e4a8d49264e = L.popup({
  maxWidth: "100%",
});

var html_b772c87fbc7bca255ec5dc19cc783105 = $(
  `<div id="html_b772c87fbc7bca255ec5dc19cc783105" style="width: 100.0%; height: 100.0%;">MH|MUMBAI|POWAI#HIRANANDANI GARDENS<br>Suitability: 0.35</div>`
)[0];
popup_10e2cd3c20eb6c7b573a7e4a8d49264e.setContent(
  html_b772c87fbc7bca255ec5dc19cc783105
);

marker_e16f24ebd7fdd6e4db9981e37f7a294b.bindPopup(
  popup_10e2cd3c20eb6c7b573a7e4a8d49264e
);

marker_e16f24ebd7fdd6e4db9981e37f7a294b.setIcon(
  icon_b1c713acd3f31ab1fd9db1f2891f0324
);

var marker_34a32ee57efa2245d9bf30644a3bf497 = L.marker(
  [19.0737, 72.857],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_04cb0047f0bb8c6d016703d63cf8b005 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d4616408c579b4b118dcc69efd5f7a41 = L.popup({
  maxWidth: "100%",
});

var html_d88d63146554eae05609f32d5e1c88ba = $(
  `<div id="html_d88d63146554eae05609f32d5e1c88ba" style="width: 100.0%; height: 100.0%;">Moiz Apartments<br>Suitability: 0.38</div>`
)[0];
popup_d4616408c579b4b118dcc69efd5f7a41.setContent(
  html_d88d63146554eae05609f32d5e1c88ba
);

marker_34a32ee57efa2245d9bf30644a3bf497.bindPopup(
  popup_d4616408c579b4b118dcc69efd5f7a41
);

marker_34a32ee57efa2245d9bf30644a3bf497.setIcon(
  icon_04cb0047f0bb8c6d016703d63cf8b005
);

var marker_4a766472d4918b269aac00164f306956 = L.marker(
  [18.9688627, 72.8207138],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_fab5ace42b0a94e5979f7fdd82225066 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_97ece5099f76d664f278d06143f742ac = L.popup({
  maxWidth: "100%",
});

var html_6459c02334b98fc6341c34c8380c8b08 = $(
  `<div id="html_6459c02334b98fc6341c34c8380c8b08" style="width: 100.0%; height: 100.0%;">Nathani Heights, Mumbai Central<br>Suitability: 0.33</div>`
)[0];
popup_97ece5099f76d664f278d06143f742ac.setContent(
  html_6459c02334b98fc6341c34c8380c8b08
);

marker_4a766472d4918b269aac00164f306956.bindPopup(
  popup_97ece5099f76d664f278d06143f742ac
);

marker_4a766472d4918b269aac00164f306956.setIcon(
  icon_fab5ace42b0a94e5979f7fdd82225066
);

var marker_1e62e4bf5b6bc6b4960377eee45de83f = L.marker(
  [19.1737611, 72.8600172],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7e1cda0c67ba47a993deff3da75ec02e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_76e2c0f69107f6fd87abb9e31b68e409 = L.popup({
  maxWidth: "100%",
});

var html_4723e94fd7df5c0c37672385ee72e913 = $(
  `<div id="html_4723e94fd7df5c0c37672385ee72e913" style="width: 100.0%; height: 100.0%;">Oberoi Mall, Goregaon<br>Suitability: 0.43</div>`
)[0];
popup_76e2c0f69107f6fd87abb9e31b68e409.setContent(
  html_4723e94fd7df5c0c37672385ee72e913
);

marker_1e62e4bf5b6bc6b4960377eee45de83f.bindPopup(
  popup_76e2c0f69107f6fd87abb9e31b68e409
);

marker_1e62e4bf5b6bc6b4960377eee45de83f.setIcon(
  icon_7e1cda0c67ba47a993deff3da75ec02e
);

var marker_5e88e0a7823efd0f43afaf6c7ce3513b = L.marker(
  [19.0751, 72.8893],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_aad34d665dda01a7a8d80782c3d6cdcc = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_31e48cf61406d7d2635c0e02f3bf05bc = L.popup({
  maxWidth: "100%",
});

var html_b479d69316c8ae94b5a5a0837fedb73b = $(
  `<div id="html_b479d69316c8ae94b5a5a0837fedb73b" style="width: 100.0%; height: 100.0%;">Phoenix Market City Charging Station<br>Suitability: 0.32</div>`
)[0];
popup_31e48cf61406d7d2635c0e02f3bf05bc.setContent(
  html_b479d69316c8ae94b5a5a0837fedb73b
);

marker_5e88e0a7823efd0f43afaf6c7ce3513b.bindPopup(
  popup_31e48cf61406d7d2635c0e02f3bf05bc
);

marker_5e88e0a7823efd0f43afaf6c7ce3513b.setIcon(
  icon_aad34d665dda01a7a8d80782c3d6cdcc
);

var marker_9bfa945e7b001783d84d6979017f172b = L.marker(
  [19.0994, 72.8269],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_18d61e078d1cf5f88a8ce71162721c91 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_37635721df1e931be3222dfb2c243337 = L.popup({
  maxWidth: "100%",
});

var html_71c318fb280d5e34dbaf86fd3b1abe36 = $(
  `<div id="html_71c318fb280d5e34dbaf86fd3b1abe36" style="width: 100.0%; height: 100.0%;">EV Point - Juhu<br>Suitability: 0.39</div>`
)[0];
popup_37635721df1e931be3222dfb2c243337.setContent(
  html_71c318fb280d5e34dbaf86fd3b1abe36
);

marker_9bfa945e7b001783d84d6979017f172b.bindPopup(
  popup_37635721df1e931be3222dfb2c243337
);

marker_9bfa945e7b001783d84d6979017f172b.setIcon(
  icon_18d61e078d1cf5f88a8ce71162721c91
);

var marker_02925dbe40d215b671011c00f62f9e74 = L.marker(
  [19.0337, 73.0204],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c0ab317223b523979a55c62965f18ed2 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_00e95cf0d3fe0e9d1b66a2ff2df5c209 = L.popup({
  maxWidth: "100%",
});

var html_9588fb51d1cb98074865eb68f5bcd4f1 = $(
  `<div id="html_9588fb51d1cb98074865eb68f5bcd4f1" style="width: 100.0%; height: 100.0%;">EV Point - Navi Mumbai<br>Suitability: 0.28</div>`
)[0];
popup_00e95cf0d3fe0e9d1b66a2ff2df5c209.setContent(
  html_9588fb51d1cb98074865eb68f5bcd4f1
);

marker_02925dbe40d215b671011c00f62f9e74.bindPopup(
  popup_00e95cf0d3fe0e9d1b66a2ff2df5c209
);

marker_02925dbe40d215b671011c00f62f9e74.setIcon(
  icon_c0ab317223b523979a55c62965f18ed2
);

var marker_9118cd43018232eacea2ee5500d52ad9 = L.marker(
  [19.1146, 72.8696],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b3159616e16644268293ccab696ce825 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4e9d8d392f186a37ee13f14a4ff632ec = L.popup({
  maxWidth: "100%",
});

var html_520782bec2f64e28a314c1d3c6f1821f = $(
  `<div id="html_520782bec2f64e28a314c1d3c6f1821f" style="width: 100.0%; height: 100.0%;">Statiq - Andheri East<br>Suitability: 0.3</div>`
)[0];
popup_4e9d8d392f186a37ee13f14a4ff632ec.setContent(
  html_520782bec2f64e28a314c1d3c6f1821f
);

marker_9118cd43018232eacea2ee5500d52ad9.bindPopup(
  popup_4e9d8d392f186a37ee13f14a4ff632ec
);

marker_9118cd43018232eacea2ee5500d52ad9.setIcon(
  icon_b3159616e16644268293ccab696ce825
);

var marker_c61afc8957a53fd055083c2ca10e0da5 = L.marker(
  [19.0588, 72.8703],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ae20c275e43547649c89cc2735fa82ea = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_98e0e66099ad60b575016e5253cc7c95 = L.popup({
  maxWidth: "100%",
});

var html_df0ec740c0a7177f9d88b5c82f489713 = $(
  `<div id="html_df0ec740c0a7177f9d88b5c82f489713" style="width: 100.0%; height: 100.0%;">Statiq - Bandra Kurla Complex<br>Suitability: 0.33</div>`
)[0];
popup_98e0e66099ad60b575016e5253cc7c95.setContent(
  html_df0ec740c0a7177f9d88b5c82f489713
);

marker_c61afc8957a53fd055083c2ca10e0da5.bindPopup(
  popup_98e0e66099ad60b575016e5253cc7c95
);

marker_c61afc8957a53fd055083c2ca10e0da5.setIcon(
  icon_ae20c275e43547649c89cc2735fa82ea
);

var marker_446dd4003d237bd39db1ed87c2e3767c = L.marker(
  [19.0836, 72.9136],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f524a4cc6a71712fcebc7e700f7d523e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0f6fbe4295dbb64153f0bb270cfa1f4d = L.popup({
  maxWidth: "100%",
});

var html_9eacac3024ec80c25043e281a1ef86a7 = $(
  `<div id="html_9eacac3024ec80c25043e281a1ef86a7" style="width: 100.0%; height: 100.0%;">Statiq - Ghatkopar<br>Suitability: 0.32</div>`
)[0];
popup_0f6fbe4295dbb64153f0bb270cfa1f4d.setContent(
  html_9eacac3024ec80c25043e281a1ef86a7
);

marker_446dd4003d237bd39db1ed87c2e3767c.bindPopup(
  popup_0f6fbe4295dbb64153f0bb270cfa1f4d
);

marker_446dd4003d237bd39db1ed87c2e3767c.setIcon(
  icon_f524a4cc6a71712fcebc7e700f7d523e
);

var marker_77a8107806ba59624b0b3fa0dd0ad25b = L.marker(
  [19.1341, 72.9297],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_8ae29a95c6495bfeb9e84b188c5863c2 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_3ecf228bafffe42093abca1321ced01b = L.popup({
  maxWidth: "100%",
});

var html_6d689982e83d1b3f4e8175f912184aea = $(
  `<div id="html_6d689982e83d1b3f4e8175f912184aea" style="width: 100.0%; height: 100.0%;">Statiq - Kanjurmarg<br>Suitability: 0.57</div>`
)[0];
popup_3ecf228bafffe42093abca1321ced01b.setContent(
  html_6d689982e83d1b3f4e8175f912184aea
);

marker_77a8107806ba59624b0b3fa0dd0ad25b.bindPopup(
  popup_3ecf228bafffe42093abca1321ced01b
);

marker_77a8107806ba59624b0b3fa0dd0ad25b.setIcon(
  icon_8ae29a95c6495bfeb9e84b188c5863c2
);

var marker_71939948c2feda08ad13216b50e0a1ea = L.marker(
  [19.0418, 73.0634],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_60fd4d51257cb872c15d4c0b048f283d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ac568d2a686d1585ea5da0fed3399763 = L.popup({
  maxWidth: "100%",
});

var html_aaf14f36634a89f8dfab445b2dcc16e4 = $(
  `<div id="html_aaf14f36634a89f8dfab445b2dcc16e4" style="width: 100.0%; height: 100.0%;">Statiq - Kharghar Central Park<br>Suitability: 0.47</div>`
)[0];
popup_ac568d2a686d1585ea5da0fed3399763.setContent(
  html_aaf14f36634a89f8dfab445b2dcc16e4
);

marker_71939948c2feda08ad13216b50e0a1ea.bindPopup(
  popup_ac568d2a686d1585ea5da0fed3399763
);

marker_71939948c2feda08ad13216b50e0a1ea.setIcon(
  icon_60fd4d51257cb872c15d4c0b048f283d
);

var marker_d878340e3672e5d60c6d723d54d289ef = L.marker(
  [19.072, 72.8821],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_9673b63fd4fd3b44c37bc0109282cbda = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5f3c41a4fd9a1aa0bd2d7fb0576368e6 = L.popup({
  maxWidth: "100%",
});

var html_a484b1910792d4794a6eec992ab82304 = $(
  `<div id="html_a484b1910792d4794a6eec992ab82304" style="width: 100.0%; height: 100.0%;">Statiq - Kurla Nehru Nagar<br>Suitability: 0.21</div>`
)[0];
popup_5f3c41a4fd9a1aa0bd2d7fb0576368e6.setContent(
  html_a484b1910792d4794a6eec992ab82304
);

marker_d878340e3672e5d60c6d723d54d289ef.bindPopup(
  popup_5f3c41a4fd9a1aa0bd2d7fb0576368e6
);

marker_d878340e3672e5d60c6d723d54d289ef.setIcon(
  icon_9673b63fd4fd3b44c37bc0109282cbda
);

var marker_d9481b9a96a7909e09af6220fe1f7257 = L.marker(
  [19.109, 72.8771],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_0648fa0ef6ab738bb32cae332df16b3b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_de6f9391d626eb2522059bb99d548b2b = L.popup({
  maxWidth: "100%",
});

var html_34c136b885147bad53f545ecd0219b09 = $(
  `<div id="html_34c136b885147bad53f545ecd0219b09" style="width: 100.0%; height: 100.0%;">Statiq - Marol Naka<br>Suitability: 0.38</div>`
)[0];
popup_de6f9391d626eb2522059bb99d548b2b.setContent(
  html_34c136b885147bad53f545ecd0219b09
);

marker_d9481b9a96a7909e09af6220fe1f7257.bindPopup(
  popup_de6f9391d626eb2522059bb99d548b2b
);

marker_d9481b9a96a7909e09af6220fe1f7257.setIcon(
  icon_0648fa0ef6ab738bb32cae332df16b3b
);

var marker_139e9059554b100d440e723b304fba4f = L.marker(
  [19.0387, 73.0222],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_fc3002dc730fdf19bc50845609ee099e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e98814814cbea2265e213c84b4d2c627 = L.popup({
  maxWidth: "100%",
});

var html_1c7288fc88e809beadab3ab5cfdd5d9c = $(
  `<div id="html_1c7288fc88e809beadab3ab5cfdd5d9c" style="width: 100.0%; height: 100.0%;">Statiq - Navi Mumbai<br>Suitability: 0.37</div>`
)[0];
popup_e98814814cbea2265e213c84b4d2c627.setContent(
  html_1c7288fc88e809beadab3ab5cfdd5d9c
);

marker_139e9059554b100d440e723b304fba4f.bindPopup(
  popup_e98814814cbea2265e213c84b4d2c627
);

marker_139e9059554b100d440e723b304fba4f.setIcon(
  icon_fc3002dc730fdf19bc50845609ee099e
);

var marker_d98d9ae20538be905ccbefaa73605052 = L.marker(
  [19.2263, 73.0965],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ce101a945c3551c3d17a0c32f4ba7306 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0d42dc72c7c0d7358237f6960c944dbe = L.popup({
  maxWidth: "100%",
});

var html_8671e85cc74f4f05db43f1ce9d2ef159 = $(
  `<div id="html_8671e85cc74f4f05db43f1ce9d2ef159" style="width: 100.0%; height: 100.0%;">Statiq - Palava City<br>Suitability: 0.28</div>`
)[0];
popup_0d42dc72c7c0d7358237f6960c944dbe.setContent(
  html_8671e85cc74f4f05db43f1ce9d2ef159
);

marker_d98d9ae20538be905ccbefaa73605052.bindPopup(
  popup_0d42dc72c7c0d7358237f6960c944dbe
);

marker_d98d9ae20538be905ccbefaa73605052.setIcon(
  icon_ce101a945c3551c3d17a0c32f4ba7306
);

var marker_d29ec282520909009a8657594ad4a55c = L.marker(
  [18.9892, 73.117],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f3ffb73ce056fabbb06a159695d4c489 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1fe558b96388ddd5a7456f07e218ebec = L.popup({
  maxWidth: "100%",
});

var html_6508976a805a4946c16bec8892179b8e = $(
  `<div id="html_6508976a805a4946c16bec8892179b8e" style="width: 100.0%; height: 100.0%;">Statiq - Panvel<br>Suitability: 0.4</div>`
)[0];
popup_1fe558b96388ddd5a7456f07e218ebec.setContent(
  html_6508976a805a4946c16bec8892179b8e
);

marker_d29ec282520909009a8657594ad4a55c.bindPopup(
  popup_1fe558b96388ddd5a7456f07e218ebec
);

marker_d29ec282520909009a8657594ad4a55c.setIcon(
  icon_f3ffb73ce056fabbb06a159695d4c489
);

var marker_97e3e55cbaa47a6fa9307653040e2c2e = L.marker(
  [19.0029, 72.824],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_b9f3316a96cdb4983b8369276ae4986c = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6eace6eea16e15e55d68fe65e33332e1 = L.popup({
  maxWidth: "100%",
});

var html_ed46fa60f74a84753f91d00cce299ca8 = $(
  `<div id="html_ed46fa60f74a84753f91d00cce299ca8" style="width: 100.0%; height: 100.0%;">Statiq - Parel<br>Suitability: 0.32</div>`
)[0];
popup_6eace6eea16e15e55d68fe65e33332e1.setContent(
  html_ed46fa60f74a84753f91d00cce299ca8
);

marker_97e3e55cbaa47a6fa9307653040e2c2e.bindPopup(
  popup_6eace6eea16e15e55d68fe65e33332e1
);

marker_97e3e55cbaa47a6fa9307653040e2c2e.setIcon(
  icon_b9f3316a96cdb4983b8369276ae4986c
);

var marker_367680f0fb096dcfeae81c4e635d2852 = L.marker(
  [19.0803, 72.8365],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_0b75bb7d52db5ad6eb6b978478d29f10 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ba5413d5a30f07c98882b9a8479e983f = L.popup({
  maxWidth: "100%",
});

var html_5abd749326ee7523df1456e213c33bbe = $(
  `<div id="html_5abd749326ee7523df1456e213c33bbe" style="width: 100.0%; height: 100.0%;">Statiq - Santacruz<br>Suitability: 0.28</div>`
)[0];
popup_ba5413d5a30f07c98882b9a8479e983f.setContent(
  html_5abd749326ee7523df1456e213c33bbe
);

marker_367680f0fb096dcfeae81c4e635d2852.bindPopup(
  popup_ba5413d5a30f07c98882b9a8479e983f
);

marker_367680f0fb096dcfeae81c4e635d2852.setIcon(
  icon_0b75bb7d52db5ad6eb6b978478d29f10
);

var marker_1669aabb967ad0e7deeb6f496e5ac498 = L.marker(
  [19.2336, 73.1353],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_d144928a0d5801d631fa2f7716206142 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2478504ba3ec08da5edb7ec4013a4e35 = L.popup({
  maxWidth: "100%",
});

var html_6bb5b10423c2bb35a1a4cd77f7324537 = $(
  `<div id="html_6bb5b10423c2bb35a1a4cd77f7324537" style="width: 100.0%; height: 100.0%;">Statiq - Ulhasnagar<br>Suitability: 0.32</div>`
)[0];
popup_2478504ba3ec08da5edb7ec4013a4e35.setContent(
  html_6bb5b10423c2bb35a1a4cd77f7324537
);

marker_1669aabb967ad0e7deeb6f496e5ac498.bindPopup(
  popup_2478504ba3ec08da5edb7ec4013a4e35
);

marker_1669aabb967ad0e7deeb6f496e5ac498.setIcon(
  icon_d144928a0d5801d631fa2f7716206142
);

var marker_9bf6e662fc0db7c4878ecb282d4db158 = L.marker(
  [19.0302, 72.8927],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ac9167ec34275e9d32ea00023218620c = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e28942e288da8ebbfb939f4b2161b56d = L.popup({
  maxWidth: "100%",
});

var html_1e71ae63fe536dfc649a94f3c2e7b618 = $(
  `<div id="html_1e71ae63fe536dfc649a94f3c2e7b618" style="width: 100.0%; height: 100.0%;">Tata Power<br>Suitability: 0.68</div>`
)[0];
popup_e28942e288da8ebbfb939f4b2161b56d.setContent(
  html_1e71ae63fe536dfc649a94f3c2e7b618
);

marker_9bf6e662fc0db7c4878ecb282d4db158.bindPopup(
  popup_e28942e288da8ebbfb939f4b2161b56d
);

marker_9bf6e662fc0db7c4878ecb282d4db158.setIcon(
  icon_ac9167ec34275e9d32ea00023218620c
);

var marker_a87e82e928124a20ef44a9e0a4101a1a = L.marker(
  [19.0302, 72.8927],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_88db33aa12333ec65d42211599fbbdf9 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_558de1b862e590a5df7506a14d8de3d3 = L.popup({
  maxWidth: "100%",
});

var html_a46084e5ce1df16cf2d2996ca659358f = $(
  `<div id="html_a46084e5ce1df16cf2d2996ca659358f" style="width: 100.0%; height: 100.0%;">Tata Power Charging Station<br>Suitability: 0.74</div>`
)[0];
popup_558de1b862e590a5df7506a14d8de3d3.setContent(
  html_a46084e5ce1df16cf2d2996ca659358f
);

marker_a87e82e928124a20ef44a9e0a4101a1a.bindPopup(
  popup_558de1b862e590a5df7506a14d8de3d3
);

marker_a87e82e928124a20ef44a9e0a4101a1a.setIcon(
  icon_88db33aa12333ec65d42211599fbbdf9
);

var marker_97dfab3c73d055931c3aa75c7836e948 = L.marker(
  [19.164, 72.9948],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_48d757a20429f1a7a63cfed770399ffb = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e1729599551cf859a73320f3b46a7746 = L.popup({
  maxWidth: "100%",
});

var html_be7636b8dac2ec18abad24296dde8f58 = $(
  `<div id="html_be7636b8dac2ec18abad24296dde8f58" style="width: 100.0%; height: 100.0%;">Tata Power - Airoli<br>Suitability: 0.45</div>`
)[0];
popup_e1729599551cf859a73320f3b46a7746.setContent(
  html_be7636b8dac2ec18abad24296dde8f58
);

marker_97dfab3c73d055931c3aa75c7836e948.bindPopup(
  popup_e1729599551cf859a73320f3b46a7746
);

marker_97dfab3c73d055931c3aa75c7836e948.setIcon(
  icon_48d757a20429f1a7a63cfed770399ffb
);

var marker_5b06755514a6bd73d4dcdc1b8e7cfe56 = L.marker(
  [19.0165, 72.8605],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7d0ebfbbe4fb4fa47dd191ed1a254638 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_855d946024fc33320231862b3028678e = L.popup({
  maxWidth: "100%",
});

var html_9eee34abe4840e87cf269b3f16f7ee80 = $(
  `<div id="html_9eee34abe4840e87cf269b3f16f7ee80" style="width: 100.0%; height: 100.0%;">Tata Power - Antop Hill<br>Suitability: 0.24</div>`
)[0];
popup_855d946024fc33320231862b3028678e.setContent(
  html_9eee34abe4840e87cf269b3f16f7ee80
);

marker_5b06755514a6bd73d4dcdc1b8e7cfe56.bindPopup(
  popup_855d946024fc33320231862b3028678e
);

marker_5b06755514a6bd73d4dcdc1b8e7cfe56.setIcon(
  icon_7d0ebfbbe4fb4fa47dd191ed1a254638
);

var marker_3442fb065ac8aaa903d8d2356c9faaee = L.marker(
  [18.9451, 72.8354],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_a90d2c38a868e4be46f841c74c447437 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_84cd3b2ec3584041fc8440646ef7387c = L.popup({
  maxWidth: "100%",
});

var html_68c8f857cd9140f4fd1a6e98d33b0945 = $(
  `<div id="html_68c8f857cd9140f4fd1a6e98d33b0945" style="width: 100.0%; height: 100.0%;">Tata Power - Ballard Estate<br>Suitability: 0.34</div>`
)[0];
popup_84cd3b2ec3584041fc8440646ef7387c.setContent(
  html_68c8f857cd9140f4fd1a6e98d33b0945
);

marker_3442fb065ac8aaa903d8d2356c9faaee.bindPopup(
  popup_84cd3b2ec3584041fc8440646ef7387c
);

marker_3442fb065ac8aaa903d8d2356c9faaee.setIcon(
  icon_a90d2c38a868e4be46f841c74c447437
);

var marker_9e6a5baad567d0eb706daa4ed79929ff = L.marker(
  [19.0585, 72.8557],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_21d27f48b40d2dfd389d9037290d3a10 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_54daab9d054c0286b124a9fb906445b7 = L.popup({
  maxWidth: "100%",
});

var html_b925845f34e672e1d492889a4f342944 = $(
  `<div id="html_b925845f34e672e1d492889a4f342944" style="width: 100.0%; height: 100.0%;">Tata Power - BKC Substation<br>Suitability: 0.2</div>`
)[0];
popup_54daab9d054c0286b124a9fb906445b7.setContent(
  html_b925845f34e672e1d492889a4f342944
);

marker_9e6a5baad567d0eb706daa4ed79929ff.bindPopup(
  popup_54daab9d054c0286b124a9fb906445b7
);

marker_9e6a5baad567d0eb706daa4ed79929ff.setIcon(
  icon_21d27f48b40d2dfd389d9037290d3a10
);

var marker_03b9d32604efbf7748f4d314b2ffc38a = L.marker(
  [19.233, 72.8552],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_d05302367bcacec0042a021b094e0a5f = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_7fe95f0f452dd974361c3bc3ded24273 = L.popup({
  maxWidth: "100%",
});

var html_e4af620547cd33673be1660bbb822417 = $(
  `<div id="html_e4af620547cd33673be1660bbb822417" style="width: 100.0%; height: 100.0%;">Tata Power - Borivali West<br>Suitability: 0.25</div>`
)[0];
popup_7fe95f0f452dd974361c3bc3ded24273.setContent(
  html_e4af620547cd33673be1660bbb822417
);

marker_03b9d32604efbf7748f4d314b2ffc38a.bindPopup(
  popup_7fe95f0f452dd974361c3bc3ded24273
);

marker_03b9d32604efbf7748f4d314b2ffc38a.setIcon(
  icon_d05302367bcacec0042a021b094e0a5f
);

var marker_1c61546447c72f4c037d2c3b3c380505 = L.marker(
  [18.9788, 72.8337],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_9eafd94d0b743e1e8df51959d11e9700 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_65377eb6b75269d79dbdf5ae657d3d39 = L.popup({
  maxWidth: "100%",
});

var html_e8e99ebda3430bd67a3dc14886476aad = $(
  `<div id="html_e8e99ebda3430bd67a3dc14886476aad" style="width: 100.0%; height: 100.0%;">Tata Power - Byculla<br>Suitability: 0.37</div>`
)[0];
popup_65377eb6b75269d79dbdf5ae657d3d39.setContent(
  html_e8e99ebda3430bd67a3dc14886476aad
);

marker_1c61546447c72f4c037d2c3b3c380505.bindPopup(
  popup_65377eb6b75269d79dbdf5ae657d3d39
);

marker_1c61546447c72f4c037d2c3b3c380505.setIcon(
  icon_9eafd94d0b743e1e8df51959d11e9700
);

var marker_282d231d41c29324e226322574215b6e = L.marker(
  [19.1088, 72.8535],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_0828f92c23b762b3bee8e18c33e871ad = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1b647b5f62e7a745ed72509fa28115ad = L.popup({
  maxWidth: "100%",
});

var html_d17b197ccc533f8d85e607e5a21e1b31 = $(
  `<div id="html_d17b197ccc533f8d85e607e5a21e1b31" style="width: 100.0%; height: 100.0%;">Tata Power - Chakala<br>Suitability: 0.3</div>`
)[0];
popup_1b647b5f62e7a745ed72509fa28115ad.setContent(
  html_d17b197ccc533f8d85e607e5a21e1b31
);

marker_282d231d41c29324e226322574215b6e.bindPopup(
  popup_1b647b5f62e7a745ed72509fa28115ad
);

marker_282d231d41c29324e226322574215b6e.setIcon(
  icon_0828f92c23b762b3bee8e18c33e871ad
);

var marker_db99c06a0f840e1b638400a51b0cf661 = L.marker(
  [19.0455, 72.8996],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_bf47f9e1625a3d771f01b8f0c1570b21 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_a27c9324d2dd773ef4ab48041345bf33 = L.popup({
  maxWidth: "100%",
});

var html_bcd034ffb24deb508d9c3de2473c6d92 = $(
  `<div id="html_bcd034ffb24deb508d9c3de2473c6d92" style="width: 100.0%; height: 100.0%;">Tata Power - Chembur<br>Suitability: 0.26</div>`
)[0];
popup_a27c9324d2dd773ef4ab48041345bf33.setContent(
  html_bcd034ffb24deb508d9c3de2473c6d92
);

marker_db99c06a0f840e1b638400a51b0cf661.bindPopup(
  popup_a27c9324d2dd773ef4ab48041345bf33
);

marker_db99c06a0f840e1b638400a51b0cf661.setIcon(
  icon_bf47f9e1625a3d771f01b8f0c1570b21
);

var marker_58c3d47bfa4c4fa0527becc81baacfc6 = L.marker(
  [18.9216, 72.8326],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_161c9b0136563d4d20786f766fb9c005 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8f4789efc2a2c1964d0313194be370af = L.popup({
  maxWidth: "100%",
});

var html_411159fedcfc3a437266d0b70613615d = $(
  `<div id="html_411159fedcfc3a437266d0b70613615d" style="width: 100.0%; height: 100.0%;">Tata Power - Colaba<br>Suitability: 0.21</div>`
)[0];
popup_8f4789efc2a2c1964d0313194be370af.setContent(
  html_411159fedcfc3a437266d0b70613615d
);

marker_58c3d47bfa4c4fa0527becc81baacfc6.bindPopup(
  popup_8f4789efc2a2c1964d0313194be370af
);

marker_58c3d47bfa4c4fa0527becc81baacfc6.setIcon(
  icon_161c9b0136563d4d20786f766fb9c005
);

var marker_314dde3d2a27cff7a6038ad380d18d52 = L.marker(
  [18.991, 72.8485],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_d3aa439cf8da440c48774ed8d0688f93 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_992b88c5637f9904db0ca0fa825e7b03 = L.popup({
  maxWidth: "100%",
});

var html_59e1e64fa97bdbffdaa332cb5a54ae43 = $(
  `<div id="html_59e1e64fa97bdbffdaa332cb5a54ae43" style="width: 100.0%; height: 100.0%;">Tata Power - Cotton Green<br>Suitability: 0.32</div>`
)[0];
popup_992b88c5637f9904db0ca0fa825e7b03.setContent(
  html_59e1e64fa97bdbffdaa332cb5a54ae43
);

marker_314dde3d2a27cff7a6038ad380d18d52.bindPopup(
  popup_992b88c5637f9904db0ca0fa825e7b03
);

marker_314dde3d2a27cff7a6038ad380d18d52.setIcon(
  icon_d3aa439cf8da440c48774ed8d0688f93
);

var marker_b3877f94a3c546493224e02f3c07d272 = L.marker(
  [19.0202, 72.8447],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_160d8cebdfa7a23860f2ef72a4b8ce92 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_aeecc161e9f960fd87345f6293a78cff = L.popup({
  maxWidth: "100%",
});

var html_6055abf9f804dcc67a743631525cfd1f = $(
  `<div id="html_6055abf9f804dcc67a743631525cfd1f" style="width: 100.0%; height: 100.0%;">Tata Power - Dadar East<br>Suitability: 0.15</div>`
)[0];
popup_aeecc161e9f960fd87345f6293a78cff.setContent(
  html_6055abf9f804dcc67a743631525cfd1f
);

marker_b3877f94a3c546493224e02f3c07d272.bindPopup(
  popup_aeecc161e9f960fd87345f6293a78cff
);

marker_b3877f94a3c546493224e02f3c07d272.setIcon(
  icon_160d8cebdfa7a23860f2ef72a4b8ce92
);

var marker_84e8fa79c30f2db094b6123db757d7aa = L.marker(
  [19.034402, 72.85284],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_9ed8ad8bc38f51002ecec6c774db05c0 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c88539fea5aa787dfc07ef5fbdfff22a = L.popup({
  maxWidth: "100%",
});

var html_936695e105cfc4871ab98f9e9d83b01a = $(
  `<div id="html_936695e105cfc4871ab98f9e9d83b01a" style="width: 100.0%; height: 100.0%;">Tata Power, Dharavi Colony<br>Suitability: 0.27</div>`
)[0];
popup_c88539fea5aa787dfc07ef5fbdfff22a.setContent(
  html_936695e105cfc4871ab98f9e9d83b01a
);

marker_84e8fa79c30f2db094b6123db757d7aa.bindPopup(
  popup_c88539fea5aa787dfc07ef5fbdfff22a
);

marker_84e8fa79c30f2db094b6123db757d7aa.setIcon(
  icon_9ed8ad8bc38f51002ecec6c774db05c0
);

var marker_2a9bdeeb6b6602817b4f1544f8acede4 = L.marker(
  [19.2188, 73.0935],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f0a98db9be74fee19dd14ff931547e19 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_b16a0072e28e149cbbdd45351dbb297b = L.popup({
  maxWidth: "100%",
});

var html_be55784a0cb56a34d06001b19830b9a6 = $(
  `<div id="html_be55784a0cb56a34d06001b19830b9a6" style="width: 100.0%; height: 100.0%;">Tata Power - Dombivli<br>Suitability: 0.38</div>`
)[0];
popup_b16a0072e28e149cbbdd45351dbb297b.setContent(
  html_be55784a0cb56a34d06001b19830b9a6
);

marker_2a9bdeeb6b6602817b4f1544f8acede4.bindPopup(
  popup_b16a0072e28e149cbbdd45351dbb297b
);

marker_2a9bdeeb6b6602817b4f1544f8acede4.setIcon(
  icon_f0a98db9be74fee19dd14ff931547e19
);

var marker_b912244fd88d0e4479aefe6c006e9cd8 = L.marker(
  [18.9218, 72.8347],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_1f87450280af6f0291baeb7005747dce = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d40ad91d5c34932419f6417ac35084d5 = L.popup({
  maxWidth: "100%",
});

var html_5c3ec1734a5c8009760ea75694e823d9 = $(
  `<div id="html_5c3ec1734a5c8009760ea75694e823d9" style="width: 100.0%; height: 100.0%;">Tata Power - Gateway of India<br>Suitability: 0.4</div>`
)[0];
popup_d40ad91d5c34932419f6417ac35084d5.setContent(
  html_5c3ec1734a5c8009760ea75694e823d9
);

marker_b912244fd88d0e4479aefe6c006e9cd8.bindPopup(
  popup_d40ad91d5c34932419f6417ac35084d5
);

marker_b912244fd88d0e4479aefe6c006e9cd8.setIcon(
  icon_1f87450280af6f0291baeb7005747dce
);

var marker_362d3f456843c8f6aea92609d4ecdc5e = L.marker(
  [19.097, 72.8261],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_43c0ea0134858294e98cc20cfc7a76ea = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9e28c203e8b0fcfb8e959b795e2ce10a = L.popup({
  maxWidth: "100%",
});

var html_750f7ccfad1a17404b23cd42dd888526 = $(
  `<div id="html_750f7ccfad1a17404b23cd42dd888526" style="width: 100.0%; height: 100.0%;">Tata Power - Juhu Vile Parle<br>Suitability: 0.42</div>`
)[0];
popup_9e28c203e8b0fcfb8e959b795e2ce10a.setContent(
  html_750f7ccfad1a17404b23cd42dd888526
);

marker_362d3f456843c8f6aea92609d4ecdc5e.bindPopup(
  popup_9e28c203e8b0fcfb8e959b795e2ce10a
);

marker_362d3f456843c8f6aea92609d4ecdc5e.setIcon(
  icon_43c0ea0134858294e98cc20cfc7a76ea
);

var marker_594d1cb1a2a8e48cfc64a31a86f05b9e = L.marker(
  [19.2053, 72.8444],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_a3e89d029c4f5b6314ed7ddbfaa58fda = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_454b24077d387638fd0282e859a2fe46 = L.popup({
  maxWidth: "100%",
});

var html_8271661cee5ddf271177496c49d16b2f = $(
  `<div id="html_8271661cee5ddf271177496c49d16b2f" style="width: 100.0%; height: 100.0%;">Tata Power - Kandivali West<br>Suitability: 0.35</div>`
)[0];
popup_454b24077d387638fd0282e859a2fe46.setContent(
  html_8271661cee5ddf271177496c49d16b2f
);

marker_594d1cb1a2a8e48cfc64a31a86f05b9e.bindPopup(
  popup_454b24077d387638fd0282e859a2fe46
);

marker_594d1cb1a2a8e48cfc64a31a86f05b9e.setIcon(
  icon_a3e89d029c4f5b6314ed7ddbfaa58fda
);

var marker_743ed7d8b82ac00f2d98c3334b95f17d = L.marker(
  [18.965, 72.8098],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_5d05a447c5c4b22ab67157a112dec016 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_eff5abd86fe4816a03945f1de96a2449 = L.popup({
  maxWidth: "100%",
});

var html_5e4d594641f38a4d5ed5ed672acc747d = $(
  `<div id="html_5e4d594641f38a4d5ed5ed672acc747d" style="width: 100.0%; height: 100.0%;">Tata Power - Kapasi CHSL<br>Suitability: 0.29</div>`
)[0];
popup_eff5abd86fe4816a03945f1de96a2449.setContent(
  html_5e4d594641f38a4d5ed5ed672acc747d
);

marker_743ed7d8b82ac00f2d98c3334b95f17d.bindPopup(
  popup_eff5abd86fe4816a03945f1de96a2449
);

marker_743ed7d8b82ac00f2d98c3334b95f17d.setIcon(
  icon_5d05a447c5c4b22ab67157a112dec016
);

var marker_dbfb95ea600b565f24b81990067b433b = L.marker(
  [19.0028, 73.1076],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_baae72764635947b08cc2704ea02fae1 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_cbbb7706967d43a62ea39681668cce4d = L.popup({
  maxWidth: "100%",
});

var html_b8fd2ba0e5f4d91dc0186bb489932b48 = $(
  `<div id="html_b8fd2ba0e5f4d91dc0186bb489932b48" style="width: 100.0%; height: 100.0%;">Tata Power - Khandeshwar<br>Suitability: 0.34</div>`
)[0];
popup_cbbb7706967d43a62ea39681668cce4d.setContent(
  html_b8fd2ba0e5f4d91dc0186bb489932b48
);

marker_dbfb95ea600b565f24b81990067b433b.bindPopup(
  popup_cbbb7706967d43a62ea39681668cce4d
);

marker_dbfb95ea600b565f24b81990067b433b.setIcon(
  icon_baae72764635947b08cc2704ea02fae1
);

var marker_ef199fc26625c6b7df33d3cb35cffb51 = L.marker(
  [19.0756, 72.8322],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_add1be5acc07bb7e1e6ba63d9f62ce1c = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_8456291c4ee74998a5edfe8b338c4ea2 = L.popup({
  maxWidth: "100%",
});

var html_0dc8cfd7bf7f324b9c0fe718775217ce = $(
  `<div id="html_0dc8cfd7bf7f324b9c0fe718775217ce" style="width: 100.0%; height: 100.0%;">Tata Power - Khar West<br>Suitability: 0.36</div>`
)[0];
popup_8456291c4ee74998a5edfe8b338c4ea2.setContent(
  html_0dc8cfd7bf7f324b9c0fe718775217ce
);

marker_ef199fc26625c6b7df33d3cb35cffb51.bindPopup(
  popup_8456291c4ee74998a5edfe8b338c4ea2
);

marker_ef199fc26625c6b7df33d3cb35cffb51.setIcon(
  icon_add1be5acc07bb7e1e6ba63d9f62ce1c
);

var marker_ac7d1efbceac64560ba28ad95947cacf = L.marker(
  [19.0702, 72.881],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_71185303cd60b0036d39ece94f667a7d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_c736a686a0bdf429ee96dfaa6a975f1c = L.popup({
  maxWidth: "100%",
});

var html_76aea33fff670d573dcfb97ba67de229 = $(
  `<div id="html_76aea33fff670d573dcfb97ba67de229" style="width: 100.0%; height: 100.0%;">Tata Power - Kurla LBS<br>Suitability: 0.38</div>`
)[0];
popup_c736a686a0bdf429ee96dfaa6a975f1c.setContent(
  html_76aea33fff670d573dcfb97ba67de229
);

marker_ac7d1efbceac64560ba28ad95947cacf.bindPopup(
  popup_c736a686a0bdf429ee96dfaa6a975f1c
);

marker_ac7d1efbceac64560ba28ad95947cacf.setIcon(
  icon_71185303cd60b0036d39ece94f667a7d
);

var marker_aa7ce23fd7914e3af30124560692b7e4 = L.marker(
  [18.994, 72.8231],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_38be9ceeeb53f9da73d47c3e7267c9e0 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_281d22bfb94257502b89994ddbe021e5 = L.popup({
  maxWidth: "100%",
});

var html_2dee1255d54dce44327e929c9d41b64b = $(
  `<div id="html_2dee1255d54dce44327e929c9d41b64b" style="width: 100.0%; height: 100.0%;">Tata Power - Mahalaxmi West<br>Suitability: 0.34</div>`
)[0];
popup_281d22bfb94257502b89994ddbe021e5.setContent(
  html_2dee1255d54dce44327e929c9d41b64b
);

marker_aa7ce23fd7914e3af30124560692b7e4.bindPopup(
  popup_281d22bfb94257502b89994ddbe021e5
);

marker_aa7ce23fd7914e3af30124560692b7e4.setIcon(
  icon_38be9ceeeb53f9da73d47c3e7267c9e0
);

var marker_569f6d423cf46ec74142dfc5a894d6c1 = L.marker(
  [19.0281, 72.8647],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_6ccd90eb55156bf2a9fec48ca9582c16 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_839728f8736a6425b7ac47efaf44bb47 = L.popup({
  maxWidth: "100%",
});

var html_36e3551c31764f687d213e9927c83789 = $(
  `<div id="html_36e3551c31764f687d213e9927c83789" style="width: 100.0%; height: 100.0%;">Tata Power - Mahanagar Gas<br>Suitability: 0.25</div>`
)[0];
popup_839728f8736a6425b7ac47efaf44bb47.setContent(
  html_36e3551c31764f687d213e9927c83789
);

marker_569f6d423cf46ec74142dfc5a894d6c1.bindPopup(
  popup_839728f8736a6425b7ac47efaf44bb47
);

marker_569f6d423cf46ec74142dfc5a894d6c1.setIcon(
  icon_6ccd90eb55156bf2a9fec48ca9582c16
);

var marker_dd2f3c3f52f66ca0d9fef54fc642d7e2 = L.marker(
  [19.0498, 72.9317],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_39d956d5c0162a2b8831419f27c90ca4 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1fd5619dea9fe9f9fbae1d64b60b501c = L.popup({
  maxWidth: "100%",
});

var html_6bc905bbf01726afe4998f74145adf98 = $(
  `<div id="html_6bc905bbf01726afe4998f74145adf98" style="width: 100.0%; height: 100.0%;">Tata Power - Mankhurd<br>Suitability: 0.38</div>`
)[0];
popup_1fd5619dea9fe9f9fbae1d64b60b501c.setContent(
  html_6bc905bbf01726afe4998f74145adf98
);

marker_dd2f3c3f52f66ca0d9fef54fc642d7e2.bindPopup(
  popup_1fd5619dea9fe9f9fbae1d64b60b501c
);

marker_dd2f3c3f52f66ca0d9fef54fc642d7e2.setIcon(
  icon_39d956d5c0162a2b8831419f27c90ca4
);

var marker_c5bfe81fcaa763c9bc291935d2c3f3ce = L.marker(
  [18.9255, 72.8234],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_10969835cc72addfe6bcb9f9d79d6a83 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_9f5f0616d2ceb5732af0ba7fdc6664b5 = L.popup({
  maxWidth: "100%",
});

var html_f5ea655e4eded4ade3d19ad573fea124 = $(
  `<div id="html_f5ea655e4eded4ade3d19ad573fea124" style="width: 100.0%; height: 100.0%;">Tata Power - Nariman Point<br>Suitability: 0.35</div>`
)[0];
popup_9f5f0616d2ceb5732af0ba7fdc6664b5.setContent(
  html_f5ea655e4eded4ade3d19ad573fea124
);

marker_c5bfe81fcaa763c9bc291935d2c3f3ce.bindPopup(
  popup_9f5f0616d2ceb5732af0ba7fdc6664b5
);

marker_c5bfe81fcaa763c9bc291935d2c3f3ce.setIcon(
  icon_10969835cc72addfe6bcb9f9d79d6a83
);

var marker_1865727b2a9d96b48ca1a8acf101975f = L.marker(
  [18.9907, 73.1195],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ac4e2cdd025777d92ec654ff83103fe4 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5e248cc31253be794d7c8cbc08547e4e = L.popup({
  maxWidth: "100%",
});

var html_a2c3e138f7a6479a1cdd28437726367e = $(
  `<div id="html_a2c3e138f7a6479a1cdd28437726367e" style="width: 100.0%; height: 100.0%;">Tata Power - New Panvel<br>Suitability: 0.27</div>`
)[0];
popup_5e248cc31253be794d7c8cbc08547e4e.setContent(
  html_a2c3e138f7a6479a1cdd28437726367e
);

marker_1865727b2a9d96b48ca1a8acf101975f.bindPopup(
  popup_5e248cc31253be794d7c8cbc08547e4e
);

marker_1865727b2a9d96b48ca1a8acf101975f.setIcon(
  icon_ac4e2cdd025777d92ec654ff83103fe4
);

var marker_ba51f30baa596e16be50f75f52d6d5ac = L.marker(
  [18.9545, 72.8189],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c27c25a9e1ffd1ad236ef80531738ad3 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_64f0fc2899d1580133db59b9d7e31aa0 = L.popup({
  maxWidth: "100%",
});

var html_2b6041cefb9e599f1b5b4ac39ab3ce31 = $(
  `<div id="html_2b6041cefb9e599f1b5b4ac39ab3ce31" style="width: 100.0%; height: 100.0%;">Tata Power - Opera House<br>Suitability: 0.32</div>`
)[0];
popup_64f0fc2899d1580133db59b9d7e31aa0.setContent(
  html_2b6041cefb9e599f1b5b4ac39ab3ce31
);

marker_ba51f30baa596e16be50f75f52d6d5ac.bindPopup(
  popup_64f0fc2899d1580133db59b9d7e31aa0
);

marker_ba51f30baa596e16be50f75f52d6d5ac.setIcon(
  icon_c27c25a9e1ffd1ad236ef80531738ad3
);

var marker_fac2ba151bca91c24c34b86bfe4542ab = L.marker(
  [19.2081, 73.1041],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_40cd7c482eb3c45d9276c257ab95e8ba = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_277c7f0d6ad4b11410141daa8adabe79 = L.popup({
  maxWidth: "100%",
});

var html_ecd85174355be80e01b0dc65695aabfe = $(
  `<div id="html_ecd85174355be80e01b0dc65695aabfe" style="width: 100.0%; height: 100.0%;">Tata Power - Palava<br>Suitability: 0.35</div>`
)[0];
popup_277c7f0d6ad4b11410141daa8adabe79.setContent(
  html_ecd85174355be80e01b0dc65695aabfe
);

marker_fac2ba151bca91c24c34b86bfe4542ab.bindPopup(
  popup_277c7f0d6ad4b11410141daa8adabe79
);

marker_fac2ba151bca91c24c34b86bfe4542ab.setIcon(
  icon_40cd7c482eb3c45d9276c257ab95e8ba
);

var marker_1997c3e1a6690ac76b65658979df345d = L.marker(
  [19.0494, 73.1166],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_aec91afc92f6635f1353e7911f12358c = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_344de7a42d3c8456a528602a28dcb5f7 = L.popup({
  maxWidth: "100%",
});

var html_1b5083473382f80e21c8ff012ddd345e = $(
  `<div id="html_1b5083473382f80e21c8ff012ddd345e" style="width: 100.0%; height: 100.0%;">Tata Power - Taloja Station<br>Suitability: 0.4</div>`
)[0];
popup_344de7a42d3c8456a528602a28dcb5f7.setContent(
  html_1b5083473382f80e21c8ff012ddd345e
);

marker_1997c3e1a6690ac76b65658979df345d.bindPopup(
  popup_344de7a42d3c8456a528602a28dcb5f7
);

marker_1997c3e1a6690ac76b65658979df345d.setIcon(
  icon_aec91afc92f6635f1353e7911f12358c
);

var marker_1ac56ce8a6486e3d5d0c6167d0b807d4 = L.marker(
  [19.1915, 72.972],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2c3808873bb8eb516feec9b8dde057d0 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_ebdb055f9225029028e02c7cb000730e = L.popup({
  maxWidth: "100%",
});

var html_db46aece153c44510c9285f7f1c71c77 = $(
  `<div id="html_db46aece153c44510c9285f7f1c71c77" style="width: 100.0%; height: 100.0%;">Tata Power - Thane West<br>Suitability: 0.32</div>`
)[0];
popup_ebdb055f9225029028e02c7cb000730e.setContent(
  html_db46aece153c44510c9285f7f1c71c77
);

marker_1ac56ce8a6486e3d5d0c6167d0b807d4.bindPopup(
  popup_ebdb055f9225029028e02c7cb000730e
);

marker_1ac56ce8a6486e3d5d0c6167d0b807d4.setIcon(
  icon_2c3808873bb8eb516feec9b8dde057d0
);

var marker_932b4d758284ef371eff2aeb982ac6d6 = L.marker(
  [19.0734, 72.8892],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_86282ba7b025cd1931c2a087b18293a8 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_acc41e6eedb7fe694df54fd1d71ed8d1 = L.popup({
  maxWidth: "100%",
});

var html_32ad5853490420430288504db603b04a = $(
  `<div id="html_32ad5853490420430288504db603b04a" style="width: 100.0%; height: 100.0%;">Tata Power - Tilak Nagar<br>Suitability: 0.35</div>`
)[0];
popup_acc41e6eedb7fe694df54fd1d71ed8d1.setContent(
  html_32ad5853490420430288504db603b04a
);

marker_932b4d758284ef371eff2aeb982ac6d6.bindPopup(
  popup_acc41e6eedb7fe694df54fd1d71ed8d1
);

marker_932b4d758284ef371eff2aeb982ac6d6.setIcon(
  icon_86282ba7b025cd1931c2a087b18293a8
);

var marker_eaf5667b46786833f5f0ed1d7528598c = L.marker(
  [19.106, 72.9286],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_dcb22f49bc29219e19b76b0a118a2a06 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_e29bf1d099f66b4d13036defcf828286 = L.popup({
  maxWidth: "100%",
});

var html_fe72b9073604ddb75f74eab250e5d572 = $(
  `<div id="html_fe72b9073604ddb75f74eab250e5d572" style="width: 100.0%; height: 100.0%;">Tata Power - Vikhroli<br>Suitability: 0.4</div>`
)[0];
popup_e29bf1d099f66b4d13036defcf828286.setContent(
  html_fe72b9073604ddb75f74eab250e5d572
);

marker_eaf5667b46786833f5f0ed1d7528598c.bindPopup(
  popup_e29bf1d099f66b4d13036defcf828286
);

marker_eaf5667b46786833f5f0ed1d7528598c.setIcon(
  icon_dcb22f49bc29219e19b76b0a118a2a06
);

var marker_268171635e60ecb47684a7894f54e9db = L.marker(
  [18.9563188, 73.1626506],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2395bc613ef2cf83a32aa71731b44e94 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4f25c33b5ad1489cb6fefe1e9929a2bd = L.popup({
  maxWidth: "100%",
});

var html_0efcf4af9c6ad0384455399c918b1a31 = $(
  `<div id="html_0efcf4af9c6ad0384455399c918b1a31" style="width: 100.0%; height: 100.0%;">Trimurti Petroleum, Panvel<br>Suitability: 0.34</div>`
)[0];
popup_4f25c33b5ad1489cb6fefe1e9929a2bd.setContent(
  html_0efcf4af9c6ad0384455399c918b1a31
);

marker_268171635e60ecb47684a7894f54e9db.bindPopup(
  popup_4f25c33b5ad1489cb6fefe1e9929a2bd
);

marker_268171635e60ecb47684a7894f54e9db.setIcon(
  icon_2395bc613ef2cf83a32aa71731b44e94
);

var marker_f9c8493d3bb9be750ad5a09f03fe8dee = L.marker(
  [19.1146146, 72.8840941],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7b99f50f5cf6eb6a4b5ee41667bbc492 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_41a41cac985fb67785cac22be1db72f9 = L.popup({
  maxWidth: "100%",
});

var html_c93dfcc853cdd7271414aebfea769501 = $(
  `<div id="html_c93dfcc853cdd7271414aebfea769501" style="width: 100.0%; height: 100.0%;">Vasant oasis<br>Suitability: 0.36</div>`
)[0];
popup_41a41cac985fb67785cac22be1db72f9.setContent(
  html_c93dfcc853cdd7271414aebfea769501
);

marker_f9c8493d3bb9be750ad5a09f03fe8dee.bindPopup(
  popup_41a41cac985fb67785cac22be1db72f9
);

marker_f9c8493d3bb9be750ad5a09f03fe8dee.setIcon(
  icon_7b99f50f5cf6eb6a4b5ee41667bbc492
);

var marker_6d0280200b310559908916ddec210398 = L.marker(
  [19.12012455, 72.88724762],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_64dc4253fa5c900ceb51db8a71c7cd82 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_15001f9de189a6bae5703d7f404961c6 = L.popup({
  maxWidth: "100%",
});

var html_30dd3e8c55d7574e51be5dbf8222f45c = $(
  `<div id="html_30dd3e8c55d7574e51be5dbf8222f45c" style="width: 100.0%; height: 100.0%;">Volltic PCS04<br>Suitability: 0.22</div>`
)[0];
popup_15001f9de189a6bae5703d7f404961c6.setContent(
  html_30dd3e8c55d7574e51be5dbf8222f45c
);

marker_6d0280200b310559908916ddec210398.bindPopup(
  popup_15001f9de189a6bae5703d7f404961c6
);

marker_6d0280200b310559908916ddec210398.setIcon(
  icon_64dc4253fa5c900ceb51db8a71c7cd82
);

var marker_b19f3c565292f7d9b3d6993d99a72dda = L.marker(
  [19.0161, 72.828],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_ec5d8aada9e5d97b0fb188dee71f65db = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_01718811c1b2d0ed3be2250fe05ec8ad = L.popup({
  maxWidth: "100%",
});

var html_5898118ce15df7ce1fd0b1f628da22eb = $(
  `<div id="html_5898118ce15df7ce1fd0b1f628da22eb" style="width: 100.0%; height: 100.0%;">VoltaPoint Charging Station<br>Suitability: 0.22</div>`
)[0];
popup_01718811c1b2d0ed3be2250fe05ec8ad.setContent(
  html_5898118ce15df7ce1fd0b1f628da22eb
);

marker_b19f3c565292f7d9b3d6993d99a72dda.bindPopup(
  popup_01718811c1b2d0ed3be2250fe05ec8ad
);

marker_b19f3c565292f7d9b3d6993d99a72dda.setIcon(
  icon_ec5d8aada9e5d97b0fb188dee71f65db
);

var marker_e102d26350ee971b82ff2599bc194667 = L.marker(
  [19.2567, 72.8572],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7957999f527d329ad65f42034da2ee12 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6e7695ea98c3e1b245d1d7e628c38bec = L.popup({
  maxWidth: "100%",
});

var html_67f388dd2bb8e387b41b06367bf31ada = $(
  `<div id="html_67f388dd2bb8e387b41b06367bf31ada" style="width: 100.0%; height: 100.0%;">VoltaPoint - Dahisar<br>Suitability: 0.34</div>`
)[0];
popup_6e7695ea98c3e1b245d1d7e628c38bec.setContent(
  html_67f388dd2bb8e387b41b06367bf31ada
);

marker_e102d26350ee971b82ff2599bc194667.bindPopup(
  popup_6e7695ea98c3e1b245d1d7e628c38bec
);

marker_e102d26350ee971b82ff2599bc194667.setIcon(
  icon_7957999f527d329ad65f42034da2ee12
);

var marker_c01cdacb5beadaf59f398a7aca552aa9 = L.marker(
  [19.0543, 73.1153],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f7de36892db19c3498ae05995de34a69 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_0811f5054db54932c0f56905235c930c = L.popup({
  maxWidth: "100%",
});

var html_fa946dd101c7b20743bfd2ac4b0df137 = $(
  `<div id="html_fa946dd101c7b20743bfd2ac4b0df137" style="width: 100.0%; height: 100.0%;">VoltaPoint - Kalamboli Highway<br>Suitability: 0.42</div>`
)[0];
popup_0811f5054db54932c0f56905235c930c.setContent(
  html_fa946dd101c7b20743bfd2ac4b0df137
);

marker_c01cdacb5beadaf59f398a7aca552aa9.bindPopup(
  popup_0811f5054db54932c0f56905235c930c
);

marker_c01cdacb5beadaf59f398a7aca552aa9.setIcon(
  icon_f7de36892db19c3498ae05995de34a69
);

var marker_bcdb06d9eb93d74fc40ae4325e14d23e = L.marker(
  [19.0094, 72.8394],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_41bd7489a0869e502d04f45f826b082d = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5209a181365f003e83ced21683b631d6 = L.popup({
  maxWidth: "100%",
});

var html_25e809f21f650c1b809087cfb9f2cf4a = $(
  `<div id="html_25e809f21f650c1b809087cfb9f2cf4a" style="width: 100.0%; height: 100.0%;">VoltaPoint - Parel<br>Suitability: 0.32</div>`
)[0];
popup_5209a181365f003e83ced21683b631d6.setContent(
  html_25e809f21f650c1b809087cfb9f2cf4a
);

marker_bcdb06d9eb93d74fc40ae4325e14d23e.bindPopup(
  popup_5209a181365f003e83ced21683b631d6
);

marker_bcdb06d9eb93d74fc40ae4325e14d23e.setIcon(
  icon_41bd7489a0869e502d04f45f826b082d
);

var marker_7ff7fbec2b6503c5e2a80fced7763435 = L.marker(
  [19.0658, 72.8687],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_94efe8548ff4c204ca8fabb0a7953843 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d73f06a6493785cd8668d76f4674947d = L.popup({
  maxWidth: "100%",
});

var html_51044e494083dfc1cc5cc8cb32f1e4b6 = $(
  `<div id="html_51044e494083dfc1cc5cc8cb32f1e4b6" style="width: 100.0%; height: 100.0%;">Volttic - BKC<br>Suitability: 0.14</div>`
)[0];
popup_d73f06a6493785cd8668d76f4674947d.setContent(
  html_51044e494083dfc1cc5cc8cb32f1e4b6
);

marker_7ff7fbec2b6503c5e2a80fced7763435.bindPopup(
  popup_d73f06a6493785cd8668d76f4674947d
);

marker_7ff7fbec2b6503c5e2a80fced7763435.setIcon(
  icon_94efe8548ff4c204ca8fabb0a7953843
);

var marker_df80c911bdc1669e4078c7de57adc87d = L.marker(
  [19.1339, 73.0011],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_7f51d3d3834ac0c71538c8fcfd2b248b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_5d9108525573b28d675b098617a17d5a = L.popup({
  maxWidth: "100%",
});

var html_8971fa7ad358e23ae14b73560129cf0b = $(
  `<div id="html_8971fa7ad358e23ae14b73560129cf0b" style="width: 100.0%; height: 100.0%;">Volttic - Ghansoli<br>Suitability: 0.37</div>`
)[0];
popup_5d9108525573b28d675b098617a17d5a.setContent(
  html_8971fa7ad358e23ae14b73560129cf0b
);

marker_df80c911bdc1669e4078c7de57adc87d.bindPopup(
  popup_5d9108525573b28d675b098617a17d5a
);

marker_df80c911bdc1669e4078c7de57adc87d.setIcon(
  icon_7f51d3d3834ac0c71538c8fcfd2b248b
);

var marker_9f08acaacaa9b6c9aa38cae43ca26ba9 = L.marker(
  [19.1112, 72.874],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_2b6c26cbae9b001bed521088217f5966 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_4873fc117f942cba1fe1368014d8c4b9 = L.popup({
  maxWidth: "100%",
});

var html_0e6bc4ac340ce6d56b352a4b9b264ca5 = $(
  `<div id="html_0e6bc4ac340ce6d56b352a4b9b264ca5" style="width: 100.0%; height: 100.0%;">Volttic Charging - Marol<br>Suitability: 0.22</div>`
)[0];
popup_4873fc117f942cba1fe1368014d8c4b9.setContent(
  html_0e6bc4ac340ce6d56b352a4b9b264ca5
);

marker_9f08acaacaa9b6c9aa38cae43ca26ba9.bindPopup(
  popup_4873fc117f942cba1fe1368014d8c4b9
);

marker_9f08acaacaa9b6c9aa38cae43ca26ba9.setIcon(
  icon_2b6c26cbae9b001bed521088217f5966
);

var marker_5bc7e5f1bb724c64416ed6bd7a8d9f63 = L.marker(
  [19.1265, 72.8874],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_082ecd0a59bedc02a5d0493615e0dd7b = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_74db867e86a0120769ed9b81c6271cdc = L.popup({
  maxWidth: "100%",
});

var html_ef1ce658800c547e43791a74fe37850e = $(
  `<div id="html_ef1ce658800c547e43791a74fe37850e" style="width: 100.0%; height: 100.0%;">Volttic Mini Charging<br>Suitability: 0.19</div>`
)[0];
popup_74db867e86a0120769ed9b81c6271cdc.setContent(
  html_ef1ce658800c547e43791a74fe37850e
);

marker_5bc7e5f1bb724c64416ed6bd7a8d9f63.bindPopup(
  popup_74db867e86a0120769ed9b81c6271cdc
);

marker_5bc7e5f1bb724c64416ed6bd7a8d9f63.setIcon(
  icon_082ecd0a59bedc02a5d0493615e0dd7b
);

var marker_48d60fd118c1977d72384a91cefab523 = L.marker(
  [18.9692, 72.8195],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f5affcaef04779fe5a41115eba72b7f3 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_d2e7a7deba10426539e45708f33bd9ce = L.popup({
  maxWidth: "100%",
});

var html_e5942043526508f65fe87173e1e07b50 = $(
  `<div id="html_e5942043526508f65fe87173e1e07b50" style="width: 100.0%; height: 100.0%;">Volttic - Mumbai Central<br>Suitability: 0.26</div>`
)[0];
popup_d2e7a7deba10426539e45708f33bd9ce.setContent(
  html_e5942043526508f65fe87173e1e07b50
);

marker_48d60fd118c1977d72384a91cefab523.bindPopup(
  popup_d2e7a7deba10426539e45708f33bd9ce
);

marker_48d60fd118c1977d72384a91cefab523.setIcon(
  icon_f5affcaef04779fe5a41115eba72b7f3
);

var marker_75b1148b8af53884e333e22b4472e6a2 = L.marker(
  [19.032, 72.8597],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_c6af9bf09d999202e7f8aecac023bc1e = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_1435729e418e2dbca491f12f243115ef = L.popup({
  maxWidth: "100%",
});

var html_e6fe17041de77cf0176a08e89369a3de = $(
  `<div id="html_e6fe17041de77cf0176a08e89369a3de" style="width: 100.0%; height: 100.0%;">Volttic - Sion<br>Suitability: 0.26</div>`
)[0];
popup_1435729e418e2dbca491f12f243115ef.setContent(
  html_e6fe17041de77cf0176a08e89369a3de
);

marker_75b1148b8af53884e333e22b4472e6a2.bindPopup(
  popup_1435729e418e2dbca491f12f243115ef
);

marker_75b1148b8af53884e333e22b4472e6a2.setIcon(
  icon_c6af9bf09d999202e7f8aecac023bc1e
);

var marker_2195b29c0bd0d835d62030729dd221e8 = L.marker(
  [19.0053, 72.8157],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_f1d94c6b97d1b992530b74a7bc90d262 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_2453ea6b6c36a263cef8ed38cc4bd1b9 = L.popup({
  maxWidth: "100%",
});

var html_f59bd78e32365566ed7f1f16134c5adc = $(
  `<div id="html_f59bd78e32365566ed7f1f16134c5adc" style="width: 100.0%; height: 100.0%;">Volttic - Worli Sea Face<br>Suitability: 0.16</div>`
)[0];
popup_2453ea6b6c36a263cef8ed38cc4bd1b9.setContent(
  html_f59bd78e32365566ed7f1f16134c5adc
);

marker_2195b29c0bd0d835d62030729dd221e8.bindPopup(
  popup_2453ea6b6c36a263cef8ed38cc4bd1b9
);

marker_2195b29c0bd0d835d62030729dd221e8.setIcon(
  icon_f1d94c6b97d1b992530b74a7bc90d262
);

var marker_8d715a3c26ea11fd7f510ea3d70f27a6 = L.marker(
  [19.04520829, 72.84154175],
  {}
).addTo(map_602d2ae9106385cef775bb7c39ffe6df);

var icon_dd4006a26e430b0ae602a472aea0b184 = L.AwesomeMarkers.icon({
  markerColor: "blue",
  iconColor: "white",
  icon: "bolt",
  prefix: "fa",
  extraClasses: "fa-rotate-0",
});

var popup_6527dbdf73f443a2445688ab4f20cef6 = L.popup({
  maxWidth: "100%",
});

var html_7ea334da5b114dd8797c261e288e3c03 = $(
  `<div id="html_7ea334da5b114dd8797c261e288e3c03" style="width: 100.0%; height: 100.0%;">Xavier Institute of Engineering<br>Suitability: 0.29</div>`
)[0];
popup_6527dbdf73f443a2445688ab4f20cef6.setContent(
  html_7ea334da5b114dd8797c261e288e3c03
);

marker_8d715a3c26ea11fd7f510ea3d70f27a6.bindPopup(
  popup_6527dbdf73f443a2445688ab4f20cef6
);

marker_8d715a3c26ea11fd7f510ea3d70f27a6.setIcon(
  icon_dd4006a26e430b0ae602a472aea0b184
);

var heat_map_89c63ac9fdce601a71f4d33a6d5fc5f0 = L.heatLayer(
  [
    [19.0618, 72.833, 1],
    [19.1206, 72.9188, 3],
    [18.9959, 72.8532, 1],
    [19.2298, 72.8606, 2],
    [19.0852, 72.9114, 1],
    [19.1876, 72.8436, 1],
    [19.1721, 72.9568, 1],
    [18.9897, 73.1145, 2],
    [19.0815, 72.8367, 3],
    [18.989356, 72.825234, 4],
    [19.1593952, 72.945112, 1],
    [19.11637, 72.91086, 4],
    [19.0313299, 72.8809653, 2],
    [19.133659, 72.900817, 3],
    [19.0977, 72.8271, 3],
    [19.186, 73.1891, 1],
    [19.0549, 72.9038, 1],
    [19.2505, 72.8591, 3],
    [19.1726, 72.9532, 1],
    [19.0708, 72.9991, 1],
    [19.137, 72.8261, 2],
    [19.1787, 72.8446, 1],
    [19.291, 72.8511, 1],
    [19.1798, 72.8361, 2],
    [19.2365, 72.8552, 1],
    [19.2104, 72.8572, 1],
    [19.1851, 72.8388, 1],
    [19.102, 72.8872, 4],
    [19.0984, 72.9262, 1],
    [19.0012, 72.8281, 3],
    [19.1182, 72.9053, 2],
    [19.11599, 72.85018, 1],
    [19.0925655, 72.9223514, 1],
    [19.163979, 72.938751, 2],
    [18.99453515, 73.11513242, 2],
    [19.1142415, 72.8518766, 1],
    [19.0640261, 73.01971543, 1],
    [18.9285, 72.8255, 3],
    [19.14207, 72.83241, 3],
    [19.018857, 72.831076, 1],
    [19.051601, 72.838011, 3],
    [19.1485, 72.9358, 1],
    [19.1643, 72.8346, 1],
    [19.2587, 72.9773, 2],
    [18.9636, 72.8019, 2],
    [19.05231631, 72.90163581, 2],
    [19.13030121, 72.82229723, 1],
    [19.1372, 72.8276, 3],
    [19.0533, 73.0571, 2],
    [19.0731, 72.8828, 1],
    [19.0094, 72.8394, 1],
    [19.1866, 72.9728, 3],
    [19.3919, 72.833, 1],
    [19.0246, 72.8402, 1],
    [19.02460889, 72.84282021, 3],
    [19.06895357, 73.02251015, 2],
    [19.15381142, 72.85579572, 1],
    [18.9917205, 72.841513, 1],
    [19.058, 72.8675, 1],
    [19.1547, 72.9346, 2],
    [19.3134, 72.8476, 3],
    [18.9677, 72.8055, 1],
    [19.0546, 72.9047, 1],
    [19.0458, 72.8991, 1],
    [18.9398, 72.8354, 1],
    [19.0864, 72.9085, 2],
    [19.2403, 73.1258, 1],
    [19.2402, 73.1362, 1],
    [19.016, 73.0949, 1],
    [18.9938, 72.8237, 1],
    [19.1736, 72.8352, 2],
    [19.0121, 73.055, 1],
    [19.1808, 72.9836, 2],
    [19.1441, 72.8366, 1],
    [19.0155, 72.8275, 1],
    [19.0378, 73.1318, 1],
    [19.037, 72.9235, 3],
    [19.0188, 72.8571, 1],
    [19.0085, 72.8153, 2],
    [19.06870454, 73.02298692, 1],
    [19.0079, 72.8425, 1],
    [19.0685788, 73.022744, 1],
    [19.0472567, 72.8783829, 1],
    [19.17674569, 72.94574801, 2],
    [19.2402364, 72.8481819, 3],
    [19.18066617, 72.94684724, 2],
    [19.11999443, 72.9141036, 3],
    [19.0737, 72.857, 1],
    [18.9688627, 72.8207138, 2],
    [19.1737611, 72.8600172, 3],
    [19.0751, 72.8893, 1],
    [19.0994, 72.8269, 1],
    [19.0337, 73.0204, 1],
    [19.1146, 72.8696, 2],
    [19.0588, 72.8703, 3],
    [19.0836, 72.9136, 2],
    [19.1341, 72.9297, 1],
    [19.0418, 73.0634, 1],
    [19.072, 72.8821, 1],
    [19.109, 72.8771, 3],
    [19.0387, 73.0222, 2],
    [19.2263, 73.0965, 1],
    [18.9892, 73.117, 3],
    [19.0029, 72.824, 3],
    [19.0803, 72.8365, 2],
    [19.2336, 73.1353, 2],
    [19.0302, 72.8927, 11],
    [19.0302, 72.8927, 11],
    [19.164, 72.9948, 1],
    [19.0165, 72.8605, 1],
    [18.9451, 72.8354, 1],
    [19.0585, 72.8557, 1],
    [19.233, 72.8552, 1],
    [18.9788, 72.8337, 1],
    [19.1088, 72.8535, 1],
    [19.0455, 72.8996, 2],
    [18.9216, 72.8326, 1],
    [18.991, 72.8485, 2],
    [19.0202, 72.8447, 1],
    [19.034402, 72.85284, 3],
    [19.2188, 73.0935, 2],
    [18.9218, 72.8347, 3],
    [19.097, 72.8261, 1],
    [19.2053, 72.8444, 1],
    [18.965, 72.8098, 2],
    [19.0028, 73.1076, 2],
    [19.0756, 72.8322, 2],
    [19.0702, 72.881, 1],
    [18.994, 72.8231, 1],
    [19.0281, 72.8647, 2],
    [19.0498, 72.9317, 1],
    [18.9255, 72.8234, 1],
    [18.9907, 73.1195, 1],
    [18.9545, 72.8189, 2],
    [19.2081, 73.1041, 1],
    [19.0494, 73.1166, 1],
    [19.1915, 72.972, 1],
    [19.0734, 72.8892, 2],
    [19.106, 72.9286, 3],
    [18.9563188, 73.1626506, 2],
    [19.1146146, 72.8840941, 3],
    [19.12012455, 72.88724762, 1],
    [19.0161, 72.828, 2],
    [19.2567, 72.8572, 2],
    [19.0543, 73.1153, 1],
    [19.0094, 72.8394, 1],
    [19.0658, 72.8687, 1],
    [19.1339, 73.0011, 2],
    [19.1112, 72.874, 1],
    [19.1265, 72.8874, 1],
    [18.9692, 72.8195, 1],
    [19.032, 72.8597, 1],
    [19.0053, 72.8157, 1],
    [19.04520829, 72.84154175, 2],
  ],
  {
    minOpacity: 0.5,
    maxZoom: 18,
    radius: 15,
    blur: 10,
  }
);

heat_map_89c63ac9fdce601a71f4d33a6d5fc5f0.addTo(
  map_602d2ae9106385cef775bb7c39ffe6df
);
