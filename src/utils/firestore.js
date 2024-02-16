const fieldTypes = {
  string: "stringValue",
  number: "integerValue",
  boolean: "booleanValue",
  object: "mapValue",
  array: "arrayValue",
  null: "nullValue",
};

/**
 *  Map an object to a new object with the same keys but different values
 * @param {{}} obj object to parse
 * @param {Callback} callback function to execute to set values of the key
 * @returns
 */
const mapObject = (obj, callback) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, callback(value)])
  );
};

/**
 * Parse document format to a basic json
 * @param {{}} document contain the response of firebase
 * @returns {{}}
 */
const parseDocumentToJson = ({ fields, name, createTime, updateTime }) => {
  let values = mapObject(fields, (field) => field[Object.keys(field)[0]]);
  values.id = name.split("/").pop();
  values = {
    ...values,
    createTime,
    updateTime,
  };
  return values;
};

/**
 * Parse a basic json to firestore document format
 * @param {{}} json json data to send to firestore
 * @returns
 */
const parseJsonToDocument = (json) => {
  const fields = mapObject(json, (value) => ({
    [fieldTypes[typeof value]]: value,
  }));
  return { fields };
};

export { fieldTypes, parseDocumentToJson, parseJsonToDocument };
