var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  Object.assign ({}, {key: value})
  return obj
}

 