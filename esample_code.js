// this is the actual code used in the preset examples
// &, < and > has to be escaped for use in a preset


// example 1
// add a check_date tag for the object
//
df = new java.text.SimpleDateFormat('yyyy-MM-dd');df.format(new java.util.Date());

// example 2
// add a check_date tag for all tags
//
// NOTE: actually doing this is likely a bad idea
//
function addCheckDate(key) {
  df = new java.text.SimpleDateFormat('yyyy-MM-dd');
  v = new java.util.ArrayList();
  v.add(df.format(new java.util.Date()));
  tags.put('check_date:'+key,v);
}

for (var key in Iterator(new java.util.HashSet(tags.keySet()))) {
  if (!key.contains('check_date')) {
    newValues = tags.get(key);
    if (newValues != null && newValues.size() > 0) {
      oldValues = originalTags.get(key);
      addCheckDate(key);
    }
  }
}
tags.remove('automatic_check_date');

// example 3
// add a check_date tag for all tags that have changed
//
// NOTE: actually doing this is likely a bad idea
//
function addCheckDate(key) {
  df = new java.text.SimpleDateFormat('yyyy-MM-dd');
  v = new java.util.ArrayList();
  v.add(df.format(new java.util.Date()));
  tags.put('check_date:'+key,v);
}

for (var key in Iterator(new java.util.HashSet(tags.keySet()))) {
  if (!key.contains('check_date')) {
    newValues = tags.get(key);
    if (newValues != null && newValues.size() > 0) {
      oldValues = originalTags.get(key);
      if (newValues.size() !== oldValues.size()) {
        addCheckDate(key);
      } else {
        for (i=0;i<newValues.size();i++) {
          if (!newValues.get(i).equals(oldValues.get(i))) {
            addCheckDate(key);
            break;
          }
        }
      }
    }
  }
}
tags.remove('automatic_check_date');"

// example 
// update existing check_date tags
//
// NOTE: actually doing this is likely a bad idea
//
function addCheckDate(key) {
  df = new java.text.SimpleDateFormat('yyyy-MM-dd');
  v = new java.util.ArrayList();
  v.add(df.format(new java.util.Date()));
  tags.put('check_date:'+key,v);
}

for (var key in Iterator(new java.util.HashSet(tags.keySet()))) {
  if (key.startsWith('check_date')) {
    addCheckDate(key);
  }
}
tags.remove('automatic_check_date');"

// example
// set object to lifecycle disused state
//
var objects = ['shop','amenity','leisure','military'];

function isObject(key) {
  var objectsLength = objects.length;
  for (var i = 0; i &lt; objectsLength; i++) {
    if (objects[i].equals(key)) {
            return true;
    }
  }
  return false;
}

for (var key in Iterator(new java.util.HashSet(tags.keySet()))) {
  if (isObject(key)) {
    tags.put('disused:'+key,tags.get(key));
    tags.remove(key);
  }
}
tags.remove('set_to_disused');