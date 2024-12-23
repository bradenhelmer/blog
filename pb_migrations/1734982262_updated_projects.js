/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853");

  // add field
  collection.fields.addAt(
    1,
    new Field({
      "autogeneratePattern": "",
      "hidden": false,
      "id": "text1579384326",
      "max": 0,
      "min": 0,
      "name": "name",
      "pattern": "",
      "presentable": false,
      "primaryKey": false,
      "required": false,
      "system": false,
      "type": "text",
    }),
  );

  // add field
  collection.fields.addAt(
    2,
    new Field({
      "autogeneratePattern": "",
      "hidden": false,
      "id": "text1843675174",
      "max": 0,
      "min": 0,
      "name": "description",
      "pattern": "",
      "presentable": false,
      "primaryKey": false,
      "required": false,
      "system": false,
      "type": "text",
    }),
  );

  // add field
  collection.fields.addAt(
    3,
    new Field({
      "exceptDomains": [],
      "hidden": false,
      "id": "url2502435205",
      "name": "gh_url",
      "onlyDomains": [],
      "presentable": false,
      "required": false,
      "system": false,
      "type": "url",
    }),
  );

  // add field
  collection.fields.addAt(
    4,
    new Field({
      "cascadeDelete": false,
      "collectionId": "pbc_1125843985",
      "hidden": false,
      "id": "relation4175191249",
      "maxSelect": 999,
      "minSelect": 0,
      "name": "related_posts",
      "presentable": false,
      "required": false,
      "system": false,
      "type": "relation",
    }),
  );

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853");

  // remove field
  collection.fields.removeById("text1579384326");

  // remove field
  collection.fields.removeById("text1843675174");

  // remove field
  collection.fields.removeById("url2502435205");

  // remove field
  collection.fields.removeById("relation4175191249");

  return app.save(collection);
});
