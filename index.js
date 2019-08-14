var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  Object.assign ({}, obj, {key: value})
  return obj
}

 