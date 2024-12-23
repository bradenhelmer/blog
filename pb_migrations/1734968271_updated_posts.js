/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985");

  // add field
  collection.fields.addAt(
    1,
    new Field({
      "convertURLs": false,
      "hidden": false,
      "id": "editor4274335913",
      "maxSize": 0,
      "name": "content",
      "presentable": false,
      "required": false,
      "system": false,
      "type": "editor",
    }),
  );

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1125843985");

  // remove field
  collection.fields.removeById("editor4274335913");

  return app.save(collection);
});
